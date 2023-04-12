import React from 'react'

export default function Input({ placeholder, id }) {
  return (
    <input id={id} placeholder={placeholder} className='mt-2.5 border border-gray-light rounded-md px-3 py-3.5 outline-none text-base placeholder:text-gray-light' />
  )
}