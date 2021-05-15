// React imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';

// Components
import AppNavbar from '../layoutComponents/AppNavbar';
import Footer from '../layoutComponents/Footer';
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
    <>
      <AppNavbar />
      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            <LandingLeftPanel />
          </Col>
          <Col xs={8} className="midPanel allPanels">
            <Carousel fade className="welcomeStory">
              <Carousel.Item interval={7000}>
                <img
                  className="d-block w-100"
                  src={coverImage1}
                  alt="First slide"
                />
                <Carousel.Caption className="welcomePanel">
                  <h1>WizzyMuse is an online collaborative community.</h1>
                  <br></br>
                  <h4>
                    We believe that you can't put a price tag on the creative
                    process, which is why our site will always be free to use
                    for people looking to collaborate with others.
                  </h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={7000}>
                <img
                  className="d-block w-100"
                  src={coverImage4}
                  alt="Second slide"
                />
                <Carousel.Caption className="welcomePanel">
                  <h1>
                    Your projects belong to you from the moment of inception.
                  </h1>
                  <br></br>
                  <h4>
                    We utilize blockchain technology to ensure you feel
                    confident that when you're ready to take your projects to
                    the next level, everyone will know where your projects
                    originated.
                  </h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={7000}>
                <img
                  className="d-block w-100"
                  src={coverImage3}
                  alt="Third slide"
                />
                <Carousel.Caption className="welcomePanel">
                  <h1>
                    Use whatever technology you're used to using for recording
                    and creating audio.
                  </h1>
                  <br></br>
                  <h4>
                    Then simply import and drop your audio files into your
                    project. Your collaborators will be able to drop their own
                    tracks into your project as well, and drag them into place.
                  </h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={7000}>
                <img
                  className="d-block w-100"
                  src={coverImage2}
                  alt="Fourth slide"
                />
                <Carousel.Caption className="welcomePanel">
                  <h1>
                    Our space allows you to put your projects together without
                    worrying about technological headaches.
                  </h1>
                  <br></br>
                  <h4>
                    We all have our own ways we like to work, but that shouldn't
                    stop us from putting the pieces together. Our community is
                    about simplifying the process of collaborating remotely.
                  </h4>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="rightPanel allPanels">
            <Sponsors />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
