import React from 'react'
import Header from '../Layouts/Header'
import taskimg from '../../assets/task_image.webp'
import { Avatar } from '@mui/material'
import Avt from '../../assets/avtar.webp'
import { Star } from 'lucide-react'
import Feature from './Features/Feature'
import ExtraFeature from './Features/ExtraFeature'
import Pricing from './Prices/Pricing'
import Faq from '../Faqs/Faq'
import Call from '../Layouts/Call'
import Footer from '../Layouts/Footer'
import Testinomial from './Testinomials/Testinomial'

const Home = () => {
  return (
    <div className=' px-4 pt-40 lg:px-20 min-h-screen items-center flex flex-col '>
      <Header />
      <section className=' items-center flex flex-col justify-center'>
        <div className='mx-auto flex items-center flex-col justify-center'>

          <div className=' mb-4 py-2 px-6 rounded-2xl w-fit mx-auto bg-slate-100'>
            <h1 className=' font-semibold'>An other way to manage time️</h1>
          </div>

          <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='lg:w-[700px] text-[#2E2E2E] lg:text-[80px] text-6xl mb-4 lg:text-7xl text-center font-bold  leading-none '>
              <span className=''>
                Your new favorite calendar
              </span> 🗓️
              <span>
                app
              </span>
            </div>
            <p className=' lg:w-[700px] mx-auto text-gray-500 font-medium text-xl text-center mb-6'>
              Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features.
            </p>
            <div>
              <button className='bg-[#2E2E2E] hover:scale-110 transition-all text-lg font-semibold text-white px-6 py-3 rounded-lg'>
                Get started, it's free
              </button>
              <p className=' text-xs font-normal my-2 text-gray-700'>Free 14 days trials,no credit card needed</p>

            </div>
          </div>
        </div>


        <div className=' my-10 flex   items-center gap-1'>

          <div className=' flex w-fit  '>
            <div className=' cursor-pointer bg-white p-1 border rounded-full  '><Avatar src={Avt} /></div>
            <div className='cursor-pointer bg-white relative -left-4  p-1 border rounded-full'><Avatar src={Avt} /></div>
            <div className='cursor-pointer bg-white relative -left-8 p-1 border rounded-full '><Avatar src={Avt} /></div>
            <div className='cursor-pointer bg-white relative -left-12 p-1 border rounded-full  '><Avatar src={Avt} /></div>
            <div className='cursor-pointer bg-white relative -left-16 p-1 border rounded-full '><Avatar src={Avt} /></div>
          </div>

          <div>
            <div className=' flex gap-2'>
              <Star fill='yellow' color="#eef207" />
              <Star fill='yellow' color="#eef207" />
              <Star fill='yellow' color="#eef207" />
              <Star fill='yellow' color="#eef207" />
              <Star fill='yellow' color="#eef207" />
              <span className=' font-bold text-lg'>5.0</span>
            </div>
            <p className=' text-gray-500 font-bold'>From 200+ happy users</p>
          </div>

        </div>

        <div className=' shadow-md my-10 w-full'>
          <img src={taskimg} className=' border rounded-2xl object-contain ' alt="images" />
        </div>

      </section>
      <Feature />
      <ExtraFeature />
      <Testinomial/>
      <Pricing />
      <Faq />
      <Call />
    </div>
  )
}

export default Home