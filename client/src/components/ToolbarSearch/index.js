import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


const ToolbarSearch = () => {

    return (
        <>
        <Button href="/newproject" variant="outline-primary btn mr-3">NEW PROJECT</Button>{' '}
        <Button href="/openproject" variant="outline-info btn mr-3">OPEN PROJECT(?)</Button>{' '}
        </>
    );

};

export default ToolbarSearch;