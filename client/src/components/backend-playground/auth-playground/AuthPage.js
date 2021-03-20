import React from 'react';
import Navbar from '../layout-playground/Navbar';
import Register from './Register';
import Login from './Login';

const AuthPage = () => {
  return (
    <>
      <h1 className="font-weight-light text-center my-3">Backend Playground</h1>
      <Navbar />
      <div className="my-4 toolbar pt-4">
        <div className="my-4 toolbar">
          <div className="row">
            <div className="col-6">
              <h3 className="font-weight-light text-white-50 my-3">
                REGISTER:
              </h3>
              <Register />
            </div>
            <div className="col-6">
              <h3 className="font-weight-light text-white-50 my-3">LOGIN:</h3>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
