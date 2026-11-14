import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/site.js";
import "./Footer.css";

const socialLinks = [
  { label: "GitHub", href: profile.github, icon: FiGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FiLinkedin },
  { label: "Facebook", href: profile.facebook, icon: FiFacebook },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__copy">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>

        <ul className="footer__social">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
