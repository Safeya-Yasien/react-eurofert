import { useState } from "react";
import { Carousel } from "react-bootstrap";

import {
  landing_1,
  landing_2,
  landing_3,
  landing_4,
  landing_5,
  landing_6,
  landing_7,
  landing_8,
  landing_9,
} from "../../../assets/landing_home";

import styles from "./landing.module.scss";
const { landing, overlay, content, logo, description, orderBtn } = styles;

const Landing = () => {
  const imageSources = [
    landing_1,
    landing_2,
    landing_3,
    landing_4,
    landing_5,
    landing_6,
    landing_7,
    landing_8,
    landing_9,
  ];
  const images = imageSources.map((src, index) => ({
    src,
    alt: `Slide ${index + 1}`,
  }));

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    if (selectedIndex === images.length - 1) {
      setActiveIndex(0);
    }
  };

  return (
    <div className={landing}>
      <Carousel
        fade
        interval={3000}
        controls={true}
        indicators={false}
        activeIndex={activeIndex}
        onSelect={handleSelect}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className={styles.carouselImage}
              style={{
                backgroundImage: `url(${image.src})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={overlay}></div>
            </div>
          </Carousel.Item>
        ))}
        <div className={content}>
          <p>
            <span className={logo}>EUROFert</span>
            <span className={description}>
              Factory for Fertilizer Production is manfacturing &amp; supplying
              NPK Fertilizers in different forms including water soluble, clear
              Liquid, suspension &amp; paste. The offices &amp; production in
              Burg El-Arab Alexandria.
            </span>
          </p>
          <button className={`${orderBtn} btn`} aria-label="Order now">
            Order Now
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default Landing;
