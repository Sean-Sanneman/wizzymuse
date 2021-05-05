// React imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profiles';

// Components
import Spinner from '../layoutComponents/Spinner';
import Toolbar from '../layoutComponents/Toolbar';
import SearchProfiles from '../searchComponents/SearchProfiles';
import ProfileList from '../profileComponents/ProfileList';
import Sponsors from '../layoutComponents/Sponsors';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';

const SearchPage = ({ getProfiles, isAuthenticated }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
    <>
      {isAuthenticated && <Toolbar toolbarType="profilePageTB" />}
      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            <SearchProfiles />
          </Col>
          <Col xs={8} className="midPanel allPanels">
            <Container fluid="md">
              <ProfileList />
            </Container>
          </Col>
          <Col className="rightPanel allPanels">
            <Sponsors />
          </Col>
        </Row>
      </Container>
    </>
  );
};

SearchPage.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getProfiles })(SearchPage);
