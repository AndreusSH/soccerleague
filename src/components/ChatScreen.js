import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ErrorPage from "./ErrorPage";
import SendMessage from "./SendMessage";
import { useParams } from 'react-router-dom';
import { useData } from "../utils/firebase";

function ChatScreen() {
  const [user] = useAuthState(auth);
  const { id } = useParams();

  // Transform function to format the messages
  const transformMessageData = (data) => {
    if (!data) {
      return null;
    }

    const transformedData = [];

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const message = data[key];
        transformedData.push({
          id: key,
          author: message.author,
          text: message.text,
          formattedTimestamp: new Date(message.timestamp).toLocaleString(),
        });
      }
    }

    return transformedData;
  };

  const [messageData, loading, error] = useData(`messages/game-${id}`, transformMessageData);

  return (
    user ? (
      <>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-4">
          <h1 className="text-white text-2xl font-bold text-center">Soccer Game Chat</h1>
        </div>

        <div className="flex flex-col items-center">  
          <ul className="w-full max-w-xl">
            {loading ? (
              <li>Loading...</li>
            ) : error ? (
              <li>Error: {error.message}</li>
            ) : messageData ? (
              messageData.map((message) => (
                <div key={message.id} className="flex flex-col w-full"> 
                  <div className="bg-gray-300 p-3 rounded-lg mt-3">
                    <p className="text-md">{message.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <li>No messages found.</li>
            )}
          </ul>
        </div>
        <SendMessage />
      </>
    ) : (
      <ErrorPage />
    )
  )
}

export default ChatScreen;
