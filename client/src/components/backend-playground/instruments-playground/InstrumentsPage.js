import React from 'react';
import AddInstrument from './AddInstrument';
// import InstrumentsList from './InstrumentsList';

const InstrumentsPage = () => {
  return (
    <>
      <h1 className="font-weight-light text-center my-3">Backend Playground</h1>
      <div className="my-4 toolbar">
        <h3 className="font-weight-light text-white-50 my-3">
          Instruments Data:
        </h3>
        <AddInstrument />
        {/* <InstrumentsList /> */}
      </div>
    </>
  );
};

export default InstrumentsPage;
