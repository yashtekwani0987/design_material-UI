import React from "react";
import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex w-full py-6 navbar items-center justify-between">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((val, key) => {
          return (
            <li
              key={val.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                key === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white`}
            >
              <a href={`#${val.id}`}>{val.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gray-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((val, key) => {
          return (
            <li
              key={val.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                key === navLinks.length - 1 ? "mb-0" : "mb-4"
              } text-white`}
            >
              <a href={`#${val.id}`}>{val.title}</a>
            </li>
          );
        })}
      </ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
