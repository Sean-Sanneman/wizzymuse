import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';

const Login = ({ login, auth: { isAuthenticated } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/pg/dashboard" />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-1"
          placeholder="* Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-1"
          placeholder="* Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary my-1" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth, // we're pulling all the state that is in the auth reducer
});

export default connect(mapStateToProps, { login })(Login);
// connect takes in two things: (1) any state that we want to map (if none, then 'null'), and (2) an object with any actions we want to use
