import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { X } from 'lucide-react'

const Header = () => {
    const navmenu = ['Features', 'Testimonial', 'Pricing', 'FAQs', 'Blog']
    const [show, setShow] = useState(false)
   

    return (
        <header className='px-4 z-50 fixed left-0 bg-[#fef9f6] top-0 w-full flex  items-center py-5 lg:px-20 border-b'>
            <div className=' flex gap-2 items-center justify-center'>
                <div className='h-6 w-6 bg-slate-100 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" radius={'2'} viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /></svg>
                </div>
                <h1 className='font-bold text-gray-700'>
                    Milton
                </h1>
            </div>

            <nav className={` ${!show && 'hidden'} text-center left-0 px-4 py-12 bg-slate-50 lg:bg-transparent lg:p-0 gap-8 w-full lg:flex-row flex-col absolute lg:relative top-full lg:flex justify-between items-center`}>
                <ul className=' mx-auto lg:flex-row gap-4 flex flex-col  '>
                    {
                        navmenu.map((elem, index) => {
                            return (
                                <li key={index} className='text-gray-500 mx-5 font-semibold'>
                                    <a href="/" className='hover:underline hover:text-black'>{elem}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className=' flex justify-center items-center my-4 lg:my-0 flex-col lg:flex-row gap-4' >
                    <button className=' w-fit hover:scale-110 transition-all px-4 py-2 bg-slate-100 text-gray-700 rounded-xl font-semibold'>Log in</button>
                    <button className=' w-fit hover:scale-110 transition-all px-4 py-2 bg-black text-white rounded-xl font-semibold'>Get Started</button>
                </div>
            </nav>
            

            <div onClick={()=>{ setShow(!show) }} className=' ml-auto block lg:hidden'>
               { !show ? <Menu /> : < X /> } 
            </div>
        </header>
    )
}

export default Header