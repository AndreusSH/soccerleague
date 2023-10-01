import React, { useState } from "react";
import PostMessage from "./PostMessage";
import { useParams } from "react-router-dom";


const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { id } = useParams();

  const handleSendMessage = () => {
    // Call the PostMessage function with the message as an argument
    PostMessage(message, id);
  };

  return (
    <>
      <form className="h-screen flex flex-col items-center">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Message"
            aria-label="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            onClick={handleSendMessage}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default SendMessage;
