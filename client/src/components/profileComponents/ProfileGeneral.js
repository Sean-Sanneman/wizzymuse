// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Styles and Images
import { Card, Button } from 'react-bootstrap';

const ProfileGeneral = ({
  profiles: {
    profile: { profileInfo },
  },
  auth,
}) => {
  return (
    <Card
      style={{
        width: '18rem',
        color: '#000000',
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <img
        src={profileInfo.avatar}
        className="babyYoda"
        style={{ width: '100%' }}
        alt="Avatar of artist currently being viewed"
      />
      <Card.Body>
        <Card.Title>{profileInfo.username}</Card.Title>
        <Card.Text>
          {profileInfo.bio && <p>{profileInfo.bio}</p>}
          <div>
            {profileInfo.email && (
              <a
                href={profileInfo.email}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-at fa-2x"></i>
              </a>
            )}
            {profileInfo.website && (
              <a
                href={profileInfo.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe fa-2x"></i>
              </a>
            )}
            {profileInfo.youtube && (
              <a
                href={profileInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-youtube fa-2x"></i>
              </a>
            )}
            {profileInfo.twitter && (
              <a
                href={profileInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            )}
            {profileInfo.facebook && (
              <a
                href={profileInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            )}
            {profileInfo.instagram && (
              <a
                href={profileInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            )}
            {profileInfo.linkedin && (
              <a
                href={profileInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            )}
            {profileInfo.soundcloud && (
              <a
                href={profileInfo.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-soundcloud fa-2x"></i>
              </a>
            )}
          </div>
        </Card.Text>

        {auth.isAuthenticated &&
          auth.loading === false &&
          auth.user.id === profileInfo.userId && (
            <Link to="/#edit-profile">
              <Button variant="success">Edit Profile</Button>
            </Link>
          )}
      </Card.Body>
    </Card>
  );
};

ProfileGeneral.propTypes = {
  profiles: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
  auth: state.auth,
});

export default connect(mapStateToProps)(ProfileGeneral);

