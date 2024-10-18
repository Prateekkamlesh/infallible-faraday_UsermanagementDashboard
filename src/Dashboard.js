import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to={"/users"}>Users</Link>
      <br />
      <Link to={"profile"}>Profile</Link>
      <br />
      <Link to={"settings"}>Settings</Link>
      <Outlet />
    </div>
  );
};

export default Dashboard;
