import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-grow-1">
        {/* Top Nav */}
        <TopNav />

        {/* Content */}
        <div className="p-4" style={{ minHeight: "calc(100vh - 56px)" }}>
          <h2>Welcome to the Dashboard</h2>
          <p>
            This is the content area. You can add cards, tables, charts here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
