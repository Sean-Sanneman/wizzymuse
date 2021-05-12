// React imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';
import { getForums } from '../../actions/forums';

// Components
import Nav from '../layoutComponents/AppNavbar';
import Toolbar from '../layoutComponents/Toolbar';
import ForumSearch from '../forumComponents/ForumSearch';
import ForumTopics from '../forumComponents/ForumTopics';
import Sponsors from '../layoutComponents/Sponsors';

// Styles and Images
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImage from '../../assets/cover/cover-image-studio3.jpg';

const ForumPage = ({ getForums, isAuthenticated }) => {
  useEffect(() => {
    getForums();
  }, [getForums]);
  return (
    <>
      <Nav />
      {isAuthenticated && <Toolbar toolbarType="forumTB" />}

      <Container fluid className="grid">
        <Row className="mainGrid">
          <Col className="leftPanel allPanels">
            <ForumSearch />
          </Col>
          <Col
            xs={8}
            className="midPanel allPanels"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Container fluid="md" className="forumPanel">
              <ForumTopics />
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

ForumPage.propTypes = {
  getForums: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getForums })(ForumPage);
