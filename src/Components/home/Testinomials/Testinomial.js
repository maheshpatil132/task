import React  from 'react'
import ReviewSlider from './ReviewSlider'
import { motion } from 'framer-motion'



const Testinomial = () => {

  

    return (
        <section id='Testimonial' className=' min-h-screen'>

            <motion.div 
            initial={{ translateY:'10%' , scale:0.8 }}
            whileInView={{ translateY:'0%' , scale: 1 }}
            transition={{ duration:0.2 , type:'spring'}}
            className='mx-auto w-[300px] md:w-[350px] flex items-center flex-col justify-center my-20 lg:my-28'>

                <div className=' mb-4 py-2 px-6 rounded-2xl w-fit mx-auto bg-slate-100'>
                    <h1 className=' font-semibold'>They already love our products 😍</h1>
                </div>

                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className='lg:w-[700px] w-fit text-[#2E2E2E] lg:text-[60px] text-3xl mb-4 text-center font-bold  leading-none '>
                        <h1>
                            See what our users say about us
                        </h1>
                    </div>
                </div>
            </motion.div>
               
            <div className=' lg:w-full'>
            <ReviewSlider direction={"LR"} />
            <ReviewSlider direction={"RL"}/>
            <ReviewSlider direction={"LR"}/>
            </div>

        </section>
    )
}

export default Testinomial