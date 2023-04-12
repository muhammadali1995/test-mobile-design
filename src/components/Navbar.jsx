import React from 'react'
import closeIcon from './../assets/icon_close.png'

export default function Navbar() {
  return (
    <div className='bg-primary flex items-start justify-between cont py-4'>
      <h1 className='title leading-[22px] tracking-wide'>Choose the form of payment</h1>
      <button className='w-3 h-3 mt-2'>
        <img src={closeIcon} alt="closeIcon"/>
      </button>
    </div>
  )
}