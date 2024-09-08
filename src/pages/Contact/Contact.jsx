import { Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./contact.module.scss";
const {
  userData,
  title,
  formGroup,
  formControl,
  checkBox,
  formSubmit,
  map,
  contactLinks,
  contactLink,
  socialLink,
} = styles;

function Contact() {
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col sm={12} lg={6} className="mb-sm-4">
            <div className={userData}>
              <h2 className={title}>
                Get in
                <span> touch</span>
              </h2>
              <form>
                <div className={`form-group ${formGroup}`}>
                  <input
                    type="text"
                    className={`form-control ${formControl}`}
                    placeholder="Name"
                  />
                </div>
                <div className={`form-group ${formGroup}`}>
                  <input
                    type="email"
                    className={`form-control ${formControl}`}
                    placeholder="Email"
                  />
                </div>
                <div className={`form-group ${formGroup}`}>
                  <input
                    type="text"
                    className={`form-control ${formControl}`}
                    placeholder="Phone"
                  />
                </div>
                <div className={`form-group ${formGroup}`}>
                  <input
                    type="text"
                    className={`form-control ${formControl}`}
                    placeholder="Country"
                  />
                </div>
                <div className={`form-group ${formGroup}`}>
                  <input
                    type="text"
                    className={`form-control ${formControl}`}
                    placeholder="Crop"
                  />
                </div>
                <div className={`form-group ${formGroup}`}>
                  <textarea
                    className={`form-control ${formControl}`}
                    placeholder="Content"
                  />
                </div>
                <div
                  className={`form-group ${formGroup} d-flex align-items-center`}
                >
                  <input
                    type="checkbox"
                    className={`me-2 ${checkBox}`}
                    id="agree-term"
                  />
                  <label htmlFor="agree-term" className="agree-term-label">
                    I agree all statements in
                    <a href="#" className="ms-2">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    id="submit"
                    className={`${formSubmit} btn`}
                    defaultValue="Submit"
                  />
                </div>
              </form>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className={map}>
              <p className="mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum.
              </p>
              <div className="location">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.423542387745!2d29.54576402359925!3d30.818796274542866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145f7c6857d13199%3A0x8cf8a40bc48b99d1!2sEurofert%20For%20Fertilizers%20-%20info%40eurofert-egypt.com!5e0!3m2!1sar!2seg!4v1714618169949!5m2!1sar!2seg"
                  width={600}
                  height={450}
                  className="w-100"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <ul className={`${contactLinks} mt-5`}>
                <li>
                  <a href="#" className={contactLink}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    Lorem ipsum dolor sit amet.
                  </a>
                </li>
                <li>
                  <a href="#" className={contactLink}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Lorem ipsum dolor sit.
                  </a>
                </li>
                <li>
                  <a href="#" className={contactLink}>
                    <FontAwesomeIcon icon={faPhoneVolume} />
                    (+20) 1234567891
                  </a>
                </li>
              </ul>
              <ul className="d-flex align-items-center justify-content-center gap-3 mt-4">
                {[faEarthAmericas, faLinkedin, faFacebook, faTwitter].map(
                  (icon, index) => (
                    <li key={index}>
                      <a href="#">
                        <FontAwesomeIcon icon={icon} className={socialLink} />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
