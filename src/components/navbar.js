import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../img/XG White.png";
import "../styles/navbar.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoxArrowUpRight } from "react-bootstrap-icons";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="Nav" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="d-lg-none">
          <img 
            src={logo} 
            alt="logo" 
            width={"80px"} 
            height={"50px"}>  
          </img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="" >
          <FontAwesomeIcon icon={faBars} size="xl" className="outline-0 border-0" ></FontAwesomeIcon>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="align-items-center justify-content-around flex-grow-1 gap-lg-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="bit.ly/xglobalGG">Services</Nav.Link>

            <Navbar.Brand href="/" className="d-none d-lg-inline-block">
              <img
                src={logo}
                alt="logo"
                width={"80px"}
                height={"50px"}
              ></img>
            </Navbar.Brand>

            <Nav.Link href="#link" className="text-muted" disabled>Blog</Nav.Link>
            <Nav.Link href="https://litepaper.xglobal.gg" target="_blank">Litepaper <BoxArrowUpRight className="mb-1"></BoxArrowUpRight> </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
