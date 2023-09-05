import React from 'react';
import { useParams } from 'react-router-dom';
import eventsData from './events.json'; 


const Location = (props) => {
  const { location } = useParams();
  const filteredEvents = Object.values(eventsData)  ;

  const findAddressByLocation = (locationToFind) => {
    for (const eventsArray of filteredEvents) {
      for (const event of eventsArray) {
        if (event.Location === location) {
          return event.address;
        }
      }
    }
    return null; // Return null if location is not found
  };

  const address = findAddressByLocation(location);


   //console.log('valori', Object.values(eventsData))
   return (
    <div className='flex flex-col items-center'>
      <h2 className='mt-10 '>{location}</h2>
      <div className='mt-15 '>
        <iframe  
        title={location} src={address} className='lg:w-[800px] lg:h-[600px] md:w-[600px] md:h-[400px]'>

        </iframe>
</div>
     </div>
  );
};

export default Location;
