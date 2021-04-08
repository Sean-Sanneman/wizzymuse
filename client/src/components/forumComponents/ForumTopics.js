// React imports
import React from 'react';

// Redux imports

// Components
import Spinner from '../layoutComponents/Spinner';


// Styles and Images
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
} from 'react-bootstrap';


const ForumTopics = () => {
  return (
    <>
    {/* Forum Headings */}
    <Container className="forumPanel">
        <Row className="forumRow">
            <Col xs={7} className="forumCol">
                <h5>Forum Topics</h5>
            </Col>
            <Col xs={1}className="forumCol">
                <h7>Posts</h7>
            </Col>
            <Col xs={1} className="forumCol">
                <h7>Replies</h7>
            </Col>
            <Col xs={3} className="forumCol">
                <h5>Last Post</h5>
            </Col>
        </Row>
    </Container>

    {/* Forum Table */}
    <Container className="forumPanel">
        <Row className="forumRow">
            <Col xs={1} className="forumCol">1 of 5</Col>
            <Col xs={6} className="forumCol">
            These will self repilicate as we add new forum topics.</Col>
            <Col xs={1}className="forumCol">3 of 5</Col>
            <Col xs={1} className="forumCol">4 of 5</Col>
            <Col xs={3} className="forumCol">5 of 5</Col>
        </Row>
    </Container>
    <Container className="forumPanel">
        <Row className="forumRow">
            <Col xs={1} className="forumCol">1 of 5</Col>
            <Col xs={6} className="forumCol">
                {/* wrap this in link to forum/id endpoint */}
            Audio production and mixing tips</Col>
            <Col xs={1}className="forumCol">3 of 5</Col>
            <Col xs={1} className="forumCol">4 of 5</Col>
            <Col xs={3} className="forumCol">5 of 5</Col>
        </Row>
    </Container>
    <Container className="forumPanel">
        <Row className="forumRow">
            <Col xs={1} className="forumCol">1 of 5</Col>
            <Col xs={6} className="forumCol">
            These will self repilicate as we add new forum topics.</Col>
            <Col xs={1}className="forumCol">3 of 5</Col>
            <Col xs={1} className="forumCol">4 of 5</Col>
            <Col xs={3} className="forumCol">5 of 5</Col>
        </Row>
    </Container>
    

    </>
    );
  };

  export default ForumTopics;
