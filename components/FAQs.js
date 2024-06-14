"use client";

import { Accordion } from "flowbite-react";
import "flowbite"; 
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Component() {
  return (
    <>
      <h2 className="text-center text-white text-3xl mt-20">FAQs</h2>
      <div className="container mx-auto mt-10 bg-[#2DAA8C] p-5 rounded-xl">
        <Accordion collapseAll className="shadow-lg bg-[#303E95] border-none text-white">
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95] border-none focus:outline-none">Who can attend RIE2025?</Accordion.Title>
            {/* <FaRegArrowAltCircleDown className="float-end me-7"/> */}
            <Accordion.Content>
              <p className="w-4/5">
                RIE 2025 is open to all members of EO. Alumni members and SLPs of EO
                Members are eligible to attend if they are a guest of an EO Member.
                Neither can attend without the participation of an EO Member.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          </Accordion>

          <Accordion collapseAll className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white">
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">What does the registration fee include?</Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5 lg:flex gap-44">
                <ul>
                  <h2 className="text-xl">The registration fee includes:</h2>
                  <li>All learning events</li>
                  <li>All socials</li>
                  <li>All meals & drinks</li>
                  <li>All transfers</li>
                </ul>
                <p>
                  <ul>
                    <h2 className="text-xl">
                      {" "}
                      The registration fee does not include:
                    </h2>
                    <li>Airfare Visa</li>
                    <li>fee Accommodation cost</li>
                    <li>MyEO events</li>
                    <li>Any retreats pre or post RIE</li>
                  </ul>
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          </Accordion>

          <Accordion collapseAll className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white">
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">When do I have to pay for the full registration?</Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                The full registration fee must be paid while registering on the
                website, by Jan 9, 2025. Full payment is mandatory for confirming
                your seat.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          </Accordion>

            <Accordion collapseAll className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white">     
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">What are the payment options available?</Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                You can pay using a valid credit or debit card. You will receive
                immediate confirmation of your registration.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

            </Accordion>
          <Accordion collapseAll className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white">
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">What are the payment options available?</Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                You can pay using a valid credit or debit card. You will receive
                immediate confirmation of your registration.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          </Accordion>


          <Accordion collapseAll className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white">
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] text-white rounded-xl hover:bg-[#303E95]">What is the cancellation/transfer policy?</Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                <p>A. Registration once made is non-cancellable.</p>
                <p className="mt-3">
                  B. However, in any eventuality, registrations can be transferred
                  to another member within one’s chapter until 120 days before the
                  event (i.e. 11 September 2023). It will be the member’s
                  responsibility to inform RIE 2024 Registration Team of the
                  transfer at rie@eokolkata.org.
                </p>
                <p className="mt-3">
                  C. Any difference in registration fee is also to be paid within
                  the timeline mentioned above.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          </Accordion>

          <Accordion collapseAll className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white">
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">What happens if I do not get an Indian Visa?</Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                We urge all members who are coming to India to apply for the visa
                well in advance, latest by and no later than August 1, 2024. If you
                are unable to obtain an Indian Visa till the last date of travel, we
                will refund you the full registration fee, provided you share the
                proof that the visa was applied by August 1, 2024.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          </Accordion>

        <Accordion collapseAll className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white">
        <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">I am a new member. Can I use my Event Discount Voucher for RIE?</Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                Details of use of Event Discount Voucher for RIE 2025 can be found
                on Registration Info.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

        <Accordion collapseAll className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white">
        <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">Will I be staying at the same hotel where 2025 RIE is scheduled to happen?</Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                The main event of RIE is at JW Marriott Bengaluru Prestige Resort &
                Spa, Nandi Hills Road, Karahalli Post, Kundana Hobli, Taluk,
                Devanahalli, Bengaluru, Karnataka 562164. We have also tied up with
                Mulberry Shades Bengaluru, Survey No: 28, 29, 30, Kemathimmanahalli
                Village, Kundana Hobli, Devanahalli, Bengaluru 562110. The hotels
                are adjacent to each other. We have blocked rooms at these hotels.
                Details of the venue as well as the booking link at pre-negotiated
                rates will soon be available on the website.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

        <Accordion collapseAll className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white">
          <Accordion.Panel className="mt-5 ">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">Is there a travel desk I can reach out to for booking my accommodation and flights, and/or travel in India before or post RIE 2025?</Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                All personal travel and accommodation bookings will have to be done
                individually. We do not have a travel desk that can assist you.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          </Accordion>

        <Accordion collapseAll className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white">
        <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95] focus:outline-none border-none">Where can I find the itinerary for RIE 2025?</Accordion.Title>
            <Accordion.Content>
              <p className="w-4/ bg-[#303E95]">
                We will upload the itinerary closer to the event date. Do keep
                checking the website for details. In the meantime, we can assure you
                that RIE 2025 will offer unique and memorable learning and
                integration experiences.
              </p>  
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
}
