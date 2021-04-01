// React imports
import React from 'react';
// Redux imports
// Components
import Spinner from '../layoutComponents/Spinner';
// Styles and Images
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import avatar1 from "../../assets/images/stock-avatar-1.jpeg";



const ArtistItem = () => {
    return (
      <>
        <Card style={{ borderRadius: "15px" }} className="resultCards">
        <Row className='no-gutters'>
            <Col md={2} lg={2}>
                <Card.Img className="d-block w-100" 
                src={avatar1} className="" style={{ width: "100%", padding: "18px" }} alt="Stock Avatar 1"/>
            </Col>
            <Col>
                <Card.Body className="searchArtistTxt" style={{ padding: "1%" }}>
                    <Card.Title>Avatar 1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Collaborate</Button>
                </Card.Body>
            </Col>
        </Row>
    </Card>
          </>
    );
  };
  export default ArtistItem;