// React imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Stamp from "../../assets/images/Wizzymuse-stamp.png";
// import WizzyCoin from "../../assets/images/wizzycoin.png";

// Components
import Login from '../authComponents/Login';

import { Container, Row, Col, Nav, Modal, Form, Button } from 'react-bootstrap';



const LandingLeftPanel = () => {

    // modal code
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Container fluid className="landingLeftPanel">
            <Row>
              <Col className="welcomeText">
                <h2>Welcome to <strong><em>Wizzy</em>Muse!</strong></h2>
                <br></br>
                <h4><b>Your online collaborators await!</b></h4>
                <br></br>
                <Nav.Link
                    onClick={handleShow}
                    href="#login-register"
                    style={{ color: 'black', textDecoration: 'none' }}
                >
                <h5><b>Please login or register to continue.</b></h5>
                </Nav.Link>
              </Col>
            </Row>
            <Row style={{ textAlign: "center", marginTop: "24%" }}>
                <Col>
                <Container fluid className="logo-image d-flex justify-content-center" style={{ padding: "0" }}>
                    <img src={Stamp} width="140px" height="140px" alt="Stamp"></img>
                </Container>
                </Col>
            </Row>

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
        </>
    );
};

export default LandingLeftPanel;