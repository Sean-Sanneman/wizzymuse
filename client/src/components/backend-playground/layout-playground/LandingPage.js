import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const LandingPage = ({ auth: { isAuthenticated } }) => {
  if (isAuthenticated) {
    return <Redirect to="/pg/dashboard" />;
  }

  return (
    <>
      <h1 className="font-weight-light text-center my-3">Backend Playground</h1>
      <div className="my-4 toolbar pt-4">
        <p className="font-weight-light text-white mx-4">
          This is a temporary playground for our back-end developers to test
          their routes, etc. This will eventually be replaced by a dashboard to
          help the webmaster maintain WizzyMuse's database.
        </p>
      </div>
    </>
  );
};

LandingPage.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth, // we're pulling all the state that is in the auth reducer
});

export default connect(mapStateToProps)(LandingPage);
