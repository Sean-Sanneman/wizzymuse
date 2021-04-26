// React imports
import React from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';

// Components
import Spinner from '../layoutComponents/Spinner';
import ProfileCardCollapsible from '../profileComponents/ProfileCardCollapsible';

// Utils
import {
  capitalizeName,
  letterizeDigit,
  pluralizeNoun,
  pluralizeVerb,
} from '../../utils/stringUtilFunctions';

const ConnectionList = () => {
  return <div>Connections</div>;
};

export default ConnectionList;
