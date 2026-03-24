import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div >
        <div className='bg-[#03045e] text-white h-20 flex items-center justify-between p-5'>
            <h3 className='text-xl font-bold text-white'>Gratitude</h3>
            <ul className='flex gap-10 justify-between font-semibold '>
                <li>
                    <NavLink
                    to="/body"
                    className={({isActive}) => isActive ? "text-[#caf0f8]" : ""}
                    >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/about"
                    className={({isActive}) => isActive ? "text-[#caf0f8]" : ""}
                    >
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/contact"
                    className={({isActive}) => isActive ? "text-[#caf0f8]" : ""}
                    >
                    Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/cart"
                    className={({isActive}) => isActive ? "text-[#caf0f8]" : ""}
                    >
                    Cart
                    </NavLink>
                </li>
            </ul>
            <Link to="/login">
              <button className='font-bold text-sm text-[#03045e] bg-[#caf0f8] p-1 w-20 rounded-lg' >Login</button>
            </Link>
        </div>
      </div>
    )
  }
}

export default Navbar