// React imports
import React, { useEffect } from 'react';
// Redux imports
// Components
import Toolbar from '../layoutComponents/Toolbar';
import AppNavbar from '../layoutComponents/AppNavbar';
import Footer from '../layoutComponents/Footer';
// Styles and Images
const MixdownPage = () => {
  return (
    <>
      <AppNavbar />
      <Toolbar />
      <div>MixdownPage</div>
      <Footer />
    </>
  );
};
export default MixdownPage;
