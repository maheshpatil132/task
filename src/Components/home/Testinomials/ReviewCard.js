import { Avatar } from '@mui/material'
import { Star } from 'lucide-react'
import AVT from '../../../assets/avtar.webp'
import React from 'react'

const ReviewCard = () => {  
  return (

    <div className='border flex flex-col w-[450px] bg-white rounded-lg gap-3 py-3 px-4'>
        <div className='flex justify-between items-center'>
            <div className=' flex gap-4 items-center'>
                <Avatar src={AVT} sizes='18'/>
                <h1 className=' text-black font-semibold text-lg'>"Name"</h1>
            </div>
            <div className=' flex items-center gap-2'>
                <Star strokeWidth={0}fill='#fcd53f'/>
                <Star strokeWidth={0} fill='#fcd53f'/>
                <Star strokeWidth={0} fill='#fcd53f'/>
                <Star strokeWidth={0} fill='#fcd53f'/>
                <Star strokeWidth={0} fill='#fcd53f'/>
            </div>
        </div>

        <div>
            <p className=' text-gray-500 '>
            This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!
            </p>
        </div>

        <div className=' flex items-center justify-between'>
            <p className=' font-semibold text-black'>Brad de Costa</p>
            <p className=' text-gray-500 text-sm'>Head of marketing</p>
        </div>
    </div>
  )
}

export default ReviewCard