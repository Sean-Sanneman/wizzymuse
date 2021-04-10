// React imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileMe, editProfile } from '../../actions/profiles';

// Components
import Toolbar from '../layoutComponents/Toolbar';

// Styles and Images
import { Container, Row, Col, Form, Nav } from 'react-bootstrap';

const EditProfilePage = ({
  getProfileMe,
  editProfile,
  profiles: { profileMe, loading },
}) => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    bio: '',
    band: '',
    website: '',
  });

  useEffect(() => {
    getProfileMe();
    setProfileData({
      firstName:
        loading || !profileMe.myInfo.firstName
          ? ''
          : profileMe.myInfo.firstName,
      lastName:
        loading || !profileMe.myInfo.lastName ? '' : profileMe.myInfo.lastName,
      dob: loading || !profileMe.myInfo.dob ? '' : profileMe.myInfo.dob,
      phone: loading || !profileMe.myInfo.phone ? '' : profileMe.myInfo.phone,
      city: loading || !profileMe.myInfo.city ? '' : profileMe.myInfo.city,
      state: loading || !profileMe.myInfo.state ? '' : profileMe.myInfo.state,
      country:
        loading || !profileMe.myInfo.country ? '' : profileMe.myInfo.country,
      bio: loading || !profileMe.myInfo.bio ? '' : profileMe.myInfo.bio,
      band: loading || !profileMe.myInfo.band ? '' : profileMe.myInfo.band,
      website:
        loading || !profileMe.myInfo.website ? '' : profileMe.myInfo.website,
    });
  }, [getProfileMe, loading]);

  const onProfileChange = (e) =>
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });

  return loading && profileMe === null ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Toolbar toolbarType="profilePageTB" />
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
              <Row>
                <Col className="signup">
                  <form>
                    <h3>Edit Your Profile</h3>

                    <div className="form-group">
                      <label>First name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="firstName"
                        value={profileData.firstName}
                        onChange={(e) => onProfileChange(e)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="lastName"
                        value={profileData.lastName}
                        onChange={(e) => onProfileChange(e)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder=""
                        name="dob"
                        value={profileData.dob}
                        onChange={(e) => onProfileChange(e)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="phone"
                        value={profileData.phone}
                        onChange={(e) => onProfileChange(e)}
                      />
                    </div>

                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="city"
                        value={profileData.city}
                        onChange={(e) => onProfileChange(e)}
                      />
                    </div>

                    <div className="form-group">
                      <label>State</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="state"
                        value={profileData.state}
                        onChange={(e) => onProfileChange(e)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Country</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="country"
                        value={profileData.country}
                        onChange={(e) => onProfileChange(e)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Bio</label>
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="A short bio of yourself ..."
                        name="bio"
                        value={profileData.bio}
                        onChange={(e) => onProfileChange(e)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Band</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="band"
                        value={profileData.band}
                        onChange={(e) => onProfileChange(e)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Website</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        name="website"
                        value={profileData.website}
                        onChange={(e) => onProfileChange(e)}
                      />
                    </div>
                  </form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
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
  EditProfilePage
);
