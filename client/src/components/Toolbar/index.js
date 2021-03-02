import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

const Toolbar = () => {
    return (
    <>
    <Container fluid className="d-flex justify-content-center toolbar">
        <Row style={{ height: "3em" }} className="align-content-center">
            <Col className="toolBtns">
            <Button variant="outline-primary btn mr-3">New Project</Button>{' '}
            <Button variant="outline-success btn mr-3">Open Project</Button>{' '}
            <Button variant="outline-warning btn mr-3">Bouncedown(?)</Button>{' '}
            <Button variant="outline-info btn mr-3">Tools (?)</Button>{' '}
            </Col>
        </Row>
    </Container>

    </>
    );
};

export default Toolbar;