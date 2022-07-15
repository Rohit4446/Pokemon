import React from "raect";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink to="pokemon">Pokemon</NavLink>
          <NavLink to="review">Reviews</NavLink>
          <NavLink to="accordion">Accordion</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
