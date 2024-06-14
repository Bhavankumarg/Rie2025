"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function TravelVisaGuide() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-3xl text-[#EFEFEF] font-bold mt-20">
          Travel & Visa Guide
        </h2>
        <div className="container mx-auto bg-[#2DAA8C] text-white rounded-xl mt-10 p-10">
          <Tabs className="flex">
            <TabList className="w-1/5 flex flex-col gap-2">
              {[
                "Visa",
                "Stay Connected",
                "Covid - 19",
                "Flight Info",
                "Weather",
                "Ground Transport",
                "Language Etiquette",
                "Time Zone",
                "Dress Code",
                "Currency",
              ].map((tab, index) => (
                <Tab
                  key={index}
                  className="p-2 cursor-pointer w-44 rounded-2xl hover:bg-[#EC3C70] duration-300 border-none focus:outline-none"
                  selectedClassName="bg-[#EC3C70] text-white"
                >
                  {tab}
                </Tab>
              ))}
            </TabList>

            <div className="w-3/4 ml-10">
              <TabPanel className="transition-opacity duration-300">
                <h2>
                  Visitors to India must obtain a visa unless they come from one
                  of the visa-exempt countries. Nationals of certain countries
                  may obtain a visa on arrival or an e-Visa online. Do check
                  with your travel agent or the Indian Consulate website.
                </h2>
                <h2 className="mt-5">
                  An applicant for a visa shall have to submit an application on
                  the online system in the standard visa application form. For
                  this purpose, the applicants may log on to
                  <a
                    href="https://indianvisaonline.gov.in"
                    className="text-[#EC3C70] underline"
                  >
                    {" "}
                    https://indianvisaonline.gov.in
                  </a>
                  . The applicant should be present within the jurisdiction of
                  the Indian Mission/Post concerned at the time of making an
                  application and grant of visa.
                </h2>
                <h2 className="mt-5">
                  Period of validity of passport and visa passport should have
                  at least six months validity at the time of making application
                  for grant of visa. It should have at least two blank pages for
                  stamping by the Immigration Officer. The validity of all visas
                  will commence from the date of issue of visa.
                </h2>
                <h2 className="mt-5">
                  We recommend that you apply for a tourist visa for ease of
                  application process.
                </h2>
                <h2 className="mt-5">Travel Advisory:</h2>
                <h2>
                  Check back frequently for the latest information about
                  COVID-19 travel and testing requirements for traveling to
                  India.
                </h2>
              </TabPanel>
              <TabPanel className="transition-opacity duration-300">
                <h2>
                  The country code for India is +91. When dialing a US number
                  from abroad, be sure to dial +1 before the area code and
                  number. The national emergency number in India is 112 and 100
                  (for Police).
                </h2>
                <h2 className="mt-5">
                  Please contact your individual mobile phone service provider
                  for information about international plans. Mobile phones are
                  widely used throughout India. Call your service provider
                  before arriving to determine if you should purchase an
                  international roaming plan. Wi-Fi is available either under
                  payment or for free in some public places such as coffee
                  shops/ bistros, airports, restaurants, and some hotels. The
                  strength and speed of the signal may vary and you may need to
                  ask for login information.
                </h2>

                <h2 className="mt-5">
                  The standard voltage is 230 V and the standard frequency is 50
                  Hz. The power plugs and sockets are of type C, D & M. You may
                  also need a voltage converter so you should consider a
                  combined power plug adapter/voltage converter. Be extra
                  careful with certain appliances because of the difference in
                  frequency. Please refer to the illustration below for type of
                  sockets & plugs used in India. Banks in India will allow you
                  to use their ATMs without a charge. Before traveling to India,
                  be sure to contact your bank and inform them that you will be
                  traveling and using your credit card overseas. If you fail to
                  inform your bank of your travel plans, your card may be put on
                  hold and you will not have immediate access to your account.
                </h2>
              </TabPanel>
              {/* Add more TabPanels here as needed */}
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}
