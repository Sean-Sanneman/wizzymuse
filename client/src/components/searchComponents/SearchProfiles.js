// React imports
import React, { useState } from 'react';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profiles';

// Components
import Spinner from '../layoutComponents/Spinner';
import InstrumentList from '../instrumentComponents/InstrumentList';
import GenreList from '../genreComponents/GenreList';

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
  const searchProfileObj = {};

  const onSubmitSearch = (e) => {
    if (instrumentSelection.length > 0) {
      const selectedInstruments = instrumentSelection.map(
        (selection) => selection.value
      );
      searchProfileObj.instruments = selectedInstruments;
    }
    if (genreSelection.length > 0) {
      const selectedGenres = genreSelection.map((selection) => selection.value);
      searchProfileObj.genres = selectedGenres;
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
            <InstrumentList setInstrumentSelection={setInstrumentSelection} />
          </div>
          <div className="mb-4">
            <GenreList setGenreSelection={setGenreSelection} />
          </div>
          <div className="mb-4">
            <Button
              variant="outline-success"
              type="submit"
              onClick={(e) => onSubmitSearch(e)}
            >
              SUBMIT
            </Button>
          </div>

          <div>
            <h4 style={{ color: 'aqua' }}>OR...</h4>
          </div>
          <div className="mb-4">
            {['right'].map((direction) => (
              <DropdownButton
                as={ButtonGroup}
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                size="md"
                variant="info"
                title={'ARTIST NAME'}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            ))}
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
