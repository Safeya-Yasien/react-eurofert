import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { products, categories } from "../../data/db.json";
import { CustomTitle, Product } from "../../components/eurofert";

import styles from "./shop.module.scss";
const { shop, category, loadMore, active } = styles;

const initialProducts = 8;
const incrementInitialProducts = 4;

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayProducts, setDisplayProducts] = useState(initialProducts);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleLoadMoreBtn = () => {
    setDisplayProducts(displayProducts + incrementInitialProducts);
  };

  useEffect(() => {
    setDisplayProducts(initialProducts);
  }, [selectedCategory]);

  return (
    <section className={shop}>
      <div>
        <CustomTitle highlightedText={"Our"} title={"Products"} />
      </div>
      <Container>
        <Row>
          <Col>
            <ul className="mb-5 d-flex align-items-center justify-content-center gap-3 flex-wrap text-center position-relative">
              {categories &&
                categories.map((item) => (
                  <li
                    className={`${category} ${
                      selectedCategory === item.filter ? active : ""
                    }`}
                    data-filter={item.filter}
                    key={item.filter}
                    onClick={() => setSelectedCategory(item.filter)}
                  >
                    {item.label}
                  </li>
                ))}
            </ul>
          </Col>
        </Row>
        <Row>
          {filteredProducts &&
            filteredProducts.slice(0, displayProducts).map((product) => (
              <Col sm={6} lg={4} xl={3} key={product.id}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
        {displayProducts < filteredProducts.length ? (
          <button className={loadMore} onClick={handleLoadMoreBtn}>
            Load More
          </button>
        ) : null}
      </Container>
    </section>
  );
};

export default Shop;
