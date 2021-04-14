// React imports
import React, { useEffect } from 'react';
// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById, getProfileMe } from '../../actions/profiles';
// Components
import Toolbar from '../layoutComponents/Toolbar';
import Spinner from '../layoutComponents/Spinner';
import ProfileCardGeneral from '../profileComponents/ProfileCardGeneral';
import ProfileInstruments from '../profileComponents/ProfileInstruments';
import ProfileGenres from '../profileComponents/ProfileGenres';
import ProfileCarousel from '../profileComponents/ProfileCarousel';
// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';
const ProfilePage = ({
  match,
  getProfileById,
  getProfileMe,
  profiles: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    if (match.params.id) {
      getProfileById(match.params.id); // match the id in the url
    } else {
      getProfileMe();
    }
  }, [match.params.id, getProfileById, getProfileMe]);

  return (
    <>
      <Toolbar toolbarType="profilePageTB" />
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <>
          <Container fluid className="grid">
            <Row className="mainGrid">
              <Col className="leftPanel allPanels">
                {/* <Container fluid="sm" className="leftLED">
                  <Row>
                    <Col className="LED-text">
                      <h6>Artist Name</h6>
                      <img
                        src={babyYoda}
                        className="babyYoda"
                        style={{ width: '100%' }}
                        alt="Baby Yoda"
                      />
                      Instruments played: Guitar, Pan Flute
                    </Col>
                  </Row>
                </Container> */}
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
                    <Col className="profilePanels">
                      <ProfileInstruments />
                    </Col>
                    <Col className="profilePanels">
                      <ProfileGenres />
                    </Col>
                  </Row>
                </Container>
                <ProfileCarousel />
              </Col>
              <Col className="rightPanel allPanels"></Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
ProfilePage.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  getProfileMe: PropTypes.func.isRequired,
  profiles: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profiles: state.profiles,
  auth: state.auth,
});
export default connect(mapStateToProps, { getProfileById, getProfileMe })(
  ProfilePage
);