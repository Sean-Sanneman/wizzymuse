// React imports
import React, { useState, useEffect } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGenres } from '../../actions/genres';

// Components
import Spinner from '../layoutComponents/Spinner';
import ArtistItem from './ArtistItem';
// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const ArtistList = () => {
  // search results var redux
  // {searchResults.map((result) => (
  //     <ArtistItem key={result.id} result={result} />
  //   ))}
  return (
    <>
      <ArtistItem />
    </>
  );
};
export default ArtistList;
