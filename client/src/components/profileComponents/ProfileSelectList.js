// React imports
import React, { useState, useEffect } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profiles';

// Utils
import { getDefaultNameValues } from '../../utils/listUtilFunctions';

// Styles and Images
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const ProfileSelectList = ({
  getProfiles,
  profiles: { profiles, loading },
  initialNameSelection,
  setNameSelection,
}) => {
  const [profileOptions, setProfileOptions] = useState([]);

  useEffect(() => {
    getProfiles();
    if (!loading) {
      setProfileOptions(getDefaultNameValues(profiles));
    }
  }, [getProfiles, loading]);

  const animatedComponents = makeAnimated();

  const handleNameSelection = (selection) => {
    setNameSelection(selection);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : initialNameSelection.length > 0 ? (
        <Select
          isMulti
          name="profiles"
          options={profileOptions}
          defaultValue={getDefaultNameValues(initialNameSelection)}
          components={animatedComponents}
          onChange={handleNameSelection}
        />
      ) : (
        <Select
          isMulti
          placeholder={'Names...'}
          name="profiles"
          options={profileOptions}
          components={animatedComponents}
          onChange={handleNameSelection}
        />
      )}
    </>
  );
};

ProfileSelectList.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps, { getProfiles })(ProfileSelectList);
