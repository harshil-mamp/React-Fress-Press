import React from 'react'
import Book from './Book.gif'


export default function Spinner() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <img src={Book} alt="Loading..." />
        </div>
    )
}


