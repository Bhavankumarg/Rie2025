import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const WhatToExpect = () => {
  return (
    <>
      <div className="text-center text-white mt-28">
        <h2 className="text-3xl">
          What to <span className="font-bold">Expect ?</span>
        </h2>
        <p className="px-80 py-10 ">
          Gear up for three action-packed days of unmatched learning and
          invaluable insights. Our event brings together local and global
          chapters, fostering a unique blend of regional expertise and
          international perspectives. Whether you’re looking to expand your
          knowledge, build new connections, or reignite your passion, this event
          has it all.
        </p>
      </div>
      <div className="flex justify-center items-center mx-auto gap-10">
        <div className="relative box-border h-64 w-[200px] p-4 border bg-[#7047A5] rounded-lg group">
          <h3 className="text-white">
            Keynote <br />
            sessions
          </h3>
          <p className="text-white hidden group-hover:block mt-4">
            Hear from industry leaders and visionaries who are setting the trend
            and driving change.
          </p>
          <FaArrowRightLong className="absolute bottom-2 right-2 text-white group-hover:hidden" />
        </div>

        <div className="relative box-border h-64 w-[200px] p-4 border bg-[#E8825C] rounded-lg group">
          <h3 className="text-white">
            Networking <br />
            Opportunities
          </h3>
          <p className="text-white hidden group-hover:block mt-4">
            Connect with peers, mentors, and potential collaborators from both
            local and global chapters.
          </p>
          <FaArrowRightLong className="absolute bottom-2 right-2 text-white group-hover:hidden" />
        </div>
        <div className="relative box-border h-64 w-[200px] p-4 border bg-[#2DAB8D] rounded-lg group">
          <h3 className="text-white">
            Epic
            <br /> Socials
          </h3>
          <p className="text-white hidden group-hover:block mt-4">
            Enjoy memorable parties and social gatherings that blend fun with
            meaningful interactions.
          </p>
          <FaArrowRightLong className="absolute bottom-2 right-2 text-white group-hover:hidden" />
        </div>
        <div className="relative box-border h-64 w-[200px] p-4 border bg-[#EC3D71] rounded-lg group">
          <h3 className="text-white">
            My EO <br />
            Experience
          </h3>
          <p className="text-white hidden group-hover:block mt-4">
            Take your RIE experience a step further- engage a new Network of
            peers united to focus on business, passion or lifestyle.
          </p>
          <FaArrowRightLong className="absolute bottom-2 right-2 text-white group-hover:hidden" />
        </div>
      </div>
    </>
  );
};

export default WhatToExpect;
