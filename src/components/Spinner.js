import React, { Component } from 'react'
import Book from './Book.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <img src={Book} alt="Loading..." />
            </div>
        )
    }
}
