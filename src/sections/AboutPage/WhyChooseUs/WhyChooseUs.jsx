import { Row, Col } from "react-bootstrap";
import ChooseUs from "../../../assets/landing_about/landing-19.jpg";

import styles from "./why_choose_us.module.scss";
const { why_choose_us, custom_img_display,features, feature_item } = styles;

const WhyChooseUs = () => {
  return (
    <section className={why_choose_us}>
      <Row>
        <Col
          sm={12}
          lg={6}
          className={`d-sm-none d-lg-block ${custom_img_display}`}
        >
          <img src={ChooseUs} alt="choose us" width={"100%"} height={"100%"} />
        </Col>
        <Col sm={12} lg={6}>
          <div className={features}>
            <h3>Why Choose Us</h3>
            <Row>
              <Col sm={12} md={6} lg={6} className="mb-4">
                <div className={feature_item}>
                  <h4>Professional Team On The Job</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum, quod, soluta
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6} className="mb-4">
                <div className={feature_item}>
                  <h4>Factory for Fertilizer Production</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum, quod, soluta
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6} className="mb-4">
                <div className={feature_item}>
                  <h4>Professional Team On The Job</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum, quod, soluta
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6} className="mb-4">
                <div className={feature_item}>
                  <h4>Factory for Fertilizer Production</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum, quod, soluta
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};

export default WhyChooseUs;
