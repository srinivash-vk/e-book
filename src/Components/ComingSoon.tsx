import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ComingSoon() {
  return (
    <div className='flex flex-col mx-auto h-[100vh] justify-center items-center'>
        <p className="mb-3 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <NavLink
              to="/home"
              className="px-5 py-2 rounded-md text-black-100 underline underline-offset-8">
              Go home
            </NavLink>
    </div>
  )
}
