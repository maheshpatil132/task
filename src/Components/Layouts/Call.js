import React from 'react'
import { Avatar } from '@mui/material'
import Avt from '../../assets/avt2.webp'

const Call = () => {
    return (
        <section className=' min-h-screen lg:w-3/5'>
            <div className='mx-auto flex items-center flex-col justify-center my-20'>

                <div className=' mb-4 py-2 px-6 rounded-2xl w-fit mx-auto bg-slate-100'>
                    <h1 className=' font-semibold'>Last call Baby! 🚀</h1>
                </div>

                <div className='flex flex-col gap-5 justify-center items-center'>
                    <div className=' text-[#2E2E2E] mb-4  text-center font-bold  leading-none '>
                        <h1 className='text-6xl'>
                            Ready to start?
                        </h1>
                    </div>
                    <p className='text-center text-gray-500 text-xl'>Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features. </p>

                    <div>
                        <button className='bg-[#2E2E2E] hover:scale-110 transition-all text-lg font-semibold text-white px-6 py-3 rounded-lg'>
                            Get started, it's free
                        </button>
                    </div>


                    


                </div>
            </div>

            <div className=' flex my-14 '>
                        <div className=' pt-20 ' ><Avatar sx={{ width: 64, height: 64 }} src={Avt} /></div>
                        <div className=' bg-[#fee9cb] h-fit w-64 lg:w-96 rounded-xl p-3 '>
                            <h4 className=' text-base font-semibold text-[#2E2E2E]'>I never missed a call again, the AI-drivenfeature is a game changer for me!.</h4>
                            <p className=' my-2 text-gray-700 font-bold'>Adam, Solo founder </p>
                        </div>
                    </div>
        </section>
    )
}

export default Call