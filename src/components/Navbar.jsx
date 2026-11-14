import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/site.js";
import useScrolled from "../hooks/useScrolled.js";
import "./Navbar.css";

function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(16);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled || menuOpen ? "navbar--solid" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__name">{profile.name}</span>
        </a>

        <nav
          id="main-navigation"
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? "is-active" : ""}
              aria-current={activeSection === link.id ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
