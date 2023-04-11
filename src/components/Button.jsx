import React from 'react'

export default function Button({ name, type, cls, click }) {
    return (
        <button onClick={click} className={(type === 'light' ? 'btn-light ' : 'btn-dark ') + cls}>{name}</button>
    )
}