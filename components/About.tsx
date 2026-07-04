import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-tag mono">01</span>
          <h2 className="sec-title">About</h2>
        </div>
        <Reveal className="about-grid">
          <p className="about-text">
            I&apos;m a <strong>Full Stack Engineer</strong> with 5+ years of
            experience across start-ups and global companies like Accenture. I
            work across the stack — <strong>Next.js</strong> on the frontend,{" "}
            <strong>FastAPI</strong> on the backend, deployed on{" "}
            <strong>Google Cloud</strong> — and I&apos;m most effective in the
            messy middle: a system that&apos;s outgrown its original design,
            under real production load, still needs to ship. I read the
            existing structure first, then rebuild it piece by piece without
            stopping the line.
            <br />
            <br />
            Google Cloud Digital Leader certified. Based in Buenos Aires,
            Argentina.
          </p>
          <div className="metric-grid">
            <div className="metric">
              <div className="num">800K+</div>
              <div className="lbl mono">END USERS SUPPORTED</div>
            </div>
            <div className="metric">
              <div className="num">~70%</div>
              <div className="lbl mono">MANUAL TIME CUT</div>
            </div>
            <div className="metric">
              <div className="num">500K+</div>
              <div className="lbl mono">RECORDS RESTRUCTURED</div>
            </div>
            <div className="metric">
              <div className="num">~95%</div>
              <div className="lbl mono">TEST COVERAGE REACHED</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
