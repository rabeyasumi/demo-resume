import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile } from "../data/site.js";
import "./Hero.css";

const highlights = ["Django", "REST APIs", "PostgreSQL", "React"];

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero__glow hero__glow--violet" />
      <div className="hero__glow hero__glow--pink" />

      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__location">
            <FiMapPin size={14} />
            {profile.location}
          </span>

          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role">{profile.title}</h2>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a
              href={profile.cv}
              download="Rabeya-Akter-Sumi-CV.pdf"
              className="btn btn--primary"
            >
              <FiDownload size={18} />
              Download CV
            </a>
            <a href="#projects" className="btn btn--ghost">
              View Projects
              <FiArrowRight size={18} />
            </a>
          </div>

          <ul className="hero__highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
