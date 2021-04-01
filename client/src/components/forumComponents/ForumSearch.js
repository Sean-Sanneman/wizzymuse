import React, { useState, useEffect } from 'react';
import Stamp from "../../assets/images/Wizzymuse-stamp.png";
import { Container, Row, Col, Dropdown, DropdownButton, ButtonGroup, Form, FormControl, Button } from 'react-bootstrap';


const ForumSearch = () => {
    return (
        <>
        <Container fluid className="searchPanel">
            <Row>
                <Col style={{ textAlign: "center" }}>
                <h4 className="searchBy">Forum:</h4>
                </Col>
            </Row>
            <Row>
                <Col style={{ textAlign: "center", backgroundColor: "black", margin: "3%", padding: "26% 3% 18% 3%", borderRadius: "8px" }}>
                <div className="mb-4">
                    {['down'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            size="md"
                            variant="info"
                            title={'SEARCH BY'}>
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
            <Row style={{ textAlign: "center", marginTop: "24%" }}>
                <Col>
                <div>
                <Container fluid className="logo-image d-flex justify-content-center" style={{ padding: "0" }}>
                    <img src={Stamp} width="140px" height="140px" alt="Stamp"></img>
                </Container>
                <br />
                <h5>"Knowledge is knowing the right answer.
                    Intelligence is asking the right question."</h5>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};
export default ForumSearch;