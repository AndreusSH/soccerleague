import eventsData from './events.json'; 
import '../index.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

 
const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
}

const renderHeader = () => {
  const firstEvent = eventsData[Object.keys(eventsData)[0]][0];
  return (
    <tr className=" sticky top-0">
      {Object.keys(firstEvent)
        .filter((key) => key !== "address")
        .map((key, index) => (
          <th
            scope="col"
            className="px-6 py-3 sticky top-0 bg-gray-400 dark:bg-gray-800 dark:border-gray-700"
            key={index}
          >
            {capitalize(key)}
          </th>
        ))}
    </tr>
  );
}

const renderEvents = (device) => {
  let previousDate = null;
  let uniqueIndex = 0; 

  return Object.keys(eventsData).map((dateKey, dateIndex) => (
    eventsData[dateKey].map((entry, index) => {
      const currentDate = entry.date;
      const showDate = currentDate !== previousDate;
      previousDate = currentDate;
      uniqueIndex++;
      const isEvenRow = dateIndex % 2 === 0;
      const rowClasses = isEvenRow
        ? " border-b dark:bg-gray-800 dark:border-gray-700"
        : "border-b dark:bg-gray-800 dark:border-gray-700";
       
        return (device === "phone")
        ? card(currentDate, entry.team, entry.Location, entry.time)
        : table(
            rowClasses,
            dateKey,
            index,
            showDate,
            currentDate,
            uniqueIndex,
            entry.team,
            entry.Location,
            entry.time
          );
    })
  ));
}
 


const card = (date, team, location, time, uniqueIndex) => {
  return (
    <div className=" w-screen flex  flex-col justify-center items-center">
    <div className="card h-32 w-56 rounded-lg shadow-lg p-4 m-4 ">
      <h1 className="text-2xl font-bold mb-2">{date}</h1>
      <Link to={`/chat/${uniqueIndex}`}
    className="text-blue-500 font-semibold no-underline">{team}</Link>
      <Link
        to={`/games/${location}`}
        className="text-blue-500 font-semibold no-underline mt-2 block"
      >
        {location}
      </Link>
    </div>
    </div>
  );
}

const table = (rowClasses, dateKey, index, showDate, date, uniqueIndex, team, location, time) =>{

return (
  <tr
  className={rowClasses}  
  key={`${dateKey}_${index}`}
>
  <td className="px-4 py-2">{showDate ? date : ""}</td>
  <td className="px-4 py-2">
    <Link to={`/chat/${uniqueIndex}`}
    className="text-blue-500 font-semibold no-underline">{team}</Link>
  </td>
  <td className="px-4 py-2">
    <Link to={`/games/${location}`}
    className="text-blue-500 font-semibold no-underline"
    >{location}</Link>
  </td>              
  <td className="px-4 py-2">{time}</td>
</tr>
)
}




const Games = () => {
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 620);

  useEffect(() => {
    // Add an event listener to track window size changes
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 620);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div>
      {smallScreen ? (
        // Render the card view for small screens
        <div>
          <tbody>{renderEvents("phone")}</tbody>
        </div>
      ) : (
        // Render the table view for large screens
        <div className='h-screen'>
        <table className=" h-full w-full  table-auto absolute">
          <thead>{renderHeader()}</thead>
          <tbody className='h-full min-h-screen'>{renderEvents("desktop")}</tbody>
        </table>
        </div>
      )}
    </div>
  </>
  );
}

export default Games;
