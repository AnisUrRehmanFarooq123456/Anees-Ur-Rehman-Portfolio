import Reveal from "./Reveal";

const experiences = [
  {
    role: "Computer Teacher",
    company: "Metropolis Education School",
    date: "Aug 2025 – Oct 2025",
    color: "var(--green)",
    points: ["Taught computer studies to Class 7–8 students."],
  },
  {
    role: "Data Entry Operator",
    company: "Liberty Mills Limited",
    date: "Jun 2025 – Aug 2025",
    color: "var(--teal)",
    points: [
      "Maintained MIR and logistics records to support accurate tracking of goods and movements.",
      "Ensured data accuracy and consistency in the time office system.",
    ],
  },
  {
    role: "Teacher (Mathematics & Computer Science)",
    company: "SS Programmer School",
    date: "Feb 2024 – Apr 2025",
    color: "var(--amber)",
    points: [
      "Taught Mathematics and Computer Science to matriculation-level students, explaining technical concepts clearly.",
    ],
  },
  {
    role: "Data Entry Operator",
    company: "Embroideries, New Karachi Industrial Area",
    date: "",
    color: "var(--rose)",
    points: [
      "Handled bookkeeping and managed financial records.",
      "Ensured data accuracy and consistency in the time office system.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="comment"><b>05</b> experience</span>
            <h2 className="section-heading">Teaching and work experience</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="glass timeline">
            {experiences.map((item) => (
              <div key={item.role + item.company} className="commit">
                <span className="commit-dot" style={{ background: item.color }} aria-hidden="true" />
                {item.date && <p className="commit-time">{item.date}</p>}
                <h3>{item.role}</h3>
                <p style={{ color: item.color }}>{item.company}</p>
                <ul className="commit-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;