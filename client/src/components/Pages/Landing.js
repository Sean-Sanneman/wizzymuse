// React imports
import React from 'react';
// Styles and Images
import coverImage from '../../assets/cover/cover-image-studio2.jpg';
import { Container, Row, Col } from 'react-bootstrap';
const Landing = () => {
  return (
    <Container fluid className="grid">
      <Row className="mainGrid">
        <Col className="leftPanel allPanels">
          <Container fluid="sm">
            <Row>
              <Col className="LED-text">
                <p>Some content can go here to entice visitors to sign up.</p>
                <p>
                  Alternatively, we do not display this left side panel on the
                  landing page.
                </p>
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
export default Landing;