import React from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container';
const Header = () => {
    return (
        <>

            <nav class=" border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/home/south_asia_rie.png" class="h-11 mt-3" />

                    </a>

                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto justify-center place-items-center items-center self-center" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-l md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 px-3 text-white">Location</a>
                            </li>
                            <li class="relative group">
                                <a href="#" class="block py-2 px-3 text-white  group-hover:bg-white group-hover:text-black">Language</a>
                                <ul class="absolute left-0 hidden space-y-2 bg-black text-white shadow-lg group-hover:block">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-700">Chinese</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-700">Japanese</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-white  bg-[#ec3c70]">Register</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-white bg-[#424FA0]">Log in</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div>
                    <h1 className='text-white text-2xl px-[131px]'>Hosted by EO BANGALORE</h1>
                </div>
            </nav>


        </>
    )
}

export default Header