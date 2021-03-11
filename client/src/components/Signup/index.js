import React, { useState, useEffect } from 'react';
import Stamp from "../../assets/images/Wizzymuse-stamp.png";
import {Container,Row,Col,Form,Nav,Modal,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {

    // modal code
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // modal code

    return (
        <>
        <Container fluid className="signupGrid">
            <Row>
                <Col sm={5} style={{ textAlign: "center" }} className="">
                <div className="welcome">
                <h2>Welcome New Artist!</h2>

                <Container fluid className="logo-image d-flex justify-content-center">
                    <img src={Stamp} width="75%" height="75%" alt="Stamp"></img>
                </Container>

                <h3>Your online collaborators are waiting for you!</h3>
                <h5>Enter your information on the right and let's make some noise!</h5>
                </div>
                </Col>

                <Col sm={7} className="signup">
                <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
                <Form.Text>
                    We will never share your email address with anyone.
                </Form.Text>
            </div>

            <div className="form-group">
                <label>Location</label>
                <div className="d-flex location">
                <input type="text" className="form-control localeField" placeholder="City" />
                <input type="text" className="form-control localeField" placeholder="State" />
                <input type="text" className="form-control localeField" placeholder="Country" />
                </div>
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <br></br>
            
            <Nav.Link href="/artist" type="submit" className="btn btn-primary btn-block p-2" style={{ width: "20%" }}>Let's get started!</Nav.Link>

            <p className="forgot-password text-right">Already registered?
            <Nav.Link onClick={handleShow}>Sign In</Nav.Link>
            </p>

            {/* modal code */}
            <Modal
              className="loginModal allModals"
              show={show}
              onHide={handleClose}>
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

        </form>
                </Col>
            </Row>
        </Container>

        </>
    );
};

export default Signup;