// React imports
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import { getProfileMe } from '../../actions/profiles';

// Components
import Toolbar from '../layoutComponents/Toolbar';
// Styles and Images
import coverImage from '../../assets/cover/cover-image-studio3.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = ({
  loadUser,
  getProfileMe,
  userMe,
  profiles: { loading, profile },
}) => {
  useEffect(() => {
    loadUser();
    getProfileMe();
  }, [loadUser, getProfileMe]);

  return (
    <>
      <Toolbar toolbarType="dashboardTB" />
      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            1 of 3
            <Container fluid="sm" className="leftLED">
              <Row></Row>
            </Container>
          </Col>
          <Col xs={8} className="midPanel allPanels">
            2 of 3 (wider)
            <Container>
              <Row>
                <Col className="profilePanels">
                  <Container fluid>
                    <Row></Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col className="rightPanel allPanels">3 of 3</Col>
        </Row>
      </Container>
    </>
  );
};
Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getProfileMe: PropTypes.func.isRequired,
  userMe: PropTypes.object.isRequired,
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userMe: state.auth.userMe,
  profiles: state.profiles,
});

export default connect(mapStateToProps, { loadUser, getProfileMe })(Dashboard);
