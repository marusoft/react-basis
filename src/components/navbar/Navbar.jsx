import styles from "./navbar.module.css";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className={styles.headerContainer}>
      <section>
        <img
          src="./images/icon.png"
          alt="marusoft logo"
          className={styles.logo}
        />
      </section>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="/">Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">Product</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">Project</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">Contact</a>
        </li>
        <FaBars className={styles.bars} />
      </ul>
    </header>
  );
};

export default Navbar;
