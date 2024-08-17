import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] px-4 text-white">
      {/* Tab, Pc, Laptop */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">Home</li>
        <Link to="/dataCreateForm">
          <li className="p-4 cursor-pointer">Form</li>
        </Link>
        <li className="p-4 cursor-pointer">Resources</li>
        <li className="p-4 cursor-pointer">About</li>
        <Link to="/loginPage">
          <li className="p-4 cursor-pointer">Login</li>
        </Link>
      </ul>
      {/* Mobile */}
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/*   */}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer">Home</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">About</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
