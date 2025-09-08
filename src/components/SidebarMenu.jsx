import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SidebarMenu = ({ icon: Icon, label, collapsed, children, basePath }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const location = useLocation();

  // keep menu open if current path starts with basePath
  // const isActiveGroup = location.pathname.startsWith(basePath);
  const isActiveGroup = basePath && location.pathname.startsWith(basePath);

  return (
    <div
      onMouseEnter={() => collapsed && setHover(true)}
      onMouseLeave={() => collapsed && setHover(false)}
      className="position-relative"
    >
      {/* Parent button */}
      <div
        onClick={() => !collapsed && setOpen(!open)}
        className={`d-flex justify-content-between align-items-center px-3 py-2 rounded cursor-pointer ${
          isActiveGroup ? "active-link-class" : "text-dark"
        }`}
      >
        <span>
          {Icon && <Icon className="me-2" />}
          {!collapsed && <span>{label}</span>}
        </span>
        {!collapsed && (open ? <FaChevronUp /> : <FaChevronDown />)}
      </div>

      {/* Sub menu */}
      {open && !collapsed && (
        <div className=" d-flex flex-column submenu">{children}</div>
      )}

      {/* Hover popup when collapsed */}
      {collapsed && hover && (
        <div
          className="position-absolute bg-white shadow rounded"
          style={{
            left: "80px",
            top: "0",
            zIndex: 1000,
            minWidth: "200px",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
