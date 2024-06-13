import React from "react";
import Teams from "@/utils/data";
const TeamPage = () => {
  return (
    <>
      <div className="mt-24">
        <h2 className="text-[#EFEFEF] text-center text-3xl font-semibold">
          The Team
        </h2>
        <div className="px-80 text-[#EFEFEF] mt-10 text-center">
          <p>
            Never a dull moment planning a memorable RIE, with the creative and
            passionate crew behind RIE Bangalore. Tirelessly working to ensure
            every detail is thoughtfully planned, EO Bangalore team brings fresh
            and exciting energy to the event. You are guaranteed a unique
            experience. Get ready to connect, learn, and enjoy with a team
            that&apos;s all about making things happen. For you. Turn Up. Tune In.

          </p>
        </div>

        <div className="flex container mx-auto justify-center gap-10 mt-16">
          {Teams.map((items, index) =>(
              <div key={index} class="h-72 bg-[#FFFFFF33] rounded-2xl shadow">
              
                <img
                  
                  class="rounded-2xl h-56 w-56"
                  src={items.image}
                  alt=""
                />
              
              <div class="mt-2">
               
                  <h5 class=" text-xl font-bold tracking-tight text-[#EFEFEF] text-center">
                    {items.name}
                  </h5>
               
                <p class="font-normal text-[#EFEFEF] text-center">
                  {items.description}
                </p>
               
              </div>
            </div>
          ))

          }
        
        </div>
      </div>
    </>
  );
};

export default TeamPage;
