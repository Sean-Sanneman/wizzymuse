import React, { useEffect, useState } from 'react';
import logo from '../../assets/cover/wizzymuse-logo.png';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
  Modal,
} from 'react-bootstrap';

const AppNavbar = () => {
  // modal code
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // modal code

  return (
    <>
      <Navbar className="color-nav" variant="dark" sticky="top">
        <Navbar.Brand href="/">
          <Container fluid className="logo-image d-flex justify-content-left">
            <img src={logo} width="75%" height="75%" alt="Logo"></img>
          </Container>
        </Navbar.Brand>
        <Container fluid className="d-flex justify-content-right">
          <Nav className="navButtons">
            <Nav.Link
              href="/artist"
              className="myBtn text-center glow-on-hover"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              ARTIST
            </Nav.Link>
            <Nav.Link
              href="#forum"
              className="myBtn text-center glow-on-hover"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              FORUM
            </Nav.Link>
            <Nav.Link
              href="#search-artists"
              className="myBtn text-center glow-on-hover"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              SEARCH ARTISTS
            </Nav.Link>
            <Nav.Link
              onClick={handleShow}
              href="#login-register"
              className="myBtn text-center glow-on-hover"
              style={{ color: 'black', textDecoration: 'none' }}
            >
              LOGIN/REGISTER
            </Nav.Link>

            {/* modal code */}
            <Modal
              className="loginModal allModals"
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title className="logHeader">Login To Get Your Muse On!</Modal.Title>
              </Modal.Header>

              {/* Form inputs */}
              <Form className="intModal">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Username or email" />
                  <Form.Text>
                    We will never share your email address with anyone.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="dark" className="m-0" type="submit">
                  SIGN IN
                </Button>
                <Link to="/signup">
                  <Button variant="dark" onClick={handleClose} className="m-3" type="submit">
                    NEW USER
                  </Button>
                </Link>
              </Form>
              {/* Form inputs end */}

              <Modal.Footer>
                <a href="#password-reset">Forgot your password?</a>
              </Modal.Footer>
            </Modal>
            {/* modal code ends */}
          </Nav>
        </Container>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">SEARCH</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default AppNavbar;
