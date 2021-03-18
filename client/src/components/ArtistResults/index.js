import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import avatar1 from "../../assets/images/stock-avatar-1.jpeg";


function ArtistResults() {

    return (
    <>
    <h3>this is the Artists Results page being built...</h3>

    
    <Container fluid="md">
    
    <Card style={{ borderRadius: "15px" }} className="searchPanels">
        <Row className='no-gutters'>
            <Col md={3} lg={3}>
                <Card.Img className="d-block w-100" 
                src={avatar1} className="" style={{ width: "106%", padding: "18px" }} alt="Stock Avatar 1"/>
            </Col>
            <Col>
                <Card.Body className="searchArtistTxt">
                    <Card.Title>Avatar 1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Col>
        </Row>
    </Card>
    
    </Container>












    
    
    
    </>
    );
};

export default ArtistResults;