import React from 'react';
import Nav from './components/Navbar';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./assets/cover/bg-brushed-metal.jpg";
// import './App.css';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Nav></Nav>
      <main>
        <Main></Main>
      </main>
    </div>
  );
}

export default App;