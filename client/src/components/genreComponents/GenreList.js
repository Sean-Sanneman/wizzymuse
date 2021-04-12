// React imports
import React, { useState, useEffect } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGenres } from '../../actions/genres';

// Utils
import { getDefaultGenreValues } from '../../utils/listUtilFunctions';

// Styles and Images
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const GenreList = ({
  getGenres,
  genres: {
    allGenres: { genreList },
    loading,
  },
  initialGenreSelection,
  setGenreSelection,
}) => {
  const [genreOptions, setGenreOptions] = useState([]);
  useEffect(() => {
    getGenres();
    if (!loading) {
      setGenreOptions(getDefaultGenreValues(genreList));
    }
  }, [getGenres, loading]);

  const animatedComponents = makeAnimated();

  const handleGenreSelection = (selection) => {
    setGenreSelection(selection);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : initialGenreSelection.length > 0 ? (
        <Select
          isMulti
          name="genres"
          options={genreOptions}
          defaultValue={getDefaultGenreValues(initialGenreSelection)}
          components={animatedComponents}
          onChange={handleGenreSelection}
        />
      ) : (
        <Select
          isMulti
          placeholder={'Genres...'}
          name="genres"
          options={genreOptions}
          components={animatedComponents}
          onChange={handleGenreSelection}
        />
      )}
    </>
  );
};

GenreList.propTypes = {
  getGenres: PropTypes.func.isRequired,
  genres: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  genres: state.genres,
});

export default connect(mapStateToProps, { getGenres })(GenreList);
