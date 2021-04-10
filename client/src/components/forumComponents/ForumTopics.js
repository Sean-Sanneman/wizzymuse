// React imports
import React from 'react';
import { Link } from 'react-router-dom';

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
    <Container className="">
        <Row className="forumRow">
            <Col xs={7} className="forumCol">
                <h5>Forum Topics</h5>
            </Col>
            <Col xs={1}className="forumCol">
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
    <Container className="">
        <Row className="forumRow">
            <Col xs={1} className="forumCol">1 of 5</Col>
            <Col xs={6} className="forumCol">
            {/* wrap this in link to forum/id endpoint */}
            <Link to="/forum-topics">Audio production and mixing tips</Link>
            </Col>
            <Col xs={1}className="forumCol">3 of 5</Col>
            <Col xs={1} className="forumCol">4 of 5</Col>
            <Col xs={3} className="forumCol">How to make my singer wiggle</Col>
        </Row>
    </Container>
    <Container className="">
        <Row className="forumRow">
            <Col xs={1} className="forumCol">1 of 5</Col>
            <Col xs={6} className="forumCol">
                {/* wrap this in link to forum/id endpoint */}
                Microphones, placement, and recording tips.
            </Col>
            <Col xs={1}className="forumCol">3 of 5</Col>
            <Col xs={1} className="forumCol">4 of 5</Col>
            <Col xs={3} className="forumCol">5 of 5</Col>
        </Row>
    </Container>
    <Container className="">
        <Row className="forumRow">
            <Col xs={1} className="forumCol">1 of 5</Col>
            <Col xs={6} className="forumCol">
            These will self repilicate as we add new forum topics.
            </Col>
            <Col xs={1}className="forumCol">3 of 5</Col>
            <Col xs={1} className="forumCol">4 of 5</Col>
            <Col xs={3} className="forumCol">5 of 5</Col>
        </Row>
    </Container>
    
    </>
    );
  };

  export default ForumTopics;
