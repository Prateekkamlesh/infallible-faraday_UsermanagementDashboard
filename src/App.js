import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import Dashboard from "./Dashboard";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<h1>Profile Component</h1>} />
            <Route path="settings" element={<h1>Settings Component</h1>} />
          </Route>
          <Route path="*" element={<>404 : Not Found</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
