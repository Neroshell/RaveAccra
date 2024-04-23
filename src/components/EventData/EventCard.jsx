// EventCard.js
import React from 'react';
import './Eventdata.css';
import Button from '../Buttons/Button';

const buttonStyles = {
  '&:hover': {
    backgroundColor: 'rgb(49, 25, 107)',
  }
};

const EventCard = ({ photo, date, name }) => {
  return (
    <div className='event-card'>
      <div className='event-img'>
        <img src={photo} alt='event' />
      </div>
      <div className='event-info'>
        <p>{date}</p>
        <h2>{name}</h2>
        <Button name='Reserve Table' />


      </div>
    </div>
  );
};

export default EventCard;
