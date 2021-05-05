// React imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const ForumItem = ({ forums: { loading, forums } }) => {
  return (
    <Container>
      <Row className="forumTopics">
        <Col xs={1} className="forumCol">
          1 of 5
        </Col>
        <Col xs={6} className="forumCol">
          {/* wrap this in link to forum/id endpoint */}
          <Link to="/forum-topics">Audio production and mixing tips</Link>
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

const mapStateToProps = (state) => ({
  forums: state.forums,
});

export default connect(mapStateToProps)(ForumItem);
