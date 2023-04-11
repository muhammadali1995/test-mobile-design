import React from 'react'
import Button from './Button'

export default function Footer() {
    return (
        <div className='flex items-center justify-between border-t border-t-gray-light cont py-7'>
            <button className='text-3xl font-medium text-primary'>Previous</button>
            <Button name='Next' cls={'bg-blue text-white px-20'} />
        </div>
    )
}