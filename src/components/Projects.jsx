import { useState } from "react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "MaintainAI",
    description:
      "A full-stack asset management system with user authentication and real-time asset tracking. Built with a responsive Next.js interface and a REST API connected to MongoDB, developed during a hackathon while coordinating scope and features with a team.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://maintain-ai-frontend-8crj.vercel.app/",
    category: "Hackathon",
    color: "var(--rose)",
  },
  {
    title: "Helplytics AI",
    description:
      "A responsive React web app with login and signup, local-storage session handling and sample data for demonstration. Designed with a clean, user-friendly interface.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    link: "https://helplytics-ai-opal.vercel.app",
    category: "Hackathon",
    color: "var(--amber)",
  },
  {
    title: "TechSolution",
    description:
      "A modern, responsive e-learning platform offering web development courses and interactive learning experiences in a clean interface.",
    tech: ["Next.js", "TypeScript", "React"],
    link: "https://tech-solution-psi.vercel.app/",
    category: "React / Next.js",
    color: "var(--teal)",
  },
  {
    title: "LearnTube",
    description:
      "An e-learning platform for exploring categorized courses and curated educational playlists, with a clean and responsive layout.",
    tech: ["Next.js", "TypeScript"],
    link: "https://learntube-project.vercel.app/",
    category: "React / Next.js",
    color: "var(--violet)",
  },
  {
    title: "Weather App",
    description: "Shows real-time weather for any city using an external weather API.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    link: "https://anisurrehmanfarooq123456.github.io/AS-Weather-App/",
    category: "Practice",
    color: "var(--teal)",
  },
  {
    title: "Digital Clock",
    description: "A live utility app with a clock, date display and stopwatch.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://anisurrehmanfarooq123456.github.io/AS-Digital-Clock/",
    category: "Practice",
    color: "var(--amber)",
  },
  {
    title: "Food Website",
    description: "A food website that loads recipes from an external API and renders them dynamically.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    link: "https://anisurrehmanfarooq123456.github.io/AS-Food-Website/",
    category: "Practice",
    color: "var(--rose)",
  },
];

const filters = ["All", "Hackathon", "React / Next.js", "Practice"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2 className="section-heading">Things I&apos;ve built</h2>
            <p className="section-sub">
              Every project below is my own work and is live. Click any card to open the website.
            </p>
          </div>
        </Reveal>

        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} className="filter-btn" aria-pressed={active === f} onClick={() => setActive(f)}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid-2">
          {visible.map((p) => (
            <article key={p.title} className="glass card project" style={{ borderTop: `3px solid ${p.color}` }}>
              <div>
                <span className="tag" style={{ color: p.color }}>{p.category}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="chips">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label={`View ${p.title} live (opens in a new tab)`}
              >
                View Live Project ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;