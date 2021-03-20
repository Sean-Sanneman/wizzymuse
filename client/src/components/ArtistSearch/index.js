import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';


const ArtistSearch = () => {

    return (
        <>
        <Container fluid>
            <Row style={{ border: 'solid', borderColor: '#ffffff' }}>
                <Col>
                1 of 1
                <h3>Search by:</h3>

                <div className="mb-2">
                    {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            size="lg"
                            variant="success"
                            title={'INSTRUMENTS'}>
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ))}
                </div>
                <div className="mb-2">
                    {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            size="lg"
                            variant="success"
                            title={'GENRES'}>
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ))}
                </div>
                <div className="mb-2">
                    {['right'].map((direction) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            size="lg"
                            variant="success"
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
        </Container>



















        </>
    );

};

export default ArtistSearch;