import Reveal from "./Reveal";

const jobs = [
  {
    tag: "active",
    dates: ["03/2026 —", "present"],
    org: "Data Riders",
    role: "Full Stack Engineer",
    bullets: [
      <>
        Engineered full-stack features with <b>Next.js</b> + <b>FastAPI</b>{" "}
        for a livestock association management platform.
      </>,
      <>
        Stabilized a legacy system under heavy load, cutting manual
        processing time by <b>~70%</b>.
      </>,
      <>
        Restructured <b>500K+</b> database records, saving{" "}
        <b>~20 hrs/week</b> of manual work.
      </>,
    ],
    cert: null,
  },
  {
    tag: "completed",
    dates: ["11/2022 —", "03/2026"],
    org: "Accenture",
    role: "Data Engineer",
    bullets: [
      <>
        Built Payroll/SaaS software for <b>10+ countries</b>, supporting{" "}
        <b>800K+</b> end users.
      </>,
      <>
        Raised test coverage from <b>~80% to ~95%</b>, cutting production
        incidents by <b>~20%</b>.
      </>,
      <>
        Led Agile delivery across 3 teams; managed releases via Azure DevOps
        &amp; GCP.
      </>,
    ],
    cert: "Google Cloud Digital Leader",
  },
  {
    tag: "completed",
    dates: ["01/2021 —", "11/2022"],
    org: "Stark Solution",
    role: "Fullstack Developer",
    bullets: [
      <>
        Built management software for medical associations, <b>30+</b> active
        clients.
      </>,
      <>
        Maintained <b>25+</b> SQL databases at <b>~99% uptime</b>.
      </>,
    ],
    cert: null,
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-tag mono">02</span>
          <h2 className="sec-title">Experience</h2>
        </div>

        <Reveal>
          {jobs.map((job, i) => (
            <div className="log-entry" key={i}>
              <div className="log-meta">
                <span className="tag">{job.tag}</span>
                <br />
                {job.dates[0]}
                <br />
                {job.dates[1]}
              </div>
              <div>
                <div className="log-org">{job.org}</div>
                <div className="log-role">{job.role}</div>
                <ul className="log-list">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {job.cert && <span className="cert-tag">✓ {job.cert}</span>}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
