
import React from 'react'
import Querie from './Querie'
const Faq = () => {
    return (
        <section className=' min-h-screen my-10 '>
            <div className='mx-auto flex items-center flex-col justify-center my-20'>

                <div className=' mb-4 py-2 px-6 rounded-2xl w-fit mx-auto bg-slate-100'>
                    <h1 className=' font-semibold'>Relevant stuff, bla bla 📣</h1>
                </div>

                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className=' text-[#2E2E2E] mb-4  text-center font-bold  leading-none '>
                        <h1 className='lg:text-6xl text-4xl'>
                            Frequently asked questions
                        </h1>
                    </div>
                </div>
            </div>


            <div className=' w-full lg:w-[900px] mx-auto flex flex-col'>
                <Querie />
                <Querie />
                <Querie />
                <Querie />
            </div>

        </section>
    )
}

export default Faq