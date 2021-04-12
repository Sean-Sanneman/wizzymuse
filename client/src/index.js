import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Styles and Images
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSoundcloud,
  faTiktok,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  fas,
  faAt,
  faAngleDoubleDown,
  faAngleDoubleUp,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  fab,
  fas,
  faYoutube,
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faSoundcloud,
  faTwitch,
  faTiktok,
  faAt,
  faAngleDoubleDown,
  faAngleDoubleUp,
  faGlobe
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
