// React imports
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';

// Components
import LandingLeftPanel from '../landingComponents/LandingLeftPanel';

// Styles and Images
import coverImage1 from '../../assets/cover/landing-image-1.jpg';
import coverImage2 from '../../assets/cover/landing-image-2.jpg';
import coverImage3 from '../../assets/cover/landing-image-3.jpg';
import coverImage4 from '../../assets/cover/landing-image-4.jpg';
import fakeAd1 from '../../assets/ads/fake-ad-1.jpg';
import fakeAd2 from '../../assets/ads/fake-ad-2.jpg';
import fakeAd3 from '../../assets/ads/fake-ad-3.jpg';
import fakeAd4 from '../../assets/ads/fake-ad-4.jpg';
import fakeAd5 from '../../assets/ads/fake-ad-5.jpg';

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
              <h2>Welcome to <strong><em>Wizzy</em>Muse!</strong></h2>
              <br></br>
                <h5>WizzyMuse is an online collaborative community. 
                  <br></br>
                  <br></br>
                  We believe that you can't put a price tag on the creative process, which is why our site will always be free to use for people looking to collaborate with others. 
                  <br></br>
                  <br></br>
                Your projects belong to you from the moment of inception. We utilize blockchain technology to ensure you feel confident that when you're ready to take your projects to the next level, everyone will know where your projects originated. Use whatever technology you're used to, and simply drop your tracks into your project page. Your collaborators will be able to drop their own tracks into your project, and drag them into place.
                <br></br>
                <br></br>
                Our space allows you to put your collaboration together without worrying about technological issues. We all have our own ways we like to work, but that shouldn't stop us from putting the pieces together. Our community is about simplifying the process of collaborating remotely.</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage4}
                alt="Second slide"
              />
              <Carousel.Caption className= 'welcomePanel'>
              <h2>Welcome to <strong><em>Wizzy</em>Muse!</strong></h2>
              <br></br>
                <h5>WizzyMuse is an online collaborative community. 
                  <br></br>
                  <br></br>
                  We believe that you can't put a price tag on the creative process, which is why our site will always be free to use for people looking to collaborate with others. 
                  <br></br>
                  <br></br>
                Your projects belong to you from the moment of inception. We utilize blockchain technology to ensure you feel confident that when you're ready to take your projects to the next level, everyone will know where your projects originated. Use whatever technology you're used to, and simply drop your tracks into your project page. Your collaborators will be able to drop their own tracks into your project, and drag them into place.
                <br></br>
                <br></br>
                Our space allows you to put your collaboration together without worrying about technological issues. We all have our own ways we like to work, but that shouldn't stop us from putting the pieces together. Our community is about simplifying the process of collaborating remotely.</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage3}
                alt="Third slide"
              />
              <Carousel.Caption className= 'welcomePanel'>
              <h2>Welcome to <strong><em>Wizzy</em>Muse!</strong></h2>
              <br></br>
                <h5>WizzyMuse is an online collaborative community. 
                  <br></br>
                  <br></br>
                  We believe that you can't put a price tag on the creative process, which is why our site will always be free to use for people looking to collaborate with others. 
                  <br></br>
                  <br></br>
                Your projects belong to you from the moment of inception. We utilize blockchain technology to ensure you feel confident that when you're ready to take your projects to the next level, everyone will know where your projects originated. Use whatever technology you're used to, and simply drop your tracks into your project page. Your collaborators will be able to drop their own tracks into your project, and drag them into place.
                <br></br>
                <br></br>
                Our space allows you to put your collaboration together without worrying about technological issues. We all have our own ways we like to work, but that shouldn't stop us from putting the pieces together. Our community is about simplifying the process of collaborating remotely.</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage2}
                alt="Fourth slide"
              />
              <Carousel.Caption className= 'welcomePanel'>
              <h2>Welcome to <strong><em>Wizzy</em>Muse!</strong></h2>
              <br></br>
                <h5>WizzyMuse is an online collaborative community. 
                  <br></br>
                  <br></br>
                  We believe that you can't put a price tag on the creative process, which is why our site will always be free to use for people looking to collaborate with others. 
                  <br></br>
                  <br></br>
                Your projects belong to you from the moment of inception. We utilize blockchain technology to ensure you feel confident that when you're ready to take your projects to the next level, everyone will know where your projects originated. Use whatever technology you're used to, and simply drop your tracks into your project page. Your collaborators will be able to drop their own tracks into your project, and drag them into place.
                <br></br>
                <br></br>
                Our space allows you to put your collaboration together without worrying about technological issues. We all have our own ways we like to work, but that shouldn't stop us from putting the pieces together. Our community is about simplifying the process of collaborating remotely.</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
