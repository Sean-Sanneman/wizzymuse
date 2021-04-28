// React imports
import React from 'react';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';

// Components
import Toolbar from '../layoutComponents/Toolbar';
import ProfileCardCollapsible from '../profileComponents/ProfileCardCollapsible';
import ForumSearch from '../forumComponents/ForumSearch';
import ForumTopics from '../forumComponents/ForumTopics';
import Spinner from '../layoutComponents/Spinner';
import Sponsors from '../layoutComponents/Sponsors';

// Styles and Images
import fakeAd1 from '../../assets/ads/fake-ad-1.jpg';
import fakeAd2 from '../../assets/ads/fake-ad-2.jpg';
import fakeAd3 from '../../assets/ads/fake-ad-3.jpg';
import fakeAd4 from '../../assets/ads/fake-ad-4.jpg';
import fakeAd5 from '../../assets/ads/fake-ad-5.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImage from '../../assets/cover/cover-image-studio3.jpg';

const ForumPage = ({ isAuthenticated }) => {
  return (
    <>
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
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(ForumPage);
