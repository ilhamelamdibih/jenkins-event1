import React, { useEffect, useState } from 'react'





export default function Stats() {




    return (
        <div className='bg-stats grayscale  my-10 w-full  text-white h-[430px] flex items-center justify-around relative'>
          
            <div className='flex flex-col items-center space-y-2'>
                <h1 className='text-6xl font-black'>598</h1>
                <div className='w-[80px] h-[1px] bg-white'></div>
                <p className='text-md'>EVENTS ACTIVE</p>
            </div>
            <div className='flex flex-col items-center space-y-2'>
                <h1 className='text-6xl font-black'>16,173</h1>
                <div className='w-[80px] h-[1px] bg-white'></div>
                <p className='text-md'>ACTIVE USER</p>
            </div>
            <div className='flex flex-col items-center space-y-2'>
                <h1 className='text-6xl font-black'>136,874</h1>
                <div className='w-[80px] h-[1px] bg-white'></div>
                <p className='text-md'>TICKET SOLD</p>
            </div>
        </div>
    )
}
