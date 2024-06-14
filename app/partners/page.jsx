import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PartnersGallery from '@/components/PartnersGallery'
import SponsersGallery from '@/components/SponsersGallery'
const page = () => {
  return (
    <>
    <div className='bg-[#18083d]'>
    <Header/>
        <h2 className='text-center text-3xl text-[#EFEFEF] mt-20 font-bold'>Partners</h2>
    
    <PartnersGallery/>
    <SponsersGallery/>
    <Footer/>
    </div>
    </>
  )
}

export default page