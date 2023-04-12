import React from 'react'

export default function Input({ placeholder, id }) {
  return (
    <input id={id} placeholder={placeholder} className='mt-2 border border-gray-light rounded-md px-2 py-3 outline-none text-xs placeholder:text-gray-light' />
  )
}