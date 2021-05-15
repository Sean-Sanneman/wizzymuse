// React imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';
import { getForumById } from '../../actions/forums';

// Components
import AppNavbar from '../layoutComponents/AppNavbar';
import Toolbar from '../layoutComponents/Toolbar';
import Footer from '../layoutComponents/Footer';
import ForumSearch from '../forumComponents/ForumSearch';
import PostList from '../postComponents/PostList';
import Sponsors from '../layoutComponents/Sponsors';

// Styles and Images
import { Container, Row, Col, Nav } from 'react-bootstrap';
import backgroundImage from '../../assets/cover/cover-image-studio3.jpg';

const ForumTopicPage = ({
  match,
  getForumById,
  isAuthenticated,
  forums: { forum, loading },
}) => {
  useEffect(() => {
    if (match.params.id) {
      getForumById(match.params.id); // match the id in the url
    }
  }, [match.params.id, getForumById]);

  return (
    <>
      <AppNavbar />
      {isAuthenticated && <Toolbar toolbarType="forumTB" />}

      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            <ForumSearch />
          </Col>
          <Col
            xs={8}
            className="midPanel allPanels"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Container fluid="md" className="forumPanel">
              <Container>
                <Row className="forumHeadings">
                  <Col xs={7} className="forumCol">
                    <h4>
                      {forum === null || loading ? 'loading...' : forum.topic}
                    </h4>
                  </Col>
                  <Col xs={1} className="forumCol">
                    <h5>Replies</h5>
                  </Col>
                  <Col xs={1} className="forumCol">
                    <h5>Views</h5>
                  </Col>
                  <Col xs={3} className="forumCol">
                    <h5>Last Replied</h5>
                  </Col>

                </Row>

                <Nav.Item>
                  <Nav.Link
                  href="/new-post"
                  className='text-left'
                  style={{ 
                    color: 'white', 
                    marginTop: '1%',
                    textDecorationLine: 'underline',
                    }}>NEW POST</Nav.Link>
                    </Nav.Item>

                {forum === null || loading ? (
                  'loading...'
                ) : (
                  <PostList forumPosts={forum.posts} />
                )}
              </Container>
            </Container>
          </Col>
          <Col className="rightPanel allPanels">
            <Sponsors />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

ForumTopicPage.propTypes = {
  getForumById: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  forums: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  forums: state.forums,
});

export default connect(mapStateToProps, { getForumById })(ForumTopicPage);
