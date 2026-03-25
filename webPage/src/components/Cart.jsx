import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    

    return (
        <>
            <div className='flex p-1 gap-[280px]'>
                <button
                    className='font-bold bg-blue-500 text-white px-4 py-2 rounded'
                    onClick={() => navigate(-1)}>Back
                </button>
                <h2 className='text-2xl font-bold text-center'>Cart</h2>

                
            </div>
            <div className='flex flex-col gap-5 mt-3 mb-5'>
                {cart.length === 0 ? (
                    <p className='text-center'>Cart is Empty</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className='min-h-20 bg-[#caf0f8] rounded-xl p-2'>
                            {item.name} - Rs.{item.price}
                        </div>
                    ))
                )}
            </div>

        </>
    )
}

export default Cart