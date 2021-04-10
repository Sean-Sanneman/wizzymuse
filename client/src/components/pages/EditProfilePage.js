// React imports
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editProfile } from '../../actions/profiles';

const EditProfilePage = ({ editProfile, history }) => {
  return <div>EditProfilePage</div>;
};

EditProfilePage.propTypes = {
  editProfile: PropTypes.func.isRequired,
};

export default connect(null, { editProfile })(withRouter(EditProfilePage)); // withRouter to pass the history object
