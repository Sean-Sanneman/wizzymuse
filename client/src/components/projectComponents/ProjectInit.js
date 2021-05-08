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

const ProjectInit = ({ register, isAuthenticated }) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [tempo, setTempo] = useState('');
  const [key, setKey] = useState('');
  const [timeSig, setTimeSig] = useState('');
  const [artists, setArtists] = useState('');
  const [description, setDescription] = useState('');

  // Redirect when registered
//   if (isAuthenticated) {
//     return <Redirect to="/dashboard" />;
// }

const openNewProjectWindow = () => {
  window.open('/project', 'project-workspace');
};

  const handleRegister = async (e) => {
    e.preventDefault();
    register({
      projectTitle,
      genre,
      tempo,
      key,
      timeSig,
      artists,
      description,
    });
  };


  


  return (

    <>
      <Container fluid className="signupGrid">
        <Row>
          <Col sm={5} style={{ textAlign: 'center' }} className="">
            <div className="welcome">

              <Container
                fluid
                className="logo-image d-flex justify-content-center"
              >
                <img src={Stamp} width="75%" height="75%" alt="Stamp"></img>
              </Container>

              <br></br>

              <h3>
                Enter your project information on the right and let's get started!
              </h3>
            </div>
          </Col>

          <Col sm={7} className="signup">
            <form>
              <h3>Project Details</h3>

              <div className="form-group">
                <label>Project Title/Song Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Project Title/Song Name"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Genre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter project genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Tempo/BPM</label>
                  <input
                    type="text"
                    className="form-control localeField"
                    placeholder="Tempo/BPM"
                    value={tempo}
                    onChange={(e) => setTempo(e.target.value)}
                  />
                </div>

                <div className="form-group">
                <label>Key / Time Signature (optional)</label>
                <div className="d-flex location">
                  <input
                    type="text"
                    className="form-control localeField"
                    placeholder="Key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control localeField"
                    placeholder="Time Signature"
                    value={timeSig}
                    onChange={(e) => setTimeSig(e.target.value)}
                  />
                </div>
                </div>

                <div className="form-group">
                <label>Artists</label>
                  <input
                    type="text"
                    className="form-control localeField"
                    placeholder="Artists"
                    value={artists}
                    onChange={(e) => setArtists(e.target.value)}
                  />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <br></br>

              <Nav.Link
                href="/dashboard"
                type="submit"
                className="btn btn-primary btn-block p-2"
                style={{ width: '20%' }}
                onClick={openNewProjectWindow}>
                Press Me!
              </Nav.Link>

              <p className="forgot-password text-right">
                Have an existing project? <a href="#">Open Here</a>
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

ProjectInit.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(ProjectInit);
// connect takes in two things: (1) any state that we want to map (if none, then 'null'), and (2) an object with any actions we want to use
