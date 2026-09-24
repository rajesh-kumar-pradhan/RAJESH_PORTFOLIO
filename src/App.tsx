"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Check,
  Copy,
  Menu,
  Code2,
  Layers3,
  Database,
  MapPin,
  Terminal,
  GitBranch,
  GraduationCap,
  Sparkles,
  Command,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { profile } from "./profile";
import { projects, type Project } from "./projects";
import { ShopPreview, TaskPreview, SchoolPreview } from "./project-previews";

const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
];
const skills = [
  {
    Icon: Layers3,
    number: "01",
    name: "The experience.",
    label: "FRONTEND",
    description: "Turning an idea into an interface people can use.",
    items: [
      "React",
      "JavaScript",
      "HTML & CSS",
      "Redux Toolkit",
      "React Router",
      "Context API",
    ],
  },
  {
    Icon: Code2,
    number: "02",
    name: "The engine.",
    label: "BACKEND",
    description: "Making the logic behind every interaction work.",
    items: ["Node.js", "Express", "REST APIs", "JWT", "bcrypt", "Middleware"],
  },
  {
    Icon: Database,
    number: "03",
    name: "The foundation.",
    label: "DATA & TOOLS",
    description: "Connecting the data. Testing the details.",
    items: [
      "MongoDB",
      "Mongoose",
      "Git & GitHub",
      "Postman",
      "Compass",
      "Linux",
    ],
  },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="#home"
      className={`wordmark${footer ? " footer-logo" : ""}`}
      aria-label="Raj, back to top"
    >
      <span className="brand-symbol">
        r<span>.</span>
      </span>
      <span>
        RAJ<span className="brand-subtitle">DEVELOPER / BUILDER</span>
      </span>
    </a>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const Preview = [ShopPreview, TaskPreview, SchoolPreview][index];
  return (
    <article className={`project-card project-${project.id} reveal`}>
      <button
        type="button"
        className="preview-button"
        onClick={onOpen}
        aria-label={`View ${project.name} case study`}
      >
        <span className="preview-top">
          <span>{index === 0 ? "FEATURED BUILD" : "SELECTED BUILD"}</span>
          <span>
            {project.number} / {project.year}
          </span>
        </span>
        <div className="preview-stage">
          <Preview />
        </div>
        <span className="preview-caption">INTERFACE CONCEPT</span>
        <span className="preview-arrow">
          <ArrowUpRight size={22} />
        </span>
      </button>
      <div className="project-info">
        <p className="project-category">{project.category}</p>
        <h3>
          {project.name}
          <span className="project-heading-dot">.</span>
        </h3>
        <p className="project-summary">{project.summary}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Button className="project-action" variant="ghost" onClick={onOpen}>
          Explore the build <ArrowUpRight size={18} />
        </Button>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "fallback">(
    "idle",
  );
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-18% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (copyState === "idle") return;
    const timer = window.setTimeout(() => setCopyState("idle"), 4000);
    return () => window.clearTimeout(timer);
  }, [copyState]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("fallback");
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {sections.map(({ id, label }) => (
              <a
                href={`#${id}`}
                key={id}
                className={activeSection === id ? "active" : ""}
                aria-current={activeSection === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="nav-contact" href="#contact">
              LET’S TALK <ArrowUpRight size={16} />
            </a>
            <Button
              className="mobile-menu"
              variant="ghost"
              size="icon"
              aria-label="Open navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={23} />
            </Button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" id="home">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="status-light" /> OPEN TO INTERNSHIPS & DEVELOPER
              ROLES
            </div>
            <p className="hero-intro">
              Hey, I’m {profile.name}. <span>Developer. Curious human.</span>
            </p>
            <h1>
              BUILT WITH
              <br />
              <span className="silver-text">INTENT.</span>
              <span className="hero-period">*</span>
            </h1>
            <p className="hero-description">
              Thoughtful interfaces.
              <br />
              Powerful foundations.
              <br />
              <span>I connect both with the MERN stack.</span>
            </p>
            <div className="hero-actions">
              <Button asChild className="sculpted-button button-primary">
                <a href="#work">
                  Explore my work <ArrowUpRight size={20} />
                </a>
              </Button>
              <Button asChild className="sculpted-button button-secondary">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitBranch size={18} /> GitHub
                </a>
              </Button>
            </div>
            <div className="hero-footnote">
              <span>*</span> Every detail is a chance to make it better.
            </div>
          </div>
          <div className="portrait-composition">
            <div className="portrait-orbit-label">
              A LITTLE CURIOSITY. A LOT OF BUILDING.
            </div>
            <figure className="portrait-card">
              
              {!photoFailed ? (
                <img
                  src={profile.photo}
              
                  className="profile-photo"
                  width={800}
                  height={1000}
                  fetchPriority="high"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div
                  className="portrait-fallback"
                  aria-label={profile.fullName}
                >
                  RP
                </div>
              )}
              <div className="portrait-shade" />
              {profile.demoPhoto && (
                <span className="demo-label">DEMO PORTRAIT</span>
              )}
              <figcaption className="portrait-caption">
                <div>
                  <span>HELLO, I’M</span>
                  <strong>
                    {profile.name.toUpperCase()}
                    <span>.</span>
                  </strong>
                </div>
                <span className="portrait-role">
                  FULL-STACK
                  <br />
                  DEVELOPER
                </span>
              </figcaption>
              <div className="portrait-bottom">
                <span>
                  <MapPin size={13} /> {profile.location}
                </span>
                <span>01 / ALWAYS LEARNING</span>
              </div>
            </figure>
            <div className="floating-stack">
              <span className="floating-icon">
                <Code2 size={22} />
              </span>
              <div>
                <small>STACK OF CHOICE</small>
                <strong>
                  MERN<span> / React to MongoDB</span>
                </strong>
              </div>
            </div>
          </div>
          <div className="hero-baseline">
            <span>CODE WITH PURPOSE. BUILD WITH CARE.</span>
            <a href="#work">
              SCROLL TO DISCOVER <ArrowDown size={16} />
            </a>
          </div>
        </section>
        <div className="toolkit-strip">
          <div className="shell">
            <span className="strip-label">
              MY EVERYDAY
              <br />
              TOOLKIT
            </span>
            <div className="toolkit-names">
              {["React", "Node.js", "Express", "MongoDB", "JavaScript"].map(
                (name) => (
                  <span key={name}>{name}</span>
                ),
              )}
            </div>
          </div>
        </div>

        <section className="work-section shell" id="work">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">
                <span>01 /</span> SELECTED WORK
              </p>
              <h2>
                Less talking.
                <br />
                <span className="silver-text">More building.</span>
              </h2>
            </div>
            <p>
              Ideas taken past the idea stage.
              <br />A few things I’ve been working on.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={() => setActiveProject(project)}
              />
            ))}
          </div>
          <div className="work-note">
            <p>Built to learn. Refined with every iteration.</p>
            <a
              className="inline-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              More on GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="shell about-grid">
            <div className="about-title reveal">
              <p className="eyebrow">
                <span>02 /</span> THE HUMAN SIDE
              </p>
              <h2>
                Curiosity
                <br />
                is my
                <br />
                <span className="silver-text">default.</span>
              </h2>
              <div className="about-location">
                <MapPin size={16} /> Rooted in Odisha. Building for the web.
              </div>
            </div>
            <div className="about-copy reveal">
              <span className="about-kicker">
                A DEVELOPER IN THE MAKING. A LEARNER FOR LIFE.
              </span>
              <h3>
                Good software starts
                <br />
                with better questions.
              </h3>
              <p>
                I’m {profile.fullName} — {profile.name} for short. I’m studying
                Computer Science at Nalanda Institute of Technology,
                Bhubaneswar, and learning by turning real problems into working
                applications.
              </p>
              <p>
                I enjoy the entire journey: shaping a React interface, designing
                an Express API, connecting MongoDB, and figuring out why
                something doesn’t work yet. Backend development is where my
                curiosity goes deepest.
              </p>
              <div className="about-facts">
                <div>
                  <GraduationCap size={20} />
                  <span>
                    <small>CURRENT CHAPTER</small>B.Tech · Computer Science
                  </span>
                </div>
                <div>
                  <Terminal size={20} />
                  <span>
                    <small>CURRENT FOCUS</small>Full-stack MERN development
                  </span>
                </div>
              </div>
              <a href={`mailto:${profile.email}`} className="inline-link">
                Let’s get to know each other <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="skills-section shell" id="skills">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">
                <span>03 /</span> MY TOOLBOX
              </p>
              <h2>
                One connected
                <br />
                <span className="silver-text">way of thinking.</span>
              </h2>
            </div>
            <p>
              From what you see
              <br />
              to what makes it work.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map(({ Icon, number, label, name, description, items }) => (
              <article className="skill-card reveal" key={number}>
                <div className="skill-top">
                  <span className="skill-icon">
                    <Icon size={25} strokeWidth={1.5} />
                  </span>
                  <span>{number}</span>
                </div>
                <p className="skill-label">{label}</p>
                <h3>{name}</h3>
                <p className="skill-description">{description}</p>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="learning-note">
            <Sparkles size={22} />
            <p>
              <strong>The learning never stops.</strong> Currently going deeper
              into backend development, DSA in JavaScript, and WebAssembly.
            </p>
            <span>STAY CURIOUS.</span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell">
            <div className="contact-top">
              <p className="eyebrow">
                <span>04 /</span> YOUR NEXT TEAMMATE?
              </p>
              <span>GOOD THINGS START WITH A CONVERSATION.</span>
            </div>
            <div className="contact-main">
              <h2>
                LET’S MAKE
                <br />
                <span className="silver-text">IT HAPPEN.</span>
              </h2>
              <a
                className="contact-orb"
                href={`mailto:${profile.email}`}
                aria-label="Email Raj"
              >
                <ArrowUpRight strokeWidth={1.3} />
              </a>
            </div>
            <div className="contact-bottom">
              <p>
                Have an opportunity, an idea,
                <br />
                or just a good question? I’m listening.
              </p>
              <div className="email-block">
                <a href={`mailto:${profile.email}`} className="email-link">
                  {profile.email}
                </a>
                <Button
                  type="button"
                  className="copy-button"
                  variant="ghost"
                  size="icon"
                  aria-label={
                    copyState === "copied"
                      ? "Email copied"
                      : "Copy email address"
                  }
                  onClick={copyEmail}
                >
                  {copyState === "copied" ? (
                    <Check size={19} />
                  ) : (
                    <Copy size={19} />
                  )}
                </Button>
                <span
                  className="copy-feedback"
                  role="status"
                  aria-live="polite"
                >
                  {copyState === "copied"
                    ? "Email copied. Let’s talk!"
                    : copyState === "fallback"
                      ? "Please select and copy the email address above."
                      : ""}
                </span>
              </div>
            </div>
            <footer className="site-footer">
              <Logo footer />
              <p>Thoughtfully built. Always evolving.</p>
              <div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ArrowUpRight size={14} />
                </a>
                <a href="#home">
                  Back to top <ArrowUpRight size={14} />
                </a>
              </div>
              <span className="copyright">
                © {new Date().getFullYear()} {profile.fullName}
              </span>
              <span className="footer-coordinate">
                MADE WITH CURIOSITY IN INDIA
              </span>
            </footer>
          </div>
        </section>
      </main>

      <Dialog
        open={!!activeProject}
        onOpenChange={(open) => {
          if (!open) setActiveProject(null);
        }}
      >
        <DialogContent className="project-dialog">
          {activeProject && (
            <>
              <p className="dialog-eyebrow">
                BUILD {activeProject.number} / {activeProject.category}
              </p>
              <DialogTitle className="dialog-title">
                {activeProject.name}
                <span>.</span>
              </DialogTitle>
              <DialogDescription className="dialog-intro">
                {activeProject.intro}
              </DialogDescription>
              <div className="tag-list dialog-tags">
                {activeProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="dialog-role">
                <span>MY ROLE</span>
                <strong>{activeProject.role}</strong>
              </div>
              <section className="case-section">
                <h4>The challenge</h4>
                <p>{activeProject.challenge}</p>
              </section>
              <section className="case-section">
                <h4>What I worked on</h4>
                <ul>
                  {activeProject.built.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="case-section">
                <h4>What it taught me</h4>
                <p>{activeProject.lesson}</p>
              </section>
              <div className="project-status">
                <span>PROJECT NOTES</span>
                <p>{activeProject.status}</p>
              </div>
              <Button
                asChild
                className="sculpted-button button-primary dialog-cta"
              >
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let’s talk about ${activeProject.name}`)}`}
                >
                  Ask me about the build <ArrowUpRight size={18} />
                </a>
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent className="mobile-sheet">
          <SheetTitle className="sheet-title">RAJ.</SheetTitle>
          <SheetDescription>Good ideas deserve to be built.</SheetDescription>
          <nav aria-label="Mobile navigation">
            {[...sections, { id: "contact", label: "Let’s talk" }].map(
              ({ id, label }, index) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                  <span>0{index + 1}</span>
                  {label}
                  <ArrowUpRight size={22} />
                </a>
              ),
            )}
          </nav>
          <a
            className="inline-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch size={18} /> Find me on GitHub
          </a>
        </SheetContent>
      </Sheet>
    </>
  );
}
