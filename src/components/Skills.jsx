import Reveal from "./Reveal";

const groups = [
  {
    title: "MERN Stack",
    color: "var(--teal)",
    skills: [
      { name: "MongoDB", color: "#4dbb6b" },
      { name: "Express.js", color: "#64748b" },
      { name: "React.js", color: "#0ea5e9" },
      { name: "Node.js", color: "#16a34a" },
      { name: "Next.js", color: "#1f2937" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "JavaScript", color: "#d97706" },
    ],
  },
  {
    title: "Frontend & Design",
    color: "var(--violet)",
    skills: [
      { name: "HTML5", color: "#fb7185" },
      { name: "CSS3", color: "#5b8def" },
      { name: "Tailwind CSS", color: "#34d8c4" },
      { name: "Bootstrap", color: "#b48cf2" },
      { name: "Responsive UI", color: "#d97706" },
    ],
  },
  {
    title: "Quality Assurance (SQA)",
    color: "var(--amber)",
    skills: [
      { name: "Manual Testing", color: "#d97706" },
      { name: "Test Case Writing", color: "#fb7185" },
      { name: "Bug Reporting", color: "#fb7185" },
      { name: "Exploratory Testing", color: "#b48cf2" },
      { name: "API Testing (Postman)", color: "#ff8a4c" },
      { name: "Cross-device Testing", color: "#34d8c4" },
    ],
  },
  {
    title: "Tools",
    color: "var(--rose)",
    skills: [
      { name: "Git & GitHub", color: "#1f2937" },
      { name: "VS Code", color: "#5b8def" },
      { name: "Vercel", color: "#1f2937" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2 className="section-heading">Tech stack and testing toolkit</h2>
          </div>
        </Reveal>

        <div className="grid-2">
          {groups.map((group) => (
            <Reveal key={group.title} stretch>
              <div className="glass card" style={{ height: "100%" }}>
                <h3 className="skill-group-title" style={{ color: group.color }}>{group.title}</h3>
                <div className="chips">
                  {group.skills.map((s) => (
                    <span key={s.name} className="chip">
                      <span className="lang-dot" style={{ background: s.color }} aria-hidden="true" />
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;