// React imports
import React, { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import { Link } from 'react-router-dom';

// Redux imports
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

// Components
import Login from '../authComponents/Login';
import Portal from '../pages/Portal';

// Styles and Images
import logo from '../../assets/cover/wizzymuse-logo.png';
import { Button, Container, Form, Modal, Navbar, Nav, Dropdown } from 'react-bootstrap';
// import { menuPortalCSS } from 'react-select/src/components/Menu';


const AppNavbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  // modal code
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // portal code
  const [isOpen, setIsOpen] = useState(false);


  // Navbar links for loggedin users (authenticated)
  const authLinks = (
    <Nav className="navButtonsAuth">
      <Nav.Link
        href="/my-profile"
        className="myBtn text-center glow-on-hover"
        style={{ color: 'white', textDecoration: 'none' }}>
        DASHBOARD
      </Nav.Link>

      {/* Projects dropdown */}
      <div className="projectDropdown">
      <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic"
        className="myBtn text-center glow-on-hover"
        style={{ color: 'white', textDecoration: 'none' }}>     
        PROJECTS    
      </Dropdown.Toggle>
      <Dropdown.Menu className="projectMenu">

      <div onClick={() => console.log('clicked')}>
        <Dropdown.Item onClick={() => setIsOpen(true)} className="projectItem">
          New Project

        <Portal open={isOpen} onClose={() => setIsOpen(false)}>
          This is a Portal
        </Portal>
        </Dropdown.Item>
        </div>
        
        <Dropdown.Item href="#/action-2" className="projectItem">
          Open Projects
        </Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      </div>
      {/* Projects dropdown end */}

      <Nav.Link
        href="/forum"
        className="myBtn text-center glow-on-hover"
        style={{ color: 'white', textDecoration: 'none' }}>
        FORUM
      </Nav.Link>
      <Nav.Link
        href="/search-profiles"
        className="myBtn text-center glow-on-hover"
        style={{ color: 'white', textDecoration: 'none' }}
      >
        SEARCH ARTISTS
      </Nav.Link>
      <Nav.Link
        href="/"
        className="myBtn text-center glow-on-hover"
        style={{ color: 'white', textDecoration: 'none' }}
        onClick={logout}>
        LOGOUT
      </Nav.Link>
    </Nav>
  );

  // Navbar links for guest users (unauthenticated)
  const guestLinks = (
    <Nav className="navButtons">
      <Nav.Link
        href="/forum"
        className="myBtn text-center glow-on-hover"
        style={{ color: 'white', textDecoration: 'none' }}>
        FORUM
      </Nav.Link>
      <Nav.Link
        href="/search-profiles"
        className="myBtn text-center glow-on-hover"
        style={{ color: 'white', textDecoration: 'none' }}>
        SEARCH ARTISTS
      </Nav.Link>
      <Nav.Link
        onClick={handleShow}
        href="#login-register"
        className="myBtn text-center glow-on-hover"
        style={{ color: 'white', textDecoration: 'none' }}>
        LOGIN/REGISTER
      </Nav.Link>
    </Nav>
  );

  return (
    <>
      <Navbar className="main-navbar" variant="dark" sticky="top">
        <Navbar.Brand href="/">
          <Container fluid className="logo-image d-flex justify-content-left">
            <img src={logo} width="60%" height="60%" alt="Logo"></img>
          </Container>
        </Navbar.Brand>
        <Container fluid className="d-flex justify-content-right">
          {!loading && isAuthenticated ? authLinks : guestLinks}
          {/* modal code */}
          <Modal
            className="loginModal allModals"
            show={show}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className="logHeader">
                Login To Get Your Muse On!
              </Modal.Title>
            </Modal.Header>

            <Form className="intModal">
              <Login closeModal={handleClose} />
              <Link to="/signup">
                <Button
                  variant="dark"
                  onClick={handleClose}
                  className="m-3"
                  type="submit"
                >
                  NEW USER
                </Button>
              </Link>
            </Form>

            <Modal.Footer>
              <a href="#password-reset">Forgot your password?</a>
            </Modal.Footer>
          </Modal>
          {/* modal code ends */}
        </Container>

        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">SEARCH</Button>
        </Form> */}
      </Navbar>
    </>
  );
};

AppNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth, // we're pulling all the state that is in the auth reducer
});

export default connect(mapStateToProps, { logout })(AppNavbar);
// connect takes in two things: (1) any state that we want to map (if none, then 'null'), and (2) an object with any actions we want to use
