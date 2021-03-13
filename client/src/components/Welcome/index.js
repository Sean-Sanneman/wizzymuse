import React, { useState, useEffect } from 'react';
import { } from 'react-bootstrap';
import coverImage from "../../assets/cover/cover-image-studio2.jpg";


const Welcome = () => {

    return (
        <img src={coverImage} className="mainPic" style={{ width: "100%" }} alt="cover" />
    );

};

export default Welcome;