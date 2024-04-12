import React from 'react';
import './Services.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import serviceImg from '../../assets/pop_bottle.jpg'; 
import birthdayImg from '../../assets/birthday.jpg'; 
import Button from '@mui/material/Button';


const Cardstyles = {
  color: 'white',
  backgroundImage: 'url(' + serviceImg + ')', 
  borderRadius: '0',
  transition: 'transform 2s ease-in-out',
  '&:hover': {
    
  },
};

const ButtonStyles = {
  color: '#FFE5E5', 
  outlineColor: '#FFE5E5',
  backgroundColor: '#EC53B0 ',
  padding: '15px 30px',
  marginTop: '70px',
  '@media (min-width: 768px)': { // Adjust margin-top for large screens
    marginTop: '135px',
  },
  '&:hover': {
    backgroundColor:  "#FFE5E5",
    color: 'var(--primary-color)'
  },
};



const Services = () => {
  return (
    <div className='services'>
    <div style={{lineHeight: '1'}}>
      <h3>Services</h3>
      <p style={{fontSize: '20px'}}> Gateways to limitless <span style={{color: ' #A076F9', fontWeight: 'bolder'}}>unforgettable </span><span style={{color: '#EC53B0',  fontWeight: 'bolder'}}> experiences.</span> </p>
      </div>
      <div className='card-container'>
          <div className='card-class' style={{ backgroundImage: `url(${serviceImg})` }}>
            <div className='card-content'>
          <h4>Bottle Services</h4>
            <Button variant='contained' sx={ButtonStyles}> More info </Button>
           
          </div>
        </div>
        <div  className='card-class'  style={{ backgroundImage: `url(${birthdayImg})` }}>
          <div className='card-content'>
          <h4>Birthday Parties</h4>
            <Button variant='contained' sx={ButtonStyles}> More info </Button>
          </div>
        </div>
        <div  className='card-class'  style={{ backgroundImage: `url(${serviceImg})` }}>
          <div className='card-content' >
          <h4>Bottle Services</h4>
            <Button variant='contained' sx={ButtonStyles}> More info </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
