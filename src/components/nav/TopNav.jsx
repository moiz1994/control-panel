import { Navbar, Container, Nav, Dropdown, Image } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const TopNav = ({ toggleSideBar }) => {
  // Parse user data from localStorage safely
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const { full_name = "Guest", profile_image = "", user_privilege } = user;

  let originalProfile = profile_image;
  let modifiedProfile = originalProfile.replace(
    "http://mailserver.sukkurbeverages.net:689/",
    "https://mailserver.sukkurbeverages.net:589/"
  );

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm px-3">
      <Container fluid className="d-flex justify-content-between">
        {/* Left side - Hamburger */}
        <FaBars
          onClick={toggleSideBar}
          style={{ color: "black", cursor: "pointer", fontSize: "1.2rem" }}
        />

        {/* Right side - User info + dropdown */}
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-user"
              className="d-flex align-items-center border-0 bg-transparent shadow-none"
            >
              <span className="me-2">{full_name}</span>
              <Image
                src={modifiedProfile || "https://via.placeholder.com/40"}
                alt="user"
                roundedCircle
                width="40"
                height="40"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {user_privilege === "Admin" && (
                <>
                  <Dropdown.Item href="#">CP Users</Dropdown.Item>
                  <Dropdown.Item href="#">CP User Logs</Dropdown.Item>
                  <Dropdown.Item href="#">CP User Privileges</Dropdown.Item>
                  <Dropdown.Item href="#">CP Side Menus</Dropdown.Item>
                  <Dropdown.Divider />
                </>
              )}
              <Dropdown.Item href="#">Change Password</Dropdown.Item>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNav;
