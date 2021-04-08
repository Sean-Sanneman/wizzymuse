// React imports
import React, { useState, useEffect } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGenres } from '../../actions/genres';

// Components
import Spinner from '../layoutComponents/Spinner';
import ProfileCardCollapsible from '../profileComponents/ProfileCardCollapsible';
// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const SearchProfileResults = () => {
  // search results var redux
  // {searchResults.map((result) => (
  //     <ProfileCardCollapsible key={result.id} result={result} />
  //   ))}
  return (
    <>
      <ProfileCardCollapsible />
    </>
  );
};
export default SearchProfileResults;
