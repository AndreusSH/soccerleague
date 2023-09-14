import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react";
import "../index.css";


const NavLinks = () => {
    //const location = useLocation();
    const navLinks = [
        { path: "/", text: "Home" },
        { path: "/games", text: "Games" },
        { path: "/chat", text: "Chat" },
      ];

    return(
        <>

{navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="custom-navlink"
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

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return(
        <>
        <nav className="w-1/4 mr-10 float-right">
             <div className="hidden w-full lg:flex flex-row justify-between">
                <NavLinks/>
            </div>


            <div className="lg:hidden float-right mr-5">
                <button onClick={toggle}>
                    {isOpen ? <X/> : <Menu />}
                </button>
            </div>
        </nav>
        {isOpen && (
        
        <div className="flex basis-full flex-col items-center ">
            <NavLinks/>
            </div>
             )}
            </>
    );
};

export default Nav;