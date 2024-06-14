import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Travel_VisaGuide from '@/components/Travel_VisaGuide'
import FAQs from '@/components/FAQs'
const page = () => {
  return (
    <>
    <div className='bg-[#3F2C6B]'>
    <Header/>
    <Travel_VisaGuide/>
    <FAQs/>
    <Footer/>
    </div>
    </>
  )
}

export default page