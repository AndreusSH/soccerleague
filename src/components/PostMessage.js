import { getDatabase, set, ref, push } from "firebase/database";
import { auth } from "../utils/firebase";
//import { useParams } from "react-router-dom";


const PostMessage = (m, i) =>{
  //console.log("message :", m)

    //const { id } = useParams();
    const database = getDatabase(); // Get a reference to the database
    const game1Path = `messages/game-${i}`;    // Specify the path where you want to add the message
    const author = auth.currentUser.email;
    const text = m; // Use the message from the state
    const timestamp = Date.now();
   

  //create message object for the database
  const newMessage = {
    author: author,
    text: text,
    timestamp: timestamp,
  };
  console.log(newMessage)

  push(ref(database, game1Path), newMessage);

}

export default PostMessage;