import styles from "./course.module.css";
import courses from "../../course";

const Course = () => {
  return (
    <>
      <h2 className={styles.courseTitle}>Courses</h2>
      <section className={styles.courseContainer}>
        {courses.map((course) => (
          <section id={course.id} className={styles.course}>
            <section className={styles.courseContent}>
              <h3>{course.courseTitle}</h3>
              <p>{course.courseDescription}</p>
              <div className={styles.btn}>
                <button>Apply</button>
                <button>View Course</button>
              </div>
            </section>
          </section>
        ))}
      </section>
    </>
  );
};
export default Course;
