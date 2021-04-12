// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Styles and Images
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileCardGeneral = ({ profiles: { profileMe } }) => {
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
        src={profileMe.myInfo.avatar}
        className="babyYoda"
        style={{ width: '100%' }}
        alt="my avatar"
      />
      <Card.Body>
        <Card.Title>{profileMe.myInfo.username}</Card.Title>
        <Card.Text>
          {profileMe.bio && <p>{profileMe.myInfo.bio}</p>}
          <div>
            <a
              href={profileMe.myInfo.email}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={['fas', 'at']}
                transform="down-4 grow-2.5"
              />
              {profileMe.myInfo.email}
            </a>
            {profileMe.myInfo.website && (
              <a
                href={profileMe.myInfo.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={['fas', 'globe']} transform="grow-2.5" />
                {profileMe.myInfo.website}
              </a>
            )}
          </div>
        </Card.Text>
        <Link to="/edit-profile">
          <Button variant="success">Edit Profile</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

ProfileCardGeneral.propTypes = {
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps)(ProfileCardGeneral);
