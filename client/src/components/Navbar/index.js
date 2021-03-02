import React from 'react';
import logo from "../../assets/cover/wizzymuse-logo.png";
import {Navbar,Nav,Container,Button,Form,FormControl} from 'react-bootstrap';

const AppNavbar = () => {

  return (
  <>
  <Navbar className="color-nav" variant="dark" sticky="top">
    <Navbar.Brand href="#home">
            <Container fluid className='logo-image d-flex justify-content-left'>
                <img src = {logo} width="65%" height="65%" alt="Logo"></img>
            </Container>
    </Navbar.Brand>
    <Container fluid className='d-flex justify-content-right'>
    <Nav className="navButtons">
      <Nav.Link href="#dashboard" className='myBtn text-center glow-on-hover' style={{ color: 'black', textDecoration: 'none' }}>Dashboard</Nav.Link>
      <Nav.Link href="#forum" className='myBtn text-center glow-on-hover' style={{ color: 'black', textDecoration: 'none' }}>Forum</Nav.Link>
      <Nav.Link href="#search-artists" className='myBtn text-center glow-on-hover' style={{ color: 'black', textDecoration: 'none' }}>Search Artists</Nav.Link>
      <Nav.Link href="#login-register"className='myBtn text-center glow-on-hover' style={{ color: 'black', textDecoration: 'none' }}>Login/Register</Nav.Link>
    </Nav>
    </Container>
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </>
  );
};

export default AppNavbar;