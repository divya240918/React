import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='bg-blue-400 h-20 flex items-center justify-center '>
            <h3 className='text-xl font-bold text-white'>Gratitude</h3>
            <ul>
                <li>
                    <Navlink
                    to="/"
                    ></Navlink>
                </li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Navbar