// This is where the forum topics display a list of posts within a topic, for example audio production tips

// React imports
import React from 'react';
// Redux imports
// Components
import Toolbar from '../layoutComponents/Toolbar';
import ArtistList from '../artistComponents/ArtistList';
import ForumSearch from '../forumComponents/ForumSearch';
import PostList from '../postComponents/PostList';
import Spinner from '../layoutComponents/Spinner';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';
const ForumTopicPage = () => {
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
                
                <PostList />
                  
              </Container>
              </Col>
              <Col className="rightPanel allPanels"></Col>
            </Row>
          </Container>
        </>
  );
};

export default ForumTopicPage;