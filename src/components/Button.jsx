import React from 'react'

export default function Button({ name, type, cls, click }) {
    return (
        <>
            {type === 'light' ?
                <button onClick={click} className={'bg-white py-7 border border-primary px-6 rounded-md text-primary font-semibold text-2xl ' + cls}>{name}</button>
                :
                <button onClick={click} className={'bg-gray-medium border border-white py-7 px-6 rounded-md text-primary font-semibold text-2xl ' + cls}>{name}</button>
            }
        </>
    )
}