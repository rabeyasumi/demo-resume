import { useState } from "react";
import { FiCheckCircle, FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { profile } from "../data/site.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";
import "./Contact.css";

const emptyForm = { name: "", email: "", subject: "", message: "" };

const formFields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", placeholder: "What is this about?" },
  { name: "message", label: "Message", type: "textarea", placeholder: "Write your message here" },
];

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  { label: "Location", value: profile.location, icon: FiMapPin },
  { label: "GitHub", value: "github.com/rabeyasumi", href: profile.github, icon: FiGithub },
  { label: "LinkedIn", value: "linkedin.com/in/rabeya-sumi", href: profile.linkedin, icon: FiLinkedin },
];

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = "That email address doesn't look right.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please add a subject.";
  }

  if (!values.message.trim()) {
    errors.message = "Please write a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Your message should be at least 10 characters.";
  }

  return errors;
}

function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [successName, setSuccessName] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSuccessName("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSuccessName("");
      return;
    }

    setSuccessName(formData.name.trim());
    setFormData(emptyForm);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's talk"
          subtitle="Have an opportunity or a question? Send me a message and I'll get back to you."
        />

        <div className="contact__grid">
          <Reveal className="contact__info">
            {contactLinks.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <>
                  <span className="contact__icon">
                    <Icon size={20} />
                  </span>
                  <span>
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </span>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="contact__item"
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="contact__item">
                  {content}
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={100}>
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              {formFields.map((field) => (
                <div key={field.name} className="contact__field">
                  <label htmlFor={`contact-${field.name}`}>{field.label}</label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={`contact-${field.name}`}
                      name={field.name}
                      rows={5}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors[field.name])}
                      aria-describedby={errors[field.name] ? `error-${field.name}` : undefined}
                    />
                  ) : (
                    <input
                      id={`contact-${field.name}`}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      value={formData[field.name]}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors[field.name])}
                      aria-describedby={errors[field.name] ? `error-${field.name}` : undefined}
                    />
                  )}

                  {errors[field.name] && (
                    <span id={`error-${field.name}`} className="contact__error">
                      {errors[field.name]}
                    </span>
                  )}
                </div>
              ))}

              <button type="submit" className="btn btn--primary contact__submit">
                <FiSend size={17} />
                Send message
              </button>

              {successName && (
                <p className="contact__success" role="status">
                  <FiCheckCircle size={20} />
                  Thank you, {successName}! Your message has been submitted.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
