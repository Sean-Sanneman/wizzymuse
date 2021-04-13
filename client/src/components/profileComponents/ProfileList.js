// React imports
import React from 'react';

// Redux imports
import PropTypes from 'prop-types';
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

const ProfileList = ({ profiles: { loading, profiles } }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : profiles && profiles.length > 0 ? (
        <>
          <p className="mt-5 mx-3">
            {capitalizeName(letterizeDigit(profiles.length))}{' '}
            {pluralizeNoun(profiles.length, 'profile')}{' '}
            {pluralizeVerb(profiles.length, 'was')} found.
          </p>
          {profiles.map((profile, idx) => (
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
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps)(ProfileList);
