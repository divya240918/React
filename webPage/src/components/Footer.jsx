import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <>
            <div className='h-60 bg-red-400 p-4'>
                <h2 className='font-bold text-2xl text-white text-center'>Gratitude</h2>
                <div className='flex p-5 justify-between '>
                    <div className='text-white'>
                        <h4 className='font-bold text-white'>About</h4>
                        <ul>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Privacy</li>
                            
                        </ul>
                    </div>
                    <div className='text-white'>
                        <h4 className='font-bold text-white'>Support</h4>
                        <ul>
                            <li>Contact</li>
                            <li>Status</li>
                            <li>Updates</li>
                        
                        </ul>
                    </div>
                    <div className='text-white'>
                        <h4 className='font-bold text-white'>Help</h4>
                        <ul>
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>FAQ</li>
                            
                        </ul>
                    </div>
                </div>

                <div className='text-white text-2xl flex gap-5 justify-center'>
                    <a href="https://www.instagram.com/" className='hover:text-red-200'><FaInstagram/></a>
                    <a href="https://www.facebook.com/" className='hover:text-red-200'><FaFacebook/></a>
                    <a href="https://in.linkedin.com/" className='hover:text-red-200'><FaLinkedin/></a>
                </div>
            </div>
        </>
    )
}

export default Footer