import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoCaretForwardCircleOutline } from "react-icons/io5";


const AboutRie = () => {
  return (
    <>
      <div>
        <h3 className="text-center text-white text-3xl mt-44">
          About <span className="font-bold">RIE</span>
        </h3>
      </div>

      <div className="flex justify-center mt-20">
        {/* <FaRegCircle className="absolute text-white text-8xl mt-36"/>
        <IoCaretForwardCircleOutline className="absolute text-white text-6xl mt-[162px] hover:yellow-300"/> */}
        <video className="w-2/4 rounded-2xl shadow-lime-50 shadow-xl"  muted controls playsInline>
          <source
            src="https://docs.walmartvriddhi.org/wp-content/uploads/2024/05/Approved-WV-MSME-Summit-2024-Sizzle-Real.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default AboutRie;
