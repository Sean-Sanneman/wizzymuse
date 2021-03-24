import React, { useState, useEffect } from 'react';
import Stamp from "../../assets/images/Wizzymuse-stamp.png";
import { Container, Row, Col, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';


const ArtistSearch = () => {

    return (
        <>
        <Container fluid className="searchPanel">
            <Row>
                <Col style={{ textAlign: "center" }}>
                <h4 className="searchBy">Search by:</h4>
                </Col>
            </Row>
            <Row>
                <Col style={{ textAlign: "center", backgroundColor: "black", margin: "6%", padding: "12% 2% 18% 2%", borderRadius: "8px" }}>

                <div className="mb-4">
                    {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            size="md"
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
                            size="md"
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
                            size="md"
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

                <Col style={{ textAlign: "center", marginTop: "24%" }}>
                <div>
                <Container fluid className="logo-image d-flex justify-content-center" style={{ padding: "0" }}>
                    <img src={Stamp} width="140" height="140" alt="Stamp"></img>
                </Container>

                <br />

                <h5>Your online collaborators await!</h5>
                </div>
                </Col>
                
        </Container>



















        </>
    );

};

export default ArtistSearch;