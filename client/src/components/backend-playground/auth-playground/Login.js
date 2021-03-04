import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  if (isAuthenticated) {
    console.log('isAuthenticated?', isAuthenticated);
    return <Redirect to="/" />;
  }

  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-1"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small className="form-text text-white">
          This site uses Gravatar so if you want a profile image, use a Gravatar
          email
        </small>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-1"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary my-1" onClick={handleLogin}>
        Register
      </button>
    </form>
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
