// React imports
import React, { useState, useEffect } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInstruments } from '../../actions/instruments';

// Styles and Images
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// Util functions
import {
  capitalizeName,
  underscoreToBlank,
} from '../../utils/stringUtilFunctions';

const InstrumentList = ({
  getInstruments,
  instruments: {
    allInstruments: { instrumentList },
    loading,
  },
}) => {
  const [instrumentOptions, setInstrumentOptions] = useState([]);
  useEffect(() => {
    getInstruments();
    if (!loading) {
      setInstrumentOptions(
        instrumentList.map((instrument) => {
          return {
            value: instrument.instrumentName,
            label: capitalizeName(underscoreToBlank(instrument.instrumentName)),
          };
        })
      );
    }
  }, [getInstruments, loading]);

  const animatedComponents = makeAnimated();

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Select
          isMulti
          name="instruments"
          options={instrumentOptions}
          components={animatedComponents}
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
