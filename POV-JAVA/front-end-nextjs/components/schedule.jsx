import React, { useEffect, useState } from 'react'





export default function Schedule() {




    return (
        <div className='bg-custBlack h-[300px] w-full px-5 flex flex-col justify-center'>
        <div className='flex items-start space-x-5 '>
            <div className='w-3 bg-main h-6'></div>
            <div className="flex flex-col items-start space-y-5  w-full">
                <h1 className='text-main text-2xl font-bold'>TODAY’S SCHEDULE</h1>
                <div className='grid grid-cols-4 gap-2 text-white w-[80%] relative'>
                    <div className='flex items-center justify-between z-30'>
                        <div className='flex flex-col items-start'>
                            <p className='font-thin text-xs'>08:00 AM</p>
                            <p className='font-bold text-sm'>Kiai Kanjeng Orchestra</p>
                            <a className='text-[9px] bg-main rounded-full py-[1px] px-[6px] mt-2'>GET TICKET</a>
                            <i className='bx bx-time mt-7 bg-custBlack' ></i>
                        </div>
                        <i className='bx bx-chevron-right text-lg' ></i>
                    </div>
                    <div className='flex items-center justify-between z-30'>
                        <div className='flex flex-col items-start'>
                            <p className='font-thin text-xs'>08:00 AM</p>
                            <p className='font-bold text-sm'>Kiai Kanjeng Orchestra</p>
                            <a className='text-[9px] bg-main rounded-full py-[1px] px-[6px] mt-2'>GET TICKET</a>
                            <i className='bx bxs-time mt-7 bg-custBlack' ></i>
                        </div>
                        <i className='bx bx-chevron-right text-lg' ></i>
                    </div>
                    <div className='flex items-center justify-between z-30'>
                        <div className='flex flex-col items-start'>
                            <p className='font-thin text-xs'>08:00 AM</p>
                            <p className='font-bold text-sm'>Kiai Kanjeng Orchestra</p>
                            <a className='text-[9px] bg-main rounded-full py-[1px] px-[6px] mt-2'>GET TICKET</a>
                            <i className='bx bxs-time mt-7 bg-custBlack' ></i>
                        </div>
                        <i className='bx bx-chevron-right text-lg' ></i>
                    </div>
                    <div className='flex items-center justify-between z-30'>
                        <div className='flex flex-col items-start'>
                            <p className='font-thin text-xs'>08:00 AM</p>
                            <p className='font-bold text-sm'>Kiai Kanjeng Orchestra</p>
                            <a className='text-[9px] bg-main rounded-full py-[1px] px-[6px] mt-2'>GET TICKET</a>
                            <i className='bx bxs-time mt-7 bg-custBlack' ></i>
                        </div>
                        <i className='bx bx-chevron-right text-lg' ></i>
                    </div>
                    <div className='w-full h-[1px] bg-white absolute bottom-2 z-10'></div>
                </div>
                
            </div>
        </div>
    </div>
    )
}
