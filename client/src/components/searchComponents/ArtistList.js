// React imports
import React from 'react';
// Redux imports
// Components
import Spinner from '../layoutComponents/Spinner';
import ArtistItem from '../searchComponents/ArtistItem';
// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const ArtistList = () => {
    // search results var redux
    // {searchResults.map((result) => (
    //     <ArtistItem key={result.id} result={result} />
    //   ))}
    return (
      <>
<ArtistItem/>
          </>
    );
  };
  export default ArtistList;