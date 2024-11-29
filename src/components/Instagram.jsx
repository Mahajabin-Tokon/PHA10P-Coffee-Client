import React from "react";
import cup1 from "../assets/cups/Rectangle 10.png"
import cup2 from "../assets/cups/Rectangle 11.png"
import cup3 from "../assets/cups/Rectangle 12.png"
import cup4 from "../assets/cups/Rectangle 13.png"
import cup5 from "../assets/cups/Rectangle 14.png"
import cup6 from "../assets/cups/Rectangle 15.png"
import cup7 from "../assets/cups/Rectangle 16.png"
import cup8 from "../assets/cups/Rectangle 9.png"
const Instagram = () => {
  return (
    <div className="w-2/3 mx-auto">
      <div className="flex flex-col justify-center items-center mt-20 space-y-2">
        <p>Follow us now</p>
        <h2 className="font-rancho text-3xl text-[#331A15]">
          Follow on Instagram
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        <img src={cup1} alt="Image of a coffee" />
        <img src={cup2} alt="Image of a coffee" />
        <img src={cup3} alt="Image of a coffee" />
        <img src={cup4} alt="Image of a coffee" />
        <img src={cup5} alt="Image of a coffee" />
        <img src={cup6} alt="Image of a coffee" />
        <img src={cup7} alt="Image of a coffee" />
        <img src={cup8} alt="Image of a coffee" />
      </div>
    </div>
  );
};

export default Instagram;
