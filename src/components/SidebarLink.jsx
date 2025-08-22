import { NavLink } from "react-router-dom";
// import { FaTachometerAlt } from "react-icons/fa";

const SidebarLink = ({ to, icon: Icon, label, isCollapsed, isSubMenu }) => {
  return (
    <NavLink
      to={to}
      className={
        ({ isActive }) =>
          `d-flex align-items-center px-3 py-2 nav-link ${
            isActive ? "active-link-class" : "text-dark"
          } ${isSubMenu ? "ps-5" : ""}` // Extra padding for submenu
      }
    >
      {Icon && <Icon className="me-2" />}
      {!isCollapsed && label}
    </NavLink>
  );
};

export default SidebarLink;
