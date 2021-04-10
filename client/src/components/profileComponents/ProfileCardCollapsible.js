// React imports
import React, { useEffect, useState } from 'react';
// Redux imports
// Components
import Spinner from '../layoutComponents/Spinner';
// Styles and Images
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  setOpen,
  Collapse,
} from 'react-bootstrap';
import avatar1 from '../../assets/images/stock-avatar-1.jpeg';

const ProfileCardCollapsible = ({ profile: { avatar, username, bio } }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card style={{ borderRadius: '15px' }} className="resultCards">
        <Row className="no-gutters">
          <Col md={2} lg={2}>
            <Card.Img
              className="d-block w-100"
              src={avatar}
              className=""
              style={{ width: '100%', padding: '18px' }}
              alt="avatar"
            />
          </Col>
          <Col>
            <Card.Body className="searchArtistTxt" style={{ padding: '1%' }}>
              <Card.Title>{username}</Card.Title>
              <Card.Text>
                {bio
                  ? bio
                  : 'We need some default text in case this profile is empty.'}
              </Card.Text>
              <Button variant="success">COLLABORATE</Button>

              {/* Collapse toggle button */}
              <Button
                className="collapseArtistItem"
                style={{ marginRight: '4%' }}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Artist Details
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text"></div>
              </Collapse>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ProfileCardCollapsible;
