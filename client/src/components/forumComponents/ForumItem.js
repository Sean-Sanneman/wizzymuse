// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const ForumItem = ({ forum }) => {
  return (
    <Container>
      <Row className="forumTopics">
        <Col xs={1} className="forumCol">
          1 of 5
        </Col>
        <Col xs={6} className="forumCol">
          {/* wrap this in link to forum/id endpoint */}
          <Link to={`/forum-topics/${forum.id}`}>{forum.topic}</Link>
        </Col>
        <Col xs={1} className="forumCol">
          3 of 5
        </Col>
        <Col xs={1} className="forumCol">
          4 of 5
        </Col>
        <Col xs={3} className="forumCol">
          How to make my singer wiggle
        </Col>
      </Row>
    </Container>
  );
};

export default ForumItem;
