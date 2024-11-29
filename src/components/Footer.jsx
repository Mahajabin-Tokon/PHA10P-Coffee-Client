import React from "react";
import logo from "../assets/more/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[url('https://i.ibb.co/NFN1m1v/13.jpg')] py-4">
        <div className="w-2/3 mx-auto my-4">
          <div className="my-4">
            <img className="h-16" src={logo} alt="Logo" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-28">
            <div className="md:w-1/2 space-y-4">
              <h2 className="font-rancho text-2xl text-[#331A15]">
                Espresso Emporium
              </h2>
              <p className="font-thin text-[#331A15]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quisquam nobis nulla, aliquam quam ipsa?
              </p>
              <div className="flex justify-start items-center gap-2">
                <FaFacebook className="text-[#331A15]" size={28} />
                <FaTwitter className="text-[#331A15]" size={28} />
                <FaInstagram className="text-[#331A15]" size={28} />
                <FaLinkedin className="text-[#331A15]" size={28} />
              </div>
              <h2 className="font-rancho text-2xl text-[#331A15]">
                Get in Touch
              </h2>

              <div className="flex justify-start items-center gap-6">
                <FaPhoneAlt className="text-[#331A15] " />
                <p className="text-[#331A15] font-thin">+1-555-666-7777</p>
              </div>
              <div className="flex justify-start items-center gap-6">
                <MdEmail className="text-[#331A15]" />
                <p className="text-[#331A15] font-thin">info@gmail.com</p>
              </div>
              <div className="flex justify-start items-center gap-6">
                <FaLocationDot className="text-[#331A15]" />
                <p className="text-[#331A15] font-thin">
                  50th St NW, Calgary, AB
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-rancho text-2xl text-[#331A15]">
                Connect with Us
              </h2>
              <form className="space-y-4 my-4">
                <input
                  className="w-full rounded-md py-2 px-4"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <input
                  className="w-full rounded-md py-2 px-4"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <textarea className="w-full rounded-md py-2 px-4" name="message" placeholder="Message" rows={4}/>
                <input className="font-rancho text-[#331A15] rounded-full border-2 border-[#331A15] py-1 px-2" type="button" value="Send Message"/>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="font-rancho text-white text-center bg-[url('https://i.ibb.co/mHV5WPb/24.jpg')] py-1">
        Copyright @ Espresso Emporium! All Rigths Reserved
      </div>
    </>
  );
};

export default Footer;
