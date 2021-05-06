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
      {loading ? (
        <Spinner />
      ) : forums && forums.length > 0 ? (
        forums.map((forum, idx) => <ForumItem key={idx} forum={forum} />)
      ) : (
        <h4>No forums found...</h4>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  forums: state.forums,
});

export default connect(mapStateToProps)(ForumTopics);
