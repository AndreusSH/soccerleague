import React from 'react';
import { useParams } from 'react-router-dom';

const Location = () => {
  const { location } = useParams();

   return (
    <div>
      <h2>Location Details: {location}</h2>
     </div>
  );
};

export default Location;