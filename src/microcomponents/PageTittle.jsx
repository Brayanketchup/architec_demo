import React from 'react'

export const PageTittle = ({ name }) => {
    const firstSpaceIndex = name.indexOf(' ');
    const firstHalf = name.slice(0, firstSpaceIndex);
    const secondHalf = name.slice(firstSpaceIndex + 1);
  
    return (
      <div className='w-full py-2'>
        <h1 className='text-6xl text-gray-400 font-light'>{firstHalf}</h1>
        <h1 className='text-7xl font-bold'>{secondHalf}</h1>
      </div>
    );
  };
  