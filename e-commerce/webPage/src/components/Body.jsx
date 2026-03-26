import React from 'react'
import {useState} from 'react';
import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext'

function Body() {
  const {cart, addToCart} = useContext(CartContext);
  
  const [message, setMessage] = useState('');

  const handleAddToCart = (item) => {
        addToCart(item);

        setMessage("Added");

        setTimeout(() => {
            setMessage('');
        }, 2000);
    };
  
  
  return (
    <>
    {message && (
      <div className='fixed bottom-5 left-0 w-full text-center text-black px-4 py-2 rounded-lg shadow-md'>
        <div className='bg-slate-300'>
          {message}
        </div>
      </div>
    )}
      <div className='m-2 bg-[#caf0f8] min-h-200'>
        <div className='flex flex-wrap gap-10 p-10 justify-center'>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="/gelpen.png" alt="" />
            <div className=' font-semibold flex gap-12 mb-2'>
              <h4 className='text-white'>Gel Pen</h4>
              <button 
              onClick={() => handleAddToCart({name:"Gel Pen", price: 100 ,image: "/gelpen.png"})}
              className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm  text-[#03045e]'>Add</button>
            </div>
          </div>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="/case.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Pencil Case</h4>
              <button 
              onClick={() => handleAddToCart({name:"Pencil Case", price: 80 ,image: "/case.png"})}
              className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./diary.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Flower Diary</h4>
              <button 
              onClick={() => handleAddToCart({name:"Flower Diary", price: 120 ,image: "/diary.png"})}
              className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
              <img 
              className='h-40 m-5 rounded-lg shadow-md '
              src="./handwash.png" alt="" />
              <div className='text-white font-semibold flex gap-12 mb-2'>
                <h4>Handwash</h4>
                <button 
                onClick={() => handleAddToCart({name:"Handwash", price: 150 ,image: "/handwash.png"})}
                className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
              </div>
            </div>            
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./marker.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Color Pen</h4>
              <button 
              onClick={() => handleAddToCart({name:"Color Pen", price: 200 ,image: "/marker.png"})}
              className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
              <img 
              className='h-40 m-5 rounded-lg shadow-md '
              src="./shampoo.png" alt="" />
              <div className='text-white font-semibold flex gap-12 mb-2'>
                <h4>Shampoo</h4>
                <button 
                onClick={() => handleAddToCart({name:"Shampoo", price: 349 ,image: "/shampoo.png"})}
                className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
              </div>
            </div> 
            <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
              <img 
              className='h-40 m-5 rounded-lg shadow-md '
              src="./highlighter.png" alt="" />
              <div className='text-white font-semibold flex gap-12 mb-2'>
                <h4>Highlighter</h4>
                <button 
                onClick={() => handleAddToCart({name:"Highlighter", price: 109 ,image: "/highlighter.png"})}
                className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
              </div>
            </div>           
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./notebook.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Notebook</h4>
              <button 
              onClick={() => handleAddToCart({name:"Notebook", price: 149 ,image: "/notebook.png"})}
              className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>            
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./watch.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Smart Watch</h4>
              <button 
              onClick={() => handleAddToCart({name:"Smart Watch", price: 1499 ,image: "/watch.png"})}
              className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./tiffin.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Tiffin Box</h4>
              <button 
              onClick={() => handleAddToCart({name:"Tiffin Box", price: 199 ,image: "/tiffin.png"})}
              className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body