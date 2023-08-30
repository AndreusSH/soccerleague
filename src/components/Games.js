import React from 'react';
import eventsData from './events.json'; 
import '../index.css'


console.log("eventsData", Object.keys(eventsData)[0][0])

const capitalize = (word) => {
return word[0].toUpperCase() + word.slice(1);
}


const renderHeader = () => {
    const firstEvent = eventsData[Object.keys(eventsData)[0]][0];
        return Object.keys(firstEvent)
        .filter(key => key !== "address")
        .map((key, index) => <th scope="col" className="px-6 py-3" key={index}>{capitalize(key)}</th>);

        
}

const renderEvents = () => {
    let previousDate = null;
     
    return Object.keys(eventsData).map(dateKey => (
      eventsData[dateKey].map((entry, index) => {
        const currentDate = entry.date;
        const showDate = currentDate !== previousDate;
        previousDate = currentDate;
  
 
          return (
            <tr className= "bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={`${dateKey}_${index}`}>
              <td className="px-4 py-2">{showDate ? entry.date : ""}</td>
              <td className="px-4 py-2">{entry.team}</td>
              <td className="px-4 py-2">{entry.Location}</td>
              <td className="px-4 py-2">{entry.time}</td>
            </tr>
          );
      })
    ))
  }


function Games() {
    

    return (
        
<table className='w-full table-auto'>
  <thead>
    <tr>
      {renderHeader()}
    </tr>
  </thead>
  <tbody>

     
      {renderEvents()}     
   
  </tbody>
</table>
    );
}

export default Games;