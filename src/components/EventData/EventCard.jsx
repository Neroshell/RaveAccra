import React, { useState } from 'react';
import './Eventdata.css';
import Button from '../Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyModal from '../Modal/MyModal.jsx';

const EventCard = ({ icon, photo, date, name }) => {
  const [showModal, setShowModal] = useState(false);
  
  const handleShowModal = () => {
    setShowModal(true);
    console.log("Modal should show");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
   
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
        <Button name='Reserve Table' onClick={handleShowModal}/>
      </div>
      <MyModal show={showModal} onHide={handleCloseModal} />
    </div>
  );
};

export default EventCard;
