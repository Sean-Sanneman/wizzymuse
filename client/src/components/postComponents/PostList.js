// React imports
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

// Redux imports
import { connect } from 'react-redux';

// Components
import PostItem from './PostItem';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const PostList = ({ forumPosts }) => {
  return (
    <Container>
      <Row className="forumTopics">
        {forumPosts && forumPosts.length > 0 ? (
          forumPosts.map((post) => (
            <>
              <Col xs={1} className="forumCol">
                new/old
              </Col>
              <Col xs={6} className="forumCol">
                <Link to={`/posts/${post.id}`}>{post.postTitle}</Link>
              </Col>
              <Col xs={1} className="forumCol">
                {post.replies.length}
              </Col>
              <Col xs={1} className="forumCol">
                {post.nbViews}
              </Col>
              <Col xs={3} className="forumCol">
                {post.replies.length > 0 && (
                  <Moment format="YYYY-MM-DD">
                    {post.replies[0].createdAt}
                  </Moment>
                )}
              </Col>
            </>
          ))
        ) : (
          <h4>No posts found...</h4>
        )}
      </Row>
    </Container>
  );
};

export default PostList;
