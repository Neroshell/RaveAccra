import React from 'react';
import { Carousel } from 'react-bootstrap';
import two from '../../assets/rav_vid2.mp4';
import "./Carousel.css";
import Button from '../Buttons/Button.jsx';


const buttonStyle = {
  margin: '90px auto',
  padding: '15px',
 
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
              <h1>Experience the heartbeat of Accra's nightlife at <span style={{color: " #EC53B0", fontWeight:'900'}}>Rave.</span></h1> 
              <Button style={buttonStyle} name="Learn More" className='learn-button'/> 
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
          <h1>Elevate your <span style={{color: " #EC53B0"}}>Nightlife</span> experience to new heights  </h1> 
          <Button style={buttonStyle} name="Learn More" /> 
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
          <h1>Discover the pulse of Accra's after-dark allure at <span style={{color: " #EC53B0"}}>Rave.</span>  </h1> 
          <Button style={buttonStyle} name="Learn More" /> 
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
