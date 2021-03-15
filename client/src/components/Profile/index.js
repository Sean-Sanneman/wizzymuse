import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import babyYoda from "../../assets/cover/baby-yoda.jpeg";


function Profile() {
    return (
    <>
        <Container>
            <Row>
                <Col className="profilePanels">1 of 3
                
                <Container fluid>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem', color:'#000000' }}>
                            <img src={babyYoda} className="babyYoda" style={{ width: "100%" }} alt="Baby Yoda" />
                            <Card.Body>
                                <Card.Title>Baby Yoda</Card.Title>
                                    <Card.Text>
                                    Artist's bio, something about themselves
                                    </Card.Text>
                                    <Button variant="primary">Edit Profile</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                </Col>

                <Col className="profilePanels">
                    2 of 3
                <p>Instruments</p>
                </Col>

                <Col className="profilePanels">
                    3 of 3
                <p>Genres</p>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col>
                Less-than arrow
                &#60;
                </Col>
                <Col xs={8}>

                    <Container fluid="md" className="myPeople" style={{ marginTop: '24px' }}>
                        <Row>
                            <Col>
                                1 of 1
                                <p>My Collaborators</p>
                            </Col>
                        </Row>
                    </Container>
                    
                </Col>
                <Col>
                More-than arrow
                </Col>
            </Row>
        </Container>

        

    </>
    );
};

export default Profile;