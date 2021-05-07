// React imports
import React from 'react';
import Moment from 'react-moment';

// Redux imports

// Components

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const ReplyItem = ({ reply }) => {
  return (
    <>
      <Container>
        <Row className="forumRow">
          <Col xs={2} className="forumCol">
            {/* <img className="d-block w-100" src={reply.avatar} /> */}
            {reply.username}
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
                {reply.createdAt}
              </Moment>
            </Col>
            <br></br>
            <p>{reply.replyText}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReplyItem;
