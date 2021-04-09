// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Styles and Images
import { Card, Button } from 'react-bootstrap';

const ProfileCardGeneral = ({
  profile: { profileMe },
  auth: { loading, isAuthenticated, userMe },
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
        src={profileMe.avatar}
        className="babyYoda"
        style={{ width: '100%' }}
        alt="Avatar of artist currently being viewed"
      />
      <Card.Body>
        <Card.Title>{profileMe.username}</Card.Title>
        <Card.Text>
          {profileMe.bio && <p>{profileMe.bio}</p>}
          <div>
            {profileMe.email && (
              <a
                href={profileMe.email}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-at fa-2x"></i>
              </a>
            )}
            {profileMe.website && (
              <a
                href={profileMe.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe fa-2x"></i>
              </a>
            )}
            {profileMe.youtube && (
              <a
                href={profileMe.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-youtube fa-2x"></i>
              </a>
            )}
            {profileMe.twitter && (
              <a
                href={profileMe.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            )}
            {profileMe.facebook && (
              <a
                href={profileMe.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            )}
            {profileMe.instagram && (
              <a
                href={profileMe.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            )}
            {profileMe.linkedin && (
              <a
                href={profileMe.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            )}
            {profileMe.soundcloud && (
              <a
                href={profileMe.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-soundcloud fa-2x"></i>
              </a>
            )}
          </div>
        </Card.Text>

        {isAuthenticated &&
          loading === false &&
          userMe.id === profileMe.userId && (
            <Link to="/#edit-profile">
              <Button variant="success">Edit Profile</Button>
            </Link>
          )}
      </Card.Body>
    </Card>
  );
};

ProfileCardGeneral.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profiles.profile,
  auth: state.auth,
});

export default connect(mapStateToProps)(ProfileCardGeneral);
