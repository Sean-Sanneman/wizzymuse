// React imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux imports
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

// Components
import PrivateRoute from './components/routing/PrivateRoute';
import Nav from './components/layoutComponents/AppNavbar';
import Landing from './components/pages/Landing';
import Signup from './components/authComponents/Signup';
import Footer from './components/layoutComponents/Footer';

// Styles and Images
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/cover/bg-brushed-metal.jpg';
import { Container, Row } from 'react-bootstrap';

// Backend Playground - TO BE DELETED EVENTUALLY
import LandingPage from './components/backend-playground/layout-playground/LandingPage';
import Dashboard from './components/backend-playground/dashboard-playground/Dashboard';

// check localStorage for a token and set the global headers with it if there is one
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ backgroundImage: `url(${background})` }}>
          <Nav />
          <main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/pg" component={LandingPage} />
              <PrivateRoute exact path="/pg/dashboard" component={Dashboard} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
