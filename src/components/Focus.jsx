import Reveal from "./Reveal";

const panels = [
  {
    title: "MERN Stack Development",
    tagline: "Build the product",
    color: "var(--teal)",
    text: "I create full-stack apps end to end: a React or Next.js interface, an Express and Node.js API, and MongoDB for data.",
    points: [
      "Responsive UIs with React and Next.js",
      "REST APIs with Express.js and Node.js",
      "Authentication and MongoDB data modelling",
      "Shipped two hackathon projects under tight deadlines",
    ],
  },
  {
    title: "Software Quality Assurance",
    tagline: "Make it reliable",
    color: "var(--amber)",
    text: "I look at software the way a tester does: what could go wrong, for whom, and how do we catch it before users do.",
    points: [
      "Manual and exploratory testing of web apps",
      "Writing test cases covering valid, invalid and edge inputs",
      "Clear bug reports with steps to reproduce",
      "API testing and cross-device responsive checks",
    ],
  },
];

const Focus = () => {
  return (
    <section id="focus" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2 className="section-heading">Two skills, one goal: software that works</h2>
            <p className="section-sub">
              Building and testing make each other better. Knowing how an app is
              made helps me test it, and testing makes me write sturdier code.
            </p>
          </div>
        </Reveal>

        <div className="grid-2">
          {panels.map((p) => (
            <Reveal key={p.title} stretch>
              <div className="glass card" style={{ borderTop: `3px solid ${p.color}`, height: "100%" }}>
                <p className="focus-tagline" style={{ color: p.color }}>{p.tagline}</p>
                <h3 className="focus-title">{p.title}</h3>
                <p className="focus-text">{p.text}</p>
                <ul className="points">
                  {p.points.map((pt) => (
                    <li key={pt}>
                      <span className="lang-dot" style={{ background: p.color }} aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Focus;