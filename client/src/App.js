import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/cover/bg-brushed-metal.jpg';
import Nav from './components/Navbar';
import Main from './components/Main';
import Artist from './components/Artist';
import Signup from './components/Signup';
import Footer from './components/Footer';
// import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

// imports for Backend Playground - TO BE DELETED EVENTUALLY
import LandingPage from './components/backend-playground/layout-playground/LandingPage';
import AuthPage from './components/backend-playground/auth-playground/AuthPage';
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
          <Nav></Nav>

          {/* Toolbar Container goes here, with Switch Routes within itself to control button changes.

          In future.RAM, our Navbar was in a "components" folder, BUT the actual components (Diary, ZenQuotes, etc.) were in a separate "pages" folder.
          Relationship here is different - Navbar and Toolbar and component pages are all in SAME "components" folder.
          
          The Toolbar should use same <Nav.Link as={Link} to='/profile (lowercase 'p')> syntax as the Navbar. Not "href="" (per future.RAM). */}

          <main>

            {/* Landing page grid containers from the "Main" component file, left, middle, right, can go here, 
            and then each container has individual Switch Routes inside of itself.
            These Switch Routes are then controlled by either the Navbar or the Toolbar. */}


            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/artist" component={Artist} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/pg" component={LandingPage} />
              <Route exact path="/pg/auth" component={AuthPage} />
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
