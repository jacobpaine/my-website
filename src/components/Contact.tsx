import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>
          I’m always open to opportunities and collaborations. Feel free to
          reach out via email or social media.
        </p>
        <a href="mailto:painejacob@egmail.com">Email Me</a>
        <div className="contact-icons">
          <a
            href="https://github.com/jacobpaine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            href="https://linkedin.com/in/jacobpaine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </div>
      </div>
    </section>
  );
}
