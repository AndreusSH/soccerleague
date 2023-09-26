import { signOutGoogle } from '../utils/firebase';

export const SignOut = () => {
  return (
    <button onClick={signOutGoogle} className=" py-2 px-4 border
      hover:border-transparent rounded
     text-xs sm:text-sm   lg:text-base lg:ml-0">
      LOG OUT
    </button>
  )
}
