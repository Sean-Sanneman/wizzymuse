import React from 'react';
import AddArtist from './AddArtist';
// import ArtistsList from './ArtistsList';

const ArtistsPage = () => {
  return (
    <>
      <h1 className="font-weight-light text-center my-3">Backend Playground</h1>
      <div className="my-4 toolbar">
        <h3 className="font-weight-light text-white-50 my-3">Artists Data:</h3>
        <AddArtist />
        {/* <ArtistsList /> */}
      </div>
    </>
  );
};

export default ArtistsPage;
