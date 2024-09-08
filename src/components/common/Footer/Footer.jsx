import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faLocationDot,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { IMAGES } from "../../../assets";

import styles from "./footer.module.scss";
const { footer, logo, foot, title, contactInfo, formControl, btn } = styles;

const Footer = () => {
  return (
    <footer className={footer}>
      <Container>
        <Row>
          <Col sm={6} xl={3} className="mb-5">
            <div className={logo}>
              <img alt="Company logo" src={IMAGES.footerLogo} loading="lazy" />
              <p>
                Regardless of whether you need to stay in your own house, are
                searching for help with a more established relative, looking for
                exhortation on paying for care, we can help you.
              </p>
            </div>
          </Col>
          <Col sm={6} xl={3} className="mb-5">
            <div className={`${foot}`}>
              <h2 className={title}>Useful Pages</h2>
              <ul>
                {[
                  { name: "About Us", href: "about.html" },
                  { name: "Contact", href: "contact.html" },
                  { name: "Jobs", href: "jobs.html" },
                  { name: "News Letter", href: "news.html" },
                  { name: "Our Products", href: "all_products.html" },
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col sm={6} xl={3} className="mb-5">
            <div className={`${foot} ${contactInfo}`}>
              <h2 className={title}>Contacts</h2>
              <ul>
                {[
                  {
                    icon: faLocationDot,
                    text: "Lorem ipsum dolor sit amet.",
                    href: "#",
                  },
                  {
                    icon: faEnvelope,
                    text: "test@gmail.com",
                    href: "mailto:test@gmail.com",
                  },
                  {
                    icon: faUserGear,
                    text: "+20000000000",
                    href: "tel:+20000000000",
                  },
                ].map((contact, index) => (
                  <li key={index}>
                    <a href={contact.href}>
                      <FontAwesomeIcon icon={contact.icon} />
                      <span className="ms-3">{contact.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col sm={6} xl={3} className="mb-5">
            <div className={`${foot}`}>
              <h2 className={title}>News Letter</h2>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className={`form-control ${formControl}`}
                    placeholder="Your email"
                    name="EMAIL"
                    aria-label="Your email for newsletters"
                  />
                  <button
                    type="submit"
                    className={btn}
                    aria-label="Submit newsletters"
                  >
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
