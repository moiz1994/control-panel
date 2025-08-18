import { Navbar, Container, Nav } from "react-bootstrap";

const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm px-3">
      <Container fluid>
        <Navbar.Brand href="#">Dashboard</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Profile</Nav.Link>
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNav;
