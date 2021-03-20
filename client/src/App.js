import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/cover/bg-brushed-metal.jpg';
import { Container, Row, Col } from 'react-bootstrap';

import Nav from './components/Navbar';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Footer from './components/Footer';

import Welcome from './components/Welcome';
import LeftLED from './components/LeftLED';
import ToolbarArtist from './components/ToolbarArtist';
import ToolbarSearch from './components/ToolbarSearch';
import ArtistSearch from './components/ArtistSearch';
import ArtistResults from './components/ArtistResults';
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

          <main>

              <Switch>
                <Route exact path="/signup" component={Signup} />
              </Switch>

            {/* Toolbar Container goes here, with Switch Routes within itself to control button changes.

            In future.RAM, our Navbar was in a "components" folder, BUT the actual components (Diary, ZenQuotes, etc.) were in a separate "pages" folder.
            Relationship here is different - Navbar and Toolbar and component pages are all in SAME "components" folder.

            The Toolbar should use same <Nav.Link as={Link} to='/profile (lowercase 'p')> syntax as the Navbar. Not "href="" (per future.RAM). */}

            {/* toolbar */}
            <Container fluid className="d-flex justify-content-center toolbar allPanels">
            <Row style={{ height: "3em" }} className="align-content-center">
              <Col className="toolBtns">
                <Switch>
                  {/* artist Toolbar routes */}
                  <Route exact path='/artist' component={ToolbarArtist} />
                  <Route exact path='/profile' component={ToolbarArtist} />
                  <Route exact path='/newproject' component={ToolbarArtist} />
                  <Route exact path='/openproject' component={ToolbarArtist} />
                  <Route exact path='/mixdown' component={ToolbarArtist} />
                  {/* search Toolbar routes */}
                  <Route exact path='/newproject' component={ToolbarSearch} />
                  <Route exact path='/openproject' component={ToolbarSearch} />
                  <Route exact path='/search' component={ToolbarSearch} />
                </Switch>
              </Col>
            </Row>
            </Container>


            {/* Landing page grid containers from the "Main" component file, left, middle, right, can go here, 
            and then each container has individual Switch Routes inside of itself.
            These Switch Routes are then controlled by either the Navbar or the Toolbar. */}


            {/* This is the 3-panel grid that goes on all the regular pages */}
            <Container fluid className="grid">
            <Row className="mainGrid">

            {/* left panel */}
              <Col className="leftPanel allPanels">1 of 3
                <Switch>
                  <Route exact path='/' component={LeftLED} />
                  <Route exact path='/artist' component={LeftLED} />
                  <Route exact path='/profile' component={LeftLED} />
                  <Route exact path='/search' component={ArtistSearch} />
                </Switch>
              </Col>

            {/* middle panel */}
              <Col xs={8} className="midPanel allPanels">2 of 3 (wider)
                <Switch>
                  <Route exact path='/' component={Welcome} />
                  <Route exact path='/artist' component={Profile} />
                  <Route exact path='/profile' component={Profile} />
                  <Route exact path='/search' component={ArtistResults} />
                </Switch>
              </Col>

            {/* right panel */}
              <Col className="rightPanel allPanels">3 of 3
                <Switch>

                </Switch>
              </Col>

            </Row>
            </Container>

          </main>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
