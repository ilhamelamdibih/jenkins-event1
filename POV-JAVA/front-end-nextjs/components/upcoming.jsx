import React, { useEffect, useState } from 'react'





export default function Upcoming() {




    return (
        <div className='bg-white py-10 w-full px-5 flex flex-col justify-center'>
            <div className='flex items-start space-x-5 '>
                <div className='w-3 bg-main h-6'></div>
                <div className="flex flex-col items-start space-y-5  w-full">
                    <h1 className='text-custBlue text-2xl font-black'>UPCOMING EVENTS</h1>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm w-2/3  text-justify'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
                        <a className='text-main text-md rounded-full border border-main px-5 py-2 hover:bg-main hover:text-white transition-colors duration-100 cursor-pointer'>SEE ALL UPCOMING EVENTS</a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-1 pt-10 w-full'>
                <div className='h-[270px] bg-main relative'>
                    <div className="bg-gradient-to-b from-main from-4% via-transparent via-50% w-full h-full absolute z-20"></div>
                    <img src="/images/image5.png" alt="" className='absolute h-[270px] object-cover	z-10' />
                    <div className='bg-black/50 leading-1 text-white flex flex-col items-center py-6 px-4 absolute z-30 top-0 left-10'>
                        <p className='text-lg font-black'>25</p>
                        <p className='text-xs'>AUGUST</p>
                        <p className='text-xs'>2024</p>
                    </div>
                    <div className='flex items-center justify-between absolute z-30 text-white bottom-0 w-full px-5 py-5'>
                        <div className='flex flex-col items-start space-y-1'>
                            <h1 className='text-md font-black'>Fast and furious Film out now</h1>
                            <p>Morocco</p>
                        </div>
                        <a className='text-xs bg-main px-3 py-2 rounded-full'>GET TICKET</a>
                    </div>
                </div>
                <div className='h-[270px] bg-main relative'>
                    <div className="bg-gradient-to-b from-main from-4% via-transparent via-50% w-full h-full absolute z-20"></div>
                    <img src="/images/image6.png" alt="" className='absolute h-[270px] object-cover	z-10' />
                    <div className='bg-black/50 leading-1 text-white flex flex-col items-center py-6 px-4 absolute z-30 top-0 left-10'>
                        <p className='text-lg font-black'>25</p>
                        <p className='text-xs'>AUGUST</p>
                        <p className='text-xs'>2024</p>
                    </div>
                    <div className='flex items-center justify-between absolute z-30 text-white bottom-0 w-full px-5 py-5'>
                        <div className='flex flex-col items-start space-y-1'>
                            <h1 className='text-md font-black'>Fast and furious Film out now</h1>
                            <p>Morocco</p>
                        </div>
                        <a className='text-xs bg-main px-3 py-2 rounded-full'>GET TICKET</a>
                    </div>
                </div>
                <div className='h-[270px] bg-main relative'>
                    <div className="bg-gradient-to-b from-main from-4% via-transparent via-50% w-full h-full absolute z-20"></div>
                    <img src="/images/image7.png" alt="" className='absolute h-[270px] object-cover	z-10' />
                    <div className='bg-black/50 leading-1 text-white flex flex-col items-center py-6 px-4 absolute z-30 top-0 left-10'>
                        <p className='text-lg font-black'>25</p>
                        <p className='text-xs'>AUGUST</p>
                        <p className='text-xs'>2024</p>
                    </div>
                    <div className='flex items-center justify-between absolute z-30 text-white bottom-0 w-full px-5 py-5'>
                        <div className='flex flex-col items-start space-y-1'>
                            <h1 className='text-md font-black'>Fast and furious Film out now</h1>
                            <p>Morocco</p>
                        </div>
                        <a className='text-xs bg-main px-3 py-2 rounded-full'>GET TICKET</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
