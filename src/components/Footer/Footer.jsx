import React from 'react';
import logo from '../../assets/rave_logo.png';
import "./Footer.css";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLocationDot, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'; // Corrected icon import
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  const buttonStyles = {
    backgroundColor: '#EC53B0',
    color: 'white',
    padding: '20px 40px',
    margin: '0 auto',
    display: "block",
    '&:hover': {
      backgroundColor: "rgb(49, 25, 107, 0.6)"   
    },
  };
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='footer'>
    
      <ul>
        <li>EVENT</li>
        <li>VIP</li>
        <li>MEDIA</li>
        <li>RENTAL</li>
        <li>SOCIAL</li>
      </ul>
     
      <div className='img-container'>
        <img src={logo} alt="Logo" />
      </div>
      <form>
        <h3 style={{ color: '#FFE5E5', fontSize: '30px', fontWeight: '800' }}>Newsletter</h3>
        <input type="text" placeholder='Enter your email' /> <br></br> <br></br>
        <Button variant="contained" sx={buttonStyles}>Subscribe</Button>
      </form>

    <div className='info'>
            <div className='info-data'>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>

              <div className="text-wrapper">
                  <h3>Rave Night Club</h3>
                  <p>Accra road Labardi accra</p>
              </div>
           </div>


          <div className='info-data'>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faPhone} />
                </div>

              <div className="text-wrapper">
              <h3>Contact phone</h3>
              <p>+233 50 6097 77</p>
              </div>
          </div>

          <div className='info-data'>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faClock} />
                </div>

              <div className="text-wrapper">
              <h3>Working Hours</h3>
              <p>Wednesday - Sunday</p>
              <p> 9pm - 4am</p>
              </div>
          </div>
         
        </div>

        <div className='icon-data'>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
        </div>
        
       
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {year} Copyright<a className='text-white' href='https://mdbootstrap.com/'> Rave Accra</a>
      </div>
    </div>
  );
}

export default Footer;
