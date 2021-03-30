// React imports
import React from 'react';
// Redux imports
// Components
import Toolbar from '../layoutComponents/Toolbar';
import ArtistList from '../searchComponents/ArtistList';
import ForumSearch from '../forumComponents/ForumSearch';
import Spinner from '../layoutComponents/Spinner';
// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';


const SearchPage = () => {
  return (
    <>
      <Toolbar />
          <Container fluid className="grid">
            <Row className="mainGrid">
              <Col className="leftPanel allPanels">
                  <ForumSearch/>
              </Col>
              <Col xs={8} className="midPanel allPanels">
              <Container fluid="md">
                  <ArtistList/>
                </Container>
              </Col>
              <Col className="rightPanel allPanels"></Col>
            </Row>
          </Container>
        </>
  );
};
export default SearchPage;