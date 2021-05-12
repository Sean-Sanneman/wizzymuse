// React imports
import React, { useEffect } from 'react';
// Redux imports
// Components
import Toolbar from '../layoutComponents/Toolbar';
import Nav from '../layoutComponents/AppNavbar';
import Footer from '../layoutComponents/Footer';
// Styles and Images
const MixdownPage = () => {
  return (
    <>
      <Nav />
      <Toolbar />
      <div>MixdownPage</div>
      <Footer />
    </>
  );
};
export default MixdownPage;
