import React from 'react'
import fe1 from '../../../assets/fe1.webp'
import fe2 from '../../../assets/fe2.webp'
import { Avatar } from '@mui/material'
import Avt from '../../../assets/avt2.webp'
import { motion } from 'framer-motion'


const Feature = () => {
    return (
        <section id='Features' className=' min-h-screen'>

            <motion.div 
            initial={{ translateY: '10%', scale: 0.8 }}
            whileInView={{ translateY:'0%', scale: 1 }}
            transition={{ duration: 0.2, type: 'spring' }}
            className='mx-auto flex items-center flex-col justify-center my-20 lg:my-28'>

                <div className=' mb-4 py-2 px-6 rounded-2xl w-fit mx-auto bg-slate-100'>
                    <h1 className=' font-semibold'>Our main features  🦸🏼</h1>
                </div>

                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className=' text-[#2E2E2E] mb-4  text-center font-bold  leading-none '>
                        <h1 className='lg:text-6xl text-4xl'>
                            Discover your new superpowers
                        </h1>
                    </div>

                </div>
            </motion.div>

            <div className=' flex-col lg:flex-row flex my-24 items-start justify-center'>
                <div className=' w-full lg:w-1/2'>
                    <div className=' mb-4 py-2 px-6 rounded-2xl w-fit bg-[#fee9cb]'>
                        <h1 className='  font-semibold'>Seamless Scheduling</h1>
                    </div>
                    <h1 className='text-[#2E2E2E] mb-14 mt-8 text-3xl lg:text-5xl font-bold  leading-none '>Focus on what matters most for you</h1>
                    <p className='  lg:text-xl text-gray-500 font-medium'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>

                    <motion.div 
                    initial={{ translateY:'150%', opacity:0 }}
                    whileInView={{ translateY:'0',  opacity:1}}
                    transition={{ duration:0.3 }}
                    className=' flex my-14 '>
                        <div className=' pt-20 ' ><Avatar sx={{ width: 64, height: 64 }} src={Avt} /></div>
                        <div className=' bg-[#2E2E2E] h-fit w-64 lg:w-96 rounded-xl p-3 '>
                            <h4 className=' text-base font-semibold text-white'>I tested many calendar apps. This app is the best of all! It saves me hours of time.</h4>
                            <p className=' text-gray-400 font-bold'>Carla, Head of Finance </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                 initial={{scale:0.7 , rotate:-90 , opacity:0}}
                 whileInView={{scale:1 , opacity:1 , rotate:0}}
                 transition={{ duration:1 , delay:0.4 , type:'spring' }}
                 className='w-full lg:w-1/2'>
                    <img src={fe1} alt="" />
                </motion.div>
            </div>



            <div className=' flex-col-reverse lg:flex-row flex my-24 items-start justify-center'>
                <motion.div 
                initial={{scale:0.7 , rotate:-90 , opacity:0}}
                whileInView={{scale:1 , opacity:1 , rotate:0}}
                transition={{ duration:1 ,delay:0.4, type:'spring' }}
                className=' w-full lg:w-1/2'>
                    <img src={fe2} alt="" />
                </motion.div>

                <div className='w-full lg:w-1/2'>
                    <div className=' mb-4 py-2 px-6 rounded-2xl w-fit bg-[#cbeefe]'>
                        <h1 className='  font-semibold'>Smart Reminders & Task</h1>
                    </div>
                    <h1 className='text-[#2E2E2E] mb-14 mt-8 text-3xl lg:text-5xl font-bold  leading-none '>Focus on what matters most for you</h1>
                    <p className=' lg:text-xl text-gray-500 font-medium'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>

                    <motion.div 
                    initial={{ translateY:'150%', opacity:0 }}
                    whileInView={{ translateY:'0',  opacity:1}}
                    transition={{ duration:0.3 }}
                    className=' flex my-14 ml-auto w-fit '>
                        <div className=' bg-[#2E2E2E] h-fit w-64 lg:w-96 rounded-xl p-3 '>
                            <h4 className=' font-semibold text-white'>I tested many calendar apps. This app is the best of all! It saves me hours of time.</h4>
                            <p className=' text-gray-400 font-bold'>Carla, Head of Finance </p>
                        </div>
                        <div className=' pt-20 ' ><Avatar sx={{ width: 64, height: 64 }} src={Avt} /></div>
                    </motion.div>
                </div>


            </div>



            <div className=' flex-col lg:flex-row flex my-24 items-start justify-center'>
                <div className=' w-full lg:w-1/2'>
                    <div className=' mb-4 py-2 px-6 rounded-2xl w-fit bg-[#fee9cb]'>
                        <h1 className='  font-semibold'>Seamless Scheduling</h1>
                    </div>
                    <h1 className='text-[#2E2E2E] mb-14 mt-8 text-3xl lg:text-5xl font-bold  leading-none '>Focus on what matters most for you</h1>
                    <p className=' lg:text-xl text-gray-500 font-medium'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>

                    <motion.div 
                    initial={{ translateY:'150%', opacity:0 }}
                    whileInView={{ translateY:'0',  opacity:1}}
                    transition={{ duration:0.3 }}
                    className=' flex my-14 '>
                        <div className=' pt-20 ' ><Avatar sx={{ width: 64, height: 64 }} src={Avt} /></div>
                        <div className=' bg-[#2E2E2E] h-fit w-64 lg:w-96 rounded-xl p-3 '>
                            <h4 className=' text-base font-semibold text-white'>I tested many calendar apps. This app is the best of all! It saves me hours of time.</h4>
                            <p className=' text-gray-400 font-bold'>Carla, Head of Finance </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                 initial={{scale:0.7 , rotate:-90 , opacity:0}}
                 whileInView={{scale:1 , delay:0.4 , opacity:1 , rotate:0}}
                 transition={{ duration:1 , type:'spring' }}
                 className='w-full lg:w-1/2'>
                    <img src={fe1} alt="" />
                </motion.div>
            </div>

            <div className=' flex-col-reverse lg:flex-row flex my-24 items-start justify-center'>
                <motion.div 
                initial={{scale:0.7 , rotate:-90 , opacity:0}}
                whileInView={{scale:1 , opacity:1 , rotate:0}}
                transition={{ duration:1 ,delay:0.4, type:'spring' }}
                className=' w-full lg:w-1/2'>
                    <img src={fe2} alt="" />
                </motion.div>

                <div className='w-full lg:w-1/2'>
                    <div className=' mb-4 py-2 px-6 rounded-2xl w-fit bg-[#cbeefe]'>
                        <h1 className='  font-semibold'>Smart Reminders & Task</h1>
                    </div>
                    <h1 className='text-[#2E2E2E] mb-14 mt-8 text-3xl lg:text-5xl font-bold  leading-none '>Focus on what matters most for you</h1>
                    <p className=' lg:text-xl text-gray-500 font-medium'>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</p>

                    <motion.div 
                    initial={{ translateY:'150%', opacity:0 }}
                    whileInView={{ translateY:'0',  opacity:1}}
                    transition={{ duration:0.3 }}
                    className=' flex my-14 ml-auto w-fit '>
                        <div className=' bg-[#2E2E2E] h-fit w-64 lg:w-96 rounded-xl p-3 '>
                            <h4 className=' font-semibold text-white'>I tested many calendar apps. This app is the best of all! It saves me hours of time.</h4>
                            <p className=' text-gray-400 font-bold'>Carla, Head of Finance </p>
                        </div>
                        <div className=' pt-20 ' ><Avatar sx={{ width: 64, height: 64 }} src={Avt} /></div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}

export default Feature