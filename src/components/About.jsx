import { FiAward, FiTarget, FiUser } from "react-icons/fi";
import { aboutParagraphs, careerGoal, education, profile } from "../data/site.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";
import "./About.css";

const profileDetails = [
  { label: "Name", value: profile.name },
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email },
  { label: "Degree", value: "B.Sc. in CSE" },
  { label: "Focus", value: "Backend, APIs and databases" },
];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionTitle
          eyebrow="About me"
          title="Backend first, with the full picture in mind"
          subtitle="A little about how I work and where I'm headed."
        />

        <div className="about__grid">
          <div className="about__main">
            <Reveal className="about__text">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal delay={80} className="about__card about__goal">
              <span className="about__icon">
                <FiTarget size={20} />
              </span>
              <div>
                <h3>Career goal</h3>
                <p>{careerGoal}</p>
              </div>
            </Reveal>

            <Reveal delay={160} className="about__card">
              <div className="about__card-head">
                <span className="about__icon">
                  <FiUser size={20} />
                </span>
                <h3>Profile</h3>
              </div>
              <dl className="about__details">
                {profileDetails.map((detail) => (
                  <div key={detail.label}>
                    <dt>{detail.label}</dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={120} className="about__card about__education">
            <div className="about__card-head">
              <span className="about__icon">
                <FiAward size={20} />
              </span>
              <h3>Education</h3>
            </div>

            <ol className="about__timeline">
              {education.map((item) => (
                <li key={item.degree}>
                  <span className="about__year">{item.year}</span>
                  <h4>{item.degree}</h4>
                  <p>{item.institution}</p>
                  <span className="about__result">{item.result}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
