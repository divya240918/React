import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div >
        <div className='bg-blue-400 h-20 flex items-center justify-between p-5'>
            <h3 className='text-xl font-bold text-white'>Gratitude</h3>
            <ul className='flex gap-10 justify-between font-semibold '>
                <li>
                    <NavLink
                    to="/"
                    className={({isActive}) => isActive ? "text-red-500" : ""}
                    >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/about"
                    className={({isActive}) => isActive ? "text-red-500" : ""}
                    >
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/contact"
                    className={({isActive}) => isActive ? "text-red-500" : ""}
                    >
                    Contact
                    </NavLink>
                </li>
            </ul>
            <button className='text-bold text-white bg-red-400 p-1 w-20 rounded-lg' >Login</button>
        </div>
      </div>
    )
  }
}

export default Navbar