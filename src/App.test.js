import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.scrollTo = jest.fn();
  window.matchMedia = jest.fn().mockReturnValue({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  });
});

test("project filters preserve generic names and expose contributions", () => {
  window.history.replaceState({}, "", "/project");
  render(<App />);
  expect(screen.queryByText(/Receta|\bReab\b|\bE1\b/i)).not.toBeInTheDocument();
  fireEvent.click(
    screen.getByRole("button", { name: "AI & Automation", exact: true }),
  );
  expect(
    screen.queryByRole("heading", { name: "Social Media App" }),
  ).not.toBeInTheDocument();
  fireEvent.click(
    screen.getByRole("button", { name: /View details for AI Hospital/ }),
  );
  expect(screen.getByText("MY CONTRIBUTION")).toBeVisible();
  expect(
    screen.getByRole("button", { name: /Close details for AI Hospital/ }),
  ).toHaveAttribute("aria-expanded", "true");
});

test("workflow tabs support keyboard navigation", () => {
  window.history.replaceState({}, "", "/");
  render(<App />);
  const agentTab = screen.getByRole("tab", { name: "AI agents" });
  fireEvent.keyDown(agentTab, { key: "ArrowRight" });
  expect(
    screen.getByRole("tab", { name: "Full stack", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  expect(
    screen.getByRole("heading", {
      name: "From an interface to a working system.",
    }),
  ).toBeVisible();
});

test("mobile navigation closes on Escape and restores scrolling", () => {
  window.history.replaceState({}, "", "/");
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
  expect(document.body.style.overflow).toBe("hidden");
  fireEvent.keyDown(document, { key: "Escape" });
  expect(
    screen.getByRole("button", { name: "Open navigation" }),
  ).toHaveAttribute("aria-expanded", "false");
  expect(document.body.style.overflow).toBe("");
});
