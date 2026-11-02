// Run with Playwright available through NODE_PATH, against a running local site.
// Example: NODE_PATH=/path/to/node_modules node scripts/portfolio-qa.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const context = await browser.newContext({
    permissions: ["clipboard-read", "clipboard-write"],
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const base = process.env.PORTFOLIO_URL || "http://localhost:3000";
  const artifacts = path.join(os.tmpdir(), "portfolio-qa");
  fs.mkdirSync(artifacts, { recursive: true });
  try {
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of ["/", "/project", "/about", "/learning", "/resume"]) {
        await page.goto(base + route, { waitUntil: "networkidle" });
        await page.evaluate(() => document.fonts.ready);
        await page.locator("img").evaluateAll(async (images) => {
          await Promise.all(
            images.map((image) => {
              image.loading = "eager";
              return image.decode();
            }),
          );
        });
        await page.waitForTimeout(750);
        assert.equal(
          await page.locator("h1").count(),
          1,
          `${route}: one page heading`,
        );
        const overflow = await page.evaluate(() => ({
          width: innerWidth,
          content: document.documentElement.scrollWidth,
        }));
        assert(
          overflow.content <= overflow.width,
          `${route} overflows at ${width}px: ${overflow.content}`,
        );
        assert.equal(
          await page
            .locator("img")
            .evaluateAll(
              (images) =>
                images.filter((i) => !i.complete || !i.naturalWidth).length,
            ),
          0,
          `${route}: images loaded`,
        );
        if ([390, 1440].includes(width))
          await page.screenshot({
            path: path.join(
              artifacts,
              `${route === "/" ? "home" : route.slice(1)}-${width}.png`,
            ),
            fullPage: true,
          });
      }
      console.log(`PASS: all five routes at ${width}px`);
    }

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Open navigation" }).click();
    assert.equal(
      await page.evaluate(() => document.body.style.overflow),
      "hidden",
    );
    await page.keyboard.press("Escape");
    assert.equal(
      await page
        .getByRole("button", { name: "Open navigation" })
        .getAttribute("aria-expanded"),
      "false",
    );
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page
      .getByRole("navigation")
      .getByRole("link", { name: /Work/ })
      .click();
    await page.waitForURL("**/project");
    assert.equal(await page.evaluate(() => document.body.style.overflow), "");
    assert.equal(await page.locator(".work-item").count(), 6);
    assert.equal(await page.locator(".work-item img").count(), 0);
    assert.equal(
      await page.locator('a[href*="e1.app"], a[href*="reab.com"]').count(),
      0,
    );
    assert(
      !/Receta|\bE1\b|Reab|Co-Founder|\bCTO\b|\bCEO\b/i.test(
        await page.locator("body").innerText(),
      ),
    );
    await page
      .getByRole("button", { name: "AI & Automation", exact: true })
      .click();
    assert.equal(await page.locator(".work-item").count(), 1);
    const details = page.locator(".work-item .work-toggle").first();
    await details.click();
    assert.equal(await details.getAttribute("aria-expanded"), "true");
    assert(
      await page.getByText("MY CONTRIBUTION", { exact: true }).isVisible(),
    );
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
    );
    await details.click();
    assert.equal(await details.getAttribute("aria-expanded"), "false");
    await page.getByRole("button", { name: "Real-Time", exact: true }).click();
    assert.equal(await page.locator(".work-item").count(), 2);
    console.log(
      "PASS: mobile menu, filters, privacy, text-only work, and expandable details",
    );

    await page.goto(base, { waitUntil: "networkidle" });
    await page.getByRole("tab", { name: "Full stack", exact: true }).click();
    assert(
      await page
        .getByRole("heading", {
          name: "From an interface to a working system.",
        })
        .isVisible(),
    );
    await page.keyboard.press("ArrowRight");
    assert.equal(
      await page
        .getByRole("tab", { name: "Real-time systems" })
        .getAttribute("aria-selected"),
      "true",
    );
    await page.getByRole("button", { name: "Copy email address" }).click();
    assert.equal(
      await page.evaluate(() => navigator.clipboard.readText()),
      "abdullah5601013@gmail.com",
    );
    console.log("PASS: workflow tabs, keyboard navigation, and clipboard");

    await page.goto(base + "/about", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: /Waywe Gaming/ }).click();
    assert(
      await page
        .getByRole("heading", { name: "MERN Stack Developer", exact: true })
        .isVisible(),
    );
    await page.getByRole("button", { name: /Integriti/ }).click();
    assert(
      await page.getByRole("heading", { name: "Software Trainee" }).isVisible(),
    );
    await page.goto(base + "/resume", { waitUntil: "networkidle" });
    const cvUrl = await page
      .getByRole("link", { name: "Download résumé", exact: true })
      .getAttribute("href");
    const pdf = await context.request.get(base + cvUrl);
    assert.equal(pdf.status(), 200);
    assert((await pdf.body()).subarray(0, 4).toString() === "%PDF");
    const downloadEvent = page.waitForEvent("download");
    await page
      .getByRole("link", { name: "Download résumé", exact: true })
      .click();
    const download = await downloadEvent;
    assert.equal(download.suggestedFilename(), "Abdullah_Khan.pdf");
    assert.equal(await download.failure(), null);
    console.log("PASS: experience selector and actual PDF download");

    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(base, { waitUntil: "networkidle" });
    assert.equal(
      await page
        .locator(".headline-star")
        .evaluate((e) => getComputedStyle(e).animationName),
      "none",
    );
    assert.deepEqual(errors, [], "No browser runtime errors");
    console.log("PASS: reduced motion and no runtime errors");
    console.log(`Screenshots: ${artifacts}`);
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
