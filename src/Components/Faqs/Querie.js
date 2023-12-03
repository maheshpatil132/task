import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import { Minus, Plus } from 'lucide-react'

const Querie = () => {
  const [show, setShow] = useState(false)
  return (
    <div onClick={()=>setShow(!show)} className='  cursor-pointer my-6 w-full gap-2 mx-auto bg-slate-100 rounded-xl shadow-sm py-4 px-8 flex flex-col'>
                <div  className=' font-semibold items-center flex justify-between'>
                    <h1 className=' text-lg lg:text-xl font-semibold text-[#2D2D2D]'>Can I cancel my subscrition?</h1>
                    <IconButton>{!show ?  <Plus color="#2D2D2D" /> :<Minus/>}</IconButton>
                </div>
                {
                  show && <p className=' text-[#2D2D2D]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro accusamus aliquid optio laborum vel doloremque totam quae. Commodi, iure aperiam?</p>
                }
                
            </div>
  )
}

export default Querie