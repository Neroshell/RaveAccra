import React from 'react'
import './AboutData.css'
import image from '../../assets/club-house3.jpg';

const images = [

    {
        imageOne: image
    },
    
    {
        imageOne: image
    },
    
    {
        imageOne: image
    },
    {
        imageOne: image
    },
]

const AboutData = () => {
  return (
    <div className='about-data'>
             <div className='about-data-content'>
                    <h2>Unleash Your Nightlife Fantasy with Endless Revelry</h2>
                    <p>At ClubRave, we are more than just a venue; we are the heartbeat 
                    of Accra's nightlife, pulsating with energy and rhythm. Step into our world,
                    where every moment is an electrifying symphony of music, 
                    lights, and unforgettable experiences.</p>
                   
                    <h4>Best night life Experience</h4>
                    <p>Immerse yourself in the perfect fusion of music and live performances
                    curated to set new standards in entertainment.  
                    Our stage is graced by the finest Accra DJs and live bands, igniting the dance 
                    floor with infectious beats that resonate through the night.</p>
            </div>
        <div className='image-sect'>
            <div className='image-container'>
                    {images.map((image, index) => (
                    <img key={index} src={image.imageOne} alt={`Image ${index + 1}`} />
                ))}
            </div>

            </div>
    </div>
  )
}

export default AboutData
