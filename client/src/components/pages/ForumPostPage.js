// React imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';
import { getPostById } from '../../actions/posts';

// Components
import AppNavbar from '../layoutComponents/AppNavbar';
import Toolbar from '../layoutComponents/Toolbar';
import Footer from '../layoutComponents/Footer';
import ForumSearch from '../forumComponents/ForumSearch';
import PostItem from '../postComponents/PostItem';
import ReplyItem from '../replyComponents/ReplyItem';
import Sponsors from '../layoutComponents/Sponsors';

// Styles and Images
import { Button, Container, Row, Col } from 'react-bootstrap';
import backgroundImage from '../../assets/cover/cover-image-studio3.jpg';

const ForumPostPage = ({
  match,
  getPostById,
  isAuthenticated,
  posts: { post, loading },
}) => {
  useEffect(() => {
    getPostById(match.params.id);
  }, [getPostById]);
  return (
    <>
      <AppNavbar />
      {isAuthenticated && <Toolbar toolbarType="forumTB" />}
      {loading || post === null ? (
        <p>Loading ...</p>
      ) : (
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
                <PostItem post={post} />
                {post.replies.length > 0 ? (
                  post.replies.map((reply) => (
                    <ReplyItem key={reply.id} reply={reply} />
                  ))
                ) : (
                  <p>No replies yet ...</p>
                )}
              </Container>
            </Col>
            <Col className="rightPanel allPanels">
              <Sponsors />
            </Col>
          </Row>
        </Container>
      )}
      <Footer />
    </>
  );
};

ForumPostPage.propTypes = {
  getPostById: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  posts: state.posts,
});

export default connect(mapStateToProps, { getPostById })(ForumPostPage);
