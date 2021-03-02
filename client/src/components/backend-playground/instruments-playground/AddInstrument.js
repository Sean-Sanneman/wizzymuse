import React, { useState } from 'react';
import InstrumentFinder from '../../../apis/InstrumentFinder';

const AddInstrument = () => {
  const [instrumentName, setInstrumentName] = useState('');

  const handleSubmitInstrument = async (e) => {
    e.preventDefault();
    try {
      const { data } = await InstrumentFinder.post('/', { instrumentName });
      console.log('new instrument', data);
      // addInstrument(data.instrument);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="my-4">
      <form>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control my-1"
              placeholder="Instrument Name"
              value={instrumentName}
              onChange={(e) => setInstrumentName(e.target.value)}
            />
          </div>
        </div>
        <button
          className="btn btn-primary my-1"
          onClick={handleSubmitInstrument}
        >
          Add Instrument
        </button>
      </form>
    </div>
  );
};

export default AddInstrument;
