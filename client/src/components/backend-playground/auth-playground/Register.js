import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../../actions/auth';

const Register = ({ register, auth: { isAuthenticated } }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    register({ username, email, password });
  };

  // Redirect when registered
  if (isAuthenticated) {
    return <Redirect to="/pg/dashboard" />;
  }

  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-1"
          placeholder="* Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-1"
          placeholder="* Email"
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
          placeholder="* Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary my-1" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth, // we're pulling all the state that is in the auth reducer
});

export default connect(mapStateToProps, { register })(Register);
// connect takes in two things: (1) any state that we want to map (if none, then 'null'), and (2) an object with any actions we want to use
