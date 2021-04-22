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
              <Carousel.Caption>
              <h3>Welcome to <strong><em>Wizzy</em>Muse!</strong></h3>
                <p>Your online collaborators await!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage4}
                alt="Second slide"
              />
              <Carousel.Caption>
              <h3>Welcome to <strong><em>Wizzy</em>Muse!</strong></h3>
                <p>Your online collaborators await!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage3}
                alt="Third slide"
              />
              <Carousel.Caption>
              <h3>Welcome to <strong><em>Wizzy</em>Muse!</strong></h3>
                <p>Your online collaborators await!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage2}
                alt="Fourth slide"
              />
              <Carousel.Caption>
              <h3>Welcome to <strong><em>Wizzy</em>Muse!</strong></h3>
                <p>Your online collaborators await!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="rightPanel allPanels">
          <Container fluid="sm" className="ads">
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
