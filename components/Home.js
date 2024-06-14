'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import HomeCarousel from "./HomeCarousel"
import WhatToExpect from './WhatToExpect'
import ScheduleAtGlance from './ScheduleAtGlance'
import ThisYearSpeakers from './ThisYearSpeakers'
import Partners from './Partners'
import Speakers from './Speakers'
import PastEventGallery from './PastEventGallery'
import AboutRie from './AboutRie'
import HeroSection from './HeroSection'
const Home = () => {
  return (
    <>
<div className='flex'>
    
{/* <div className="mx-32 mt-20"  >
    <img className='w-80' src="/home/remix.png"/>
    <h2 className='mx-auto text-white text-2xl mt-2'>January 9-12, 2025</h2>
    <h3 className='text-white text-xl w-96 mt-14'>
    Immerse Yourself In a Multiverse of Creativity, Culture, and Community.
    </h3>
    <Button className='bg-[#ec3c70] text-white w-32 p-2 mt-5'> 
        Register
    </Button>

    
    </div> */}

    <div>
      <HeroSection/>
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
            <AboutRie/>
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