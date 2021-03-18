import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import babyYoda from "../../assets/cover/baby-yoda.jpeg";


const LeftLED = () => {

    return (
        <Container fluid="sm" className="leftLED">
            <Row>
              <Col className="LED-text"><h6>Artist Name</h6>
              <img src={babyYoda} className="babyYoda" style={{ width: "100%" }} alt="Baby Yoda" />
              Instruments played:

              <ListGroup>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>Kloo Horn</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>Pan Flute</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: "transparent" }}>Blissl</ListGroup.Item>
                </ListGroup>

              </Col>
            </Row>
        </Container>
    );

};

export default LeftLED;