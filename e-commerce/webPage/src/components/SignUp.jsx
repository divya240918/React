import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className='min-h-[400px] flex items-center justify-center'>
                <div className='min-h-[250px] w-[400px] bg-[#caf0f8] rounded-lg shadow-xl'>
                    <h1 className='text-xl font-bold text-[#03045e] text-center p-2'>Sign Up</h1>
                    <div className='flex flex-col gap-10 items-center mt-6'>
                        <input type="text" className='rounded-lg p-1 w-[250px]' placeholder=' enter username' />
                        <input type="password" className='rounded-lg p-1 w-[250px]' placeholder='enter password' />
                        <input type="password" className='rounded-lg p-1 w-[250px]' placeholder='confirm password' />

                        <button className=' text-[#03045e] rounded-md p-1 text-sm font-bold w-[100px] mb-5'>Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login