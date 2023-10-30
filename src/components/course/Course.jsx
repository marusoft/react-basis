import styles from "./course.module.css";
import courses from "../../course";
import Button from "../button/Button";

const Course = () => {
  return (
    <>
      <h2 className={styles.courseTitle}>Courses</h2>
      <section className={styles.courseContainer}>
        {courses.map((course) => (
          <section key={course.id} className={styles.course}>
            <section className={styles.courseContent}>
              <h3>{course.courseTitle}</h3>
              <p>{course.courseDescription}</p>
              <div style={{
                display: "flex",
                gap: ".8rem"
              }}>
                <Button url="/" text="Apply" />
                <Button url="/" text="View Course" />
              </div>
            </section>
          </section>
        ))}
      </section>
    </>
  );
};
export default Course;
