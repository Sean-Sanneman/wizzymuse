// React imports
import React, { useState, useEffect } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInstruments } from '../../actions/instruments';

// Utils
import { getDefaultInstrumentValues } from '../../utils/listUtilFunctions';

// Styles and Images
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const InstrumentList = ({
  getInstruments,
  initialInstrumentSelection,
  instruments: { instrumentList, loading },
  setInstrumentSelection,
}) => {
  const [instrumentOptions, setInstrumentOptions] = useState([]);
  useEffect(() => {
    getInstruments();
    if (!loading) {
      setInstrumentOptions(getDefaultInstrumentValues(instrumentList));
    }
  }, [getInstruments, loading]);

  const animatedComponents = makeAnimated();

  const handleInstrumentSelection = (selection) => {
    setInstrumentSelection(selection);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : initialInstrumentSelection.length > 0 ? (
        <Select
          isMulti
          name="instruments"
          options={instrumentOptions}
          defaultValue={getDefaultInstrumentValues(initialInstrumentSelection)}
          components={animatedComponents}
          onChange={handleInstrumentSelection}
        />
      ) : (
        <Select
          isMulti
          placeholder={'Instruments...'}
          name="instruments"
          options={instrumentOptions}
          components={animatedComponents}
          onChange={handleInstrumentSelection}
        />
      )}
    </>
  );
};

InstrumentList.propTypes = {
  getInstruments: PropTypes.func.isRequired,
  instruments: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  instruments: state.instruments,
});

export default connect(mapStateToProps, { getInstruments })(InstrumentList);
