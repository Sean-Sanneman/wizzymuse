// React imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';
import { getPosts } from '../../actions/posts';

// Components
import PostItem from './PostItem';

// Styles and Images
import { Container, Row } from 'react-bootstrap';

const PostList = ({ getPosts, posts: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <p>LOADING...</p>
  ) : (
    <>
      {/* Forum Postings */}

      <Container>
        <Row className="forumTopics">
          {posts && posts.length > 0 ? (
            posts.map((post) => <PostItem key={post.id} post={post} />)
          ) : (
            <h4>No posts found...</h4>
          )}
          {/* <Col xs={1} className="forumCol">
            new/old
          </Col>
          <Col xs={6} className="forumCol"> */}
          {/* this will link to an individual post item */}
          {/* <Link to="/post-item">How do I record Hypolliope?</Link>
          </Col>
          <Col xs={1} className="forumCol">
            27
          </Col>
          <Col xs={1} className="forumCol">
            4345
          </Col>
          <Col xs={3} className="forumCol">
            date-by-user
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

PostList.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { getPosts })(PostList);
