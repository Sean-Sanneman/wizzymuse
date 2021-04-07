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


const Forum = () => {
  return (
    <>
    {/* Forum Headings */}
    <Container className="forumPanel">
        <Row className="forumRow">
            <Col xs={7} className="forumCol">
                <h5>Topics</h5>
            </Col>
            <Col xs={1}className="forumCol">
                <h7>Threads</h7>
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
            These will self repilicate as we add new forum topics.</Col>
            <Col xs={1}className="forumCol">3 of 5</Col>
            <Col xs={1} className="forumCol">4 of 5</Col>
            <Col xs={3} className="forumCol">5 of 5</Col>
        </Row>
    </Container>
    

    </>
    );
  };

  export default Forum;
