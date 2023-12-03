import React, { useState } from 'react'
import PriceCard from './PriceCard'

const Pricing = () => {
    const data1 = [
        {
            "title": "Free",
            "Price": "$0",
            "color": "#f1f2f4"
        },
        {
            "title": "Starter",
            "Price": "$19",
            "color": "#fee9cb"
        },
        {
            "title": "Pro",
            "Price": "$49",
            "color": "#fdded6"
        }
    ]


    const data2 = [
        {
            "title": "Free",
            "Price": "$0",
            "color": "#f1f2f4"
        },
        {
            "title": "Starter",
            "Price": "$15",
            "color": "#fee9cb"
        },
        {
            "title": "Pro",
            "Price": "$45",
            "color": "#fdded6"
        }
    ]


    const [option, setOption] = useState(1)
    const [data, setData] = useState(data1)
    return (
        <section className=' min-h-screen my-12'>

            <div className='mx-auto w-[400px] flex items-center flex-col justify-center my-20'>

                <div className=' mb-4 py-2 px-6 rounded-2xl w-fit mx-auto bg-slate-100'>
                    <h1 className=' font-semibold'>Pricing and plans 💰</h1>
                </div>

                <div className='flex flex-col gap-4 justify-center items-center'>
                    <div className='lg:w-[700px]  text-[#2E2E2E] lg:text-[60px] text-2xl mb-4 text-center font-bold  leading-none'>
                        <h1 >
                            Find the best plan for your needs
                        </h1>
                    </div>

                </div>
            </div>


            <div className=' my-10 flex justify-center items-center w-fit mx-auto gap-4 md:flex-row flex-col '>
                <div className=' w-fit flex mx-auto py-1.5 px-1.5 rounded-2xl gap-2  bg-slate-100'>

                    <div 
                    onClick={() => { setOption(1); setData(data1) }} 
                    className={`cursor-pointer ${option === 1 && 'bg-white'} shadow-sm lg:px-12 px-6  rounded-lg py-1 md:text-lg `}>
                       Monthly
                    </div>

                    <div onClick={() => { setOption(2); setData(data2) }} className={`cursor-pointer ${option === 2 && 'bg-white'} shadow-sm lg:px-12 px-6 rounded-lg py-1 md:text-lg`}>Annualy</div>
                </div>
                <span className=' text-base font-bold'>✨ save 30%</span>
            </div>


            <div className=' flex flex-col lg:flex-row gap-8'>
                {data.map((elem, index) => {
                    return (
                        <PriceCard data={elem} />
                    )
                })}
            </div>

        </section>
    )
}

export default Pricing