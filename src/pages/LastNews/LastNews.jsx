import NewsItem from "../../components/eurofert/NewsItem/NewsItem";
import { Col, Container, Row } from "react-bootstrap";
import { newsData } from "../../data/latestNewsData";

import styles from "./lastNews.module.scss";
import { CustomTitle } from "../../components/eurofert";
const { newsContainer } = styles;

const LastNews = () => {
  return (
    <section className={newsContainer}>
      <CustomTitle highlightedText={"Latest"} title={"news"} />
      <Container>
        <Row>
          {newsData &&
            newsData.map((news, index) => (
              <Col md={6} className="mb-sm-5 mb-lg-0" lg={4} key={index}>
                <NewsItem {...news} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default LastNews;
