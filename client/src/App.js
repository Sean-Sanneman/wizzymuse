import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/cover/bg-brushed-metal.jpg';
import Nav from './components/Navbar';
import Toolbar from './components/Toolbar';
import Main from './components/Main';
import Signup from './components/Signup';
import Footer from './components/Footer';
// import './App.css';

// imports for Backend Playground - TO BE DELETED EVENTUALLY
import BackendPlayground from './components/backend-playground/BackendPlayground';

function App() {
  return (
    <Router>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Nav></Nav>
        <Toolbar></Toolbar>
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/pg" component={BackendPlayground} />
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
