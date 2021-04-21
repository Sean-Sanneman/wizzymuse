// React imports
import React from 'react';

// Styles and Images
import { Carousel } from 'react-bootstrap';
import avatar1 from '../../assets/images/stock-avatar-1.jpeg';
import avatar2 from '../../assets/images/stock-avatar-2.jpeg';
import avatar3 from '../../assets/images/stock-avatar-3.jpeg';
import avatar4 from '../../assets/images/stock-avatar-4.png';

const ProfileCarousel = () => {
  return (
    <>
      <h3 style={{ margin: '15px', color: 'seashell', textAlign: 'center' }}>
        Trending Posts
      </h3>
      <Carousel className="friendsCarousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={avatar1}
            className=""
            style={{ width: '18%', padding: '2%' }}
            alt="Stock Avatar 1"
          />
          <Carousel.Caption>
            <h4>Avatar 1</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={avatar2}
            className=""
            style={{ width: '18%', padding: '2%' }}
            alt="Stock Avatar 2"
          />
          <Carousel.Caption>
            <h4>Avatar 2</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={avatar3}
            className=""
            style={{ width: '18%', padding: '2%' }}
            alt="Stock Avatar 3"
          />
          <Carousel.Caption>
            <h4>Avatar 3</h4>
            <p>Praesent commodo cursus magna, vel scelerisque.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={avatar4}
            className=""
            style={{ width: '18%', padding: '2%' }}
            alt="Stock Avatar 4"
          />
          <Carousel.Caption>
            <h4>Avatar 4</h4>
            <p>Praesent commodo cursus magna, vel scelerisque.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ProfileCarousel;

