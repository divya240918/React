import React from 'react'

function Login() {
    return (
        <>
            <div className='h-[400px] flex items-center justify-center'>
                <div className='h-[250px] w-[400px] bg-[#caf0f8] rounded-lg shadow-xl'>
                    <h1 className='text-xl font-bold text-[#03045e] text-center p-2'>Login</h1>
                    <div className='flex flex-col gap-10 items-center mt-6'>
                            <input type="text" className='rounded-lg p-1 w-[250px]' placeholder='username' />
                            <input type="password" className='rounded-lg p-1 w-[250px]' placeholder='password' />
                            <button className=' bg-[#03045e] rounded-md text-white p-1 text-sm font-semibold w-[100px]'>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login