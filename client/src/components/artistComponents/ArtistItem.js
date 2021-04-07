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

const ArtistItem = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card style={{ borderRadius: '15px' }} className="resultCards">
        <Row className="no-gutters">
          <Col md={2} lg={2}>
            <Card.Img
              className="d-block w-100"
              src={avatar1}
              className=""
              style={{ width: '100%', padding: '18px' }}
              alt="Stock Avatar 1"
            />
          </Col>
          <Col>
            <Card.Body className="searchArtistTxt" style={{ padding: '1%' }}>
              <Card.Title>Avatar 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="success">Add to my network</Button>

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
                <div id="example-collapse-text">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </p>
                  <h4>
                    The more artists' information that we add, graphics,
                    whatever, the collapsible "box" expands to allow it to fit.
                    This may be useful, so that the initial artist "card" can be
                    smaller, then the profile opens up when you toggle.
                  </h4>
                </div>
              </Collapse>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ArtistItem;
