// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const ForumItem = ({ forum, index }) => {
  return (
    <Container>
      <Row className="forumTopics">
        <Col xs={1} className="forumCol">
          {index}
        </Col>
        <Col xs={6} className="forumCol">
          <Link to={`/forums/${forum.id}`}>{forum.topic}</Link>
        </Col>
        <Col xs={1} className="forumCol">
          {forum.nbPosts}
        </Col>
        <Col xs={1} className="forumCol">
          {forum.nbForumReplies}
        </Col>
        <Col xs={3} className="forumCol">
          <Link to={`/posts/${forum.mostRecentPost.id}`}>
            {forum.mostRecentPost.postTitle}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ForumItem;
