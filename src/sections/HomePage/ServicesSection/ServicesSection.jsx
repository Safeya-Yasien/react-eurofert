import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faTree } from "@fortawesome/free-solid-svg-icons";
import {
  faCanadianMapleLeaf,
  faPagelines,
} from "@fortawesome/free-brands-svg-icons";

import { servicesData } from "../../../data/servicesData";

import styles from "./services_section.module.scss";
const { our_services, categories, category, active, box } = styles;

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("rubbish removal");

  const handleCategoryClick = (category) => {
    setActiveCategory(category.toLowerCase());
  };

  const filteredServices = servicesData.filter(
    (service) => service.filter.toLowerCase() === activeCategory
  );

  return (
    <section className={our_services}>
      <h1>
        <span>Our</span> Service
      </h1>
      <Container>
        <Row>
          <Col lg={6}>
            <ul className={categories}>
              <li
                className={`${category} ${
                  activeCategory === "rubbish removal" ? active : ""
                }`}
                onClick={() => handleCategoryClick("Rubbish Removal")}
              >
                <FontAwesomeIcon icon={faTree} />
                <p>Rubbish Removal</p>
              </li>
              <li
                className={`${category} ${
                  activeCategory === "lawn moving" ? active : ""
                }`}
                onClick={() => handleCategoryClick("Lawn Moving")}
              >
                <FontAwesomeIcon icon={faSeedling} />
                <p>Lawn Moving</p>
              </li>
              <li
                className={`${category} ${
                  activeCategory === "garden care" ? active : ""
                }`}
                onClick={() => handleCategoryClick("Garden Care")}
              >
                <FontAwesomeIcon icon={faCanadianMapleLeaf} />
                <p>Garden Care</p>
              </li>
              <li
                className={`${category} ${
                  activeCategory === "landscape design" ? active : ""
                }`}
                onClick={() => handleCategoryClick("Landscape Design")}
              >
                <FontAwesomeIcon icon={faPagelines} />
                <p>Landscape Design</p>
              </li>
              <li
                className={`${category} ${
                  activeCategory === "excellent services" ? active : ""
                }`}
                onClick={() => handleCategoryClick("Excellent Services")}
              >
                <FontAwesomeIcon icon={faTree} />
                <p>Excellent Services</p>
              </li>
              <li
                className={`${category} ${
                  activeCategory === "insect control" ? active : ""
                }`}
                onClick={() => handleCategoryClick("Insect Control")}
              >
                <FontAwesomeIcon icon={faCanadianMapleLeaf} />
                <p>Insect Control</p>
              </li>
            </ul>
          </Col>

          <Col lg={6}>
            <div className="content">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className={`${box}`}
                  data-filter={service.filter}
                >
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
