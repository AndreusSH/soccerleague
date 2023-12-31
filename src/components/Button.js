import React from 'react';
import {auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

import SignIn from './SignIn';
import { SignOut } from './SignOut';

 
function Button() {
   const [user] = useAuthState(auth);

  return (
    <div className='mr-5 mt-3 ml-5'>
      {/* Your component JSX */}
      {user ? <SignOut /> : <SignIn />}
    </div>
  );
}
export default Button;