import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./beer.module.css";

function Header(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>

        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#cart">Cart</Nav.Link>
        </Nav>
      </Navbar>
      <h1 className={styles.taproom}>TapRoom</h1>
    </div>
  );
}

export default Header;
