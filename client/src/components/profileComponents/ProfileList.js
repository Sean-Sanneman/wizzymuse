// React imports
import React from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';

// Components
import Spinner from '../layoutComponents/Spinner';
import ProfileCardCollapsible from './ProfileCardCollapsible';

// Utils
import {
  capitalizeName,
  letterizeDigit,
  pluralizeNoun,
  pluralizeVerb,
} from '../../utils/stringUtilFunctions';

const ProfileList = ({ auth: { userMe }, profiles: { loading, profiles } }) => {
  // Filter out the current user's profile in the search results
  const checkForSelf = (profilesArr) =>
    profilesArr.filter((profile) => profile.userId !== userMe.id);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : profiles && checkForSelf(profiles).length > 0 ? (
        <>
          <p className="mt-5 mx-3">
            {capitalizeName(letterizeDigit(checkForSelf(profiles).length))}{' '}
            {pluralizeNoun(checkForSelf(profiles).length, 'profile')}{' '}
            {pluralizeVerb(checkForSelf(profiles).length, 'was')} found.
          </p>
          {checkForSelf(profiles).map((profile, idx) => (
            <ProfileCardCollapsible key={idx} profile={profile} />
          ))}
        </>
      ) : (
        <h4>No profiles found...</h4>
      )}
    </>
  );
};

ProfileList.propTypes = {
  auth: PropTypes.object.isRequired,
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profiles: state.profiles,
});

export default connect(mapStateToProps)(ProfileList);
