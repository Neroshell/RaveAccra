import React from 'react';
import { Carousel } from 'react-bootstrap';
import two from '../../assets/rav_vid2.mp4';
import "./Carousel.css";
import Button from '../Buttons/Button.jsx';
import { Link } from 'react-router-dom';


const buttonStyle = {
  margin: '50px auto',
  padding: '12px',
  '@media (min-width: 767px)': {
  
  }
};

const MyCarousel = () => {
  return (
    <div className='carousel_cont'> 
      <Carousel interval={3000} controls={false} className='caurosel-main-div'>
        <Carousel.Item  className='Carousel-Item ' >
          <div className='image-box'>
            <video className='video-item' autoPlay muted loop playsInline>
              <source src={two} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Carousel.Caption className='carousel_heading'>
              <h1>Experience The Thrill Of  Accra's Nightlife At <span style={{color: " #EC53B0", fontWeight:'900'}}>Rave.</span></h1> 
              <Link to="/about">
                  <Button style={buttonStyle} name="Learn More" className='learn-button'/>
              </Link>
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
          <h1>Elevate Your <span style={{color: " #EC53B0"}}>Nightlife</span> Experience To New Heights  </h1> 
          <Link to="/about">
                  <Button style={buttonStyle} name="Learn More" className='learn-button'/>
              </Link>
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
          <h1>Discover The Pulse Of Accra's After-dark Allure At <span style={{color: " #EC53B0"}}>Rave.</span>  </h1> 
          <Link to="/about">
                  <Button style={buttonStyle} name="Learn More" />
              </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
