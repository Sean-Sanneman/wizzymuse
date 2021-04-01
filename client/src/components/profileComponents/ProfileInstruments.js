// React imports
import React from 'react';
import { Link } from 'react-router-dom';
// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Styles and Images
import { ListGroup, Button } from 'react-bootstrap';
const ProfileInstruments = ({
  profiles: {
    profile: { profileInfo },
  },
}) => {
  return (
    <>
      <h4 style={{ padding: '3%' }}>Instruments</h4>
      <ListGroup>
        <ListGroup.Item
          style={{
            backgroundColor: 'transparent',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          Kloo Horn
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: 'transparent',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          Pan Flute
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: 'transparent',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          Blissl
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: 'transparent',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          ***
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: 'transparent',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          ***
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: 'transparent',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          ***
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: 'transparent',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          ***
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
ProfileInstruments.propTypes = {
  profiles: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profiles: state.profiles,
});
export default connect(mapStateToProps)(ProfileInstruments);