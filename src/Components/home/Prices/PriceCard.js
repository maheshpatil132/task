import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import React from 'react'

const PriceCard = ({data}) => {
    return (
        <motion.div 
        initial={{ translateY:'10%' , scale:0.8 }}
        whileInView={{ translateY:'0%' , scale: 1 }}
        transition={{ duration:0.5 , type:'spring'}}
        className=' flex flex-col gap-4 bg-white py-6  px-9 rounded-lg shadow-lg'>



            <div className={`mb-4 py-2 px-6 rounded-full w-fit  bg-[${data.color}]`}>
                <h1 className=' font-semibold'>{data.title}</h1>
            </div>

            <p className=' mb-3 text-gray-600 font-medium'>So you can see how incredible our tool is. </p>

            <div>
                <h1 className=' text-5xl font-extrabold'>{data.Price}<small className='text-xs font-bold text-gray-700'>/month</small></h1>
                <p className='text-gray-800 my-2'>Free for ever</p>
            </div>


            <div className=' w-full'>
                <button className='bg-[#2E2E2E] w-full hover:scale-110 transition-all text-lg font-bold text-white px-6 py-3 rounded-lg'>
                    Get started
                </button>
                <p className=' text-xs font-normal my-2 text-center text-gray-700'>No credit card needed</p>
            </div>

            <div>
                <h1 className=' font-semibold  mb-4'>What's included:</h1>
                <ul className='flex flex-col gap-3'>
                    <li className=' flex items-center gap-2 '> <Check /> <span className='text-gray-700 text-lg '> A cool feature</span></li>
                    <li className=' flex items-center gap-2 '> <Check /> <span> A cool feature</span></li>
                    <li className=' flex items-center gap-2'> <Check /> <span> A top feature with limitations</span></li>
                    <li className=' flex items-center gap-2 '> <Check /> <span> An incredible feature so useful</span></li>
                    <li className=' flex items-center gap-2 '> <Check /> <span className='text-gray-700 text-lg '> A cool feature</span></li>
                </ul>
            </div>



        </motion.div>
    )
}

export default PriceCard