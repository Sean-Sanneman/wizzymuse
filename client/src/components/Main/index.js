import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import coverImage from "../../assets/cover/cover-image-studio2.jpg";
import {Container,Row,Col,Button} from 'react-bootstrap';
import babyYoda from "../../assets/cover/baby-yoda.jpeg";

function Main() {
  return (
    <>
        <Container fluid className="d-flex justify-content-center toolbar allPanels">
        <Row style={{ height: "3em" }} className="align-content-center">
            <Col className="toolBtns">
            <Button variant="outline-primary btn mr-3">NEW PROJECT</Button>{' '}
            <Button variant="outline-success btn mr-3">OPEN PROJECT</Button>{' '}
            <Button variant="outline-warning btn mr-3">BOUNCEDOWN(?)</Button>{' '}
            <Button variant="outline-info btn mr-3">TOOLS(?)</Button>{' '}
            </Col>
        </Row>
      </Container>
      
      <Container fluid className="grid">
      <Row className="mainGrid">
        <Col className="leftPanel allPanels">1 of 3

          <Container fluid="sm" className="leftLED">
            <Row>
              <Col className="LED-text"><h6>Artist Name</h6>
              <img src={babyYoda} className="babyYoda" style={{ width: "100%" }} alt="Baby Yoda" />
              Instruments played: Guitar, Pan Flute
              </Col>
            </Row>
          </Container> 
        </Col>
        <Col xs={8} className="midPanel allPanels">2 of 3 (wider)
        <img src={coverImage} className="mainPic" style={{ width: "100%" }} alt="cover" />
        </Col>
        <Col className="rightPanel allPanels">3 of 3</Col>
      </Row>
      </Container>    
      </>
  );
};

export default Main;