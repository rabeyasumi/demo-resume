import { skillGroups } from "../data/skills.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="The tools I build with"
          subtitle="Dashed badges are things I'm still learning, so you know what's solid and what's in progress."
        />

        <div className="skills__grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={(index % 4) * 70}>
                <article className="skills__card">
                  <div className="skills__head">
                    <span className="skills__icon">
                      <Icon size={18} />
                    </span>
                    <h3>{group.title}</h3>
                  </div>

                  <ul className="skills__badges">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={group.learning ? "skills__badge skills__badge--learning" : "skills__badge"}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
