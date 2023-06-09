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
        <div className='py-6'>
            <h1 className='subtitle -mt-1 tracking-tight'>Selected service</h1>
            <form onSubmit={onSubmit}>
                <Lesson userData={userData} />
                <div className='flex flex-col'>
                    <label htmlFor='location' className='sectionTitle mt-6 tracking-normal'>Enter your location</label>
                    <Input id='location' placeholder='Enter address' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='note' className='sectionTitle mt-6'>Note (optional)</label>
                    <Input id='note' placeholder='Enter text here' />
                </div>
                <h1 className='title text-primary mt-8 tracking-wide'>Choose a way to pay</h1>
                <div className='grid gap-5 grid-cols-2 mt-8'>
                    {paymentOptions.map((method, index) => {
                        return <Button name={method} cls={"text-base h-16"} type={activeBtn === index && 'light'} click={() => setActiveBtn(index)} />
                    })}
                </div>
                <div className='pt-6 flex items-start'>
                    <input type="checkbox" className='w-4 h-4 form-chechbox mt-1' id='chechbox' />
                    <label className='ml-3 font-medium test-sm text-gray-650 leading-5' htmlFor="chechbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <a href="#" className='text-blue underline'> do eiusmod</a></label>
                </div>
            </form>
        </div>
    )
}