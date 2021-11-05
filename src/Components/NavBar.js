import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBarOutput = () => {
  return (
    <div className="NavBarOutput">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#home">Picture Perfect</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features" className="NavItems">Home</Nav.Link>
              <Nav.Link href="#features" className="NavItems">About</Nav.Link>
              <Nav.Link href="#features" className="NavItems">Service & Package</Nav.Link>
              <Nav.Link href="#features" className="NavItems">Gallery</Nav.Link>
              <Nav.Link href="#features" className="NavItems">FAQ</Nav.Link>
              <Nav.Link href="#features" className="NavItems">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
    </div>
  );
};

export default NavBarOutput;
