// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/nav/Sidebar";
import TopNav from "../components/nav/TopNav";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  // const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // const handleLogout = () => {
  //   localStorage.removeItem("auth");
  //   navigate("/login");
  // };

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} />
      <div className="flex-grow-1">
        {/* Top Nav */}
        <TopNav toggleSideBar={toggleSidebar} />

        {/* Content */}
        <div style={{ minHeight: "calc(100vh - 56px)" }}>
          <Container fluid className="p-4">
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
