// React imports
import React from 'react';
import { Redirect } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Styles and Images
import coverImage from '../../assets/cover/cover-image-studio2.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const Landing = ({ isAuthenticated }) => {
  // Redirect when logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
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
                <br></br>
                <h5>Please login or register to continue.</h5>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={8} className="midPanel allPanels">
          <img
            src={coverImage}
            className="mainPic"
            style={{ width: '100%' }}
            alt="cover"
          />
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
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
