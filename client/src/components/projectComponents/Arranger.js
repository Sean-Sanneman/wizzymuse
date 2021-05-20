// React imports
import React from 'react';


// Utils
import moment from 'moment';


// Styles and Images
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Arranger = () => {
  return (
    <>
    <Container>
     <Row className='trackRow' style={{ height:'4rem'}}>
      <Col xs={2} style={{border: 'solid 2px', backgroundColor: 'white'}}>(info)</Col>
      <Col xs={10} style={{border: 'solid 2px', backgroundColor: 'white'}}>(waveform)</Col>
     </Row>
    </Container>

    </>
  );
};

export default Arranger;
