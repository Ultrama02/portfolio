import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" style={{ borderBottom: "none" }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-tag mono">05</span>
          <h2 className="sec-title">Contact</h2>
        </div>
        <Reveal className="terminal contact-term">
          <div className="term-bar">
            <span className="term-dot" />
            <span className="term-dot" />
            <span className="term-dot" />
            <span className="term-title">contact.sh</span>
          </div>
          <div className="contact-list">
            <div className="line">
              <span className="k">email</span>
              <a href="mailto:borgogliom@gmail.com">borgogliom@gmail.com</a>
            </div>
            <div className="line">
              <span className="k">linkedin</span>
              <a href="https://linkedin.com/in/mbrogoglio" target="_blank">
                linkedin.com/in/mbrogoglio
              </a>
            </div>
            <div className="line">
              <span className="k">phone</span>
              <a href="tel:01131170391">011 3117 0391</a>
            </div>
            <div className="line">
              <span className="k">location</span>
              <span className="out" style={{ color: "var(--text-muted)" }}>
                Buenos Aires, Argentina
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
