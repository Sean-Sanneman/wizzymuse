// React imports
import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

// Redux imports


// Components
import Toolbar from '../layoutComponents/Toolbar';

// Styles and Images



const ProjectPage = ({open, children, onClose}) => {
  if (!open) return null

  var win = window.open(null, 'location=no');
  win.location.reload();

  return (
      <>
      <div>ProjectPage</div>
      <h1>This is just a test.</h1>
      <div>
      <button onClick={onClose}>Close Portal</button>
          {children}
      </div>
      </>,
      win.document.getElementById('portal')
  )
};

export default ProjectPage;