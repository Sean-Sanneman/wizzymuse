import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./assets/cover/bg-brushed-metal.jpg";
import Nav from './components/Navbar';
import Main from './components/Main';
import Toolbar from './components/Toolbar';
// import './App.css';

// imports for Backend Playground - TO BE DELETED EVENTUALLY
import BackendPlayground from './components/backend-playground/BackendPlayground';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Nav></Nav>
      <Toolbar></Toolbar>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/pg" component={BackendPlayground} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
