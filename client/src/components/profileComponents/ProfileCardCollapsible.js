// React imports
import React, { useEffect, useState } from 'react';

// Utils
import { capitalizeName, pluralizeNoun } from '../../utils/stringUtilFunctions';

// Styles and Images
import { Alert, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileCardCollapsible = ({
  profile: {
    avatar,
    username,
    bio,
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
  const [open, setOpen] = useState(false);

  const TemporaryCollaborateButton = () => {
    const [show, setShow] = useState(false);

    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(!show)} dismissible>
          <Alert.Heading>Coming up soon ...</Alert.Heading>
          <p>
            You want to send a collaborate request to this artist. This
            functionality is not in place yet.
          </p>
        </Alert>
      );
    }
    return (
      <Button variant="success" onClick={() => setShow(true)}>
        COLLABORATE
      </Button>
    );
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
              <TemporaryCollaborateButton />

              {/* Collapse toggle button */}
              <Button
                className="collapseArtistItem"
                style={{ marginRight: '4%' }}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Artist Details{' '}
                <span className="ml-1">
                  {open ? (
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
              <Collapse in={open}>
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

export default ProfileCardCollapsible;
