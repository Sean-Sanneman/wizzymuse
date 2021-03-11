import React, { useState, useEffect } from 'react';
import Stamp from "../../assets/images/Wizzymuse-stamp.png";
import {Container,Row,Col,Form, Nav} from 'react-bootstrap';

const Signup = () => {

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
            <p className="forgot-password text-right">Already registered <a href="/">sign in?</a></p>
        </form>
                </Col>
            </Row>
        </Container>

        </>
    );
};

export default Signup;