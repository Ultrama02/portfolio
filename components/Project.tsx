import Reveal from "./Reveal";

const stack = ["Next.js", "FastAPI", "Python", "TypeScript"];

const highlights = [
  "Parses raw logs and reconstructs a structured timeline of events.",
  "Traces the likely root cause by scanning backward from the first error to the nearest warning.",
  "Groups repeated errors to detect cascades, and flags related components via keyword extraction.",
  "Generates a deterministic post-mortem by default — no API key required — with an optional Claude-powered narrative layer that falls back gracefully if unavailable.",
];

export default function Project() {
  return (
    <section id="project">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-tag mono">03</span>
          <h2 className="sec-title">Project</h2>
        </div>
        <Reveal>
          <div className="skill-card" style={{ padding: "28px 30px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "19px", fontWeight: 700 }}>
                Incident Whisperer
              </h3>
              <div className="sk-tags">
                {stack.map((t) => (
                  <span className="sk-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "14.5px",
                lineHeight: 1.7,
                margin: "0 0 16px",
              }}
            >
              Paste raw application logs in, get an automated incident
              post-mortem out — root cause candidate, timeline, and impact
              summary. Built directly from the log-triage work of
              stabilizing production systems: automating the first 20
              minutes of an incident review.
            </p>
            <ul className="log-list" style={{ marginBottom: "16px" }}>
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href="https://github.com/Ultrama02/incident-whisperer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
              >
                View on GitHub →
              </a>
              <a
                href="https://incident-whisperer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
              >
                Live demo →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
