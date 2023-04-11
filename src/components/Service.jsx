import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import Lesson from './Lesson'
import user from './../assets/user.png'

export default function Service() {
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const [activeBtn, setActiveBtn] = useState(0)

    const userData = {
        img: user,
        title: 'Japanese lessons',
        date: 'Nov 7, 2020 · 11:30',
        location: 'Client`s place',
        rp: '350.000'
    }

    const paymentOptions = [
        'Cash', 'Credit card', 'eWallet/Virtual bank'
    ]

    return (
        <div className='py-md'>
            <h1 className='subtitle -mt-2 tracking-tight'>Selected service</h1>
            <form onSubmit={onSubmit}>
                <Lesson userData={userData} />
                <div className='flex flex-col'>
                    <label htmlFor='location' className='sectionTitle mt-12 tracking-normal'>Enter your location</label>
                    <Input id='location' placeholder='Enter address' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='note' className='sectionTitle mt-12'>Note (optional)</label>
                    <Input id='note' placeholder='Enter text here' />
                </div>
                <h1 className='title text-primary mt-16 pt-1.5 tracking-wide'>Choose a way to pay</h1>
                <div className='grid gap-5 grid-cols-2 mt-16 pt-1'>
                    {paymentOptions.map((method, index) => {
                        return <Button name={method} cls={"text-3xl " + (index === 2 && '!py-3')} type={activeBtn === index && 'light'} click={() => setActiveBtn(index)} />
                    })}
                </div>
                <div className='pt-md flex items-start'>
                    <input type="checkbox" className='w-8 h-8 form-chechbox mt-2' id='chechbox' />
                    <label className='ml-6 font-medium text-2xl text-gray-650 leading-10' htmlFor="chechbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <a href="#" className='text-blue underline'> do eiusmod</a></label>
                </div>
            </form>
        </div>
    )
}