import React from 'react';
import './Services.css';
import serviceImg from '../../assets/pop_bottle.jpg'; 
import birthdayImg from '../../assets/birthday.jpg'; 
import Button from '@mui/material/Button';



const ButtonDesign = {
  color: '#FFE5E5', 
  outlineColor: '#FFE5E5',
  backgroundColor: '#EC53B0 ',
  padding: '15px 30px',
  marginTop: '100px',
  '@media (min-width: 768px)': { // Adjust margin-top for large screens
    marginTop: '35px',
  },
  '&:hover': {
    backgroundColor:  "#FFE5E5",
    color: 'var(--primary-color)'
  },
};



const Services = () => {
  return (
    <div className='services'>
    <div className='service-heading'>
      <h3>Services</h3> 
      <h4>Services</h4>
      <p> Gateways to limitless <span style={{color: ' #A076F9', fontWeight: 'bolder'}}>unforgettable </span> experiences. </p>
      </div>
      <div className='card-container'>
          <div className='card-class' style={{ backgroundImage: `url(${serviceImg})` }}>
            <div className='card-content'>
          <h4>Bottle Services</h4>
            <Button variant='contained' sx={ButtonDesign}> More info </Button>
           
          </div>
        </div>
        <div  className='card-class'  style={{ backgroundImage: `url(${birthdayImg})` }}>
          <div className='card-content'>
          <h4>Birthday Parties</h4>
            <Button variant='contained' sx={ButtonDesign}> More info </Button>
          </div>
        </div>
        <div  className='card-class'  style={{ backgroundImage: `url(${serviceImg})` }}>
          <div className='card-content' >
          <h4>Bottle Services</h4>
            <Button variant='contained' sx={ButtonDesign}> More info </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
