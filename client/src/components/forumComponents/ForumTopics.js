// React imports
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';

// Components
import Spinner from '../layoutComponents/Spinner';
import ForumItem from './ForumItem';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const ForumTopics = ({ forums: { loading, forums } }) => {
  return (
    <>
      {/* Forum Headings */}
      <Container className="">
        <Row className="forumHeadings">
          <Col xs={7} className="forumCol">
            <h4>Forum Topics</h4>
          </Col>
          <Col xs={1} className="forumCol">
            <h5>Posts</h5>
          </Col>
          <Col xs={1} className="forumCol">
            <h5>Replies</h5>
          </Col>
          <Col xs={3} className="forumCol">
            <h5>Last Post</h5>
          </Col>
        </Row>
      </Container>

      {/* Forum Table */}
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
    </>
  );
};

const mapStateToProps = (state) => ({
  forums: state.forums,
});

export default connect(mapStateToProps)(ForumTopics);
