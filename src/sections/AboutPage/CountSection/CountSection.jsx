import { Container, Row, Col } from "react-bootstrap";
import { SingleCounter } from "../../../components/eurofert";

import styles from "./CountSection.module.scss";

const { counterSection } = styles;

const CountSection = () => {
  return (
    <section className={counterSection}>
      <Container>
        <Row>
          <Col md={6} lg={4} className="mb-md-4 mb-lg-0">
            <SingleCounter number="1024" title="Our Staff" />
          </Col>
          <Col md={6} lg={4} className="mb-md-4 mb-lg-0">
            <SingleCounter number="100" title="Happy People" />
          </Col>
          <Col md={6} lg={4} className="mb-md-4 mb-lg-0">
            <SingleCounter number="200" title="Products" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CountSection;
