import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 text-center'>
                <NavLink className='px-2' to=''>Home</NavLink>
                <NavLink className='px-2' to='create'>Register</NavLink>
                <NavLink className='px-2' to='show'>Show</NavLink>
            </div>
        </div>

    </div>
  )
}

export default Header
