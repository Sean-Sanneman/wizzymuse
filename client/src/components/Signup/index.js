import React, { useState, useEffect } from 'react';
import coverImage from "../../assets/cover/cover-image-studio3.jpg";
import {Container,Row,Col} from 'react-bootstrap';

const Signup = () => {

    return (
        <>
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
                <label>City</label>
                <input type="text" className="form-control" placeholder="Enter city" />
            </div>

            <div className="form-group">
                <label>State</label>
                <input type="text" className="form-control" placeholder="Enter your state/region" />
            </div>

            <div className="form-group">
                <label>Country</label>
                <input type="text" className="form-control" placeholder="Enter country" />
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Let's get started!</button>
            <p className="forgot-password text-right">Already registered <a href="#">sign in?</a></p>
        </form>

        </>
    );
};

export default Signup;