// React imports
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Redux imports
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

// Components
import PrivateRoute from './components/routing/PrivateRoute';
import Nav from './components/layoutComponents/AppNavbar';
import Footer from './components/layoutComponents/Footer';
import Signup from './components/authComponents/Signup';
import Landing from './components/pages/Landing';
import Dashboard from './components/pages/Dashboard';
import ProfilePage from './components/pages/ProfilePage';
import ProjectPage from './components/pages/ProjectPage';
import MixdownPage from './components/pages/MixdownPage';
import SearchPage from './components/pages/SearchPage';
import ForumPage from './components/pages/ForumPage';
import ForumTopicPage from './components/pages/ForumTopicPage';
import ForumPostPage from './components/pages/ForumPostPage';

// Styles and Images
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/cover/bg-brushed-metal.jpg';

// check localStorage for a token and set the global headers with it if there is one there
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div style={{ backgroundImage: `url(${background})` }}>
          <Nav />
          <main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/search-artists" component={SearchPage} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/forum" component={ForumPage} />
              <Route exact path="/forum-topics" component={ForumTopicPage} />
              <Route exact path="/post-item" component={ForumPostPage} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/profile" component={ProfilePage} />
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