import React from 'react'
import closeIcon from './../assets/icon_close.png'

export default function Navbar() {
  return (
    <div className='bg-primary flex items-start justify-between cont py-5'>
      <h1 className='title leading-8 tracking-wide'>Choose the form of payment</h1>
      <button className='mt-2.5 w-6'>
        <img src={closeIcon} alt="closeIcon" />
      </button>
    </div>
  )
}