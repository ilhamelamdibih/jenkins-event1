import React, { useEffect, useState } from 'react'

export default function Banner() {


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
    <div className="bg-banner flex flex-col items-center xl:items-start justify-center font-poppins h-[500px]  bg-center space-y-7 relative">
      <div className="bg-gradient-to-b xl:bg-gradient-to-r from-main from-10% via-transparent via-50% w-full h-full absolute"></div>

      <div className="flex flex-col px-5 md:px-0 items-center xl:items-start xl:pl-10 text-white space-y-2 z-90">
        <h1 className='text-xl md:text-4xl font-bold'>Make Your Dream Come True</h1>
        <h3 className='text-lg md:text-xl'>Meet your favorite artists, sport teams and parties</h3>
        <p className='text-justify text-sm md:w-2/3 xl:w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        
      </div>
      <a className="flex items-center text-black xl:ml-10 w-max space-x-2 bg-white py-1 px-5 text-xs rounded-full z-90">
          <p className='font-bold'>Explore Now</p>
          <i className='bx bx-chevrons-right text-main text-lg'></i>
        </a>

    </div>
  )
}
