// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Utils
import moment from 'moment';
import {
  capitalizeName,
  pluralizeNoun,
  underscoreToBlank,
} from '../../utils/stringUtilFunctions';

// Styles and Images
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileCardGeneral = ({
  profile: {
    avatar,
    username,
    email,
    bio,
    firstName,
    lastName,
    dob,
    phone,
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
  return (
    <Card
      style={{
        // width: '18rem',
        color: '#000000',
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <Card.Body>
        <Row className="no-gutters">
          <Col xs="3">
            <Card.Img
              className="d-block w-100"
              src={avatar}
              className=""
              style={{ width: '100%', padding: '18px' }}
              alt="avatar"
            />
          </Col>
          <Col xs="auto" className="pt-3 px-3">
            <Card.Title>
              {firstName || lastName ? (
                <p>
                  {firstName} {lastName}
                </p>
              ) : (
                <p>{username}</p>
              )}
            </Card.Title>
            <Card.Text>
              {(city || state || country) && (
                <div>
                  {city && <span>{city}</span>}
                  {city && state && <span>{', '}</span>}
                  {state && <span>{state}</span>}
                  {(city && country) || (state && country) ? (
                    <span>{', '}</span>
                  ) : (
                    ''
                  )}
                  {country && <span>{country}</span>}
                </div>
              )}
              {dob && <div>DOB: {moment(dob).format('YYYY-MM-DD')}</div>}
              <div>
                {phone && (
                  <>
                    <FontAwesomeIcon className="mr-2" icon={['fas', 'phone']} />
                    <span className="mr-3 mr-2">{phone}</span>
                  </>
                )}
                {email && (
                  <>
                    <FontAwesomeIcon className="mr-2" icon={['fas', 'at']} />
                    <a href={email} target="_blank" rel="noopener noreferrer">
                      {email}
                    </a>
                  </>
                )}
              </div>
              {website && (
                <div>
                  <FontAwesomeIcon className="mr-2" icon={['fas', 'globe']} />
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {website}
                  </a>
                </div>
              )}
            </Card.Text>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col>
            <Row className="no-gutters">{bio && <p>{bio}</p>}</Row>
            <Row className="no-gutters">
              <Col xs="6">{band && <p>Band name: {band}</p>}</Col>
              <Col xs="auto">
                {artistName && <p>Artist name: {artistName}</p>}
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col xs="6">
                {instruments.length > 0 ? (
                  <p>
                    {pluralizeNoun(instruments.length, 'Instrument')} played:{' '}
                    {instruments
                      .map((instrument) =>
                        capitalizeName(
                          underscoreToBlank(instrument.instrumentName)
                        )
                      )
                      .join(', ')}
                  </p>
                ) : (
                  <p>
                    You did not list any instrument. Edit your profile to add
                    instruments.
                  </p>
                )}
              </Col>
              <Col xs="auto">
                {genres.length > 0 ? (
                  <p>
                    Music {pluralizeNoun(genres.length, 'genre')}:{' '}
                    {genres
                      .map((genre) =>
                        capitalizeName(underscoreToBlank(genre.genreName))
                      )
                      .join(', ')}
                  </p>
                ) : (
                  <p>
                    You did not list any music genre. Edit your profile to add
                    music genres.
                  </p>
                )}
              </Col>
            </Row>
            <Row className="no-gutters">
              <Col xs="6">
                {instagram && (
                  <div>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={['fab', 'instagram']}
                    />
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {instagram}
                    </a>
                  </div>
                )}
                {facebook && (
                  <div>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={['fab', 'facebook']}
                    />
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {facebook}
                    </a>
                  </div>
                )}
                {twitter && (
                  <div>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={['fab', 'twitter']}
                    />
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                      {twitter}
                    </a>
                  </div>
                )}
                {linkedin && (
                  <div>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={['fab', 'linkedin']}
                    />
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {linkedin}
                    </a>
                  </div>
                )}
              </Col>
              <Col xs="auto">
                {youtube && (
                  <div>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={['fab', 'youtube']}
                    />
                    <a href={youtube} target="_blank" rel="noopener noreferrer">
                      {youtube}
                    </a>
                  </div>
                )}
                {soundcloud && (
                  <div>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={['fab', 'soundcloud']}
                    />
                    <a
                      href={soundcloud}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {soundcloud}
                    </a>
                  </div>
                )}
                {twitch && (
                  <div>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={['fab', 'twitch']}
                    />
                    <a href={twitch} target="_blank" rel="noopener noreferrer">
                      {twitch}
                    </a>
                  </div>
                )}
                {tiktok && (
                  <div>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={['fab', 'tiktok']}
                    />
                    <a href={tiktok} target="_blank" rel="noopener noreferrer">
                      {tiktok}
                    </a>
                  </div>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="no-gutters mt-4">
          <Link to="/edit-profile">
            <Button variant="success">Edit Profile</Button>
          </Link>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProfileCardGeneral;
