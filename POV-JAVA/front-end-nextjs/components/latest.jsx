import React, { useEffect, useState } from 'react'





export default function Latest() {




    return (
        <div className='bg-white py-10 w-full px-5 flex flex-col justify-center'>
            <div className='flex items-start space-x-10'>
                <div className='flex flex-col items-start space-y-8 w-[70%]'>
                    <div className='flex items-start space-x-5 '>
                        <div className='w-3 bg-main h-6'></div>
                        <div className="flex flex-col items-start space-y-5  w-full">
                            <h1 className='text-custBlue text-2xl font-black'>LATEST NEWS</h1>
                        </div>
                    </div>

                    <div className='flex  w-full space-x-8 h-full'>
                        <div className='relative w-full'>
                            <img src="/images/image15.png" alt="" className=' h-[200px] w-[360px] object-cover z-10' />
                            <div className='bg-main/50 leading-1 text-white flex flex-col items-center py-6 px-4 absolute z-30 top-0 left-10'>
                                <p className='text-lg font-black'>25</p>
                                <p className='text-xs'>AUGUST</p>
                                <p className='text-xs'>2024</p>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-5'>
                            <h1 className='font-bold'>Attending the Indonesian Envato Authors National Meetup</h1>
                            <p className='text-sm'>6 hours ago | By <span className='text-main'>Admin</span></p>
                            <p className='text-sm text-justify'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesenlup.</p>
                        </div>
                    </div>

                    <div className='flex  w-full space-x-8 h-full'>
                        <div className='relative w-full'>
                            <img src="/images/image15.png" alt="" className=' h-[200px] w-[360px] object-cover z-10' />
                            <div className='bg-main/50 leading-1 text-white flex flex-col items-center py-6 px-4 absolute z-30 top-0 left-10'>
                                <p className='text-lg font-black'>25</p>
                                <p className='text-xs'>AUGUST</p>
                                <p className='text-xs'>2024</p>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-5'>
                            <h1 className='font-bold'>Attending the Indonesian Envato Authors National Meetup</h1>
                            <p className='text-sm'>6 hours ago | By <span className='text-main'>Admin</span></p>
                            <p className='text-sm text-justify'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesenlup.</p>
                        </div>
                    </div>

                    <div className='flex  w-full space-x-8 h-full'>
                        <div className='relative w-full'>
                            <img src="/images/image15.png" alt="" className=' h-[200px] w-[360px] object-cover z-10' />
                            <div className='bg-main/50 leading-1 text-white flex flex-col items-center py-6 px-4 absolute z-30 top-0 left-10'>
                                <p className='text-lg font-black'>25</p>
                                <p className='text-xs'>AUGUST</p>
                                <p className='text-xs'>2024</p>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-5'>
                            <h1 className='font-bold'>Attending the Indonesian Envato Authors National Meetup</h1>
                            <p className='text-sm'>6 hours ago | By <span className='text-main'>Admin</span></p>
                            <p className='text-sm text-justify'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesenlup.</p>
                        </div>
                    </div>

                    <div className='flex  w-full space-x-8 h-full'>
                        <div className='relative w-full'>
                            <img src="/images/image15.png" alt="" className=' h-[200px] w-[360px] object-cover z-10' />
                            <div className='bg-main/50 leading-1 text-white flex flex-col items-center py-6 px-4 absolute z-30 top-0 left-10'>
                                <p className='text-lg font-black'>25</p>
                                <p className='text-xs'>AUGUST</p>
                                <p className='text-xs'>2024</p>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-5'>
                            <h1 className='font-bold'>Attending the Indonesian Envato Authors National Meetup</h1>
                            <p className='text-sm'>6 hours ago | By <span className='text-main'>Admin</span></p>
                            <p className='text-sm text-justify'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesenlup.</p>
                        </div>
                    </div>

                </div>



                <div className='flex flex-col items-start space-y-5 w-[30%]'>

                    <div className='flex items-start space-x-5 '>
                        <div className='w-3 bg-main h-6'></div>
                        <div className="flex flex-col items-start space-y-5  w-full">
                            <h1 className='text-custBlue text-2xl font-black'>LATEST TWEETS</h1>
                        </div>
                    </div>

                    <div className='bg-[#D9D9D9] flex items-center justify-evenly py-7 px-3 w-full rounded'>
                        <div className='bg-white w-[75px] h-[75px] flex items-center justify-center'>
                            <img src="/images/logo_event 1.png" alt="" className="w-[70px] bg-white" />
                        </div>

                        <div className='flex flex-col items-start space-y-1'>
                            <h1 className='font-bold tracking-widest'>liveevent.com</h1>
                            <p className='text-sm font-thin'>@liveevent</p>
                        </div>

                        <a className='bg-blue-500 text-white font-bold rounded px-3 py-2 text-sm'>
                            FOLLOW
                        </a>
                    </div>

                    <div className='pb-7 border-b border-gray-300 flex items-start justify-between'>
                        <p className='text-xs w-4/5 text-justify'>
                        <span className='text-main'>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh euismod dolore magna aliquam #EratVolutpat.
                        </p>
                        <p className='text-xs'>17 min</p>
                    </div>

                    
                    <div className='pb-7 border-b border-gray-300 flex items-start justify-between'>
                        <p className='text-xs w-4/5 text-justify'>
                        <span className='text-main'>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh euismod dolore magna aliquam #EratVolutpat.
                        </p>
                        <p className='text-xs'>17 min</p>
                    </div>

                    
                    <div className='pb-7 border-b border-gray-300 flex items-start justify-between'>
                        <p className='text-xs w-4/5 text-justify'>
                        <span className='text-main'>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh euismod dolore magna aliquam #EratVolutpat.
                        </p>
                        <p className='text-xs'>17 min</p>
                    </div>

                    
                    <div className='pb-7 border-b border-gray-300 flex items-start justify-between'>
                        <p className='text-xs w-4/5 text-justify'>
                        <span className='text-main'>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh euismod dolore magna aliquam #EratVolutpat.
                        </p>
                        <p className='text-xs'>17 min</p>
                    </div>
                    
                    <div className='pb-7 border-b border-gray-300 flex items-start justify-between'>
                        <p className='text-xs w-4/5 text-justify'>
                        <span className='text-main'>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh euismod dolore magna aliquam #EratVolutpat.
                        </p>
                        <p className='text-xs'>17 min</p>
                    </div>

                    
                    <div className='pb-7 border-b border-gray-300 flex items-start justify-between'>
                        <p className='text-xs w-4/5 text-justify'>
                        <span className='text-main'>@myticket </span>Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam nonummy nibh euismod dolore magna aliquam #EratVolutpat.
                        </p>
                        <p className='text-xs'>17 min</p>
                    </div>

                    

                    

                </div>
            </div>
        </div>
    )
}
