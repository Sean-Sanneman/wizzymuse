import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


const ToolbarArtist = () => {

    return (
        <>
        <Button href="/profile" variant="outline-success btn mr-3">PROFILE</Button>{' '}
        <Button href="/newproject" variant="outline-primary btn mr-3">NEW PROJECT</Button>{' '}
        <Button href="/openproject" variant="outline-info btn mr-3">OPEN PROJECT(?)</Button>{' '}
        <Button href="/mixdown" variant="outline-warning btn mr-3">MIXDOWN</Button>{' '}
        </>
    );

};

export default ToolbarArtist;