import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  console.log('isAuthenticated', isAuthenticated);
  console.log('loading', loading);
  const authLinks = (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/pg/dashboard" className="nav-link">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/pg/forum" className="nav-link">
          Forum
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/pg/profiles" className="nav-link">
          Search Artists
        </Link>
      </li>
      <li className="nav-item">
        <a onClick={logout} href="#!" className="nav-link">
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/pg/profiles" className="nav-link">
          Search Artists
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/pg/auth" className="nav-link">
          Login/Register
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark">
      <Link to="/pg" className="navbar-brand">
        <i className="fas fa-code"></i> WIZZY-PG
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {!loading && isAuthenticated ? authLinks : guestLinks}
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth, // we're pulling all the state that is in the auth reducer
});

export default connect(mapStateToProps, { logout })(Navbar);
