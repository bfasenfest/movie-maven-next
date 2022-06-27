import styles from "../styles/Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Movie</span>
        <span className={styles.title2}>Maven</span>
      </h1>
      <p className={styles.subTitle}>Find local movie theaters</p>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
