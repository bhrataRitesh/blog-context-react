import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="py-2 border-b-2 border-b-gray-300 drop-shadow-md inset-x-0 bg-white ">
            <h1 className="font-bold text-3xl uppercase text-center">
                <NavLink to="/">Codehelp - Blogs</NavLink>
            </h1>
        </div>
    )
}

export default Header