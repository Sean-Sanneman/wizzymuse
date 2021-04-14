// React imports
import React, { useEffect } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Spinner from '../layoutComponents/Spinner';
import Toolbar from '../layoutComponents/Toolbar';
import ProfileCardGeneral from '../profileComponents/ProfileCardGeneral';
import ProfileCarousel from '../profileComponents/ProfileCarousel';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const ProfileMePage = ({ profiles: { profileMe, loading } }) => {
  return (
    <>
      <Toolbar toolbarType="profilePageTB" />

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
                        {loading && profileMe === null ? (
                          <Spinner />
                        ) : (
                          <ProfileCardGeneral profile={profileMe} />
                        )}
                      </Col>
                    </Row>
                  </Container>
                </Col>
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
  );
};

ProfileMePage.propTypes = {
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps)(ProfileMePage);
