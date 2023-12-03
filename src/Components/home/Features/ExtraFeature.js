import React from 'react'
import cal from '../../../assets/cal.svg'

const ExtraFeature = () => {
    return (
        <section className=' min-h-screen my-8'>

            <div className='mx-auto flex items-center flex-col justify-center my-20'>

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
            </div>

            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-8'>

                <div className=' flex flex-col gap-5'>
                    <div className=' flex items-center justify-center rounded-lg bg-slate-100 px-12 py-10 '>
                        <img src={cal} className=' h-44' alt="" />
                    </div>
                    <div className=' py-2 px-6 rounded-2xl w-fit  bg-slate-100'>
                        <h1 className=' font-semibold'>Cross-Device Sync</h1>
                    </div>
                    <p className='text-gray-500 font-medium'>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go</p>
                </div>

                <div className=' flex flex-col gap-5'>
                    <div className=' flex items-center justify-center bg-slate-100 px-12 py-10  '>
                        <img src={cal} className=' h-44' alt="" />
                    </div>
                    <div className=' py-2 px-6 rounded-2xl w-fit  bg-slate-100'>
                        <h1 className=' font-semibold'>And so much more... 💼</h1>
                    </div>
                    <p>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go</p>
                </div>


                <div className=' flex flex-col gap-5'>
                    <div className=' flex items-center justify-center bg-slate-100 px-12 py-10  '>
                        <img src={cal} className=' h-44' alt="" />
                    </div>
                    <div className=' py-2 px-6 rounded-2xl w-fit  bg-slate-100'>
                        <h1 className=' font-semibold'>And so much more... 💼</h1>
                    </div>
                    <p>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go</p>
                </div>

                <div className=' flex flex-col gap-5'>
                    <div className=' flex items-center justify-center bg-slate-100 px-12 py-10  '>
                        <img src={cal} className=' h-44' alt="" />
                    </div>
                    <div className=' py-2 px-6 rounded-2xl w-fit  bg-slate-100'>
                        <h1 className=' font-semibold'>And so much more... 💼</h1>
                    </div>
                    <p>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go</p>
                </div>


                <div className=' flex flex-col gap-5'>
                    <div className=' flex items-center justify-center bg-slate-100 px-12 py-10  '>
                        <img src={cal} className=' h-44' alt="" />
                    </div>
                    <div className=' py-2 px-6 rounded-2xl w-fit  bg-slate-100'>
                        <h1 className=' font-semibold'>And so much more... 💼</h1>
                    </div>
                    <p>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go</p>
                </div>



                <div className=' flex flex-col gap-5'>
                    <div className=' flex items-center justify-center bg-slate-100 px-12 py-10  '>
                        <img src={cal} className=' h-44' alt="" />
                    </div>
                    <div className=' py-2 px-6 rounded-2xl w-fit  bg-slate-100'>
                        <h1 className=' font-semibold'>And so much more... 💼</h1>
                    </div>
                    <p>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go</p>
                </div>


            

            </div>

        </section>
    )
}

export default ExtraFeature