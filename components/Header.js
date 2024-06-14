
'use client'
import React from 'react';
import Link from "next/link";
import { Button, Drawer, Sidebar, TextInput, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { HiClipboard, HiLogin, HiPencil, HiSearch, HiUsers, HiHome } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Navbar rounded className='bg-[#18083d] py-6 px-8'>
        <Navbar.Brand as={Link} href="/">
          <div className='flex flex-col items-center md:items-start'>
            <Image src="/home/south_asia_rie.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" width={200} height={200} />
            <span className="self-left whitespace-nowrap text-xl font-semibold  text-white mt-2 md:mt-0">Hosted by EO BANGALORE</span>
          </div>
        </Navbar.Brand>
        <div className="flex items-center justify-center space-x-4">
          <button className='text-white rounded'>Location</button>
          <Dropdown label="Language">
            <Dropdown.Item onClick={() => alert('Chinese!')}>Chinese</Dropdown.Item>
            <Dropdown.Item onClick={() => alert('Japanese!')}>Japanese</Dropdown.Item>
          </Dropdown>
          <button className='mx-2 p-2 bg-[#EC3C70] text-white'>Register</button>
          <button className='mx-2 p-2 px-4 bg-[#424FA0] text-white'>Log in</button>
          <button onClick={() => setIsOpen(true)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </Navbar>

      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar aria-label="Sidebar with multi-level dropdown example" className="[&>div]:bg-transparent [&>div]:p-0">
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={HiHome}>
                      Home
                    </Sidebar.Item>
                    <Sidebar.Item href="/about">
                      About RIE
                    </Sidebar.Item>
                    <Sidebar.Item href="/activities" icon={HiUsers}>
                      Activities
                    </Sidebar.Item>
                    <Sidebar.Item href="/" icon={HiLogin}>
                      Partners
                    </Sidebar.Item>
                    <Sidebar.Item href="/plan-your-trip" icon={HiPencil}>
                      Plan Your Trip
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/contact-us " icon={HiClipboard}>
                      Contact Us
                    </Sidebar.Item>
                    <h3>rie@eobangalore.com</h3>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default Header;








// import React from "react";
// import Image from "next/image";
// import Container from "react-bootstrap/Container";
// import HamburgerMenu from "../components/HamburgerMenu";
// import { RxHamburgerMenu } from "react-icons/rx";
// const Header = () => {
//   return (
//     <>
//       <nav class=" border-gray-200 dark:bg-gray-900 bg-[#3F2C6B]">
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src="/home/south_asia_rie.png" class="h-11 mt-3" />
//           </a>

//           <button
//             data-collapse-toggle="navbar-default"
//             type="button"
//             class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-default"
//             aria-expanded="false"
//           >
//             <span class="sr-only">Open main menu</span>
//             <svg
//               class="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div
//             class="hidden w-full md:block md:w-auto justify-center place-items-center items-center self-center"
//             id="navbar-default"
//           >
//             <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-l md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a href="#" class="block py-2 px-3 text-white">
//                   Location
//                 </a>
//               </li>
//               <li class="relative group">
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-white  group-hover:bg-white group-hover:text-black"
//                 >
//                   Language
//                 </a>
//                 <ul class="absolute left-0 hidden space-y-2 bg-black text-white shadow-lg group-hover:block">
//                   <li>
//                     <a href="#" class="block px-4 py-2 hover:bg-gray-700">
//                       Chinese
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" class="block px-4 py-2 hover:bg-gray-700">
//                       Japanese
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#" class="block py-2 px-3 text-white  bg-[#ec3c70]">
//                   Register
//                 </a>
//               </li>
//               <li>
//                 <a href="#" class="block py-2 px-3 text-white bg-[#424FA0]">
//                   Log in
//                 </a>
//               </li>
//               <li>
//                 <HamburgerMenu />
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-white text-2xl px-[131px]">
//             Hosted by EO BANGALORE
//           </h1>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;
