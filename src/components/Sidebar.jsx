import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column bg-white"
      style={{ width: "250px", height: "100vh" }}
    >
      <Navbar.Brand
        href=""
        className="d-flex justify-content-center align-items-center bg-purple"
        style={{ height: "87px" }}
      >
        <img
          src="/images/cp_logo_icon.png"
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: "180px" }}
        />
      </Navbar.Brand>

      <Nav className="me-auto flex-column">
        <Nav.Link href="#" className="text-dark">
          Dashboard
        </Nav.Link>
        <NavDropdown title="BOD Report">
          <Nav.Link href="#" className="text-dark">
            BOD Data
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            Report Builder
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            Sales Comparison Report
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            OS Report Builder
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            OS Sales Comparison Report
          </Nav.Link>
        </NavDropdown>

        <NavDropdown title="BI Report">
          <Nav.Link href="#" className="text-dark">
            Main Menu
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            Report Links
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            User Roles
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            Users
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            Transfer User Roles
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            App Report Link Upload
          </Nav.Link>
        </NavDropdown>

        <NavDropdown title="HR">
          <Nav.Link href="#" className="text-dark">
            Job Posting
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            CV / Resume's
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            Requisition
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            Interview Evaluation Report
          </Nav.Link>
        </NavDropdown>

        <Nav.Link href="#" className="text-dark">
          Application Logs
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
