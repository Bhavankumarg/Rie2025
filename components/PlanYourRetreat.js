import React from "react";

const PlanYourRetreat = () => {
  return (
    <>
      <div className="mt-14">
        <h2 className="text-3xl text-[#EFEFEF] text-center">
          Plan Your <span className="font-bold">Retreat</span>
        </h2>
      </div>

      <div className="lg:flex container  mx-auto justify-center gap-7 mt-10">
        <div className="relative w-52 h-64 rounded-2xl overflow-hidden group">
          <img
            src="/activities/tiputrek.png"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <h3 className="bg-[#7047A5] w-24 rounded-3xl p-1.5 text-[#EFEFEF]">
              Tipu Trek
            </h3>
            <div className="absolute inset-0 bg-gradient-to-t from-[#7047A5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0"></div>
            <div className="z-10">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Embark on a journey amidst the majestic landscape of Nandi Hills
              followed by a traditional breakfast.
            </p>
            </div>
          </div>
        </div>

        <div className="relative w-52 h-64 rounded-2xl overflow-hidden group">
          <img
            src="/activities/history.png"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <h3 className="bg-[#EC3D71] w-26 rounded-3xl p-1.5 text-[#EFEFEF]">
              History & Gastronomy
            </h3>
            <div className="absolute inset-0 bg-gradient-to-t from-[#EC3D71] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0"></div>
            <div className="z-10">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Explore the historical sites of Nandi Hills and indulge in a
              luxurious 7-course dinner.
            </p>
            </div>
          </div>
        </div>

        <div className="relative w-52 h-64 rounded-2xl overflow-hidden group">
          <img
            src="/activities/barCrawl.png"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <h3 className="bg-[#2DAB8D] w-24 rounded-3xl p-1.5 text-[#EFEFEF]">
              Bar Crawl
            </h3>
            <div className="absolute inset-0 bg-gradient-to-t from-[#2DAB8D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0"></div>
           <div className="z-10">
           <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Discover the vibrant nightlife of Indiranagar! Grab a pint of the
              best brewed beer or sip on unique cocktails, and create
              unforgettable pub-crawling memories.
            </p>
           </div>
          </div>
        </div>

        <div className="relative w-52 h-64 rounded-2xl overflow-hidden group">
          <img
            src="/activities/sake_bowl.png"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <h3 className="bg-[#E8825C] w-26 rounded-3xl p-1.5 text-[#EFEFEF]">
              Sake & Dine at Naru
            </h3>
            <div className="absolute inset-0 bg-gradient-to-t from-[#E8825C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0"></div>
           <div className="z-10">
           <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Let your taste buds explore authentic Japanese ramen at the most
              popular grub spot in town! Slurp down delicious noodles and clink
              your sake glasses.
            </p>
           </div>
          </div>
        </div>

        <div className="relative w-52 h-64 rounded-2xl overflow-hidden group">
      <img
        src="/activities/dosa.png"
        className="w-full h-full object-cover rounded-2xl"
        alt="Death by Dosa"
      />
      <h3 className="absolute top-4 left-4 bg-[#7047A5] w-26 rounded-3xl p-1.5 text-[#EFEFEF] z-10">
        Death by Dosa
      </h3>
      <div className="absolute inset-0 bg-gradient-to-t from-[#7047A5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
        <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Gear up for a delicious walk through Chickpet. Sample a mind-blowing variety of dosas, from the classic masala to the most exotic creations!
        </p>
      </div>
    </div>

        {/* <div className="relative w-52 h-64 rounded-2xl overflow-hidden group">
      <img src="/activities/dosa.png" className="w-full h-full object-cover rounded-2xl" alt="Death by Dosa" />
      <h3 className="absolute top-4 left-4 bg-[#] w-[130px] rounded-3xl p-1.5 text-[#EFEFEF]">
        
      </h3>
      <div className="absolute inset-0 bg-gradient-to-t from-[#7047A5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
        <p>
          Embark on a journey amidst the majestic landscape of Nandi Hills followed by a traditional breakfast.
        </p>
      </div>
    </div> */}
      </div>
    </>
  );
};

export default PlanYourRetreat;
