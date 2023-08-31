import React from "react";
import { NavLink } from "react-router-dom";
 
function Navbar() {
 
  return (
   <nav className="sticky top-0  w-full border border-b-1 z-50 bg-gray-200">
    <div className="container max-w-5xl">
      <div className="flex flex-row py-1 items-center">
        <div className="basis-1/5">
            <img 
                src="img/nysl_logo.png"
                alt="logo"
                width="80"></img>
        </div>
        <div className="basis-4/5 hidden w-full md:block md:w-auto">
        <ul  className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-grey-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
          <li>
              <NavLink to="/"  
               activeClassName="bg-purple-500"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent no-underline">Home</NavLink> 
          </li>
          <li>
              <NavLink to="#"  
               activeClassName="bg-purple-500"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent no-underline">About NYSL </NavLink> 
          </li>
          <li>
              <NavLink to="#"  
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent no-underline">Contact </NavLink> 
          </li>
          <li>
              <NavLink to="#"  
              
              className=" block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent no-underline">Rules and Policies </NavLink> 
          </li>
          <li>
              <NavLink to="/games"  
               activeClassName="bg-purple-500"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent no-underline">Game Information</NavLink> 
          </li>
          <li>
              <NavLink to="#"  
               activeClassName="bg-purple-500"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent no-underline">Registration Form</NavLink> 
          </li>
        </ul>
          

          </div>
         
      </div>
    </div>
   </nav>
  );
}

export default Navbar;