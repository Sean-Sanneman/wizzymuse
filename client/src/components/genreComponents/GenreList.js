// React imports
import React, { useState, useEffect } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGenres } from '../../actions/genres';

// Styles and Images
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// Util functions
import {
  capitalizeName,
  underscoreToBlank,
} from '../../utils/stringUtilFunctions';

const GenreList = ({
  getGenres,
  genres: {
    allGenres: { genreList },
    loading,
  },
}) => {
  const [genreOptions, setGenreOptions] = useState([]);
  useEffect(() => {
    getGenres();
    if (!loading) {
      setGenreOptions(
        genreList.map((genre) => {
          return {
            value: genre.genreName,
            label: capitalizeName(underscoreToBlank(genre.genreName)),
          };
        })
      );
    }
  }, [getGenres, loading]);

  const animatedComponents = makeAnimated();

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Select
          isMulti
          name="genres"
          options={genreOptions}
          components={animatedComponents}
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
