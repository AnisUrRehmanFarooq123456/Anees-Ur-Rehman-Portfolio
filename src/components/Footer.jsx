import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="glass contact-box">
            <h2 className="section-heading gradient-text">Let&apos;s work together</h2>
            <p className="lead">
              Looking for a MERN stack developer or someone who cares about
              software quality? I&apos;m open to projects, internships and junior
              roles in development and QA. Send me a message.
            </p>
            <div className="btn-row">
              <a href="mailto:anees2217117@gmail.com" className="btn btn-primary">Send Email</a>
              <a href="https://wa.me/923022217117" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;