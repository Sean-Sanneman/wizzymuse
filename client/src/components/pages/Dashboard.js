// React imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getProfileMe } from '../../actions/profiles';

// Components
import Toolbar from '../layoutComponents/Toolbar';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = ({ auth: { userMe }, profiles: { profileMe, loading } }) => {
  const [infoMissing, setInfoMissing] = useState(null);

  useEffect(() => {
    setInfoMissing(
      loading || profileMe === null
        ? null
        : () => {
            if (profileMe.instruments.length === 0) {
              if (profileMe.genres.length === 0) {
                return 'instruments and music genres';
              } else {
                return 'instruments';
              }
            } else if (profileMe.genres.length === 0) {
              return 'genres';
            } else {
              return null;
            }
          }
    );
  }, [loading]);

  return loading && profileMe === null ? (
    <h1>Loading...</h1>
  ) : (
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
              <Row className="my-3">
                <Col className="profilePanels">
                  {userMe && <p className="m-3">Hello {userMe.username}!</p>}
                  {infoMissing !== null && (
                    <>
                      <p className="m-3">
                        Your profile is incomplete. Please add {infoMissing} if
                        you would like to be discovered and asked to collaborate
                        on projects.
                      </p>
                      <Link to="/edit-profile" className="btn btn-info m-3">
                        Edit Profile
                      </Link>
                    </>
                  )}
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
  auth: PropTypes.object.isRequired,
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profiles: state.profiles,
});

export default connect(mapStateToProps)(Dashboard);
