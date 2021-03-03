import React from 'react';
import BackendPlayground from '../BackendPlayground';
import AddArtist from './AddArtist';
// import ArtistsList from './ArtistsList';

const ArtistsPage = () => {
  return (
    <div className="container-fluid justify-content-center">
      <BackendPlayground />
      <div className="my-4 toolbar">
        <h3 className="font-weight-light text-white-50 my-3">Artists Data:</h3>
        <AddArtist />
        {/* <ArtistsList /> */}
      </div>
    </div>
  );
};

export default ArtistsPage;
