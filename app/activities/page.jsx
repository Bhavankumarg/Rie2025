import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlanYourRetreat from "@/components/PlanYourRetreat";

const ActivitiesPage = () => {
  return (
    <>
      <div className="bg-[#150539]">
        <Header className="" />
        <div className=" text-center">
          <h3 className="text-3xl text-center text-[#EFEFEF] font-bold mt-20">
            MY EO Experience
          </h3>

          <p className="container mx-auto text-[#EFEFEF] mt-6 w-7/12">
            At RIE 2024, we will help you connect with the soul of Bangalore –
            that’s what makes us want to keep coming back to the city.
          </p>

          <p className="container mx-auto text-[#EFEFEF] w-7/12">
            We have lined up an incredible range of MyEO experience for both
            embers and SLPs on 9 & 12 January, 2025. Whatever be your interests,
            we have something for everyone here.
          </p>

          <h4 className="mt-5 text-[#EFEFEF] font-bold p-6 text-3xl">
            For Registrations{" "}
            <span className="bg-[#7047A5] rounded-3xl px-5 mx-4 p-1.5 ">
              rie@eobangalore.com
            </span>
          </h4>
        </div>
        <PlanYourRetreat />
        <Footer />
      </div>
    </>
  );
};

export default ActivitiesPage;
