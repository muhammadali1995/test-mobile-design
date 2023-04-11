import React from 'react'
import closeIcon from './../assets/icon_close.png'

export default function Navbar() {
  return (
    <div className='bg-primary flex items-start justify-between cont py-8'>
        <h1 className='title'>Choose the form of payment</h1>
        <button>
            <img src={closeIcon} alt="closeIcon" />
        </button>
    </div>
  )
}