import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlay} from '@fortawesome/free-solid-svg-icons'; 
import "./Events.css"
import UpcomingEventsCarousel from './UpcomingEventsCarousel'

const Events = () => {
  return (
    <div className='events'>

      


        <h3>Upcoming Events</h3>
        <div className='upcoming-data'>
            <FontAwesomeIcon icon={faPlay} style={{marginBottom: '12px', color:' #EC53B0'}} />
            <p href="#">View all events</p>
        </div>
        
        <UpcomingEventsCarousel/>


      
    </div>
  )
}

export default Events
