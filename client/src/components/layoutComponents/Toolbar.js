// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Styles and Images
import { Container, Row, Col, Button } from 'react-bootstrap';

const Toolbar = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center toolbar allPanels"
      >
        <Row style={{ height: '3em' }} className="align-content-center">
          <Col className="toolBtns">
            <Link to="/profile">
              <Button variant="outline-success btn mr-3">MY PROFILE</Button>
            </Link>
            <Link to="/project">
              <Button variant="outline-primary btn mr-3">NEW PROJECT</Button>
            </Link>
            <Link to="/#openproject">
              <Button variant="outline-info btn mr-3">OPEN PROJECT(?)</Button>
            </Link>
            <Link to="/mixdown">
              <Button variant="outline-warning btn mr-3">MIXDOWN</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Toolbar;


