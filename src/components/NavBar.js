import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar(props) {
  const user = props.user;

  return (
    <Navbar data-testid="NavBar" bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">CodePerMinute</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Language">
              <NavDropdown.Item href="/Cpp">C++</NavDropdown.Item>
              <NavDropdown.Item href="/Java">Java</NavDropdown.Item>
              <NavDropdown.Item href="/Python">Python</NavDropdown.Item>
            </NavDropdown>
            {user && <Nav.Link href="/profile">Profile</Nav.Link>}
          </Nav>
          <Nav>
            {!user ? (
              <div id="login-button" />
            ) : (
              <NavDropdown
                title={
                  <span>
                    Hello, {user.fullName}{" "}
                    <img
                      src={user.imageUrl}
                      alt="profile"
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={user.signOut}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}