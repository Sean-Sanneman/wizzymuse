// React imports
import React from 'react';
import { Redirect } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage4}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block w-100"
                src={coverImage1}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

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
