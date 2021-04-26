import React, { useState, useEffect } from 'react';
import Stamp from "../../assets/images/Wizzymuse-stamp.png";
// import WizzyCoin from "../../assets/images/wizzycoin.png";
import { Container, Row, Col } from 'react-bootstrap';


const DashboardLeftPanel = () => {
    return (
        <>
        <Container fluid className="landingLeftPanel">
            <Row>
              <Col className="welcomeText">
                <h2>Welcome to <strong><em>Wizzy</em>Muse!</strong></h2>
                <br></br>
                <h4><b>Your online collaborators await!</b></h4>
                <br></br>
                <h5><b>(this can be updated to say whatever we want)</b></h5>
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

export default DashboardLeftPanel;