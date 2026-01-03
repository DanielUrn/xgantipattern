import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../img/navbrand.webp";
import "../styles/navbar.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="Nav" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="d-lg-none">
          <img 
            src={logo} 
            alt="logo" 
            width={"150px"} 
            height={"50px"}>  
          </img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="" >
          <FontAwesomeIcon icon={faBars} size="xl" className="outline-0 border-0" ></FontAwesomeIcon>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="Rad">
          <Nav className="align-items-center justify-content-around flex-grow-1 gap-lg-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Navbar.Brand href="/" className="d-none d-lg-inline-block">
              <img
                src={logo}
                alt="logo"
                width={"150px"}
                height={"50px"}
              ></img>
            </Navbar.Brand>

            <Nav.Link href="https://blog.ripxg.com">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
