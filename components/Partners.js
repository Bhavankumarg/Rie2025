'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Partners = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
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
    <div className="bg-customLightGray px-10 py-16 text-center" >
      <h1 className="text-3xl mb-10 font-bold text-white">
        Partners
      </h1>
      <div className="ps-11">
        <Slider className="" {...settings}>
          <div>
          <h3 className='bg-white rounded-3xl p-2 text-2xl w-64'>Event</h3>
          </div>
          <div>
          <h3 className='bg-white rounded-3xl p-2 text-2xl w-64'>Date</h3>
          </div>
          <div>
          <h3 className='bg-white rounded-3xl p-2 text-2xl w-64'>Lorem ipsum</h3>
          </div>
          <div>
          <h3 className='bg-white rounded-3xl p-2 text-2xl w-64'>dummy text</h3>
          </div>
          <div>
          <h3 className='bg-white rounded-3xl p-2 text-2xl w-64'>dummy TXT</h3>
          </div>
          <div>
          <h3 className='bg-white rounded-3xl p-2 text-2xl w-64'>Time</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Partners
