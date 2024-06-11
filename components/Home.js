'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeCarousel from "./HomeCarousel"
import WhatToExpect from './WhatToExpect'
import ScheduleAtGlance from './ScheduleAtGlance'
import ThisYearSpeakers from './ThisYearSpeakers'
import Partners from './Partners'
import Speakers from './Speakers'
import PastEventGallery from './PastEventGallery'

const Home = () => {
  return (
    <>
<div className='flex'>
    
<div className="mx-32 mt-20"  >
    <img className='w-80' src="/home/remix.png"/>
    <h2 className='mx-auto text-white text-2xl mt-2'>January 9-12, 2025</h2>
    <h3 className='text-white text-xl w-96 mt-14'>
    Immerse Yourself In a Multiverse of Creativity, Culture, and Community.
    </h3>
    <Button className='bg-[#ec3c70] text-white w-32 p-2 mt-5'> 
        Register
    </Button>

    
    </div>

    <div>
    <div className="w-3/5">
        

<div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/home/game_changing_ideas.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>

    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

      </div>
    </div>


</div>
       
        {/* <Carousel
                      indicators={false}
                      interval={1200}
                      controls={false}
                  >
                      <Carousel.Item
                          
                          >
          <Image
                              className="d-block w-100"
                              src="/home/fresh_prespectives.png"
                              alt="Who We Are"
                              width={400}
                              height={600}
          />
        </Carousel.Item>
        <Carousel.Item >
          <Image
            className="d-block w-100"
            src="/home/meaningful_networking.png"
            alt="Who We Are"
            width={400}
            height={600}
          />
         
                      </Carousel.Item>
                      <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/home/game_changing_ideas.png"
            alt="Who We Are"
            width={400}
            height={600}
          />
         
                      </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/home/trecking.png"
            alt="Who We Are"
            width={400}
            height={600}
          />
         
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/home/dance.png"
            alt="Who We Are"
            width={400}
            height={600}
          />
         
        </Carousel.Item>
                      
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/home/cheers.png"
            alt="Who We Are"
            width={400}
            height={600}
          />
         
        </Carousel.Item>   

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/home/discuss.png"
            alt="Who We Are"
            width={400}
            height={600}
          />
         
        </Carousel.Item>         
      </Carousel>
      
   








 */}


          <div>
            <WhatToExpect/>
            <ScheduleAtGlance/>
            <ThisYearSpeakers/>
            <Speakers/>
            <PastEventGallery/>
            <Partners/>

          </div>
    
    </>
  )
}

export default Home