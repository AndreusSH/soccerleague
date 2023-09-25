import "../index.css";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
 
 
function Navbar() {
 

  return (
   <header className="bg-white sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center text-white justify-between lg:border-b  border-gray-300">
    <Logo/>
    <Nav/>
   </header>
 
  );
}

export default Navbar;
