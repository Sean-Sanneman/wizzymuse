import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Main></Main>
      </main>
    </div>
  );
}

export default App;