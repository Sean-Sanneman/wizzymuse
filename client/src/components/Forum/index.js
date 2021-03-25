import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import avatar1 from "../../assets/images/stock-avatar-1.jpeg";
import avatar2 from "../../assets/images/stock-avatar-2.jpeg";
import avatar3 from "../../assets/images/stock-avatar-3.jpeg";
import avatar4 from "../../assets/images/stock-avatar-4.png";


function Forum () {

    return (
    <>

    
    <Container fluid="md">
    
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

    <Card style={{ borderRadius: "15px" }} className="resultCards">
        <Row className='no-gutters'>
            <Col md={2} lg={2}>
                <Card.Img className="d-block w-100" 
                src={avatar2} className="" style={{ width: "100%", padding: "18px" }} alt="Stock Avatar 2"/>
            </Col>
            <Col>
                <Card.Body className="searchArtistTxt" style={{ padding: "1%" }}>
                    <Card.Title>Avatar 2</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Collaborate</Button>
                </Card.Body>
            </Col>
        </Row>
    </Card>

    <Card style={{ borderRadius: "15px" }} className="resultCards">
        <Row className='no-gutters'>
            <Col md={2} lg={2}>
                <Card.Img className="d-block w-100" 
                src={avatar3} className="" style={{ width: "100%", padding: "18px" }} alt="Stock Avatar 3"/>
            </Col>
            <Col>
                <Card.Body className="searchArtistTxt" style={{ padding: "1%" }}>
                    <Card.Title>Avatar 3</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Collaborate</Button>
                </Card.Body>
            </Col>
        </Row>
    </Card>

    <Card style={{ borderRadius: "15px" }} className="resultCards">
        <Row className='no-gutters'>
            <Col md={2} lg={2}>
                <Card.Img className="d-block w-100" 
                src={avatar4} className="" style={{ width: "100%", padding: "18px" }} alt="Stock Avatar 4"/>
            </Col>
            <Col>
                <Card.Body className="searchArtistTxt" style={{ padding: "1%" }}>
                    <Card.Title>Avatar 4</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Collaborate</Button>
                </Card.Body>
            </Col>
        </Row>
    </Card>
    
    </Container>   
    </>
    );
};

export default Forum;