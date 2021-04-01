// React imports
import React from 'react';

export default () => (
  <div className="container">
    <div className="row justify-content-center">
      <iframe
        src="https://giphy.com/embed/5889VEqpg1v0I"
        frameBorder="0"
        className="giphy-embed iframe-spinner"
        allowFullScreen
      ></iframe>

      {/* <p>
        <a href="https://giphy.com/gifs/animated-picture-perfectloops-5889VEqpg1v0I">
          via GIPHY
        </a>
      </p> */}
      <p>LOADING ...</p>
    </div>
  </div>
);