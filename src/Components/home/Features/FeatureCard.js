import React from 'react'
import cal from '../../../assets/cal.svg'
import { motion } from 'framer-motion'


const FeatureCard = () => {
    return (
        <motion.div
            initial={{ translateY: '10%', scale: 0.8 }}
            whileInView={{ translateY: '0%', scale: 1 }}
            transition={{ duration: 0.4, type: 'spring' }}
            className=' flex flex-col gap-5'>
            <div className=' flex items-center justify-center bg-slate-100 px-12 py-10  '>
                <img src={cal} className=' h-44' alt="" />
            </div>
            <div className=' py-2 px-6 rounded-2xl w-fit  bg-slate-100'>
                <h1 className=' font-semibold'>And so much more... 💼</h1>
            </div>
            <p>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go</p>
        </motion.div>

    )
}

export default FeatureCard