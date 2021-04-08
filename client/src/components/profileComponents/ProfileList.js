// React imports
import React, { useState } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Spinner from '../layoutComponents/Spinner';
import ProfileCardCollapsible from './ProfileCardCollapsible';

// Styles and Images

const ProfileList = ({
  profiles: {
    loading,
    profiles: { results, profileList },
  },
}) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <p>{results} profile(s) match your search:</p>
          {profileList.length > 0 ? (
            profileList.map((profile) => (
              <ProfileCardCollapsible key={profile.id} profile={profile} />
            ))
          ) : (
            <h4>No profiles found...</h4>
          )}
        </>
      )}
    </>
  );
};

ProfileList.propTypes = {
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps)(ProfileList);
