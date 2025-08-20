import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const SidebarMenu = ({ icon: Icon, label, collapsed, children, basePath }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // keep menu open if current path starts with basePath
  const isActiveGroup = location.pathname.startsWith(basePath);

  return (
    <div>
      {/* Parent button */}
      <div
        onClick={() => setOpen(!open)}
        className={`d-flex align-items-center px-3 py-2 rounded cursor-pointer ${
          isActiveGroup ? "active-link-class" : "text-dark"
        }`}
      >
        {Icon && <Icon className="me-2" />}
        {!collapsed && <span>{label}</span>}
      </div>

      {/* Sub menu */}
      {open && !collapsed && (
        <div className="ms-4 mt-1 d-flex flex-column gap-1">{children}</div>
      )}
    </div>
  );
};

export default SidebarMenu;
