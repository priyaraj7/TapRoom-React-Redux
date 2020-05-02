import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Tap Room</Navbar.Brand>

      <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Nav.Link href="#login">Login</Nav.Link>
        <Nav.Link href="#cart">Cart</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;

// https://untappd.com/v/hopheads-taproom/7559783
