// React imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profiles';

// Components
import Spinner from '../layoutComponents/Spinner';
import ProfileCardCollapsible from '../profileComponents/ProfileCardCollapsible';

// Utils
import { letterizeDigit, pluralizeNoun } from '../../utils/stringUtilFunctions';

const ConnectionList = ({
  getProfiles,
  profiles: { profiles, loading },
  connections: { connectionsMe },
}) => {
  useEffect(() => {
    if (connectionsMe && connectionsMe.length > 0) {
      const connectionIdsArr = connectionsMe.map(
        (connection) => connection.userId
      );
      getProfiles({ connectionUserIds: connectionIdsArr });
    }
  }, [connectionsMe]);
  return (
    <>
      {connectionsMe && connectionsMe.length > 0 ? (
        <>
          <p className="mt-5 mx-3">
            You have {letterizeDigit(connectionsMe.length)}{' '}
            {pluralizeNoun(connectionsMe.length, 'connection')}.
          </p>
          {loading ? (
            <Spinner />
          ) : (
            profiles &&
            profiles.map((profile, idx) => (
              <ProfileCardCollapsible key={idx} profile={profile} />
            ))
          )}
        </>
      ) : (
        <h4>No connections found...</h4>
      )}
    </>
  );
};

ConnectionList.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  connections: PropTypes.object.isRequired,
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  connections: state.connections,
  profiles: state.profiles,
});

export default connect(mapStateToProps, { getProfiles })(ConnectionList);
