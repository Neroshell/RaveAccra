import React from 'react';
import { Carousel } from 'react-bootstrap';
import video from '../../assets/rave_vid.mp4';
import two from '../../assets/rav_vid2.mp4';
import "./Carousel.css";
import Button from '@mui/material/Button';

const MyCarousel = () => {
  return (
    <div className='carousel_cont'> 
      <Carousel interval={5000} controls={false}>
        <Carousel.Item  >
          <div className='image-box'>
            <video className='video-item' autoPlay muted loop playsInline>
              <source src={two} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Carousel.Caption className='carousel_heading'>
              <h3>Experience the heartbeat of Accra's nightlife at <span style={{color: " #EC53B0"}}>Rave.</span>  </h3> 
             <Button variant='contained'>CHeck list</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='image-box'>
            <video className='video-item' autoPlay muted loop playsInline>
              <source src={two} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Carousel.Caption className='carousel_heading'>
          <h3>Elevate your <span style={{color: " #EC53B0"}}>Nightlife</span> experience to new heights  </h3> 
          <Button variant='contained'>CHeck list</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='image-box'>
            <video className='video-item' autoPlay muted loop playsInline>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Carousel.Caption className='carousel_heading'>
          <h3>Discover the pulse of Accra's after-dark allure at <span style={{color: " #EC53B0"}}>Rave.</span>  </h3> 
            <p>Description of the third video.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
