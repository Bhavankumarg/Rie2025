import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatToExpect from "@/components/WhatToExpect";
import Team from "@/components/Team";
import RieSchedule from "@/components/RieSchedule";
import PastSpeakers from "@/components/PastSpeakers";
const Aboutpage = () => {
  return (
    <>
      <div className="bg-[#150539]">
        <Header />
        <div className="mt-20">
          <h2 className="text-center text-[#EFEFEF] text-3xl font-bold">
            What is RIE ?
          </h2>
         <div className="text-center text-[#EFEFEF] mt-10 px-80">
         <p >
            RIE is not just another event. It is a meticulously curated
            experience designed to offer you exclusive and world-class learning
            and networking opportunities, including MyEO events. 
          </p>

          <p className="mt-7">
          The diversity
            of sessions, speakers and groundbreaking concepts allow members to
            dive into innovative ideas to propel personal and professional
            growth. With xx chapters in India, xx from South Asia, and others
            from around the world, RIE is the platform to connect and network
            with like-minded individuals who are eager to collaborate and create
            friendships of a lifetime.
          </p>
         </div>
        </div>
        <WhatToExpect/>
        <Team/>
        <RieSchedule/>   
        <PastSpeakers/>                                                                                             
        <Footer />
      </div>
    </>
  );
};

export default Aboutpage;
