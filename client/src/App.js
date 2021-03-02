import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./assets/cover/bg-brushed-metal.jpg";

import Nav from './components/Navbar';
import Toolbar from './components/Toolbar';
import Main from './components/Main';
import Footer from './components/Footer';
// import './App.css';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Nav></Nav>
      <Toolbar></Toolbar>
      <main>
        <Main></Main>
      </main>
        <Footer />
    </div>
  );
}

export default App;