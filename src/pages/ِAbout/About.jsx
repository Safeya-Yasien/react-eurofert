import React from "react";
import { Link } from "react-router-dom";
import { Container, Breadcrumb, Row, Col } from "react-bootstrap";

import { CountSection, TeamSection, WhyChooseUs } from "../../sections";
import about from "../../assets/landing_about/About.png";

import styles from "./about.module.scss";
const { landing, overlay, content, breadcrumb, breadcrumbItem, about_us } =
  styles;

const About = () => {
  return (
    <React.Fragment>
      <section className={landing}>
        <div className={overlay} />
        <Container>
          <div className={content}>
            <h1>About Us</h1>
            <Breadcrumb className={breadcrumb}>
              <Breadcrumb.Item
                className={breadcrumbItem}
                linkAs={Link}
                linkProps={{ to: "/" }}
              >
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active>About</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Container>
      </section>

      <section className={`py-5 position-relative ${about_us}`}>
        <Container>
          <Row>
            <Col md={12} lg={6} className="mb-md-4 mb-lg-0">
              <h2 className="fs-2 fw-bold mb-4">About Us</h2>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                perferendis quis! Sint quam rerum officiis in corrupti. Amet
                iure beatae quaerat commodi nulla corrupti nemo. Labore laborum
                voluptas numquam expedita. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Deleniti fugit maiores et autem
                perferendis possimus itaque iste modi veritatis quibusdam
                deserunt voluptate atque magnam ab quam quas, sed odit ullam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo assumenda officiis, recusandae possimus eligendi fuga
                ad iure quam soluta repellat dolor asperiores enim labore
                expedita dolorum. Magnam vel deserunt pariatur!
              </p>
            </Col>
            <Col md={12} lg={6}>
              <img
                src={about}
                alt="About Us"
                width={"100%"}
                height={"100%"}
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <CountSection />

      <WhyChooseUs />

      <TeamSection />
    </React.Fragment>
  );
};

export default About;
