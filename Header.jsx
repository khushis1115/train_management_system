import React from 'react'
import logo from "./../assets/images/2855692.png"
import { IoMdSearch } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
function Header() {
  return (
    <div >
        <img src={logo} width={60} />
        <div className='flex bg-slate-200 p-2 w-50% mx-5 rounded-full'>  
            <input type="text" placeholder='from' className='px-2 bg-transparent outline-none margin-6' />
        </div>

        <div className='flex bg-slate-200 p-2 w-50% mx-5 rounded-full'>  
            <input type="text" placeholder='to' className='px-2 bg-transparent outline-none' />
        </div>
    </div>
  )
}

export default Header