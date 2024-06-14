import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="bg-[#150539]">
      <div className="flex justify-center mt-10" >
        <hr className="w-4/5 bg-white" />
      </div>

      <div className="flex justify-center py-20">
        <Image width={200} height={100} src="/home/remix.png" />
      </div>
      

        <div class="mx-auto w-full max-w-screen-xl p-4">
          <div class="sm:flex sm:items-center sm:justify-between">
            <p className="text-white">
            Contact us at: rie@eobangalore.com
            </p>
            
            <div class="flex mt-4 sm:justify-center sm:mt-0 gap-3">

              {/* <img src="/home/apple.png" className="w-32 h-10" />
              <img src="/home/play_store_logo.svg" className="w-16 h-12" /> */}
              <a
                href="#"
                class="text-gray-500 hover:text-white dark:hover:bg-white"
              >
                <FaFacebook className="text-white text-4xl" />
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-white dark:hover:bg-white"
              >
                <RiInstagramFill className="text-white text-4xl" />
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-white dark:hover:bg-white"
              >
                <FaLinkedin    className="text-white text-4xl" />
              </a>

            </div>
          </div>
        </div>

        <div class="mx-auto w-full max-w-screen-xl p-4">
          <div class="sm:flex sm:items-center sm:justify-between">
            <p className="text-[#EFEFEF] text-sm">
            CONTACT US | EVENT WAIVER | PRIVACY POLICY | TERMS OF USE | CANCELLATION POLICY
            </p>
            
            <div class="flex mt-4 sm:justify-center sm:mt-0 gap-3">
             <p className="text-[#EFEFEF]">© Copyright 2024</p>
              

            </div>
          </div>
        </div>
        </div>
   
    </>
  );
};

export default Footer;
