import React from 'react';
import './Services.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import serviceImg from '../../assets/pic.jpg'; // Assuming this is the correct import path
import Button from '@mui/material/Button';

const Cardstyles = {
  color: 'white',
  backgroundImage: 'url(' + serviceImg + ')', 
  borderRadius: '0',
 
  '&:hover': {
    backgroundColor:  "rgb(49, 25, 107, 0.6)",
  },
};

const Services = () => {
  return (
    <div className='services'>
      <h3>Services</h3>
      <div className='card-container'>
        <Card variant="outlined" sx={Cardstyles} className='card-class'>
          <CardContent className='card-content'>
            <Button variant='outlined'> More info </Button>
            <h4>Bottle Services</h4>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={Cardstyles} className='card-class'>
          <CardContent className='card-content'>
            <Button variant='outlined'> More info </Button>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={Cardstyles} className='card-class'>
          <CardContent className='card-content'>
            <Button variant='outlined'> More info </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Services;
