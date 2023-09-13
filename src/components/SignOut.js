import React from 'react';
import { signOutGoogle } from '../utils/firebase';

export const SignOut = () => {
  return (
    <button onClick={signOutGoogle} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
      LOG OUT
    </button>
  )
}
