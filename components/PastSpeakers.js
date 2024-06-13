'use client'

import React from 'react'
import Slider from 'react-slick'
import { FaArrowRightLong } from "react-icons/fa6";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PastSpeakersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true  ,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  return (
    <div className="bg-customLightGray px-10 py-16 text-center container mx-auto">
      <h1 className="text-3xl mb-10 text-white">
        Past <span className='font-bold'>Speakers</span>
      </h1>
      <div className="ps-11">
        <Slider {...settings}>
          <div>
            <div className="relative box-border h-64 w-[200px] p-4 border bg-[#7047A5] rounded-lg group">
              <h3 className="text-white">Kumar Birla</h3>
              <p className="text-white hidden group-hover:block mt-4">
                Hear from industry leaders and visionaries who are setting the trend
                and driving change.
              </p>
            
            </div>
          </div>
          <div>
            <div className="relative box-border h-64 w-[200px] p-4 border bg-red-500 rounded-lg group">
              <h3 className="text-white">L.N. Mittal</h3>
              <p className="text-white hidden group-hover:block mt-4">
                Hear from industry leaders and visionaries who are setting the trend
                and driving change.
              </p>
              
            </div>
          </div>
          <div>
            <div className="relative box-border h-64 w-[200px] p-4 border bg-green-500 rounded-lg group">
              <h3 className="text-white">Vikram Seth</h3>
              <p className="text-white hidden group-hover:block mt-4">
                Hear from industry leaders and visionaries who are setting the trend
                and driving change.
              </p>
              
            </div>
          </div>
          <div>
            <div className="relative box-border h-64 w-[200px] p-4 border bg-yellow-300 rounded-lg group">
              <h3 className="text-white">Julian</h3>
              <p className="text-white hidden group-hover:block mt-4">
                Hear from industry leaders and visionaries who are setting the trend
                and driving change.
              </p>
              
            </div>
          </div>
          <div>
            <div className="relative box-border h-64 w-[200px] p-4 border bg-slate-600 rounded-lg group">
              <h3 className="text-white">Imran Khan</h3>
              <p className="text-white hidden group-hover:block mt-4">
                Hear from industry leaders and visionaries who are setting the trend
                and driving change.
              </p>
              
            </div>
          </div>
          <div>
            <div className="relative box-border h-64 w-[200px] p-4 border bg-orange-700 rounded-lg group">
              <h3 className="text-white">Amitabh</h3>
              <p className="text-white hidden group-hover:block mt-4">
                Hear from industry leaders and visionaries who are setting the trend
                and driving change.
              </p>
              
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default PastSpeakersSlider
