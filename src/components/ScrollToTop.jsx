import { FiArrowUp } from "react-icons/fi";
import useScrolled from "../hooks/useScrolled.js";
import "./ScrollToTop.css";

function ScrollToTop() {
  const visible = useScrolled(500);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? "scroll-top--visible" : ""}`}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
    >
      <FiArrowUp size={20} />
    </button>
  );
}

export default ScrollToTop;
