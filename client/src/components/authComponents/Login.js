import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// Redux imports
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

// Styles and Images
import { Button, Form } from 'react-bootstrap';

const Login = ({ login, isAuthenticated, closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
    closeModal();
  };

  return (
    <>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text>
          We will never share your email address with anyone.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button
        variant="dark"
        className="m-0"
        type="submit"
        onClick={handleLogin}
      >
        SIGN IN
      </Button>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
// connect takes in two things: (1) any state that we want to map (if none, then 'null'), and (2) an object with any actions we want to use
