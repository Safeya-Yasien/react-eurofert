import styles from "./newsItem.module.scss";
import { PropTypes } from "prop-types";
const { newContainer, imgContainer, date, content } = styles;

const NewsItem = ({ image, alt, dateMonth, dateDay, title, description }) => {
  return (
    <div className={newContainer}>
      <div className={imgContainer}>
        <img src={image} alt={alt} />
      </div>
      <div className={date}>
        <p className="mb-0">{dateMonth}</p>
        <p className="mb-0">{dateDay}</p>
      </div>
      <div className={content}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  dateMonth: PropTypes.string.isRequired,
  dateDay: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewsItem;
