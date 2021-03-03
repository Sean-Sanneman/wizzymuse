import React from 'react';
import { Link } from 'react-router-dom';

const BackendPlayground = () => {
  return (
    <>
      <h1 className="font-weight-light text-center my-3">Backend Playground</h1>
      <div className="container">
        <div className="pt-3 d-flex justify-content-around">
          <Link to="/pg/auth">
            <button type="button" className="btn btn-outline-light">
              Register/Login
            </button>
          </Link>
          <Link to="/pg/artists">
            <button type="button" className="btn btn-outline-light">
              Artists
            </button>
          </Link>
          <Link to="/pg/genres">
            <button type="button" className="btn btn-outline-light">
              Genres
            </button>
          </Link>
          <Link to="/pg/instruments">
            <button type="button" className="btn btn-outline-light">
              Instruments
            </button>
          </Link>
        </div>
      </div>
      <div className="my-4 toolbar pt-4">
        <p className="font-weight-light text-white mx-4">
          This is a temporary playground for our back-end developers to test
          their routes, etc. This will eventually be replaced by a dashboard to
          help the webmaster maintain WizzyMuse's database.
        </p>
      </div>
    </>
  );
};

export default BackendPlayground;
