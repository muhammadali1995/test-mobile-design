import React from 'react'
import Button from './Button'

export default function User({ name, number }) {
    return (
        <div className='bg-secondary border border-gray-light rounded-lg p-5 flex justify-between items-center'>
            <div className='flex items-start'>
                <div className='bg-gray-medium w-12 h-12 flex items-center justify-center rounded-full subtitle'>
                    {name.slice(0, 1)}
                </div>
                <div className='ml-3'>
                    <h1 className='subtitle font-semibold -mt-1'>{name}</h1>
                    <p className='mt-1.5 text-gray-650 text-xs font-medium'>{number}</p>
                </div>
            </div>
            <Button name={'Log out'} />
        </div>
    )
}
