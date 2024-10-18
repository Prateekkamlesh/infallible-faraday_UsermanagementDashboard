import users from "./data/Users.json";
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <div className="container">
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
