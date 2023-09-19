import "../index.css";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
 
 
function Navbar() {
 

  return (
   <header className="bg-gray-800 sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center text-white justify-between">
    <Logo/>
    <Button/>
    <Nav/>

   </header>
 
  );
}

export default Navbar;
