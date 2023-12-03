import React , {useState} from 'react'
import ReviewSlider from './ReviewSlider'



const Testinomial = () => {

  

    return (
        <section className=' min-h-screen  minw'>

            <div className='mx-auto flex items-center flex-col justify-center my-20'>

                <div className=' mb-4 py-2 px-6 rounded-2xl w-fit mx-auto bg-slate-100'>
                    <h1 className=' font-semibold'>They already love our products 😍</h1>
                </div>

                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className='lg:w-[700px] text-[#2E2E2E] lg:text-[80px] text-6xl mb-4 lg:text-7xl text-center font-bold  leading-none '>
                        <h1 className='text-6xl'>
                            See what our users say about us
                        </h1>
                    </div>
                </div>
            </div>
               
            <div className='w-screen'>
            <ReviewSlider direction={"LR"} />
            <ReviewSlider direction={"RL"}/>
            <ReviewSlider direction={"LR"}/>
            </div>

        </section>
    )
}

export default Testinomial