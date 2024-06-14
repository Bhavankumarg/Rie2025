"use client";

import { Accordion } from "flowbite-react";
import "flowbite";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Registration() {
  return (
    <>
      <h2 className="text-center text-white text-2xl mt-3">
        Registration Information
      </h2>
      <div className="container mx-auto mt-10 bg-[#2DAA8C] p-5 rounded-xl">
        <Accordion
          collapseAll
          className="shadow-lg custom-accordion bg-[#303E95] border-none text-white"
        >
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95] border-none focus:outline-none">
              What are the registration charges for RIE 2024?
            </Accordion.Title>
            {/* <FaRegArrowAltCircleDown className="float-end me-7"/> */}
            <Accordion.Content>
              <p className="w-4/5">
                The current registration charges excluding GST for South Asia
                Members are as follows:
              </p>
              <p className="flex mt-3 gap-5">
                <p className="bg-[#ec3c70] text-white p-2">
                  Member - INR 1,90,000
                </p>
                <p className="bg-[#ec3c70] text-white  p-2">
                  Spouse or Life Partner - INR 1,15,000
                </p>
              </p>
              <p className="mt-3">
                The current registration charges for EO members outside South
                Asia Members are as follows:
              </p>
              <p className="mt-3 gap-5 flex">
                <p className="bg-[#ec3c70] text-white  p-2">Member - US$2399</p>
                <p className="bg-[#ec3c70] text-white  p-2">Spouse - US$1499</p>
              </p>
              <p className="mt-3">
                Please note that these prices are for a certain number of
                tickets in this slab and are subject to increase in future.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

        <Accordion
          collapseAll
          className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white"
        >
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">
              What is the last date of registration?
            </Accordion.Title>
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

        <Accordion
          collapseAll
          className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white"
        >
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">
              What does my registration fee include?
            </Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                The full registration fee must be paid while registering on the
                website, by Jan 9, 2025. Full payment is mandatory for
                confirming your seat.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

        <Accordion
          collapseAll
          className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white"
        >
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">
              What is the cancellation/transfer policy?
            </Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                You can pay using a valid credit or debit card. You will receive
                immediate confirmation of your registration.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <Accordion
          collapseAll
          className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white"
        >
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] rounded-xl text-white hover:bg-[#303E95]">
              What happens if I don&apos;t get Indian Visa?
            </Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                You can pay using a valid credit or debit card. You will receive
                immediate confirmation of your registration.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

        <Accordion
          collapseAll
          className="shadow-lg mt-5 border-none focus:outline-none bg-[#303E95] text-white"
        >
          <Accordion.Panel className="mt-5">
            <Accordion.Title className="bg-[#303E95] text-white rounded-xl hover:bg-[#303E95]">
              Can I use my New Member Event Voucher for discount?
            </Accordion.Title>
            <Accordion.Content>
              <p className="w-4/5">
                <p>A. Registration once made is non-cancellable.</p>
                <p className="mt-3">
                  B. However, in any eventuality, registrations can be
                  transferred to another member within one’s chapter until 120
                  days before the event (i.e. 11 September 2023). It will be the
                  member’s responsibility to inform RIE 2024 Registration Team
                  of the transfer at rie@eokolkata.org.
                </p>
                <p className="mt-3">
                  C. Any difference in registration fee is also to be paid
                  within the timeline mentioned above.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
}
