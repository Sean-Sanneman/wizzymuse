// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Styles and Images
import { ListGroup, Button } from 'react-bootstrap';

const ProfileGenres = ({
  profiles: {
    profile: { profileInfo },
  },
}) => {
  return (
    <>
      <h4 style={{ padding: '3%' }}>Genres</h4>

      <ListGroup>
        <ListGroup.Item
          style={{
            backgroundColor: 'transparent',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          Shownar Lullaby
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: 'transparent',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          Sparkle-bop
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: 'transparent',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          Droid music
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: 'transparent',
            borderLeft: 'none',
            borderRight: 'none',
          }}
        >
          Herglic rage-metal
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

ProfileGenres.propTypes = {
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps)(ProfileGenres);

