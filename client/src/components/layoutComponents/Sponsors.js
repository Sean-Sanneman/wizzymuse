// React imports
import React from 'react';

// Styles and Images
import fakeAd1 from '../../assets/ads/fake-ad-1.jpg';
import fakeAd2 from '../../assets/ads/fake-ad-2.jpg';
import fakeAd3 from '../../assets/ads/fake-ad-3.jpg';
import fakeAd4 from '../../assets/ads/fake-ad-4.jpg';
import fakeAd5 from '../../assets/ads/fake-ad-5.jpg';

import { Container, Row, Col } from 'react-bootstrap';

const Sponsors = () => {

  return (
    <Container className="ads">
    <Row>
        <Col> 
        example ad              
        <img
        className="d-block w-100"
        src={fakeAd1}
        alt="fake ad 1"
        />
        </Col>
    </Row>
    <Row>
        <Col>
        example ad               
        <img
        className="d-block w-100"
        src={fakeAd4}
        alt="fake ad 4"
        />
        </Col>
    </Row>
    <Row>
        <Col>
        example ad               
        <img
        className="d-block w-100"
        src={fakeAd3}
        alt="fake ad 3"
        />
        </Col>
    </Row>
    {/* <Row>
        <Col>
        example ad              
        <img
        className="d-block w-100"
        src={fakeAd2}
        alt="fake ad 2"
        />
        </Col>
    </Row> */}
    {/* <Row>
        <Col>
        example ad             
        <img
        className="d-block w-100"
        src={fakeAd5}
        alt="fake ad 5"
        />
        </Col>
    </Row> */}
    </Container>
  );
};

export default Sponsors;