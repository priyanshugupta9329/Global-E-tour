import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
// , NavDropdown, Form, FormControl, Button,

export default function NavbarComp() {
  return (
    <>
    
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Global E-Tour</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href="/tour">Tours</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
