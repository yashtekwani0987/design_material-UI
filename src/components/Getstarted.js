import React from "react";
import { arrowUp } from "../assets";
import style from "../Style";

const Getstarted = () => {
  return (
    <div
      className={`${style.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div className={`${style.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`} >
            <div className={`${style.flexStart} flex-row`} >
               <p className="font-poppins mr-2 font-medium text-[18px] leading-[23px]" >
                <span className="text-gradient" > Get </span>
               </p>
                <img src={arrowUp} alt="arrowup" className="w-[23px] h-[23px] object-contain" />
            </div>
            <p className="font-poppins font-medium text-[18px] leading-[23px]" >
                <span className="text-gradient" > Started </span>
                {/* <img src={arrowUp} alt="arrowup" className="w-[23px] h-[23px] object-contain" /> */}
               </p>
      </div>
    </div>
  );
};

export default Getstarted;
