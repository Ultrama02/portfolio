import Reveal from "./Reveal";

const groups = [
  { title: "Frontend", tags: ["Next.js", "React"] },
  { title: "Backend", tags: ["FastAPI", ".NET", "Java"] },
  { title: "Cloud / DevOps", tags: ["Google Cloud", "AWS", "Docker"] },
  { title: "Languages", tags: ["Python", "C#", "SQL"] },
  { title: "Process", tags: ["Agile", "Git"] },
  { title: "Certification", tags: ["GCP Digital Leader"] },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-tag mono">04</span>
          <h2 className="sec-title">Stack</h2>
        </div>
        <Reveal className="skill-grid">
          {groups.map((g) => (
            <div className="skill-card" key={g.title}>
              <div className="sk-title">{g.title}</div>
              <div className="sk-tags">
                {g.tags.map((t) => (
                  <span className="sk-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
