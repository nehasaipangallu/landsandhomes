import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import {
    faArrowsLeftRight,
    faHeart,
    faRectangleList,
    faPlus

   } from "@fortawesome/free-solid-svg-icons";



function CollapsibleExample() {
  return (
    <div style={{fontSize:"17px"}}>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><img src="./assets/images/logo4.svg"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="City" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><FontAwesomeIcon icon={faArrowsLeftRight} style={{color: "#ec1b26",}} /> Compare</Nav.Link>
            <Nav.Link href="#deets"><FontAwesomeIcon icon={faHeart} style={{color: "#ec1b26",}} /></Nav.Link>
            <Nav.Link href="#deets"><FontAwesomeIcon icon={faRectangleList} style={{color: "#ec1b26",}} /> Shortlist</Nav.Link>
            <Nav.Link href="#deets"><Button className='btn-1'><FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} /> Add Property</Button></Nav.Link>
            <Nav.Link href="#memes">
            <Button className='btn-1'>Log In</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default CollapsibleExample;