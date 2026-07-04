export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="status-line">
          <span className="status-dot" />
          available for new opportunities
        </div>
        <h1 className="title">
          Full Stack Engineer for systems that need to <span>stay up</span>.
        </h1>
        <p className="lede">
          I build with Next.js, FastAPI, and Google Cloud — and I specialize in
          stabilizing overloaded legacy platforms without stopping the line.
          5+ years across start-ups and global companies.
        </p>
        <div className="cta-row">
          <a href="#experience" className="btn primary">
            View experience
          </a>
          <a href="#contact" className="btn ghost">
            Get in touch →
          </a>
        </div>

        <div className="terminal reveal in">
          <div className="term-bar">
            <span className="term-dot" />
            <span className="term-dot" />
            <span className="term-dot" />
            <span className="term-title">~/maximiliano-borgoglio — zsh</span>
          </div>
          <div className="term-body">
            <div>
              <span className="prompt">$</span> whoami
            </div>
            <div className="out">
              maximiliano borgoglio — full stack engineer, buenos aires
            </div>
            <br />
            <div>
              <span className="prompt">$</span> systems --status
            </div>
            <div className="out">
              <span className="ok">✓</span> data-riders&nbsp;&nbsp;&nbsp;legacy
              platform stabilized · -70% manual time
            </div>
            <div className="out">
              <span className="ok">✓</span> accenture&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;payroll/saas
              · 800k+ users · 10+ countries
            </div>
            <div className="out">
              <span className="ok">✓</span> stark-solution&nbsp;medical mgmt
              software · 99% uptime
            </div>
            <br />
            <div>
              <span className="prompt">$</span> cat certifications.txt
            </div>
            <div className="out">google cloud digital leader</div>
            <br />
            <div>
              <span className="prompt">$</span> <span className="term-cursor" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
