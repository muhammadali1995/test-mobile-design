import React from 'react'
import calendar from './../assets/icons/calendar.png'
import location from './../assets/icons/location.png'

export default function Lesson({ userData }) {
    return (
        <div className='rounded-lg flex items-center py-2 px-3 border border-gray-light mt-3'>
            <img src={userData.img} alt="user" className='w-11 rounded-md mt-1' />
            <div className='ml-3'>
                <h1 className='sectionTitle mt-0'>{userData.title}</h1>
                <div className='flex items-center mt-1'>
                    <img src={calendar} alt="calendar" className='w-3' />
                    <p className='ml-1 font-medium text-xs text-gray-650'>{userData.date}</p>
                </div>
                <div className='flex items-center mt-1'>
                    <img src={location} alt="calendar" className='w-3' />
                    <p className='ml-1 font-medium text-xs text-gray-650'>{userData.location}</p>
                </div>
                <h2 className='sectionTitle'>Rp {userData.rp}</h2>
            </div>
        </div>
    )
}
