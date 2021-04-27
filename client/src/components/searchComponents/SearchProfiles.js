// React imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profiles';

// Components
import InstrumentSelectList from '../instrumentComponents/InstrumentSelectList';
import GenreSelectList from '../genreComponents/GenreSelectList';
import ProfileSelectList from '../profileComponents/ProfileSelectList';

// Styles and Images
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
} from 'react-bootstrap';
import Stamp from '../../assets/images/Wizzymuse-stamp.png';

const SearchProfiles = ({ getProfiles }) => {
  const [instrumentSelection, setInstrumentSelection] = useState([]);
  const [genreSelection, setGenreSelection] = useState([]);
  const [nameSelection, setNameSelection] = useState([]);
  const searchProfileObj = {};

  const onSubmitInstrumentsGenres = (e) => {
    if (instrumentSelection.length > 0) {
      const selectedInstruments = instrumentSelection.map(
        (selection) => selection.value
      );
      searchProfileObj.instruments = selectedInstruments;
    } else {
      searchProfileObj.instruments = '';
    }
    if (genreSelection.length > 0) {
      const selectedGenres = genreSelection.map((selection) => selection.value);
      searchProfileObj.genres = selectedGenres;
    } else {
      searchProfileObj.genres = '';
    }
    getProfiles(searchProfileObj);
  };

  const onSubmitNames = (e) => {
    if (nameSelection.length > 0) {
      const selectedProfileIds = nameSelection.map(
        (selection) => selection.value
      );
      searchProfileObj.profileIds = selectedProfileIds;
    } else {
      searchProfileObj.profileIds = '';
    }
    getProfiles(searchProfileObj);
  };

  return (
    <Container fluid className="searchPanel">
      <Row>
        <Col style={{ textAlign: 'center' }}>
          <h4 className="searchBy">Search by:</h4>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            textAlign: 'center',
            backgroundColor: 'black',
            margin: '3%',
            padding: '12% 3% 18% 3%',
            borderRadius: '8px',
          }}
        >
          <div className="mb-4">
            <InstrumentSelectList
              initialInstrumentSelection={[]}
              setInstrumentSelection={setInstrumentSelection}
            />
          </div>
          <div className="mb-4">
            <GenreSelectList
              initialGenreSelection={[]}
              setGenreSelection={setGenreSelection}
            />
          </div>
          <div className="mb-4">
            <Button
              variant="outline-success"
              type="submit"
              onClick={(e) => onSubmitInstrumentsGenres(e)}
            >
              SUBMIT
            </Button>
          </div>

          <div>
            <h4 style={{ color: 'aqua' }}>OR...</h4>
          </div>
          <div className="mb-4">
            <div className="mb-4">
              <ProfileSelectList
                initialNameSelection={[]}
                setNameSelection={setNameSelection}
              />
            </div>
            <div className="mb-4">
              <Button
                variant="outline-info"
                type="submit"
                onClick={(e) => onSubmitNames(e)}
              >
                FIND
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ textAlign: 'center', marginTop: '24%' }}>
        <Col>
          <div>
            <Container
              fluid
              className="logo-image d-flex justify-content-center"
              style={{ padding: '0' }}
            >
              <img src={Stamp} width="140px" height="140px" alt="Stamp"></img>
            </Container>
            <br />
            <h5>Your online collaborators await!</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

SearchProfiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
};

export default connect(null, { getProfiles })(SearchProfiles);
