import React from 'react';
import BackendPlayground from '../BackendPlayground';
import Register from './Register';
// import Login from './Login';

const AuthPage = () => {
  return (
    <div className="container-fluid justify-content-center">
      <BackendPlayground />
      <div className="my-4 toolbar">
        <div className="row">
          <div className="col-6">
            <h3 className="font-weight-light text-white-50 my-3">REGISTER:</h3>
            <Register />
          </div>
          <div className="col-6">
            <h3 className="font-weight-light text-white-50 my-3">LOGIN:</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
