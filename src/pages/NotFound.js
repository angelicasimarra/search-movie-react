import React from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export const NotFound = () =>  {
    return (
        <div>
            <h1 className="title">404!</h1>
            <h2 className="subtitle">The page does not found</h2>
            <ButtonBackToHome />
        </div>
    )
}
