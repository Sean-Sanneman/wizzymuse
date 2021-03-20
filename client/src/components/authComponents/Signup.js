// React imports
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// Redux imports
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';

// Styles and Images
import Stamp from '../../assets/images/Wizzymuse-stamp.png';
import { Container, Row, Col, Form, Nav } from 'react-bootstrap';

const Signup = ({ register, auth: { isAuthenticated } }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    register({
      firstName,
      lastName,
      email,
      city,
      state,
      country,
      username,
      password,
    });
  };

  // Redirect when registered
  if (isAuthenticated) {
    return <Redirect to="/pg/dashboard" />;
  }

  return (
    <>
      <Container fluid className="signupGrid">
        <Row>
          <Col sm={5} style={{ textAlign: 'center' }} className="">
            <div className="welcome">
              <h2>Welcome New Artist!</h2>

              <Container
                fluid
                className="logo-image d-flex justify-content-center"
              >
                <img src={Stamp} width="75%" height="75%" alt="Stamp"></img>
              </Container>

              <h3>Your online collaborators are waiting for you!</h3>
              <h5>
                Enter your information on the right and let's make some noise!
              </h5>
            </div>
          </Col>

          <Col sm={7} className="signup">
            <form>
              <h3>Sign Up</h3>

              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Text>
                  We will never share your email address with anyone.
                </Form.Text>
              </div>

              <div className="form-group">
                <label>Location</label>
                <div className="d-flex location">
                  <input
                    type="text"
                    className="form-control localeField"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control localeField"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control localeField"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br></br>

              <Nav.Link
                href="/"
                type="submit"
                href="/"
                className="btn btn-primary btn-block p-2"
                style={{ width: '20%' }}
                onClick={handleRegister}
              >
                Let's get started!
              </Nav.Link>
              <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Signup.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth, // we're pulling all the state that is in the auth reducer
});

export default connect(mapStateToProps, { register })(Signup);
// connect takes in two things: (1) any state that we want to map (if none, then 'null'), and (2) an object with any actions we want to use
