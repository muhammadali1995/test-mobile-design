import React from 'react'
import Button from './Button'

export default function Footer() {
    return (
        <div className='flex items-center justify-between border-t border-t-gray-light cont py-3.5'>
            <Button name={'Previous'} cls='text-base bg-white' />
            <Button name='Next' cls={'bg-blue text-white px-10 text-base'} />
        </div>
    )
}