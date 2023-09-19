import eventsData from './events.json'; 
import '../index.css';
import { Link } from "react-router-dom";

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
}

const renderHeader = () => {
  const firstEvent = eventsData[Object.keys(eventsData)[0]][0];
  return (
    <tr className="bg-white sticky top-0">
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

const renderEvents = () => {
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
        ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        : "bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700";
      return (
        <tr
          className={rowClasses}  
          key={`${dateKey}_${index}`}
        >
          <td className="px-4 py-2">{showDate ? entry.date : ""}</td>
          <td className="px-4 py-2">
            <Link to={`/chat/${uniqueIndex}`}
            className="text-blue-500 font-semibold no-underline">{entry.team}</Link>
          </td>
          <td className="px-4 py-2">
            <Link to={`/games/${entry.Location}`}>{entry.Location}</Link>
          </td>              
          <td className="px-4 py-2">{entry.time}</td>
        </tr>
      );
    })
  ));
}

const Games = () => {
  return (
    <div>
      <table className="w-full table-auto absolute">
        <thead>
          {renderHeader()}
        </thead>
        <tbody >{renderEvents()}</tbody>
      </table>
    </div>
  );
}

export default Games;
