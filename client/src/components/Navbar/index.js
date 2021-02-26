import React from 'react';
import logo from "../../assets/cover/wizzymuse-logo.png";
import {Navbar,Nav,Container,Button,Form,FormControl} from 'react-bootstrap';

const AppNavbar = () => {

  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
            <Container fluid className='logo-image d-flex justify-content-center'>
                <img src = {logo} width="50%" height="50%" alt="Logo"></img>
            </Container>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </>
  );
};

export default AppNavbar;