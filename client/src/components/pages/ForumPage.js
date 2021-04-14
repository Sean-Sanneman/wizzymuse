// React imports
import React from 'react';
// Redux imports
// Components
import Toolbar from '../layoutComponents/Toolbar';
import ProfileCardCollapsible from '../profileComponents/ProfileCardCollapsible';
import ForumSearch from '../forumComponents/ForumSearch';
import ForumTopics from '../forumComponents/ForumTopics';
import Spinner from '../layoutComponents/Spinner';
// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImage from '../../assets/cover/cover-image-studio3.jpg';

const ForumPage = () => {
  return (
    <>
      <Toolbar toolbarType="forumTB" />

          <Container fluid className="grid">
            <Row className="mainGrid">
              <Col className="leftPanel allPanels">
                  <ForumSearch/>
              </Col>
              <Col xs={8} className="midPanel allPanels" style={{ backgroundImage: `url(${backgroundImage})`, }}>
           
              <Container fluid="md" className="forumPanel">
                
                <ForumTopics />
                  
              </Container>
              </Col>
              <Col className="rightPanel allPanels"></Col>
            </Row>
          </Container>
        </>

  );
};
export default ForumPage;
