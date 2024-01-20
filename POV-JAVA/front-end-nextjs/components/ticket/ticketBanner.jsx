import React, { useEffect, useState } from 'react'

export default function TicketBanner() {


  const [width, setWidth] = useState('200px');
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setWidth('200px');
      } else {
        setWidth('300px');
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-eventbanner flex flex-col items-center justify-center font-poppins h-[350px]  bg-center space-y-7 relative">
      <div className="bg-gradient-to-b from-main from-10% via-transparent via-50% w-full h-full absolute"></div>

      <div className="flex flex-col items-center text-white space-y-2 z-90">
        <h1 className='text-xl md:text-6xl font-bold'>YOUR TICKETS</h1>
        <div className='flex items-center space-x-2'>
          <p>Home</p>
          <i className='bx bxs-circle text-main text-md'></i>
          <p className='font-bold text-main'>YOUR TICKETS</p>
        </div>
      </div>
    </div>
  )
}
