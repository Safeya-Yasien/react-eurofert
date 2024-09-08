import styles from "./single_counter.module.scss";
const { single_counter_container, counter_number, counter_title } = styles;

const SingleCounter = ({ number, title }) => {
  return (
    <div className={single_counter_container}>
      <p className={counter_number}>{number}</p>
      <h4 className={counter_title}>{title}</h4>
    </div>
  );
};

export default SingleCounter;
