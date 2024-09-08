import styles from "./custom_title.module.scss";

const { custom_title, highlighted_text } = styles;

const CustomTitle = ({ highlightedText, title }) => {
  return (
    <h2 className={custom_title}>
      <span className={highlighted_text}>{highlightedText} </span>
      {title}
    </h2>
  );
};

export default CustomTitle;
