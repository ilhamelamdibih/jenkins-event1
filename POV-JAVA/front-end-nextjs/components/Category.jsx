import React, { useEffect, useState } from 'react'





export default function Category() {




    return (
        <div className='bg-white py-10 w-full px-5 flex flex-col justify-center'>
            <div className='flex items-start space-x-5 '>
                <div className='w-3 bg-main h-6'></div>
                <div className="flex flex-col items-start space-y-5  w-full">
                    <h1 className='text-custBlue text-2xl font-black'>EVENT BY CATEGORIES</h1>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-7 pt-10'>
                <div className='h-[320px] bg-main  flex items-center relative justify-center'>
                    <div className="diamond  flex items-center justify-center absolute z-20"></div>
                    <img src="/images/image8.png" alt="" className='absolute h-[320px] w-full object-cover	z-10' />
                    <h1 className='text-white z-30 font-black text-xl'>CONCERT</h1>
                </div>
                <div className='h-[320px] bg-main  flex items-center relative justify-center'>
                    <div className="diamond  flex items-center justify-center absolute z-20"></div>
                    <img src="/images/image9.png" alt="" className='absolute h-[320px] w-full object-cover	z-10' />
                    <h1 className='text-white z-30 font-black text-xl'>SPORT</h1>
                </div>
                <div className='h-[320px] bg-main  flex items-center relative justify-center'>
                    <div className="diamond  flex items-center justify-center absolute z-20"></div>
                    <img src="/images/image10.png" alt="" className='absolute h-[320px] w-full object-cover z-10' />
                    <h1 className='text-white z-30 font-black text-xl'>THEATER</h1>
                </div>

                <div className='h-[320px] bg-main  flex items-center relative justify-center'>
                    <div className="diamond  flex items-center justify-center absolute z-20"></div>
                    <img src="/images/image11.png" alt="" className='absolute h-[320px] w-full object-cover z-10' />
                    <h1 className='text-white z-30 font-black text-xl'>PARTIES</h1>
                </div>
                <div className='h-[320px] bg-main  flex items-center relative justify-center'>
                    <div className="diamond  flex items-center justify-center absolute z-20"></div>
                    <img src="/images/image12.png" alt="" className='absolute h-[320px] w-full object-cover z-10' />
                    <h1 className='text-white z-30 font-black text-xl'>COMMUNITIES</h1>
                </div>
                <div className='h-[320px] bg-main  flex items-center relative justify-center'>
                    <div className="diamond  flex items-center justify-center absolute z-20"></div>
                    <img src="/images/image13.png" alt="" className='absolute h-[320px] w-full object-cover z-10' />
                    <h1 className='text-white z-30 font-black text-xl'>CLASSES</h1>
                </div>
            </div>
        </div>
    )
}
