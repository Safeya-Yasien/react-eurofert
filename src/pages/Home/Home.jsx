import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import { Landing, ServicesSection, TeamSection } from "../../sections";
import { CustomTitle, Product } from "../../components/eurofert";
import LastNews from "../LastNews/LastNews";
import { products } from "../../data/db.json";

import styles from "./home.module.scss";
const { our_products } = styles;

function Home() {
  return (
    <React.Fragment>
      <Landing />

      <ServicesSection />

      <section className={our_products}>
        <Container>
          <CustomTitle title={"products"} />
          <Row>
            {products &&
              products
                .map((product) => (
                  <Col md={6} lg={3} key={product.id}>
                    <Product product={product} />
                  </Col>
                ))
                .slice(0, 8)}
          </Row>
          <Link to="shop" className="custom_button d-block">
            Show More
          </Link>
        </Container>
      </section>

      <LastNews />
      <TeamSection />
    </React.Fragment>
  );
}

export default Home;
