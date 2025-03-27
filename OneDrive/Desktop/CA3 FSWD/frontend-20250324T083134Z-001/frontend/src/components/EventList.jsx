//EventItem Component
import React from 'react'
import data from './components/EventList'

function EventItem() {
  return (
    <div className='EventList'>
        {Data.map((Event,index)=> (
            <div key={index}>
                <p>Name:{Event.name}</p>
                <p>Date:{Event.date}</p>
                <p>Location:{Event.location}</p>


            </div>


        )
        )};
      
    </div>
  )
}

export default EventItem;
