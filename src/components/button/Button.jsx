import styles from "./button.module.css";
// import { Link } from "react-router-dom";

const Button = ({ url, text, margin }) => {
  return (
    <a href={url}>
      <button className={styles.btn}>{text}</button>
    </a>
  );
};
export default Button;
