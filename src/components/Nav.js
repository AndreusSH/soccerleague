import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react";
import "../index.css";
import Button from "./Button";
import Logo from "./Logo";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../App";   
import { useContext } from "react";


const NavLinks = () => {
    //const location = useLocation();
    const navLinks = [
        { path: "/", text: "Home" },
        { path: "/games", text: "Games" },
       

      ];

    return(
        <>

{navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="text-gray-500 no-underline lg:mt-6 lg:mr-3 mb-3 ml-1 "
            activeClassName="active-link" 
          >
            {link.text}
          </NavLink>
        ))}
 
    </>
    )
  
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
 

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return(
        <>
        <nav className="w-1/4 mr-6 float-right">
             <div className="hidden w-full lg:flex flex-row justify-between">
                <NavLinks/>
                <Button/>
                <ReactSwitch className="mt-6 mr-5" onChange={toggleTheme} checked={theme === "dark"}/>
            </div>


            <div className="lg:hidden float-right mr-30 text-gray-500">
                <button onClick={toggle}>
                    {isOpen ? <X/> : <Menu />}
                </button>
            </div>
        </nav>
        {isOpen && (
        
        <div className="sidebar fixed top-0 left-0 w-3/4 h-full transform transition-transform border-r border-red-800">
            <div className="flex flex-col items-center p-4 ">
            <Logo/>
            <NavLinks/>
            <Button/>
            <ReactSwitch className="mt-5 " onChange={toggleTheme} checked={theme === "dark"}/>
            <span className="mt-2">{theme} theme</span>
            </div>
            </div>
             )}
            </>
    );
};


 export default Nav;
 