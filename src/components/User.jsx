import React from 'react'
import Button from './Button'

export default function User({ name, number }) {
    return (
        <div className='bg-secondary border border-gray-light rounded-lg px-10 py-9 flex justify-between items-center'>
            <div className='flex items-start'>
                <div className='bg-gray-medium w-24 h-24 flex items-center justify-center rounded-full subtitle'>
                    {name.slice(0, 1)}
                </div>
                <div className='ml-6'>
                    <h1 className='subtitle font-semibold -mt-2.5'>{name}</h1>
                    <p className='mt-3 text-gray-650 text-2xl font-medium'>{number}</p>
                </div>
            </div>
            <Button name={'Log out'} />
        </div>
    )
}
