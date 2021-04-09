// React imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import { getProfileMe } from '../../actions/profiles';

// Components
import Toolbar from '../layoutComponents/Toolbar';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = ({ loadUser, getProfileMe, userMe, profileMe }) => {
  const [infoMissing, setInfoMissing] = useState(null);
  useEffect(() => {
    loadUser();
    getProfileMe();
    if (!Object.keys(profileMe).includes('myInstruments')) {
      if (!Object.keys(profileMe).includes('myGenres')) {
        setInfoMissing('instruments and music genres');
      } else {
        setInfoMissing('instruments');
      }
    } else if (!Object.keys(profileMe).includes('myGenres')) {
      setInfoMissing('genres');
    }
  }, [loadUser, getProfileMe]);

  return (
    <>
      <Toolbar toolbarType="dashboardTB" />
      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            <Container fluid="sm">
              <Row>
                <Col className="welcomeText">
                  <h4>Welcome to</h4>
                  <h2>WizzyMuse</h2>
                  <br></br>
                  <h4>Your online collaborators await!</h4>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={8} className="midPanel allPanels">
            <Container>
              <Row>
                <Col className="profilePanels">
                  <Container fluid>
                    <Row className="welcomeText">
                      {userMe && <p>Hello {userMe.userInfo.username}!</p>}
                      {infoMissing !== null && (
                        <>
                          <p>
                            Your profile is incomplete. Please add {infoMissing}{' '}
                            if you would like to be discovered and asked to
                            collaborate on projects.
                          </p>
                          <Link
                            to="/edit-profile"
                            className="btn btn-info my-1"
                          >
                            Edit Profile
                          </Link>
                        </>
                      )}
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col className="rightPanel allPanels">
            <Container fluid="sm">
              <Row>
                <Col className="LED-text">
                  <p>Advertisement 1</p>
                  <p>Advertisement 2</p>
                  <p>Advertisement 3</p>
                  <p>...</p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getProfileMe: PropTypes.func.isRequired,
  userMe: PropTypes.object.isRequired,
  profileMe: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userMe: state.auth.userMe,
  profileMe: state.profiles.profile.profileMe,
});

export default connect(mapStateToProps, { loadUser, getProfileMe })(Dashboard);
