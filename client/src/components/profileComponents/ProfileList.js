// React imports
import React from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Spinner from '../layoutComponents/Spinner';
import ProfileCardCollapsible from './ProfileCardCollapsible';

// Utils
import { pluralizeNoun } from '../../utils/stringUtilFunctions';
import { pluralizeVerb } from '../../utils/stringUtilFunctions';

const ProfileList = ({
  profiles: {
    loading,
    profiles: { results, profileList },
  },
}) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : profileList && profileList.length > 0 ? (
        <>
          <p>
            {results} {pluralizeNoun(results, 'profile')}{' '}
            {pluralizeVerb(results, 'match')} your search:
          </p>
          {profileList.map((profile, idx) => (
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
