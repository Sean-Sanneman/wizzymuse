// This is where the forum topics display a list of posts within a topic, for example audio production tips

// React imports
import React from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';

// Components
import Toolbar from '../layoutComponents/Toolbar';
import ForumSearch from '../forumComponents/ForumSearch';
import PostList from '../postComponents/PostList';
import Spinner from '../layoutComponents/Spinner';
import Sponsors from '../layoutComponents/Sponsors';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImage from '../../assets/cover/cover-image-studio3.jpg';

const ForumTopicPage = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated && <Toolbar toolbarType="forumTB" />}
      
      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            <ForumSearch />
          </Col>
          <Col xs={8} className="midPanel allPanels" style={{ backgroundImage: `url(${backgroundImage})`, 
              backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Container fluid="md" className="forumPanel">
              <PostList />
            </Container>
          </Col>
          <Col className="rightPanel allPanels">
            <Sponsors />
          </Col>
        </Row>
      </Container>
    </>
  );
};

ForumTopicPage.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(ForumTopicPage);
