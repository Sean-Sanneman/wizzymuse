// React imports
import React from 'react';

// Components
import Nav from '../layoutComponents/AppNavbar';
import Toolbar from '../layoutComponents/Toolbar';
import Footer from '../layoutComponents/Footer';
import ConnectionList from '../connectionComponents/ConnectionList';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const ConnectionPage = () => {
  return (
    <>
      <Nav />
      <Toolbar toolbarType="profilePageTB" />
      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            <div>SEAN/JASON to put some content here.</div>
          </Col>
          <Col xs={8} className="midPanel allPanels">
            <Container fluid="md">
              <ConnectionList />
            </Container>
          </Col>
          <Col className="rightPanel allPanels"></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ConnectionPage;
