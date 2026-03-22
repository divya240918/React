import React from 'react'

function Body() {
  return (
    <>
      <div className='m-2 bg-[#caf0f8] min-h-200'>
        <div className='flex flex-wrap gap-10 p-10 justify-center'>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./public/gelpen.png" alt="" />
            <div className=' font-semibold flex gap-12 mb-2'>
              <h4 className='text-white'>Gel Pen</h4>
              <button className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm  text-[#03045e]'>Add</button>
            </div>
          </div>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./public/case.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Pencil Case</h4>
              <button className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./public/diary.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Flower Diary</h4>
              <button className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
              <img 
              className='h-40 m-5 rounded-lg shadow-md '
              src="./public/handwash.png" alt="" />
              <div className='text-white font-semibold flex gap-12 mb-2'>
                <h4>Handwash</h4>
                <button className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
              </div>
            </div>            
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./public/marker.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Color Pen</h4>
              <button className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
              <img 
              className='h-40 m-5 rounded-lg shadow-md '
              src="./public/shampoo.png" alt="" />
              <div className='text-white font-semibold flex gap-12 mb-2'>
                <h4>Shampoo</h4>
                <button className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
              </div>
            </div> 
            <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
              <img 
              className='h-40 m-5 rounded-lg shadow-md '
              src="./public/highlighter.png" alt="" />
              <div className='text-white font-semibold flex gap-12 mb-2'>
                <h4>Highlighter</h4>
                <button className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
              </div>
            </div>           
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./public/notebook.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Notebook</h4>
              <button className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>            
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./public/watch.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Smart Watch</h4>
              <button className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>
          <div className='bg-[#03045e] h-60 w-60 rounded-xl shadow-xl flex flex-col items-center justify-center'>
            <img
              className='h-40 m-5 rounded-lg shadow-md '
              src="./public/tiffin.png" alt="" />
            <div className='text-white font-semibold flex gap-12 mb-2'>
              <h4>Tiffin Box</h4>
              <button className='bg-[#caf0f8] w-10 rounded-md shadow-md text-sm text-[#03045e]'>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body