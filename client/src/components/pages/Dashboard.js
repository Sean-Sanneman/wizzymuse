// React imports
import React from 'react';

// Components
import Toolbar from '../layoutComponents/Toolbar';

// Styles and Images
import coverImage from '../../assets/cover/cover-image-studio3.jpg';
import babyYoda from '../../assets/cover/baby-yoda.jpeg';
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
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
            <Container>
            <Row>
                <Col className="profilePanels">
                
                <Container fluid>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem', color:'#000000', backgroundColor: "transparent", border: "none" }}>
                            <img src={babyYoda} className="babyYoda" style={{ width: "100%" }} alt="Baby Yoda" />
                            <Card.Body>
                                <Card.Title>Baby Yoda</Card.Title>
                                    <Card.Text>
                                    Artist's bio, something about themselves
                                    </Card.Text>
                                    <Button variant="success">Edit Profile</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                </Col>

                <Col className="profilePanels">
                <h4 style={{ padding: "3%" }}>Instruments</h4>

                <ListGroup>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>Kloo Horn</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>Pan Flute</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>Blissl</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>***</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>***</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>***</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>***</ListGroup.Item>
                </ListGroup>

                </Col>

                <Col className="profilePanels">
                <h4 style={{ padding: "3%" }}>Genres</h4>

                <ListGroup>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>Shownar Lullaby</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>Sparkle-bop</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>Droid music</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>Herglic rage-metal</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>***</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>***</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent", borderLeft: "none", borderRight: "none" }}>***</ListGroup.Item>
                </ListGroup>

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

export default Dashboard;
