import React from 'react'
import FeatureCard from './FeatureCard'
import { motion } from 'framer-motion'

const ExtraFeature = () => {
    return (
        <section className=' min-h-screen my-2'>

            <motion.div 
             initial={{ translateY:'10%' , scale:0.8 }}
             whileInView={{ translateY:'0%' , scale: 1 }}
             transition={{ duration:0.2 , type:'spring'}}
            className='mx-auto flex items-center flex-col justify-center my-20'>

                <div className=' mb-4 py-2 px-6 rounded-2xl  bg-slate-100'>
                    <h1 className=' font-semibold'>And so much more... 💼</h1>
                </div>

                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className='lg:w-[800px] text-[#2E2E2E] text-3xl lg:text-[50px] mb-4 text-center font-bold  leading-none'>
                        <h1>
                            Our features to make your life easier
                        </h1>
                    </div>
                </div>
            </motion.div>

            <motion.div 
            
            className=' grid grid-cols-1 lg:grid-cols-3 gap-8'>

               
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                


            

            </motion.div>

        </section>
    )
}

export default ExtraFeature