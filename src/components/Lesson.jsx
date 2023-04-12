import React from 'react'
import calendar from './../assets/icons/calendar.png'
import location from './../assets/icons/location.png'

export default function Lesson({ userData }) {
    return (
        <div className='rounded-lg flex items-center py-4 px-5 border border-gray-light mt-5'>
            <img src={userData.img} alt="user" className='w-16 rounded-lg mt-1' />
            <div className='ml-1.5'>
                <h1 className='sectionTitle mt-0'>{userData.title}</h1>
                <div className='flex items-center mt-1.5'>
                    <img src={calendar} alt="calendar" className='w-4' />
                    <p className='ml-1.5 font-medium text-xs text-gray-650'>{userData.date}</p>
                </div>
                <div className='flex items-center mt-1.5'>
                    <img src={location} alt="calendar" className='w-4' />
                    <p className='ml-1.5 font-medium text-xs text-gray-650'>{userData.location}</p>
                </div>
                <h2 className='sectionTitle'>Rp {userData.rp}</h2>
            </div>
        </div>
    )
}
