import React from 'react';
import './Games.css';
import eventsData from './events.json';
 



console.log("eventsData", Object.keys(eventsData)[0][0])

const capitalize = (word) => {
return word[0].toUpperCase() + word.slice(1);
}

const renderHeader = () => {
    const firstEvent = eventsData[Object.keys(eventsData)[0]][0];
        return Object.keys(firstEvent)
        .filter(key => key !== "address")
        .map((key, index) => <th scope="col" key={index}>{capitalize(key)}</th>);

        
}

const renderEvents = () => {
    let previousDate = null;

    return Object.entries(eventsData).map(([date, events]) => (
        <div key={date}>
            {events.map((event, index) => {
                const currentDate = event.date;
                const showDate = currentDate !== previousDate;
                previousDate = currentDate;

                return (
                    <tr key={index}>
                        
                        <td>{showDate ? currentDate : ''}</td>
                        <td>{event.team}</td>
                        <td>{event.Location}</td>
                        <td>{event.time}</td>
                    </tr>
                );
            })}
        </div>
    ));
}

function Games() {
    //console.log(eventsData);

    return (
        <div>
            <h1>NYSL Game Information</h1>
            <table class="table-styling">
            <thead>
          <tr>{renderHeader()}</tr>
        </thead>
   <tbody>
           
                    {renderEvents()}
                    </tbody>
               </table>
        </div>
    );
}

export default Games;