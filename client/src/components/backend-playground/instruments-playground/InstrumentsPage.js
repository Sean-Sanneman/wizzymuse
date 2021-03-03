import React from 'react';
import BackendPlayground from '../BackendPlayground';
import AddInstrument from './AddInstrument';
// import InstrumentsList from './InstrumentsList';

const InstrumentsPage = () => {
  return (
    <div className="container-fluid justify-content-center">
      <BackendPlayground />
      <div className="my-4 toolbar">
        <h3 className="font-weight-light text-white-50 my-3">
          Instruments Data:
        </h3>
        <AddInstrument />
        {/* <InstrumentsList /> */}
      </div>
    </div>
  );
};

export default InstrumentsPage;
