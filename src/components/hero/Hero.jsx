import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <section className={styles.leftContainer}>
        <h1 className={styles.title}>Marusoft Software Development Program</h1>
        <p className={styles.description}>
          Welcome to Marusoft Academy where you will learn the most in-demand
          skills to become a world-class Software Engineer.
        </p>
        <button className={styles.btn}>Learn More</button>
      </section>
      <section className={styles.rightContainer}>
        <img src="/images/hero.jpeg" alt="hero avatar" />
      </section>
    </section>
  );
};
export default Hero;
