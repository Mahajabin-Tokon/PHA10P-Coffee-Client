import React from "react";

import icon1 from "../assets/icons/1.png";import logo from "../assets/more/logo1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

const Header = () => {
  return (
    <>
      <div className="bg-[url('https://i.ibb.co/5TNmYQt/15.jpg')] h-20 text-white flex justify-center items-center gap-2">
        <img className="h-16" src={logo} alt="Logo" />
        <h2 className="font-rancho text-3xl">Espresso Emporium</h2>
      </div>
      <img
        className="relative"
        src="https://i.ibb.co/5W5DFX9/3.png"
        alt="Banner image"
      />
      <div className="hidden lg:block w-2/5 absolute top-60 right-20 space-y-4">
        <h2 className="font-rancho text-3xl text-white">
          Would you like a cup of delicious coffee
        </h2>
        <p className="text-white font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          distinctio ipsam fugiat eveniet ipsum quis atque necessitatibus error
          reprehenderit sed.
        </p>
        <button className="bg-orange-200 font-rancho p-2">Learn More</button>
      </div>
      <div className="bg-[#ECEAE3]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5">
            <img src={icon1} alt="Icon" />
            <h4 className="font-rancho text-2xl text-[#331A15]">
              Awesome Aroma
            </h4>
            <p className="text-[#331A15] font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              vel.
            </p>
          </div>
          <div className="p-5">
            <img src={icon2} alt="Icon" />
            <h4 className="font-rancho text-2xl text-[#331A15]">
              Hight Quality
            </h4>
            <p className="text-[#331A15] font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              vel.
            </p>
          </div>
          <div className="p-5">
            <img src={icon3} alt="Icon" />
            <h4 className="font-rancho text-2xl text-[#331A15]">
              Pure Grade
            </h4>
            <p className="text-[#331A15] font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              vel.
            </p>
          </div>
          <div className="p-5">
            <img src={icon4} alt="Icon" />
            <h4 className="font-rancho text-2xl text-[#331A15]">
              Proper Roasting
            </h4>
            <p className="text-[#331A15] font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              vel.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
