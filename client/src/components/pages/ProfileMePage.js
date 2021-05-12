// React imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';

// Components
import Spinner from '../layoutComponents/Spinner';
import Nav from '../layoutComponents/AppNavbar';
import Toolbar from '../layoutComponents/Toolbar';
import DashboardLeftPanel from '../dashboardComponents/DashboardLeftPanel';
import ProfileCardGeneral from '../profileComponents/ProfileCardGeneral';
import ProfileCarousel from '../profileComponents/ProfileCarousel';
import Sponsors from '../layoutComponents/Sponsors';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const ProfileMePage = ({ profiles: { profileMe, loading } }) => {
  return (
    <>
      <Nav />
      <Toolbar toolbarType="profilePageTB" />

      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            <DashboardLeftPanel />
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
            <Sponsors />
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
