import React, { useState, useEffect } from 'react';
import Stamp from "../../assets/images/Wizzymuse-stamp.png";
import { Container, Row, Col, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';


const ArtistSearch = () => {

    return (
        <>
        <Container fluid className="searchPanel">
            <Row>
                <Col style={{ textAlign: "center" }}>
                <h3 className="searchBy">Search by:</h3>
                </Col>
            </Row>
            <Row>
                <Col style={{ textAlign: "center", backgroundColor: "black", margin: "6%", padding: "6%", paddingTop: "14%", borderRadius: "8px" }}>

                <div className="mb-4">
                    {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            size="lg"
                            variant="info"
                            title={'INSTRUMENTS'}>
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ))}
                </div>
                <div className="mb-4">
                    {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            size="lg"
                            variant="info"
                            title={'GENRES'}>
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ))}
                </div>
                <div className="mb-4">
                    {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            size="lg"
                            variant="info"
                            title={'ARTIST NAME'}>
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ))}
                </div>

                </Col>
            </Row>

            

                <Col style={{ textAlign: "center", marginTop: "24%" }} className="">
                <div className="welcome">

                <Container fluid className="logo-image d-flex justify-content-center">
                    <img src={Stamp} width="200" height="200" alt="Stamp"></img>
                </Container>

                <br />

                <h4>Your online collaborators await!</h4>
                </div>
                </Col>

                
        </Container>



















        </>
    );

};

export default ArtistSearch;