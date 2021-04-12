// React imports
import React, { useEffect } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileMe } from '../../actions/profiles';

// Components
import Spinner from '../layoutComponents/Spinner';
import Toolbar from '../layoutComponents/Toolbar';
import ProfileCardGeneral from '../profileComponents/ProfileCardGeneral';
import ProfileInstruments from '../profileComponents/ProfileInstruments';
import ProfileGenres from '../profileComponents/ProfileGenres';
import ProfileCarousel from '../profileComponents/ProfileCarousel';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const ProfileMePage = ({ getProfileMe, profiles: { profileMe, loading } }) => {
  useEffect(() => {
    getProfileMe();
  }, [getProfileMe, loading]);

  return (
    <>
      <Toolbar toolbarType="profilePageTB" />
      {profileMe === null || loading ? (
        <Spinner />
      ) : (
        <>
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
                        <Row>
                          <Col>
                            <ProfileCardGeneral />
                          </Col>
                        </Row>
                      </Container>
                    </Col>

                    {/* <ProfileInstruments /> */}

                    {/* <ProfileGenres /> */}
                  </Row>
                </Container>
                <ProfileCarousel />
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
      )}
    </>
  );
};

ProfileMePage.propTypes = {
  getProfileMe: PropTypes.func.isRequired,
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps, { getProfileMe })(ProfileMePage);
