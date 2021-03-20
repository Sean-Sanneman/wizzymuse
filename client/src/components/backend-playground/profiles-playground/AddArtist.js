import React, { useState } from 'react';
import ArtistFinder from '../../../apis/ArtistFinder';

const AddArtist = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  const [band, setBand] = useState('');
  const [website, setWebsite] = useState('');
  const [youtube, setYoutube] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [soundcloud, setSoundcloud] = useState('');

  const handleSubmitArtist = async (e) => {
    e.preventDefault();
    try {
      const body = {
        firstName,
        lastName,
        dob,
        phone,
        city,
        state,
        country,
        bio,
        band,
        website,
        youtube,
        twitter,
        facebook,
        linkedin,
        instagram,
        soundcloud,
      };

      const { data } = await ArtistFinder.post('/', body);
      // addArtist(data.artist);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="my-4">
      <form>
        <div className="form-row">
          <div className="col-6">
            <div className="form-row">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control my-1"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control my-1"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-8"></div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control my-1"
                  placeholder="DOB"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-8"></div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control my-1"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
            <div className="form-row">
              <div className="col-4">
                <input
                  type="text"
                  className="form-control my-1"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control my-1"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control my-1"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="form-row">
              <div className="col align-self-center">
                <textarea
                  rows="8"
                  id="bio"
                  className="form-control my-1"
                  placeholder="Write a few lines about yourself"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col-3">
            <input
              type="text"
              className="form-control my-1"
              placeholder="Band"
              value={band}
              onChange={(e) => setBand(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control my-1"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control my-1"
              placeholder="YouTube"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control my-1"
              placeholder="Soundcloud"
              value={soundcloud}
              onChange={(e) => setSoundcloud(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-3">
            <input
              type="text"
              className="form-control my-1"
              placeholder="Twitter"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control my-1"
              placeholder="Facebook"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control my-1"
              placeholder="LinkedIn"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control my-1"
              placeholder="Instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary my-1" onClick={handleSubmitArtist}>
          Add Artist
        </button>
      </form>
    </div>
  );
};

export default AddArtist;
