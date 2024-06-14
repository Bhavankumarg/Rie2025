import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Travel_VisaGuide from '@/components/Travel_VisaGuide'
import FAQs from '@/components/FAQs'
import Registration from '@/components/RegistrationInformation'
const page = () => {
  return (
    <>
    <div className='bg-[#150539]'>
    <Header/>
    <h2 className="text-3xl text-[#EFEFEF] text-center mt-20 font-bold">Plan your Trip</h2>
    <Registration/>
    <Travel_VisaGuide/>
    <FAQs/>
    <Footer/>
    </div>
    </>
  )
}

export default page