import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiArrowDown,
  FiCheck,
  FiCopy,
  FiDownload,
  FiPlus,
  FiMinus,
  FiX,
  FiMenu,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiCpu,
  FiLayers,
  FiZap,
  FiGlobe,
} from "react-icons/fi";
import portrait from "../Assets/profilepic-shorthair-v2.png";
import cv from "../Assets/Abdullah_Khan.pdf";
import {
  email,
  socials,
  projects,
  experience,
  skillGroups,
  learningProjects,
} from "./data";

function Eyebrow({ children, light = false }) {
  return (
    <div className={`eyebrow${light ? " eyebrow-light" : ""}`}>
      <span />
      {children}
    </div>
  );
}
function External({ href, children, className = "", ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = useRef(null);
  const menu = useRef(null);
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 681px)");
    const closeOnDesktop = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", closeOnDesktop);
    return () => query.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const elements = [
          toggle.current,
          ...menu.current.querySelectorAll("a"),
        ];
        const first = elements[0],
          last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="brand" aria-label="Abdullah Khan home">
          <span className="brand-symbol">
            a<span>k</span>
            <i>.</i>
          </span>
          <span className="brand-caption">
            ABDULLAH
            <br />
            KHAN
          </span>
        </Link>
        <button
          className="menu-toggle"
          ref={toggle}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <nav
          id="main-navigation"
          ref={menu}
          className={`navigation ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end>
            Home<span>01</span>
          </NavLink>
          <NavLink to="/project">
            Work<span>02</span>
          </NavLink>
          <NavLink to="/about">
            About<span>03</span>
          </NavLink>
          <NavLink to="/resume">
            Résumé<span>04</span>
          </NavLink>
          <a
            className="nav-contact"
            href="https://wa.me/923075601013"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Let’s talk on WhatsApp at +923075601013"
            onClick={() => setOpen(false)}
          >
            Let’s talk <FiArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyFailed(false);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyFailed(true);
    }
  }
  return (
    <section className="contact-section" id="contact">
      <div className="page-width">
        <div className="contact-top">
          <Eyebrow>GOOD THINGS START WITH A CONVERSATION</Eyebrow>
          <span className="location-label">
            <FiGlobe /> Lahore, Pakistan · Open to remote
          </span>
        </div>
        <div className="contact-heading">
          <h2>
            Have something
            <br />
            in <span>mind?</span>
          </h2>
          <a
            href="https://wa.me/923075601013"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-arrow"
            aria-label="Chat with Abdullah Khan on WhatsApp at +923075601013"
            title="WhatsApp: +923075601013"
          >
            <FiArrowUpRight />
          </a>
        </div>
        <div className="contact-bottom">
          <div>
            <a className="email-link" href={`mailto:${email}`}>
              {email}
            </a>
            <button
              className="copy-button"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              {copied ? <FiCheck /> : <FiCopy />}
            </button>
            <span className="copy-feedback" role="status">
              {copied
                ? "Copied!"
                : copyFailed
                  ? "Please select and copy the email."
                  : ""}
            </span>
          </div>
          <p>For a role, a project, or a good technical conversation.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer page-width">
      <Link className="footer-name" to="/">
        Abdullah Khan<span>Developer. Builder. Always learning.</span>
      </Link>
      <div className="footer-socials">
        {socials.map((s) => (
          <External href={s.url} key={s.name}>
            {s.name}
            <FiArrowUpRight />
          </External>
        ))}
      </div>
      <span className="copyright">
        © {new Date().getFullYear()} · Built with intent.
      </span>
    </footer>
  );
}

export default function Portfolio() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const names = {
      "/": "Full Stack & AI Application Developer",
      "/project": "Selected Work",
      "/about": "About & Experience",
      "/learning": "Learning Journey",
      "/resume": "Résumé",
    };
    document.title = `Abdullah Khan | ${names[pathname] || names["/"]}`;
  }, [pathname]);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

function Portrait({ small = false }) {
  const surface = useRef(null);
  const frame = useRef(null);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);
  function followPointer(event) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      surface.current?.style.setProperty("--portrait-x", `${x * 7}px`);
      surface.current?.style.setProperty("--portrait-y", `${y * 5}px`);
    });
  }
  function resetPointer() {
    cancelAnimationFrame(frame.current);
    surface.current?.style.setProperty("--portrait-x", "0px");
    surface.current?.style.setProperty("--portrait-y", "0px");
  }
  return (
    <div ref={surface} onPointerMove={followPointer} onPointerLeave={resetPointer} className={`portrait-composition ${small ? "portrait-small" : ""}`}>
      <div className="portrait-grid" />
      <div className="portrait-ring ring-one" />
      <div className="portrait-ring ring-two" />
      <svg className="portrait-orbits" viewBox="0 0 500 440" preserveAspectRatio="none" aria-hidden="true">
        <path className="orbit-track" pathLength="100" d="M 45 285 C 12 157 150 32 324 42 C 498 52 527 231 405 345 C 283 459 78 413 45 285 Z" />
        <path className="orbit-tracer" pathLength="100" d="M 45 285 C 12 157 150 32 324 42 C 498 52 527 231 405 345 C 283 459 78 413 45 285 Z" />
        <path className="orbit-track orbit-track-secondary" pathLength="100" d="M 46 150 C 132 45 457 117 465 269 C 473 421 152 435 64 309 C 29 259 12 192 46 150 Z" />
        <path className="orbit-tracer orbit-tracer-secondary" pathLength="100" d="M 46 150 C 132 45 457 117 465 269 C 473 421 152 435 64 309 C 29 259 12 192 46 150 Z" />
      </svg>
      <div className="portrait-circle">
        <img src={portrait} alt="Abdullah Khan" width="500" height="500" />
      </div>
      <div className="floating-label label-code">
        <FiCode />
        <span>
          Full stack.
          <br />
          <strong>Full ownership.</strong>
        </span>
      </div>
      <div className="floating-label label-ai">
        <span className="ai-symbol">✳</span>
        <span>
          Human ideas.
          <br />
          <strong>Intelligent systems.</strong>
        </span>
      </div>
      <span className="portrait-coordinate">31.5204° N / 74.3587° E</span>
      <span className="portrait-plus plus-one">+</span>
      <span className="portrait-plus plus-two">+</span>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <section className="hero page-width">
        <div className="hero-copy">
          <Eyebrow>FULL STACK & AI APPLICATION DEVELOPER</Eyebrow>
          <p className="hero-intro">
            Hey, I’m Abdullah <span className="hello-mark">↗</span>
          </p>
          <h1>
            Web apps.
            <br />
            <span className="serif-word">AI agents.</span>
            <br />
            Built to work.
            <span className="headline-star">✳</span>
          </h1>
          <p className="hero-description">
            Full-stack applications. LLM-powered agents.
            <br className="desktop-break" /> From responsive interfaces to RAG
            workflows and AI that takes action.
          </p>
          <div className="hero-actions">
            <Link to="/project" className="button button-dark">
              Explore my work <FiArrowUpRight />
            </Link>
            <a
              href={cv}
              download="Abdullah_Khan.pdf"
              className="text-link"
            >
              Download CV <FiDownload />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-note">
            <span className="status-dot" />
            AVAILABLE FOR DEVELOPER ROLES
          </div>
          <Portrait />
          <div className="hero-visual-footer">
            <span>BASED IN LAHORE, PK</span>
            <span>
              BUILDING BEYOND THE BROWSER <FiArrowUpRight />
            </span>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#selected-work" className="scroll-cue">
            <span className="scroll-icon">
              <FiArrowDown />
            </span>
            A little less talking. A little more building.
          </a>
          <span className="hero-index">PORTFOLIO / 2026</span>
        </div>
      </section>
      <div className="stack-strip">
        <div className="page-width">
          <span className="stack-caption">MY EVERYDAY TOOLKIT</span>
          {[
            "React",
            "Next.js",
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "Node.js",
            "LLM Integration",
            "RAG",
            "AI Agents",
            "n8n",
            "Retell",
          ].map((x) => (
            <span key={x}>
              {x}
              <i>✳</i>
            </span>
          ))}
        </div>
      </div>
      <section className="section page-width" id="selected-work">
        <SectionHeading
          eyebrow="01 / SELECTED WORK"
          title={
            <>
              Built to do <span className="serif-word">more.</span>
            </>
          }
          description="A few things I’ve helped bring to life. Real workflows, connected systems, and code with a purpose."
          action={
            <Link className="text-link" to="/project">
              All projects <FiArrowUpRight />
            </Link>
          }
        />
        <ProjectList items={projects.slice(0, 3)} />
      </section>
      <WorkflowSection />
      <section className="section page-width home-about">
        <div>
          <Eyebrow>03 / THE PERSON BEHIND THE CODE</Eyebrow>
          <h2>
            Curiosity is
            <br />
            part of <span className="serif-word">the stack.</span>
          </h2>
        </div>
        <div>
          <p className="large-copy">
            I’m a developer from Lahore who enjoys connecting the dots between a
            good idea and a working product.
          </p>
          <p className="muted-copy">
            My work spans full-stack applications, real-time backends, and AI
            agents. I like owning a feature end to end: the interface, the API,
            the data, and the deployment.
          </p>
          <Link className="text-link" to="/about">
            A little more about me <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action}
    </div>
  );
}

function ProjectList({ items }) {
  const [expanded, setExpanded] = useState(null);
  return (
    <div className="project-list">
      {items.map((project) => {
        const open = expanded === project.id;
        return (
          <article
            className={`work-item ${open ? "work-open" : ""}`}
            key={project.id}
          >
            <span className="work-number">
              {String(projects.indexOf(project) + 1).padStart(2, "0")}
            </span>
            <div className="work-main">
              <span className="work-label">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.short}</p>
              <div className="tag-list">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <button
              className="work-toggle"
              aria-label={`${open ? "Close" : "View"} details for ${project.title}`}
              aria-expanded={open}
              aria-controls={`details-${project.id}`}
              onClick={() => setExpanded(open ? null : project.id)}
            >
              {open ? <FiMinus /> : <FiPlus />}
            </button>
            <div
              className="work-details"
              id={`details-${project.id}`}
              hidden={!open}
            >
              <div>
                <span className="detail-label">THE BUILD</span>
                <p>{project.description}</p>
                {project.url && (
                  <External className="text-link" href={project.url}>
                    Visit live project <FiArrowUpRight />
                  </External>
                )}
              </div>
              <div>
                <span className="detail-label">MY CONTRIBUTION</span>
                <ul>
                  {project.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

const workflows = [
  {
    name: "AI agents",
    icon: FiCpu,
    title: "From a question to an action.",
    text: "I connect language models to knowledge and tools, so a conversation can retrieve an answer, look up a record, or book an appointment.",
    steps: [
      {
        label: "01 / INPUT",
        title: "A conversation",
        text: "WhatsApp · SMS · Voice",
        icon: FiGlobe,
      },
      {
        label: "02 / REASON",
        title: "Context + intelligence",
        text: "RAG · OpenAI · Tool calling",
        icon: FiCpu,
      },
      {
        label: "03 / EXECUTE",
        title: "A useful action",
        text: "Lookup · Booking · Update",
        icon: FiZap,
      },
    ],
  },
  {
    name: "Full stack",
    icon: FiLayers,
    title: "From an interface to a working system.",
    text: "I build across the stack: responsive React interfaces, structured NestJS services, and relational data, connected through secure APIs.",
    steps: [
      {
        label: "01 / INTERFACE",
        title: "The experience",
        text: "React · Next.js · TypeScript",
        icon: FiCode,
      },
      {
        label: "02 / LOGIC",
        title: "The application",
        text: "NestJS · REST · JWT / RBAC",
        icon: FiLayers,
      },
      {
        label: "03 / DATA",
        title: "The foundation",
        text: "PostgreSQL · TypeORM",
        icon: FiZap,
      },
    ],
  },
  {
    name: "Real-time systems",
    icon: FiZap,
    title: "From an event to everyone, in sync.",
    text: "I build backends where every event matters: live messaging, game state, and shared activity delivered through WebSocket connections.",
    steps: [
      {
        label: "01 / EVENT",
        title: "A player’s move",
        text: "Message · Action · Update",
        icon: FiCode,
      },
      {
        label: "02 / PROCESS",
        title: "A shared state",
        text: "Node.js · Socket.io",
        icon: FiLayers,
      },
      {
        label: "03 / BROADCAST",
        title: "Everyone in sync",
        text: "WebSockets · Live clients",
        icon: FiZap,
      },
    ],
  },
];

function WorkflowSection() {
  const [active, setActive] = useState(0);
  const flow = workflows[active];
  return (
    <section className="workflow-section">
      <div className="page-width">
        <div className="workflow-heading">
          <div>
            <Eyebrow light>02 / HOW I CONNECT THE DOTS</Eyebrow>
            <h2>
              Beyond the interface.
              <br />
              <span className="serif-word">Into the intelligence.</span>
            </h2>
          </div>
          <span className="workflow-asterisk" aria-hidden="true">
            ✳
          </span>
        </div>
        <div
          className="workflow-tabs"
          role="tablist"
          aria-label="Explore engineering approaches"
        >
          {workflows.map((w, index) => (
            <button
              key={w.name}
              id={`workflow-tab-${index}`}
              role="tab"
              aria-selected={active === index}
              aria-controls="workflow-panel"
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (
                  ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)
                ) {
                  event.preventDefault();
                  const next =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? 2
                        : (active + (event.key === "ArrowRight" ? 1 : -1) + 3) %
                          3;
                  setActive(next);
                  document.getElementById(`workflow-tab-${next}`).focus();
                }
              }}
            >
              <w.icon />
              {w.name}
            </button>
          ))}
        </div>
        <div
          id="workflow-panel"
          role="tabpanel"
          aria-labelledby={`workflow-tab-${active}`}
          className="workflow-panel"
        >
          <div className="workflow-explanation">
            <h3>{flow.title}</h3>
            <p>{flow.text}</p>
            <span className="diagram-caption">
              AN ILLUSTRATION OF MY APPROACH
            </span>
          </div>
          <div className="flow-diagram">
            {flow.steps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flow-node">
                  <span className="node-label">{step.label}</span>
                  <step.icon />
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
                {i < 2 && <FiArrowRight className="flow-connector" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkPage() {
  const [filter, setFilter] = useState("All work");
  const filters = ["All work", "AI & Automation", "Full Stack", "Real-Time"];
  const visible =
    filter === "All work"
      ? projects
      : projects.filter((p) => p.category === filter);
  return (
    <>
      <section className="page-width page-intro">
        <Eyebrow>THE WORK / SELECTED PROJECTS</Eyebrow>
        <h1>
          Less theory.
          <br />
          More <span className="serif-word">shipped.</span>
          <span className="inline-star">✳</span>
        </h1>
        <div className="intro-bottom">
          <p>
            AI workflows, full-stack platforms, and real-time systems.
            <br />
            Different challenges. The same care for how they work.
          </p>
          <span className="project-total">
            {String(projects.length).padStart(2, "0")} SELECTED BUILDS
          </span>
        </div>
      </section>
      <section className="page-width work-section">
        <div className="project-filters" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
              {f === "All work" && <span>{projects.length}</span>}
            </button>
          ))}
        </div>
        <div className="sr-only" role="status">
          {visible.length} projects shown
        </div>
        <ProjectList key={filter} items={visible} />
        <p className="project-discretion">
          <FiCode /> Explore each build for the approach, tools, and my
          contribution.
        </p>
      </section>
      <section className="learning-callout page-width">
        <div>
          <Eyebrow>BEFORE THE PRODUCTION BUILDS</Eyebrow>
          <h2>
            Every build starts <span className="serif-word">somewhere.</span>
          </h2>
          <p>A few early experiments that helped me learn the craft.</p>
        </div>
        <Link to="/learning" className="button button-outline">
          The learning archive <FiArrowUpRight />
        </Link>
      </section>
    </>
  );
}

function Experience() {
  const [active, setActive] = useState(0);
  const item = experience[active];
  return (
    <div className="experience-layout">
      <div className="experience-selectors">
        {experience.map((exp, i) => (
          <button
            key={exp.company}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
          >
            <span>
              <small>{exp.date}</small>
              <strong>{exp.company}</strong>
            </span>
            <FiArrowUpRight />
          </button>
        ))}
      </div>
      <article className="experience-content" aria-live="polite">
        <div className="experience-meta">
          <span>{item.location}</span>
          {item.current && (
            <span className="current-badge">
              <span className="status-dot" />
              CURRENT
            </span>
          )}
        </div>
        <h3>{item.role}</h3>
        <p className="experience-description">{item.description}</p>
        <ul>
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export function AboutPage() {
  return (
    <>
      <section className="page-width about-intro">
        <div>
          <Eyebrow>THE DEVELOPER / THE HUMAN</Eyebrow>
          <h1>
            A curious mind.
            <br />A builder’s <span className="serif-word">instinct.</span>
          </h1>
          <p className="large-copy">
            I’m Abdullah Khan, a Full Stack & AI Application Developer based in
            Lahore, Pakistan.
          </p>
          <p className="muted-copy">
            I work where interfaces, backends, and intelligence meet. I enjoy
            taking a feature from a rough idea to a working product, and
            understanding every layer along the way.
          </p>
          <div className="about-links">
            <External href={socials[0].url} className="text-link">
              <FiGithub /> GitHub <FiArrowUpRight />
            </External>
            <External href={socials[1].url} className="text-link">
              <FiLinkedin /> LinkedIn <FiArrowUpRight />
            </External>
          </div>
        </div>
        <Portrait small />
      </section>
      <section className="section page-width">
        <SectionHeading
          eyebrow="01 / THE JOURNEY SO FAR"
          title={
            <>
              Learning by <span className="serif-word">building.</span>
            </>
          }
        />
        <Experience />
      </section>
      <section className="skills-section">
        <div className="page-width">
          <SectionHeading
            eyebrow="02 / MY TOOLKIT"
            title={
              <>
                The right tools.
                <br />
                <span className="serif-word">Thoughtfully connected.</span>
              </>
            }
            description="A practical stack for building interfaces, systems, and the intelligence between them."
          />
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-row" key={group.name}>
                <span className="skill-number">{group.number}</span>
                <h3>{group.name}</h3>
                <div className="tag-list">
                  {group.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section page-width beyond-code">
        <div className="education-block">
          <Eyebrow>03 / THE FOUNDATION</Eyebrow>
          <span className="education-year">2021 — 2025</span>
          <h3>BS in Computer Science</h3>
          <p>University of Central Punjab</p>
          <span>Lahore, Pakistan</span>
        </div>
        <div className="off-screen">
          <Eyebrow>04 / OFF THE SCREEN</Eyebrow>
          <h2>
            Still curious.
            <br />
            <span className="serif-word">Just offline.</span>
          </h2>
          <p>
            When I step away from the code, you’ll find me gaming, trying
            something in the kitchen, or travelling somewhere new.
          </p>
          <div className="hobby-list">
            <span>↗ Gaming</span>
            <span>↗ Cooking</span>
            <span>↗ Travelling</span>
          </div>
        </div>
      </section>
    </>
  );
}

export function LearningPage() {
  return (
    <>
      <section className="page-width page-intro">
        <Link to="/project" className="back-link">
          ← Back to selected work
        </Link>
        <Eyebrow>THE ARCHIVE / EARLY EXPERIMENTS</Eyebrow>
        <h1>
          Small beginnings.
          <br />
          <span className="serif-word">Lasting lessons.</span>
        </h1>
        <p className="intro-description">
          The projects where I learned to turn curiosity into code.
          <br />A little nostalgia, a lot of trial and error, and the
          foundations of what came next.
        </p>
      </section>
      <section className="page-width learning-grid">
        {learningProjects.map((p, i) => (
          <article className="learning-card" key={p.title}>
            <div className="learning-image">
              <img
                src={p.image}
                alt={`${p.title} project screenshot`}
                loading="lazy"
              />
            </div>
            <div className="learning-content">
              <span className="work-label">
                {String(i + 1).padStart(2, "0")} / {p.type}
              </span>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <div className="learning-links">
                <External
                  href={`https://github.com/Abdullah1013/${p.github}`}
                  className="text-link"
                >
                  <FiGithub /> Source code <FiArrowUpRight />
                </External>
                {p.demo && (
                  <External href={p.demo} className="text-link">
                    Live project <FiArrowUpRight />
                  </External>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export function ResumePage() {
  return (
    <>
      <section className="page-width page-intro resume-intro">
        <Eyebrow>THE DETAILS / RÉSUMÉ</Eyebrow>
        <h1>
          My experience.
          <br />
          <span className="serif-word">On paper.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            Full Stack Developer · AI Application Developer
            <br />
            The skills, experience, and work behind this portfolio.
          </p>
          <a
            className="button button-dark"
            href={cv}
            download="Abdullah_Khan.pdf"
          >
            Download résumé <FiDownload />
          </a>
        </div>
      </section>
      <section className="page-width resume-section">
        <div className="resume-toolbar">
          <span>
            <span className="status-dot" />
            MUHAMMAD ABDULLAH KHAN / CV
          </span>
          <External href={cv} className="text-link">
            Open PDF <FiArrowUpRight />
          </External>
        </div>
        <div className="resume-preview">
          <object
            data={cv}
            type="application/pdf"
            title="Muhammad Abdullah Khan résumé"
          >
            <div className="pdf-fallback">
              <FiDownload />
              <h2>Your next read.</h2>
              <p>Open the PDF to view my complete résumé.</p>
              <External href={cv} className="button button-dark">
                View résumé <FiArrowUpRight />
              </External>
            </div>
          </object>
        </div>
        <div className="mobile-resume">
          <FiCode />
          <h2>
            Built across the stack.
            <br />
            Focused on AI.
          </h2>
          <p>
            View the complete two-page résumé in your PDF viewer for the best
            reading experience.
          </p>
          <External href={cv} className="button button-dark">
            Read the full résumé <FiArrowUpRight />
          </External>
        </div>
      </section>
    </>
  );
}
