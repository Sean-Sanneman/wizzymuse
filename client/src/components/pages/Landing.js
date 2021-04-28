// React imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';

// Components
import LandingLeftPanel from '../landingComponents/LandingLeftPanel';
import Sponsors from '../layoutComponents/Sponsors';
import WelText from '../landingComponents/WelText';

// Styles and Images
import coverImage1 from '../../assets/cover/landing-image-1.jpg';
import coverImage2 from '../../assets/cover/landing-image-2.jpg';
import coverImage3 from '../../assets/cover/landing-image-3.jpg';
import coverImage4 from '../../assets/cover/landing-image-4.jpg';

import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Landing = ({ isAuthenticated }) => {
  // Redirect when logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container fluid className="grid">
      <Row className="mainGrid">
        <Col className="leftPanel allPanels">
          <LandingLeftPanel />
        </Col>
        <Col xs={8} className="midPanel allPanels">
          <Carousel fade className="welcomeStory">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage1}
                alt="First slide"
              />
              <Carousel.Caption className= 'welcomePanel'>
              <WelText/>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage4}
                alt="Second slide"
              />
              <Carousel.Caption className= 'welcomePanel'>
              <WelText/>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage3}
                alt="Third slide"
              />
              <Carousel.Caption className= 'welcomePanel'>
              <WelText/>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage2}
                alt="Fourth slide"
              />
              <Carousel.Caption className= 'welcomePanel'>
              <WelText/>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="rightPanel allPanels">
          <Sponsors />
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
