// React imports
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';
import { createConnection } from '../../actions/connections';

// Utils
import { capitalizeName, pluralizeNoun } from '../../utils/stringUtilFunctions';

// Styles and Images
import { Alert, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileCardCollapsible = ({
  createConnection,
  connections: { connectionsMe, loading },
  profile: {
    userId,
    avatar,
    username,
    bio,
    id,
    firstName,
    lastName,
    city,
    state,
    country,
    band,
    artistName,
    website,
    instagram,
    facebook,
    twitter,
    linkedin,
    youtube,
    soundcloud,
    twitch,
    tiktok,
    instruments,
    genres,
  },
}) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [showAlertCollaborate, setShowAlertCollaborate] = useState(false);
  const [showAlertPending, setShowAlertPending] = useState(false);
  const [showAlertMessage, setShowAlertMessage] = useState(false);
  const [showAlertNotAvailable, setShowAlertNotAvailable] = useState(false);
  const [connectionStatusText, setConnectionStatusText] = useState(
    'collaborate'
  );

  useEffect(() => {
    setConnectionStatusText(
      loading
        ? 'loading...'
        : () => {
            let matchingText = 'collaborate';
            connectionsMe.forEach((connection) => {
              if (connection.userId === userId) {
                return (matchingText = connection.connectionStatus);
              }
            });
            return matchingText;
          }
    );
  }, [loading]);

  const handleCollaborate = () => {
    switch (connectionStatusText) {
      case 'collaborate':
        setShowAlertCollaborate(true);
        createConnection(userId, 'pending');
        setConnectionStatusText('pending');
        break;
      case 'pending':
        setShowAlertPending(true);
        break;
      case 'message':
        setShowAlertMessage(true);
        break;
      case 'not available':
        setShowAlertNotAvailable(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Card style={{ borderRadius: '15px' }} className="resultCards">
        <Row className="no-gutters">
          <Col md={2} lg={2}>
            <Card.Img
              className="d-block w-100"
              src={avatar}
              className=""
              style={{ width: '100%', padding: '18px' }}
              alt="avatar"
            />
          </Col>
          <Col>
            <Card.Body
              className="searchArtistTxt my-3"
              style={{ padding: '1%' }}
            >
              <Card.Title>{username}</Card.Title>
              <Card.Text>
                {bio
                  ? bio
                  : 'We need some default text in case this profile is empty.'}
              </Card.Text>
              {showAlertCollaborate && (
                <Alert
                  variant="info"
                  onClose={() => setShowAlertCollaborate(!showAlertCollaborate)}
                  dismissible
                >
                  <Alert.Heading>Coming up soon ...</Alert.Heading>
                  <p>
                    You want to send a collaborate request to this artist. This
                    functionality is not in place yet. However, your request to
                    collaborate has been saved.
                  </p>
                </Alert>
              )}
              {showAlertPending && (
                <Alert
                  variant="warning"
                  onClose={() => setShowAlertPending(!showAlertPending)}
                  dismissible
                >
                  <Alert.Heading>Pending ...</Alert.Heading>
                  <p>
                    This artist has not responded to your request to collaborate
                    yet. The functionality to cancel a request will be
                    implemented in the future.
                  </p>
                </Alert>
              )}
              {showAlertMessage && (
                <Alert
                  variant="success"
                  onClose={() => setShowAlertMessage(!showAlertMessage)}
                  dismissible
                >
                  <Alert.Heading>Coming up soon ...</Alert.Heading>
                  <p>
                    This artist is already in your network and you want to send
                    a message. This functionality is not in place yet.
                  </p>
                </Alert>
              )}
              {showAlertNotAvailable && (
                <Alert
                  variant="danger"
                  onClose={() =>
                    setShowAlertNotAvailable(!showAlertNotAvailable)
                  }
                  dismissible
                >
                  <Alert.Heading>Not available ...</Alert.Heading>
                  <p>
                    This artist has declined your request to collaborate. The
                    functionality to be able to resend a collaborate request
                    after a set amount of time will be implemented in the
                    future.
                  </p>
                </Alert>
              )}
              <Button
                variant="success"
                style={{ textTransform: 'uppercase' }}
                onClick={handleCollaborate}
              >
                {loading ? 'loading...' : connectionStatusText}
              </Button>

              {/* Collapse toggle button */}
              <Button
                className="collapseArtistItem"
                style={{ marginRight: '4%' }}
                onClick={() => setOpenDetails(!openDetails)}
                aria-controls="example-collapse-text"
                aria-expanded={openDetails}
              >
                Artist Details{' '}
                <span className="ml-1">
                  {openDetails ? (
                    <FontAwesomeIcon
                      icon={['fas', 'angle-double-up']}
                      className="ml-2"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={['fas', 'angle-double-down']}
                      className="ml-2"
                    />
                  )}
                </span>
              </Button>
              <Collapse in={openDetails}>
                <div id="example-collapse-text">
                  {(firstName || lastName) && (
                    <p>
                      {firstName} {lastName}
                    </p>
                  )}
                  {city || state || country ? (
                    <p>
                      {city && <span>{city}</span>}
                      {city && state && <span>{', '}</span>}
                      {state && <span>{state}</span>}
                      {(city && country) || (state && country) ? (
                        <span>{', '}</span>
                      ) : (
                        ''
                      )}
                      {country && <span>{country}</span>}
                    </p>
                  ) : (
                    <br />
                  )}
                  {band && <p>Band name: {band}</p>}
                  {artistName && <p>Artist name: {artistName}</p>}
                  {instruments.length > 0 && (
                    <p>
                      {pluralizeNoun(instruments.length, 'Instrument')} played:{' '}
                      {instruments
                        .map((instrument) =>
                          capitalizeName(instrument.instrumentName)
                        )
                        .join(', ')}
                    </p>
                  )}
                  {genres.length > 0 && (
                    <p>
                      Music {pluralizeNoun(genres.length, 'genre')}:{' '}
                      {genres
                        .map((genre) => capitalizeName(genre.genreName))
                        .join(', ')}
                    </p>
                  )}
                  {website && <p>Website: {website}</p>}
                  {instagram && <p>Instagram: {instagram}</p>}
                  {facebook && <p>Facebook: {facebook}</p>}
                  {twitter && <p>Twitter: {twitter}</p>}
                  {linkedin && <p>Linkedin: {linkedin}</p>}
                  {youtube && <p>YouTube: {youtube}</p>}
                  {soundcloud && <p>Soundcloud: {soundcloud}</p>}
                  {twitch && <p>Twitch: {twitch}</p>}
                  {tiktok && <p>TikTok: {tiktok}</p>}
                </div>
              </Collapse>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

ProfileCardCollapsible.propTypes = {
  createConnection: PropTypes.func.isRequired,
  connections: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  connections: state.connections,
});

export default connect(mapStateToProps, { createConnection })(
  ProfileCardCollapsible
);
