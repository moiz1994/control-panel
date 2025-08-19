// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

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
