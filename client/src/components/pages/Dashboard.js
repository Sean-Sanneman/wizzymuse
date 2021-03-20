// React imports
import React from 'react';

// Components
import Toolbar from '../layoutComponents/Toolbar';

// Styles and Images
import coverImage from '../../assets/cover/cover-image-studio3.jpg';
import babyYoda from '../../assets/cover/baby-yoda.jpeg';
import { Container, Row, Col } from 'react-bootstrap';

const Landing = () => {
  return (
    <>
      <Toolbar />

      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            1 of 3
            <Container fluid="sm" className="leftLED">
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
            </Container>
          </Col>
          <Col xs={8} className="midPanel allPanels">
            2 of 3 (wider)
            <img
              src={coverImage}
              className="mainPic"
              style={{ width: '100%' }}
              alt="cover"
            />
          </Col>
          <Col className="rightPanel allPanels">3 of 3</Col>
        </Row>
      </Container>
    </>
  );
};

export default Landing;
