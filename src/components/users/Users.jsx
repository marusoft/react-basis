import users from "../../users";
import styles from "./user.module.css";

console.log(users);

const Users = () => {
  return (
    <section className={styles.container}>
      <h1>Users Information</h1>
      <table className={styles.table}>
        <tr>
          <th>id</th>
          <th>username</th>
          <th>firstname</th>
          <th>lastname</th>
          <th>email</th>
          <th>Street</th>
          <th>City</th>
          <th>Phone</th>
        </tr>
        {users.map((user) => (
          <tbody key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.name.firstname}</td>
            <td>{user.name.lastname}</td>
            <td>{user.email}</td>
            <td>{user.address.street}</td>
            <td>{user.address.city}</td>
            <td>{user.phone}</td>
          </tbody>
        ))}
      </table>
    </section>
  );
};
export default Users;
