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
    <div>
      <h2>Location Details: {location}</h2>
      <div class="map-responsive">
        <iframe src={address }width={600} height={450} frameborder={0}></iframe>

</div>
     </div>
  );
};

export default Location;
