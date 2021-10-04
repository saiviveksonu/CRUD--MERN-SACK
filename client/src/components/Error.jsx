import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="container d-flex align-items-center">
                <div className="error_handel">
                    <h1>404 error</h1>
                    <p>page not found</p>
                    <NavLink to="/">back to the home page</NavLink>
                </div>
            </div>
        </>
    )
}
export default Error
