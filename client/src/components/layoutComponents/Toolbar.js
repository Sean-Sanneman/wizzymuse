// React imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Styles and Images
import { Container, Row, Col, Button } from 'react-bootstrap';

// Toolbar links
const toolbarOptions = [
  {
    type: 'dashboardTB',
    buttons: [
      {
        link: '/my-profile',
        style: 'success',
        text: 'MY PROFILE',
      },
      {
        link: '/my-connections',
        style: 'primary',
        text: 'MY CONNECTIONS',
      },
      {
        link: '/my-projects',
        style: 'info',
        text: 'MY PROJECTS',
      },
      {
        link: '/new-project',
        style: 'warning',
        text: 'CREATE',
      },
    ],
  },
  {
    type: 'profilePageTB',
    buttons: [
      {
        link: '/my-connections',
        style: 'success',
        text: 'MY CONNECTIONS',
      },
      {
        link: '/my-projects',
        style: 'primary',
        text: 'OPEN PROJECT',
      },
      {
        link: '/new-project',
        style: 'info',
        text: 'NEW PROJECT',
      },
      {
        link: '/mixdown',
        style: 'warning',
        text: 'MIXDOWN',
      },
    ],
  },
  {
    type: 'forumTB',
    buttons: [
      {
        link: '/forum-topics',
        style: 'success',
        text: 'FORUM TOPICS',
      },
      {
        link: '/my-posts',
        style: 'primary',
        text: 'MY POSTS',
      },
      {
        link: '/my-projects',
        style: 'info',
        text: 'MY PROJECTS',
      },
      {
        link: '/my-connections',
        style: 'warning',
        text: 'MY CONNECTIONS',
      },
    ],
  },
];

const Toolbar = ({ toolbarType, auth: { isAuthenticated, loading } }) => {
  const [toolbarSelected, setToolbarSelected] = useState(null);
  useEffect(() => {
    const toolbarWanted = toolbarOptions.filter(
      (option) => option.type === toolbarType
    );
    const toolbarButtons = toolbarWanted[0].buttons.map((button, idx) => {
      return (
        <Link to={button.link} key={idx}>
          <Button variant={`outline-${button.style} btn mr-3`}>
            {button.text}
          </Button>
        </Link>
      );
    });
    setToolbarSelected(toolbarButtons);
  }, [toolbarType]);

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-center toolbar allPanels"
      >
        <Row style={{ height: '3em' }} className="align-content-center">
          <Col className="toolBtns">
            {!loading && isAuthenticated && toolbarSelected ? (
              toolbarSelected
            ) : (
              <h1 style={{ color: "gray" }}>LOADING ...</h1>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

Toolbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Toolbar);
