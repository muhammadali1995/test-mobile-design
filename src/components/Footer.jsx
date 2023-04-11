import React from 'react'
import Button from './Button'

export default function Footer() {
    return (
        <div className='flex items-center justify-between border-t border-t-gray-light cont py-7'>
            <Button name={'Previous'} cls='text-3xl bg-white' />
            <Button name='Next' cls={'bg-blue text-white px-20 text-3xl'} />
        </div>
    )
}