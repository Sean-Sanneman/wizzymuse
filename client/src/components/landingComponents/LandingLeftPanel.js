import React, { useState, useEffect } from 'react';
import Stamp from "../../assets/images/Wizzymuse-stamp.png";
// import WizzyCoin from "../../assets/images/wizzycoin.png";
import { Container, Row, Col, Dropdown, DropdownButton, ButtonGroup, Form, FormControl, Button } from 'react-bootstrap';


const LandingLeftPanel = () => {
    return (
        <>
        <Container fluid className="landingLeftPanel">
            <Row>
              <Col className="welcomeText">
                <h2>Welcome to <strong><em>Wizzy</em>Muse!</strong></h2>
                <br></br>
                <h4 style={{ color: "darkblue" }}><b>Your online collaborators await!</b></h4>
                <br></br>
                <h5><b>Please login or register to continue.</b></h5>
              </Col>
            </Row>
            <Row style={{ textAlign: "center", marginTop: "24%" }}>
                <Col>
                <Container fluid className="logo-image d-flex justify-content-center" style={{ padding: "0" }}>
                    <img src={Stamp} width="140px" height="140px" alt="Stamp"></img>
                </Container>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default LandingLeftPanel;