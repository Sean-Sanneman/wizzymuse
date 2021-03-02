import React from 'react';
import coverImage from "../../assets/cover/cover-image-studio3.jpg";
import {Container,Row,Col} from 'react-bootstrap';

function Main() {
  return (
    <>
      <Container fluid className="grid">
      <Row className="mainGrid">
        <Col className="leftPanel">1 of 3</Col>
        <Col xs={8} className="midPanel">2 of 3 (wider)
        <img src={coverImage} className="" style={{ width: "100%" }} alt="cover" />
        </Col>
        <Col className="rightPanel">3 of 3</Col>
      </Row>
      </Container>    
      </>
  );
}

export default Main;