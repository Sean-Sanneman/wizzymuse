// React imports
import React from 'react';

// Components
import Spinner from '../layoutComponents/Spinner';
import Toolbar from '../layoutComponents/Toolbar';
import SearchProfiles from '../searchComponents/SearchProfiles';
import ProfileList from '../profileComponents/ProfileList';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const SearchPage = () => {
  return (
    <>
      <Toolbar toolbarType="profilePageTB" />
      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            <SearchProfiles />
          </Col>
          <Col xs={8} className="midPanel allPanels">
            <Container fluid="md">
              <ProfileList />
            </Container>
          </Col>
          <Col className="rightPanel allPanels"></Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchPage;
