import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel, ListGroup } from 'react-bootstrap';
import babyYoda from "../../assets/cover/baby-yoda.jpeg";
import avatar1 from "../../assets/images/stock-avatar-1.jpeg";
import avatar2 from "../../assets/images/stock-avatar-2.jpeg";
import avatar3 from "../../assets/images/stock-avatar-3.jpeg";
import avatar4 from "../../assets/images/stock-avatar-4.png";



function Profile() {

    return (
    <>
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
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>Kloo Horn</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>Pan Flute</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>Blissl</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>***</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>***</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>***</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>***</ListGroup.Item>
                </ListGroup>

                </Col>

                <Col className="profilePanels">
                <h4 style={{ padding: "3%" }}>Genres</h4>

                <ListGroup>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>Shownar Lullaby</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>Sparkle-bop</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>Droid music</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>Herglic rage-metal</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>***</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>***</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>***</ListGroup.Item>
                </ListGroup>

                </Col>
            </Row>
        </Container>


<h3 style={{ margin: "15px", color: "seashell", textAlign: "center" }}>My Artists Network</h3>

<Carousel className="friendsCarousel">
  <Carousel.Item>
    <img
      className="d-block w-100" 
      src={avatar1} className="" style={{ width: "18%", padding: "2%" }} alt="Stock Avatar 1"/>
    <Carousel.Caption>
      <h4>Avatar 1</h4>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={avatar2} className="" style={{ width: "18%", padding: "2%" }} alt="Stock Avatar 2"/>
    <Carousel.Caption>
      <h4>Avatar 2</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={avatar3} className="" style={{ width: "18%", padding: "2%" }} alt="Stock Avatar 3"/>
    <Carousel.Caption>
      <h4>Avatar 3</h4>
      <p>Praesent commodo cursus magna, vel scelerisque.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={avatar4} className="" style={{ width: "18%", padding: "2%" }} alt="Stock Avatar 4"/>
    <Carousel.Caption>
      <h4>Avatar 4</h4>
      <p>Praesent commodo cursus magna, vel scelerisque.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </>
    );
};

export default Profile;