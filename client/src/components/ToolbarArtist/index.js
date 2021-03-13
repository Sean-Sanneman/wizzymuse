import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


const ToolbarArtist = () => {

    return (
        <>
        <Button href="./artist/profile" variant="outline-success btn mr-3">PROFILE</Button>{' '}
        <Button variant="outline-primary btn mr-3">NEW PROJECT</Button>{' '}
        <Button variant="outline-info btn mr-3">OPEN PROJECT(?)</Button>{' '}
        <Button variant="outline-warning btn mr-3">MIXDOWN</Button>{' '}
        </>
    );

};

export default ToolbarArtist;