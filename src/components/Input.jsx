import React from 'react'

export default function Input({ placeholder, id }) {
  return (
    <input id={id} placeholder={placeholder} className='mt-5 border border-gray-light rounded-md px-6 py-7 outline-none text-3xl placeholder:text-gray-light' />
  )
}