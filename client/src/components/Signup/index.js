import React, { useState, useEffect } from 'react';
import coverImage from "../../assets/cover/cover-image-studio3.jpg";
import {Container,Row,Col} from 'react-bootstrap';

const Signup = () => {

    return (
        <>
        <Col xs={6} className="signup">
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

            <button type="submit" className="btn btn-primary btn-block p-3" style={{ width: "20%" }}>Let's get started!</button>
            <p className="forgot-password text-right">Already registered <a href="#">sign in?</a></p>
        </form>
        </Col>
        

        </>
    );
};

export default Signup;