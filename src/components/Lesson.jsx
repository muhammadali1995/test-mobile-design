import React from 'react'
import calendar from './../assets/icons/calendar.png'
import location from './../assets/icons/location.png'

export default function Lesson({ userData }) {
    return (
        <div className='rounded-lg flex items-center py-8 px-9 border border-gray-light mt-10'>
            <img src={userData.img} alt="user" className='w-32 rounded-lg mt-2' />
            <div className='ml-3'>
                <h1 className='sectionTitle mt-0'>{userData.title}</h1>
                <div className='flex items-center mt-3'>
                    <img src={calendar} alt="calendar" />
                    <p className='ml-3 font-medium text-xl text-gray-650'>{userData.date}</p>
                </div>
                <div className='flex items-center mt-3'>
                    <img src={location} alt="calendar" />
                    <p className='ml-3 font-medium text-xl text-gray-650'>{userData.location}</p>
                </div>
                <h2 className='sectionTitle'>Rp {userData.rp}</h2>
            </div>
        </div>
    )
}
