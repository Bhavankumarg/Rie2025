import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const ContactPage = () => {
  return (
    <>
      <div className="bg-[#3F2C6B]">
        <Header />
        <div className="mt-20">
          <h3 className="font-bold text-white text-3xl text-center">
            Meet Us At
          </h3>
        </div>
        <div className="lg:flex justify-center mt-16 gap-32 mb-60">
         <div className="flex gap-5">
         <img src="/contact/pin.png" className="h-10"  />
          <h3 className="text-xl w-72 text-white">
            Nandi Hills Road Karahalli Post, Kundana Hobli, Taluk, Devanahalli,
            Bengaluru, Karnataka 562164
          </h3>
         </div>

          <div className="flex gap-5">
          <img src="/contact/phone.png" className="h-10" />
          <h3 className="text-xl text-white">
          +919876543210 <br/>
          +910123456789
          </h3>
          </div>

          <div className="flex gap-5">
          <img src="/contact/mail.png" className=" h-10" />
          <h3 className="text-xl text-white">
          rie@eobangalore.com
          </h3>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
