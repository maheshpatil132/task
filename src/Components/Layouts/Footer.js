import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import data from './footer.json'
const Footer = () => {


 
   

  return (
    <section className=' lg:px-20 px-6 py-10 text-gray-500 font-medium bg-slate-100 flex-col lg:flex-row flex justify-between items-start gap-5'>


      <div className='flex-col w-fit flex gap-5  '>
      <div className=' flex gap-2 items-center'>
                <div className='h-6 w-6 bg-white shadow-sm flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" radius={'2'} viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /></svg>
                </div>
                <h1 className='font-bold text-xl text-gray-800'>
                    Milton
                </h1>
            </div>
        
        <p className=' text-base'>A short text explaining
          why my startup is so coo</p>
        <p>© My super start-up

        </p>

        <div className=' flex gap-4'>
          <div className=' p-2 rounded-full bg-blue-500'>
            <Twitter fill='white' size={20} strokeWidth={0} />
          </div>

          <div className=' p-2 rounded-full bg-blue-900'>
            <Facebook fill='white' size={20} strokeWidth={0} />
          </div>

          <div className=' p-2 rounded-full bg-blue-900'>
            <Linkedin fill='white' size={20} strokeWidth={0} />
          </div>


        </div>
      </div>

      {
         data.map((elem , index)=>{
          return(
            <div className=' w-fit lg:ml-12  flex flex-col'>
            <h1 className=' text-[#2D2D2D] mb-4 md:text-lg font-semibold'>{elem.title}</h1>
            <ul className=' font-normal flex flex-col gap-3'>
              {
                elem.menus.map((e,i)=>{
                  return(
                    <li className=' hover:text-black hover:underline text-base text-gray-500 font-medium'><a href={e.link}>{e.option}</a></li>
                  )
                })
              }
            </ul>
          </div>
          )
         })

      }
 



    </section>
  )
}

export default Footer