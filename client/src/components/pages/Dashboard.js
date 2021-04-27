// React imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import DashboardLeftPanel from '../dashboardComponents/DashboardLeftPanel';
import Spinner from '../layoutComponents/Spinner';
import Toolbar from '../layoutComponents/Toolbar';
import ProfileCardGeneral from '../profileComponents/ProfileCardGeneral';
import ProfileCarousel from '../profileComponents/ProfileCarousel';

// Styles and Images
import fakeAd1 from '../../assets/ads/fake-ad-1.jpg';
import fakeAd2 from '../../assets/ads/fake-ad-2.jpg';
import fakeAd3 from '../../assets/ads/fake-ad-3.jpg';
import fakeAd4 from '../../assets/ads/fake-ad-4.jpg';
import fakeAd5 from '../../assets/ads/fake-ad-5.jpg';
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
      <Toolbar toolbarType="profilePageTB" />

      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            <DashboardLeftPanel />
          </Col>
          <Col xs={8} className="midPanel allPanels">
            <Container>
              <Row className="my-3">
                <Col className="profilePanels">
                  {/* {userMe && <p className="m-3">Hello {userMe.username}!</p>} */}
                  {infoMissing !== null && (
                    <>
                      <p className="m-3">
                        Your profile is incomplete. Please add {infoMissing} if
                        you would like to be discovered and asked to collaborate
                        on projects.
                      </p>
                      {/* <Link to="/edit-profile" className="btn btn-info m-3">
                        Edit Profile
                      </Link> */}
                    </>
                  )}
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
          <Container className="ads">
            <Row>
              <Col> 
                example ad              
                <img
                className="d-block w-100"
                src={fakeAd1}
                alt="fake ad 1"
                />
                </Col>
            </Row>
            <Row>
              <Col>
                example ad               
                <img
                className="d-block w-100"
                src={fakeAd4}
                alt="fake ad 4"
                />
                </Col>
            </Row>
            {/* <Row>
              <Col>
                example ad             
                <img
                className="d-block w-100"
                src={fakeAd5}
                alt="fake ad 5"
                />
                </Col>
            </Row> */}
            <Row>
              <Col>
                example ad               
                <img
                className="d-block w-100"
                src={fakeAd3}
                alt="fake ad 3"
                />
                </Col>
            </Row>
            {/* <Row>
              <Col>
                example ad              
                <img
                className="d-block w-100"
                src={fakeAd2}
                alt="fake ad 2"
                />
                </Col>
            </Row> */}
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
