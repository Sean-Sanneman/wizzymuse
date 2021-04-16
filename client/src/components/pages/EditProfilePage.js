// React imports
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileMe, editProfile } from '../../actions/profiles';

// Utils
import moment from 'moment';
import { formatInstruments, formatGenres } from '../../utils/listUtilFunctions';

// Components
import Spinner from '../layoutComponents/Spinner';
import Toolbar from '../layoutComponents/Toolbar';
import InstrumentList from '../instrumentComponents/InstrumentList';
import GenreList from '../genreComponents/GenreList';

// Styles and Images
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditProfilePage = ({
  getProfileMe,
  editProfile,
  profiles: { profileMe, loading },
  history,
}) => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    dob: null,
    phone: '',
    city: '',
    state: '',
    country: '',
    bio: '',
    band: '',
    artistName: '',
    website: '',
    youtube: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
    soundcloud: '',
    twitch: '',
    tiktok: '',
    instruments: [],
    genres: [],
  });
  const [instrumentSelection, setInstrumentSelection] = useState([]);
  const [genreSelection, setGenreSelection] = useState([]);
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getProfileMe();
    setProfileData({
      firstName: loading || !profileMe.firstName ? '' : profileMe.firstName,
      lastName: loading || !profileMe.lastName ? '' : profileMe.lastName,
      dob:
        loading || !profileMe.dob
          ? null
          : moment(profileMe.dob).format('YYYY-MM-DD'),
      phone: loading || !profileMe.phone ? '' : profileMe.phone,
      city: loading || !profileMe.city ? '' : profileMe.city,
      state: loading || !profileMe.state ? '' : profileMe.state,
      country: loading || !profileMe.country ? '' : profileMe.country,
      bio: loading || !profileMe.bio ? '' : profileMe.bio,
      band: loading || !profileMe.band ? '' : profileMe.band,
      artistName: loading || !profileMe.artistName ? '' : profileMe.artistName,
      website: loading || !profileMe.website ? '' : profileMe.website,
      youtube: loading || !profileMe.youtube ? '' : profileMe.youtube,
      twitter: loading || !profileMe.twitter ? '' : profileMe.twitter,
      facebook: loading || !profileMe.facebook ? '' : profileMe.facebook,
      linkedin: loading || !profileMe.linkedin ? '' : profileMe.linkedin,
      instagram: loading || !profileMe.instagram ? '' : profileMe.instagram,
      soundcloud: loading || !profileMe.soundcloud ? '' : profileMe.soundcloud,
      twitch: loading || !profileMe.twitch ? '' : profileMe.twitch,
      tiktok: loading || !profileMe.tiktok ? '' : profileMe.tiktok,
      instruments:
        loading || !profileMe.instruments ? [] : profileMe.instruments,
      genres: loading || !profileMe.genres ? [] : profileMe.genres,
    });
  }, [getProfileMe, loading]);

  const onProfileChange = (e) =>
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });

  const onSaveProfile = (e) => {
    e.preventDefault();

    instrumentSelection.length === 0
      ? setInstrumentSelection(profileMe.instruments)
      : setInstrumentSelection(instrumentSelection);

    genreSelection.length === 0
      ? setGenreSelection(profileMe.genres)
      : setGenreSelection(genreSelection);

    editProfile(
      profileData,
      formatInstruments(instrumentSelection),
      formatGenres(genreSelection),
      history
    );
  };

  return (
    <>
      <Toolbar toolbarType="dashboardTB" />
      {loading && profileMe === null ? (
        <Spinner />
      ) : (
        <>
          <Container fluid className="grid">
            <Row className="mainGrid">
              <Col className="leftPanel allPanels">
                <Container fluid="sm">
                  <Row>
                    <Col className="welcomeText">
                      <h4>Welcome to</h4>
                      <h2>WizzyMuse</h2>
                      <br></br>
                      <h4>Your online collaborators await!</h4>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col xs={8} className="midPanel allPanels">
                <Container>
                  <Row className="my-3">
                    <Col className="profilePanels">
                      <Form className="mx-2 my-4" style={{ color: 'black' }}>
                        <h3>
                          Let's get some information to make your profile stand
                          out!
                        </h3>
                        <Form.Row className="align-items-center mt-3">
                          <InputGroup className="my-1">
                            <Form.Group className="mx-1">
                              <Form.Label htmlFor="profileFormInputFirstName">
                                First Name
                              </Form.Label>
                              <Form.Control
                                id="profileFormInputFirstName"
                                type="text"
                                placeholder=""
                                name="firstName"
                                value={profileData.firstName}
                                onChange={(e) => onProfileChange(e)}
                              />
                            </Form.Group>
                            <Form.Group className="mx-1">
                              <Form.Label htmlFor="profileFormInputLastName">
                                Last Name
                              </Form.Label>
                              <Form.Control
                                id="profileFormInputLastName"
                                type="text"
                                placeholder=""
                                name="lastName"
                                value={profileData.lastName}
                                onChange={(e) => onProfileChange(e)}
                              />
                            </Form.Group>
                            <Form.Group className="mx-1">
                              <Form.Label htmlFor="profileFormInputDob">
                                Date of Birth
                              </Form.Label>
                              <Form.Control
                                id="profileFormInputDob"
                                type="date"
                                placeholder=""
                                name="dob"
                                value={profileData.dob}
                                onChange={(e) => onProfileChange(e)}
                              />
                            </Form.Group>
                          </InputGroup>
                        </Form.Row>
                        <Form.Row className="align-items-center">
                          <InputGroup className="my-1">
                            <Form.Group className="mx-1">
                              <Form.Label htmlFor="profileFormInputCity">
                                City
                              </Form.Label>
                              <Form.Control
                                id="profileFormInputCity"
                                type="text"
                                placeholder=""
                                name="city"
                                value={profileData.city}
                                onChange={(e) => onProfileChange(e)}
                              />
                            </Form.Group>
                            <Form.Group className="mx-1">
                              <Form.Label htmlFor="profileFormInputState">
                                State
                              </Form.Label>
                              <Form.Control
                                id="profileFormInputState"
                                type="text"
                                placeholder=""
                                name="state"
                                value={profileData.state}
                                onChange={(e) => onProfileChange(e)}
                              />
                            </Form.Group>
                            <Form.Group className="mx-1">
                              <Form.Label htmlFor="profileFormInputCountry">
                                Country
                              </Form.Label>
                              <Form.Control
                                id="profileFormInputCountry"
                                type="text"
                                placeholder=""
                                name="country"
                                value={profileData.country}
                                onChange={(e) => onProfileChange(e)}
                              />
                            </Form.Group>
                          </InputGroup>
                        </Form.Row>
                        <Form.Row className="align-items-center">
                          <InputGroup className="m-1">
                            <Form.Group className="mx-1 w-100">
                              <Form.Label htmlFor="profileFormInputBio">
                                Bio
                              </Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                id="profileFormInputBio"
                                type="text"
                                placeholder="A short bio of yourself ..."
                                name="bio"
                                value={profileData.bio}
                                onChange={(e) => onProfileChange(e)}
                              />
                            </Form.Group>
                          </InputGroup>
                        </Form.Row>
                        <Form.Row className="align-items-center">
                          <InputGroup className="m-1">
                            <Form.Group className="mx-1">
                              <Form.Label htmlFor="profileFormInputPhone">
                                Phone
                              </Form.Label>
                              <Form.Control
                                id="profileFormInputPhone"
                                type="text"
                                placeholder=""
                                name="phone"
                                value={profileData.phone}
                                onChange={(e) => onProfileChange(e)}
                              />
                            </Form.Group>
                            <Form.Group className="mx-1">
                              <Form.Label htmlFor="profileFormInputWebsite">
                                Website
                              </Form.Label>
                              <Form.Control
                                id="profileFormInputWebsite"
                                type="text"
                                placeholder=""
                                name="website"
                                value={profileData.website}
                                onChange={(e) => onProfileChange(e)}
                              />
                            </Form.Group>
                          </InputGroup>
                        </Form.Row>
                        <Form.Row className="align-items-center">
                          <InputGroup className="m-1">
                            <Form.Group className="mx-1">
                              <Form.Label htmlFor="profileFormInputBand">
                                Band
                              </Form.Label>
                              <Form.Control
                                id="profileFormInputBand"
                                type="text"
                                placeholder=""
                                name="band"
                                value={profileData.band}
                                onChange={(e) => onProfileChange(e)}
                              />
                            </Form.Group>
                            <Form.Group className="mx-1">
                              <Form.Label htmlFor="profileFormInputArtistName">
                                Artist Name
                              </Form.Label>
                              <Form.Control
                                id="profileFormInputArtistName"
                                type="text"
                                placeholder=""
                                name="artistName"
                                value={profileData.artistName}
                                onChange={(e) => onProfileChange(e)}
                              />
                            </Form.Group>
                          </InputGroup>
                        </Form.Row>
                        <Form.Row className="align-items-center my-3">
                          <Form.Label
                            column
                            sm={4}
                            htmlFor="profileFormInputInstruments"
                          >
                            Select all instruments you play:
                          </Form.Label>
                          <Col sm={6}>
                            <InstrumentList
                              id="profileFormInputInstruments"
                              initialInstrumentSelection={
                                profileData.instruments
                              }
                              setInstrumentSelection={setInstrumentSelection}
                            />
                          </Col>
                        </Form.Row>
                        <Form.Row className="align-items-center mb-3">
                          <Form.Label
                            column
                            sm={4}
                            htmlFor="profileFormInputGenres"
                          >
                            Select all music genres you like:
                          </Form.Label>
                          <Col sm={6}>
                            <GenreList
                              id="profileFormInputGenres"
                              initialGenreSelection={profileData.genres}
                              setGenreSelection={setGenreSelection}
                            />
                          </Col>
                        </Form.Row>
                        <Form.Row className="my-1">
                          <Button
                            type="button"
                            className="btn btn-dark mx-1"
                            onClick={() =>
                              toggleSocialInputs(!displaySocialInputs)
                            }
                          >
                            Social Network Links{' '}
                            <span className="ml-1">
                              {displaySocialInputs ? (
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
                        </Form.Row>

                        {displaySocialInputs && (
                          <>
                            <Form.Row className="align-items-center">
                              <InputGroup className="m-1">
                                <InputGroup.Prepend>
                                  <InputGroup.Text>
                                    <FontAwesomeIcon
                                      icon={['fab', 'instagram']}
                                    />
                                  </InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control
                                  id="profileFormInputInstagram"
                                  type="text"
                                  placeholder="Instagram"
                                  name="instagram"
                                  value={profileData.instagram}
                                  onChange={(e) => onProfileChange(e)}
                                />
                                <InputGroup.Prepend>
                                  <InputGroup.Text>
                                    <FontAwesomeIcon
                                      icon={['fab', 'facebook']}
                                    />
                                  </InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control
                                  id="profileFormInputFacebook"
                                  type="text"
                                  placeholder="Facebook"
                                  name="facebook"
                                  value={profileData.facebook}
                                  onChange={(e) => onProfileChange(e)}
                                />
                              </InputGroup>
                              <InputGroup className="m-1">
                                <InputGroup.Prepend>
                                  <InputGroup.Text>
                                    <FontAwesomeIcon
                                      icon={['fab', 'twitter']}
                                    />
                                  </InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control
                                  id="profileFormInputTwitter"
                                  type="text"
                                  placeholder="Twitter"
                                  name="twitter"
                                  value={profileData.twitter}
                                  onChange={(e) => onProfileChange(e)}
                                />
                                <InputGroup.Prepend>
                                  <InputGroup.Text>
                                    <FontAwesomeIcon
                                      icon={['fab', 'linkedin']}
                                    />
                                  </InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control
                                  id="profileFormInputLinkedIn"
                                  type="text"
                                  placeholder="Linkedin"
                                  name="linkedin"
                                  value={profileData.linkedin}
                                  onChange={(e) => onProfileChange(e)}
                                />
                              </InputGroup>
                              <InputGroup className="m-1">
                                <InputGroup.Prepend>
                                  <InputGroup.Text>
                                    <FontAwesomeIcon
                                      icon={['fab', 'youtube']}
                                    />
                                  </InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control
                                  id="profileFormInputYoutube"
                                  type="text"
                                  placeholder="YouTube"
                                  name="youtube"
                                  value={profileData.youtube}
                                  onChange={(e) => onProfileChange(e)}
                                />
                                <InputGroup.Prepend>
                                  <InputGroup.Text>
                                    <FontAwesomeIcon
                                      icon={['fab', 'soundcloud']}
                                    />
                                  </InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control
                                  id="profileFormInputSoundcloud"
                                  type="text"
                                  placeholder="SoundCloud"
                                  name="soundcloud"
                                  value={profileData.soundcloud}
                                  onChange={(e) => onProfileChange(e)}
                                />
                              </InputGroup>
                              <InputGroup className="m-1">
                                <InputGroup.Prepend>
                                  <InputGroup.Text>
                                    <FontAwesomeIcon icon={['fab', 'twitch']} />
                                  </InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control
                                  id="profileFormInputTwitch"
                                  type="text"
                                  placeholder="Twitch"
                                  name="twitch"
                                  value={profileData.twitch}
                                  onChange={(e) => onProfileChange(e)}
                                />
                                <InputGroup.Prepend>
                                  <InputGroup.Text>
                                    <FontAwesomeIcon icon={['fab', 'tiktok']} />
                                  </InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control
                                  id="profileFormInputTiktok"
                                  type="text"
                                  placeholder="TikTok"
                                  name="tiktok"
                                  value={profileData.tiktok}
                                  onChange={(e) => onProfileChange(e)}
                                />
                              </InputGroup>
                            </Form.Row>
                          </>
                        )}
                        <Form.Row className="my-2">
                          <Col sm={12}>
                            <Button
                              type="submit"
                              className="btn btn-info w-100 my-3"
                              onClick={(e) => onSaveProfile(e)}
                            >
                              SAVE PROFILE
                            </Button>
                          </Col>
                        </Form.Row>
                      </Form>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col className="rightPanel allPanels">
                <Container fluid="sm">
                  <Row>
                    <Col className="LED-text">
                      <p>Advertisement 1</p>
                      <p>Advertisement 2</p>
                      <p>Advertisement 3</p>
                      <p>...</p>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

EditProfilePage.propTypes = {
  getProfileMe: PropTypes.func.isRequired,
  editProfile: PropTypes.func.isRequired,
  profiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps, { getProfileMe, editProfile })(
  withRouter(EditProfilePage)
); // withRouter to pass the history object
