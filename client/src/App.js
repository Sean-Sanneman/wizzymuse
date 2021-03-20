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
import Dashboard from './components/pages/Dashboard';
import Signup from './components/authComponents/Signup';
import Footer from './components/layoutComponents/Footer';

// Styles and Images
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/cover/bg-brushed-metal.jpg';

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
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
