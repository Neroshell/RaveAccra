import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlay} from '@fortawesome/free-solid-svg-icons'; 
import "./Events.css"
import UpcomingEventsCarousel from './UpcomingEventsCarousel'
import { Link } from 'react-router-dom';


const Events = () => {
  return (
    <div className='events'>

        <div className='event-headings'>
            <h3>Events</h3>
            <h4>Upcominig events</h4>
        </div>
        <div className='upcoming-data'>
            <FontAwesomeIcon icon={faPlay} style={{ color:' #EC53B0'}} />
            <Link to="/event" className='upcoming-data-p'>View all Event</Link>
        </div>
        
        <UpcomingEventsCarousel/>

       


      
    </div>
  )
}

export default Events
