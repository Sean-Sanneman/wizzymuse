import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/cover/bg-brushed-metal.jpg';
import Nav from './components/Navbar';
import Toolbar from './components/Toolbar';
import Main from './components/Main';
import Footer from './components/Footer';
// import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

// imports for Backend Playground - TO BE DELETED EVENTUALLY
import BackendPlayground from './components/backend-playground/BackendPlayground';
import AuthPage from './components/backend-playground/auth-playground/AuthPage';
import ArtistsPage from './components/backend-playground/artists-playground/ArtistsPage';
import InstrumentsPage from './components/backend-playground/instruments-playground/InstrumentsPage';

// check localStorage for a token and set the global headers with it if there is one
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Nav></Nav>
        <Toolbar></Toolbar>
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/pg" component={BackendPlayground} />
              <Route exact path="/pg/auth" component={AuthPage} />
              <Route exact path="/pg/artists" component={ArtistsPage} />
              <Route exact path="/pg/instruments" component={InstrumentsPage} />
            </Switch>
          </Router>
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
