import Reveal from "./Reveal";

const quickInfo = [
  { text: "Karachi, Pakistan", color: "var(--teal)" },
  { text: "BS Software Engineering", color: "var(--amber)" },
  { text: "MERN Stack Developer", color: "var(--rose)" },
  { text: "SQA & Testing Enthusiast", color: "var(--violet)" },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2 className="section-heading">Developer who tests what he builds</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid-3">
            <div className="glass card">
              <p className="about-text">
                I&apos;m a Software Engineering graduate (University of Karachi) and
                MERN stack developer based in Karachi. I build responsive, full-stack web apps with React,
                Next.js, Node.js, Express and MongoDB.
              </p>
              <p className="about-text">
                I&apos;m also deeply interested in Software Quality Assurance. I
                like breaking things on purpose: finding edge cases, writing clear
                test cases and reporting bugs so they get fixed fast.
              </p>
              <p className="about-text">
                I&apos;ve also worked as a teacher and data entry operator, which
                taught me attention to detail, clear communication and accuracy
                with records and data.
              </p>
            </div>

            <div className="glass card">
              <h3 className="title-lg">Quick Info</h3>
              <ul className="info-list">
                {quickInfo.map((item) => (
                  <li key={item.text}>
                    <span className="lang-dot" style={{ background: item.color }} aria-hidden="true" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;