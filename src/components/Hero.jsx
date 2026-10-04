const facts = [
  { value: "7", label: "Projects built, all live", color: "var(--amber)" },
  { value: "2", label: "Hackathons completed", color: "var(--rose)" },
  { value: "MERN + SQA", label: "My Two focus areas", color: "var(--teal)" },
];

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-grid">
          <div>
            <p className="hero-role">MERN Stack Developer · SQA Engineer</p>

            <h1>
              Anees Ur <br />
              <span className="gradient-text">Rehman Farooq</span>
            </h1>

            <p className="hero-text">
              I build full-stack apps with MongoDB, Express, React and Node.js,
              and I test them like a QA engineer, so what I ship works for real
              users on every screen.
            </p>

            <div className="btn-row">
              <a
                href="/cv/Anees-Ur-Rehman-Farooq-CV.pdf"
                download="Anees-Ur-Rehman-Farooq-CV.pdf"
                className="btn btn-primary"
              >
                Download CV ↓
              </a>
              <a href="https://wa.me/923022217117" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                WhatsApp
              </a>
              <a href="mailto:anees2217117@gmail.com" className="btn btn-secondary">
                Email Me
              </a>
            </div>

            <dl className="facts">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="fact-value" style={{ color: f.color }}>{f.value}</dt>
                  <dd className="fact-label">{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="terminal" aria-label="Terminal showing a build and test run">
            <div className="terminal-bar">
              <span className="dot" style={{ background: "#fb7185" }} />
              <span className="dot" style={{ background: "#f2b544" }} />
              <span className="dot" style={{ background: "#7ee08a" }} />
              <span className="terminal-name">~/portfolio — zsh</span>
            </div>
            <div className="terminal-body">
              <p className="t-line" style={{ "--i": 0 }}><span className="t-prompt">$</span> npm run build</p>
              <p className="t-line t-muted" style={{ "--i": 1 }}>&nbsp;&nbsp;MongoDB · Express · React · Node.js</p>
              <p className="t-line t-ok" style={{ "--i": 2 }}>&nbsp;&nbsp;✓ compiled successfully</p>

              <p className="t-line t-gap" style={{ "--i": 3 }}><span className="t-prompt">$</span> npm run test</p>
              <p className="t-line" style={{ "--i": 4 }}>&nbsp;&nbsp;<span className="t-pass">PASS</span>login: valid &amp; invalid credentials</p>
              <p className="t-line" style={{ "--i": 5 }}>&nbsp;&nbsp;<span className="t-pass">PASS</span>layout: 320px to 1440px</p>
              <p className="t-line" style={{ "--i": 6 }}>&nbsp;&nbsp;<span className="t-pass">PASS</span>api: status codes &amp; errors</p>

              <p className="t-line t-gap" style={{ "--i": 7 }}>
                <span className="t-key">Tests:</span> <span className="t-ok">3 passed</span>, 0 failed
              </p>
              <p className="t-line" style={{ "--i": 8 }}>
                <span className="t-prompt">$</span><span className="caret" aria-hidden="true" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;