import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../img/navbrand.png'
const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-primary" sticky='top'>
      <Container>
      <Navbar.Brand href="#home" className='d-lg-none'> <img src={logo} alt='logo' width={'150px'} height={'50px'}></img> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className='align-items-center justify-content-between flex-grow-1'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>

        <Navbar.Brand href="#home" className='d-none d-lg-inline-block'> <img src={logo} alt='logo' width={'150px'} height={'50px'}></img> </Navbar.Brand>

            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
