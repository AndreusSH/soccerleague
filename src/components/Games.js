import React from 'react';
import './Games.css';
import eventsData from './events.json';
import { useState } from 'react';
 



console.log("eventsData", Object.keys(eventsData)[0][0])

const capitalize = (word) => {
return word[0].toUpperCase() + word.slice(1);
}


const renderHeader = () => {
    const firstEvent = eventsData[Object.keys(eventsData)[0]][0];
        return Object.keys(firstEvent)
        .filter(key => key !== "address")
        .map((key, index) => <th  scope ="col" key={index}>{capitalize(key)}</th>);

        
}

const renderEvents = () => {
    let previousDate = null;
     
    return Object.keys(eventsData).map(dateKey => (
      eventsData[dateKey].map((entry, index) => {
        const currentDate = entry.date;
        const showDate = currentDate !== previousDate;
        previousDate = currentDate;
  
 
          return (
            <tr key={`${dateKey}_${index}`}>
              <td>{showDate ? entry.date : ""}</td>
              <td>{entry.team}</td>
              <td>{entry.Location}</td>
              <td>{entry.time}</td>
            </tr>
          );
        
        
    
      })
    ))
  }


function Games() {
    //console.log(eventsData);

    return (
        <div>
            <h1>NYSL Game Information</h1>
            <table class="table">
                <thead>
                  <tr>{renderHeader()}</tr>
                </thead>
            <tbody>{renderEvents()}</tbody>
               </table>
        </div>
    );
}

export default Games;