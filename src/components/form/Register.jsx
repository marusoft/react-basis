import styles from "./form.module.css";

const Register = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("It works Mr Khalid and AbdulAzeez");
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.name)
  };

  return (
    <section className={styles.formContainer}>
      <form className={styles.form}>
        <h2>User Form</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          onChange={handleInputChange}
          name="hshshshh"
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Email Address"
          onChange={handleInputChange}
          name="hshshshh"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Email Password"
          onChange={handleInputChange}
          name="hshshshh"
        />
        <button onClick={handleClick} className={styles.btn}>
          Send
        </button>
      </form>
    </section>
  );
};
export default Register;
