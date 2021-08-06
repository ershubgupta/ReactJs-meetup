import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink to="/" className="navbar-brand">
              MeetUp
            </NavLink>
          <Nav className="ml-auto">
            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>
            <NavLink to="/reports" className="nav-link">
              Reports
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
