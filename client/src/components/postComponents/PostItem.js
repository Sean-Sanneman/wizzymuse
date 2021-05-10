// React imports
import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

// Redux imports

// Components
import Spinner from '../layoutComponents/Spinner';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const PostItem = ({ post }) => {
  return (
    <>
      {/* Forum post heading */}
      <Container>
        <Row className="forumHeadings">
          <Col xs={12} className="forumCol">
            <h4>{post.postTitle}</h4>
          </Col>
        </Row>
      </Container>

      <br />

      {/* Forum post details */}
      <Container>
        <Row className="forumRow">
          <Col xs={2} className="forumCol">
            <img className="d-block w-100" src={post.avatar} />
            {post.username}
          </Col>
          <Col xs={10} className="forumCol">
            <Col
              xs={12}
              style={{
                borderBottom: 'solid',
                borderBottomStyle: 'groove',
                borderColor: '#c0c0c0',
              }}
            >
              <Moment format="dddd, MMMM Do YYYY, h:mm:ss a">
                {post.createdAt}
              </Moment>
            </Col>
            <br></br>
            <p>{post.postText}</p>
          </Col>
        </Row>
        <br />
      </Container>
    </>
  );
};

export default PostItem;
