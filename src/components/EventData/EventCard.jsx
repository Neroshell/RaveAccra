import React from 'react';
import './Eventdata.css';
import Button from '../Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EventCard = ({ icon, photo, date, name }) => {
  return (
    <div className='event-card'>
      <div className='event-img'>
        <img src={photo} alt='event' />
      </div>
      <div className='event-info'>
        <div className='date_container'>
            <div><FontAwesomeIcon icon={icon} /></div>
            <p>{date}</p>
       </div>
        <h2>{name}</h2>
        <Button name='Reserve Table' />
      </div>
    </div>
  );
};

export default EventCard;
