import { Container, Nav, Navbar } from "react-bootstrap";

const TopBar = () => {
  return (
    <div id="top-bar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">Weatherly</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
