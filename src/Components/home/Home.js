import React from 'react'
import taskimg from '../../assets/task_image.webp'
import { Avatar } from '@mui/material'
import Avt from '../../assets/avtar.webp'
import { Star } from 'lucide-react'
import Feature from './Features/Feature'
import ExtraFeature from './Features/ExtraFeature'
import Pricing from './Prices/Pricing'
import Faq from '../Faqs/Faq'
import Call from '../Layouts/Call'
import Testinomial from './Testinomials/Testinomial'
import { motion } from 'framer-motion'
const Home = () => {


  return (
    <div className=' px-4 pt-40 lg:px-20 min-h-screen items-center flex flex-col '>
      <motion.section id='#' className=' items-center flex flex-col justify-center'>
        <motion.div
          initial={{ translateY: '-4%', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='mx-auto flex items-center flex-col justify-center'>

          <div className=' mb-4 py-2 px-6 rounded-2xl w-fit mx-auto bg-slate-100'>
            <h1 className=' font-semibold'>An other way to manage time️</h1>
          </div>

          <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='lg:w-[700px] text-4xl text-[#2E2E2E] lg:text-[80px] md:text-6xl mb-4 lg:text-7xl text-center font-bold  leading-none '>
              <span className=''>
                Your new favorite calendar
              </span> 🗓️
              <span>
                app
              </span>
            </div>
            <p className=' lg:w-[700px] text-base mx-auto text-gray-500 font-medium lg:text-xl text-center mb-6'>
              Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features.
            </p>
            <div>
              <button className='bg-[#2E2E2E] hover:scale-110 transition-all text-lg font-semibold text-white px-6 py-3 rounded-lg'>
                Get started, it's free
              </button>
              <p className=' text-xs font-normal my-2 text-gray-700'>Free 14 days trials,no credit card needed</p>

            </div>
          </div>
        </motion.div>


        <div className=' my-10 flex flex-col md:flex-row gap-10'>




          <div className="mt-3 flex items-center -space-x-4 overflow-hidden">
            <div className="inline-block border p-1 bg-white  rounded-full " ><Avatar src={Avt} alt="" /></div>
            <div className="inline-block border p-1 z-20 bg-white rounded-full " ><Avatar src={Avt} alt="" /></div>
            <div className="inline-block border p-1 z-20 bg-white rounded-full " ><Avatar src={Avt} alt="" /></div>
            <div className="inline-block border p-1 z-20 bg-white rounded-full " ><Avatar src={Avt} alt="" /></div>
            <div className="inline-block border p-1 z-20 bg-white rounded-full " ><Avatar src={Avt} alt="" /></div>

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

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=' shadow-md my-10 w-full'>
          <img src={taskimg} className=' border rounded-2xl object-contain ' alt="images" />
        </motion.div>

      </motion.section>
      <Feature />
      <ExtraFeature />
      <Testinomial />
      <Pricing />
      <Faq />
      <Call />
    </div>
  )
}

export default Home