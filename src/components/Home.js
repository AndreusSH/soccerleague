import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";


const upcoming_events = {
    ev_1:{ date: "August 4", event: "NYSL Fundraiser"},
    ev_2:{date: "August 16", event: "Season Kick-off: Meet the Teams"},
    ev_3:{date: "September 1", event: "First Game of the Season (Check Game Schedule for details)"}
} 

function Home() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);


    // Check if the user is logged in and navigate accordingly
    const checkLogin = () => {
       (user) ? navigate("/chat"): navigate("/login");

    };
  
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="text-center">
          <h1 className="md:text-lg lg:text-xl font-bold mb-4 underline">Upcoming Events</h1>
          {Object.values(upcoming_events).map((event, index) => (
            <p key={index} className="text-lg mb-4 sm:text-base md:text-lg lg:text-xl">
              {event.date} <span className="font-bold">{event.event}</span>
            </p>
          ))}
           
        </div>
      </div>
    );
  }
  
  export default Home;
   
  
  
  
  
  