// React imports
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profiles';

// Components
import ProfileLeft from './ProfileLeft';
import Spinner from '../layoutComponents/Spinner';

// Styles and Images
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  ListGroup,
} from 'react-bootstrap';

const Profile = ({
  match,
  getProfileById,
  profiles: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(match.params.id); // match the id in the url
  }, [getProfileById, match.params.id]);
  return (
    <>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <>
          <Container>
            <Row>
              <Col className="profilePanels">
                <Container fluid>
                  <Row>
                    <Col>
                      <ProfileLeft profile={profile} auth={auth} />
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

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profiles: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
