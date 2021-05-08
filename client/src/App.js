// React imports
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux imports
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import { getProfileMe, getProfiles } from './actions/profiles';

// Components
import PrivateRoute from './components/routing/PrivateRoute';
import Nav from './components/layoutComponents/AppNavbar';
import Footer from './components/layoutComponents/Footer';
import Signup from './components/authComponents/Signup';
import Landing from './components/pages/Landing';
import Dashboard from './components/pages/Dashboard';
import ProfileMePage from './components/pages/ProfileMePage';
import EditProfilePage from './components/pages/EditProfilePage';
import ProjectPage from './components/pages/ProjectPage';
import MixdownPage from './components/pages/MixdownPage';
import SearchPage from './components/pages/SearchPage';
import ForumPage from './components/pages/ForumPage';
import ForumTopicPage from './components/pages/ForumTopicPage';
import ForumPostPage from './components/pages/ForumPostPage';
import ProjectInit from './components/projectComponents/ProjectInit';

// Styles and Images
import background from './assets/cover/bg-brushed-metal.jpg';

const App = () => {
  useEffect(() => {
    // load all profiles
    // store.dispatch(getProfiles());

    // check localStorage for a token and set the global headers with it if there is one there
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
      store.dispatch(getProfileMe());
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div style={{ backgroundImage: `url(${background})` }}>
          <Nav />
          <main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/search-profiles" component={SearchPage} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/forum" component={ForumPage} />
              <Route exact path="/forum-topics" component={ForumTopicPage} />
              <Route exact path="/post-item" component={ForumPostPage} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/my-profile"
                component={ProfileMePage}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfilePage}
              />
              <PrivateRoute exact path="/init" component={ProjectInit} />
              <PrivateRoute exact path="/project" component={ProjectPage} />
              <PrivateRoute exact path="/mixdown" component={MixdownPage} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
