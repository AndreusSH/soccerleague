const upcoming_events = {
    ev_1:{ date: "August 4", event: "NYSL Fundraiser"},
    ev_2:{date: "August 16", event: "Season Kick-off: Meet the Teams"},
    ev_3:{date: "September 1", event: "First Game of the Season (Check Game Schedule for details)"}
} 

function Home() {
    return (
        <div className="flex justify-center items-center ">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4 underline">Upcoming Events</h1>
                 {Object.values(upcoming_events).map((event, index) => (
                        <p key={index} className="text-lg mb-4">
                        {event.date} <span className="font-bold">{event.event}</span>
                    </p>
                ))}
               
            </div>
        </div>
    )
}

export default Home;