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


const PostItem = () => {
  return (
    <>
    {/* Forum Postings */}
    <Container className="forumPanel">
        <Row className="forumRow">
            <Col xs={7} className="forumCol">
                <h5>Audio, production and mixing tips</h5>
            </Col>
            <Col xs={1}className="forumCol">
                <h5>Replies</h5>
            </Col>
            <Col xs={1} className="forumCol">
                <h5>Views</h5>
            </Col>
            <Col xs={3} className="forumCol">
                <h5>Last Post</h5>
            </Col>
        </Row>
    </Container>

    <Container className="forumPanel">
        <Row className="forumRow">
            <Col xs={1} className="forumCol">new/old</Col>
            <Col xs={6} className="forumCol">
                {/* this will link to an individual post item */}
                <Link to="/post-item">How do I record Hypolliope?</Link>
            </Col>
            <Col xs={1}className="forumCol">27</Col>
            <Col xs={1} className="forumCol">4345</Col>
            <Col xs={3} className="forumCol">date-by-user</Col>
        </Row>
    </Container>
    <Container className="forumPanel">
        <Row className="forumRow">
            <Col xs={1} className="forumCol">new/old</Col>
            <Col xs={6} className="forumCol">
                {/* this will link to an individual post item */}
                Additional user topics get posted as they are added
            </Col>
            <Col xs={1}className="forumCol">3</Col>
            <Col xs={1} className="forumCol">555</Col>
            <Col xs={3} className="forumCol">date-by-user</Col>
        </Row>
    </Container>
    <Container className="forumPanel">
        <Row className="forumRow">
            <Col xs={1} className="forumCol">new/old</Col>
            <Col xs={6} className="forumCol">
                {/* this will link to an individual post item */}
                Additional user topics get posted as they are added...
            </Col>
            <Col xs={1}className="forumCol">77</Col>
            <Col xs={1} className="forumCol">4776</Col>
            <Col xs={3} className="forumCol">date-by-user</Col>
        </Row>
    </Container>
    
    </>
    );
  };

  export default PostItem;
