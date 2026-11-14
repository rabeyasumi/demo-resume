import Reveal from "./Reveal.jsx";

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="section-title">
      <span className="section-title__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}

export default SectionTitle;
