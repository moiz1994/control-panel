import { useState } from "react";
import { Nav } from "react-bootstrap";
import {
  FaTachometerAlt,
  FaChartBar,
  FaUsers,
  FaCogs,
  FaFileAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ isCollapsed }) => {
  // state to track open/closed menus
  const [openMenu, setOpenMenu] = useState(null);
  const [hoverMenu, setHoverMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div
      className={`sidebar d-flex flex-column bg-white shadow-sm ${
        isCollapsed ? "collapsed" : ""
      }`}
      style={{
        width: isCollapsed ? "80px" : "250px",
        height: "100vh",
        transition: "width 0.3s",
        position: "relative",
      }}
    >
      {/* Logo */}
      <div
        className="d-flex justify-content-center align-items-center bg-purple"
        style={{ height: "87px", padding: "0 10px" }}
      >
        {!isCollapsed ? (
          <img
            src="/images/cp_logo_icon.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "180px" }}
          />
        ) : (
          <img
            src="/images/cp_icon.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "40px" }}
          />
        )}
      </div>

      {/* Navigation */}
      <Nav className="flex-column mt-3">
        {/* Dashboard */}
        <SidebarLink
          to="/"
          icon={FaTachometerAlt}
          label="Dashboard"
          isCollapsed={isCollapsed}
        />

        {/* BOD Report */}
        <SidebarMenu
          icon={FaChartBar}
          label="BOD Report"
          collapsed={isCollapsed}
        >
          <SidebarLink
            to="/bod/bod_data"
            isCollapsed={isCollapsed}
            isSubMenu={true}
            label="BOD Data"
          />
          {/* <SidebarLink
            to="/reportBuilder"
            label="Report Builder"
            isCollapsed={isCollapsed}
            isSubMenu
          />
          <SidebarLink
            to="/salesCompareReport"
            label="Sales Comparison"
            isCollapsed={isCollapsed}
            isSubMenu
          />
          <SidebarLink
            to="/osReportBuilder"
            label="OS Report Builder"
            isCollapsed={isCollapsed}
            isSubMenu
          />
          <SidebarLink
            to="/osSalesCompareReport"
            label="OS Sales Comparison"
            isCollapsed={isCollapsed}
            isSubMenu
          /> */}
        </SidebarMenu>

        {/* BI Report */}
        <SidebarMenu
          icon={FaFileAlt}
          label="BI Report Portal"
          collapsed={isCollapsed}
          basePath="/bi_report/main_menu"
        >
          <SidebarLink
            to="/bi_report/main_menu"
            isCollapsed={isCollapsed}
            isSubMenu={true}
            label="Main Menu"
          />

          <SidebarLink
            to="/bi_report/report_create"
            isCollapsed={isCollapsed}
            isSubMenu={true}
            label="Report Create"
          />
        </SidebarMenu>
        {/* <div
          onMouseEnter={() => setHoverMenu("bi")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <div
            className="text-dark d-flex align-items-center justify-content-between px-3 py-2 sidebar-item"
            onClick={() => toggleMenu("bi")}
            style={{ cursor: "pointer" }}
          >
            <span>
              <FaFileAlt className="me-2" />
              {!isCollapsed && "BI Report"}
            </span>
            {!isCollapsed &&
              (openMenu === "bi" ? <FaChevronUp /> : <FaChevronDown />)}
          </div> */}
        {/* Expand inside sidebar when not collapsed */}
        {/* {openMenu === "bi" && (
            <div className="submenu">
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Main Menu
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Report Links
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                User Roles
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Users
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Transfer Roles
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Upload Report
              </Nav.Link>
            </div>
          )} */}

        {/* HOver submenu when collapsed */}
        {/* {isCollapsed && hoverMenu === "bi" && (
            <div
              className="position-absolute bg-white shadow rounded"
              style={{
                left: "80px",
                top: "180px",
                zIndex: 1000,
                minWidth: "200px",
              }}
            >
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Main Menu
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Report Links
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                User Roles
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Users
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Transfer Roles
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Upload Report
              </Nav.Link>
            </div>
          )} 
        </div>*/}

        {/* HR */}
        <div
          onMouseEnter={() => setHoverMenu("hr")}
          onMouseLeave={() => setHoverMenu(null)}
        >
          <div
            className="text-dark d-flex align-items-center justify-content-between px-3 py-2 sidebar-item"
            onClick={() => toggleMenu("hr")}
            style={{ cursor: "pointer" }}
          >
            <span>
              <FaUsers className="me-2" /> {!isCollapsed && "HR"}
            </span>
            {!isCollapsed &&
              (openMenu === "hr" ? <FaChevronUp /> : <FaChevronDown />)}
          </div>
          {openMenu === "hr" && (
            <div className="submenu">
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Job Posting
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                CV / Resume
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Requisition
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Interview Report
              </Nav.Link>
            </div>
          )}

          {/* HOver submenu when collapsed */}
          {isCollapsed && hoverMenu === "hr" && (
            <div
              className="position-absolute bg-white shadow rounded"
              style={{
                left: "80px",
                top: "220px",
                zIndex: 1000,
                minWidth: "200px",
              }}
            >
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Job Posting
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                CV / Resume
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Requisition
              </Nav.Link>
              <Nav.Link href="#" className="text-dark px-5 py-2">
                Interview Report
              </Nav.Link>
            </div>
          )}
        </div>

        {/* Logs */}
        <SidebarLink
          to="/application_logs"
          icon={FaCogs}
          label="Application Logs"
          isCollapsed={isCollapsed}
        />
      </Nav>

      {/* <Nav className="flex-column mt-3">
        {menuConfig.map((item) =>
          item.children ? (
            <SidebarMenu
              key={item.label}
              item={item}
              isCollapsed={isCollapsed}
              openMenu={openMenu}
              hoverMenu={hoverMenu}
              toggleMenu={toggleMenu}
              setHoverMenu={setHoverMenu}
            />
          ) : (
            <SidebarLink
              key={item.label}
              to={item.path}
              icon={item.icon}
              label={item.label}
              isCollapsed={isCollapsed}
            />
          )
        )}
      </Nav> */}
    </div>
  );
};

export default Sidebar;
