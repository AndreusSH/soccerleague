import { signOutGoogle } from '../utils/firebase';
import '../index.css';
  

export const SignOut = () => {
  return (
    <button onClick={signOutGoogle} className="signOut py-2 px-4 border
      hover:border-transparent rounded
     text-xs sm:text-sm   lg:text-base lg:ml-0">
      LOG OUT
    </button>
  )
}
