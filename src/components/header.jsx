import React from 'react'


const Header = () => {
  return (
    <>
    
      
    <div className='flex flex-col justify-evenly items-center p-10 gap-4'>
      <h1 className='text-xl sm:text-4xl font-bold text-blue-400'> Science Fiction Stories</h1>
      <div className='grid sm:grid-cols-4 grid-cols-2  gap-3'>
        <button className='w-32 rounded-full p-1 text-white font-bold bg-blue-600'>New</button>
        <button className='w-32 rounded-full p-1 text-white font-bold bg-yellow-600'>In Progess</button>
        <button className='w-32 rounded-full p-1 text-white font-bold bg-green-600'>Completed</button>
        <button className='w-32 rounded-full p-1 text-white font-bold bg-blue-400'>Clear All</button>
      </div>
    </div>
    </>
  );
}

export default Header;