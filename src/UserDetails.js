import { useParams } from "react-router-dom";
import users from "./data/Users.json";

const UserDetails = () => {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetails;
