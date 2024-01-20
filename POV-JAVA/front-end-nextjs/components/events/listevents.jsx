import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'





export default function ListEvent({ events }) {

    console.log("🚀 ~ file: index.jsx ~ line 38 ~ Home ~ products", events)


    const router = useRouter();
    var [displayedEvents, setDisplayed] = useState(events)
    const [filter, setFilter] = useState(0)


    const [currentPage, setCurrentPage] = useState(1)
    const [elementPerPage, seEelementPerPage] = useState(6)

    const indexOfLastElement = currentPage * elementPerPage
    const indexOfFirstElement = indexOfLastElement - elementPerPage
    //const [currentElements,setCurrentElements] = useState([])

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const currentElements = displayedEvents.slice(indexOfFirstElement, indexOfLastElement)
    const [count, setCount] = useState(0)


    return (
        <div className='bg-white py-10 w-full space-y-10 px-5 flex flex-col'>

            <div className='flex items-start space-x-5 '>
                <div className='w-3 bg-main h-6'></div>
                <div className="flex flex-col items-start space-y-5  w-full">
                    <h1 className='text-custBlue text-2xl font-black'>ALL EVENTS</h1>
                </div>
            </div>

            <div className='flex items-start space-x-6 w-full'>
                <div className='w-[20%] flex flex-col space-y-2 border-r border-gray-300 pr-3'>
                    <h1 className='font-bold border-b border-main underline-offset-2 w-max'>CATEGORY</h1>
                    <div className='flex items-center space-x-3 pt-5'>
                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded focus:ring-main " />
                        <p className='font-thin text-sm'>CONCERTS</p>
                    </div>

                    <div className='flex items-center space-x-3 pt-5'>
                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded focus:ring-main " />
                        <p className='font-thin text-sm'>SPORTS</p>
                    </div>

                    <div className='flex items-center space-x-3 pt-5'>
                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded focus:ring-main " />
                        <p className='font-thin text-sm'>THREATERS</p>
                    </div>

                    <div className='flex items-center space-x-3 pt-5'>
                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded focus:ring-main " />
                        <p className='font-thin text-sm'>PARTIE</p>
                    </div>

                    <div className='flex items-center space-x-3 pt-5'>
                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded focus:ring-main " />
                        <p className='font-thin text-sm'>COMMUNITIES</p>
                    </div>

                    <div className='flex items-center space-x-3 pt-5'>
                        <input id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded focus:ring-main " />
                        <p className='font-thin text-sm'>CLASSES</p>
                    </div>

                    <h1 className='font-bold border-b border-main underline-offset-2 w-max pt-5'>PRICE</h1>

                    <div className="relative pt-5">
                        <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min (0 Dh)</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max (5000 Dh)</span>
                    </div>
                </div>

                <div className='w-full flex flex-col space-y-5'>
                    <div className='flex items-center justify-end space-x-3'>
                        <div className='flex items-center space-x-2 py-1 px-2 border border-gray-300 rounded-full'>
                            <i className='bx bxs-calendar text-main'></i>
                            <div className='w-[1px] h-3 bg-gray-300'></div>
                            <p className='text-xs font-thin'>18-11-2023</p>
                        </div>
                        <p className='font-black text-sm'>Date</p>
                    </div>
                    {
                        currentElements.length != 0
                            ?
                            <div className='grid grid-cols-2 gap-10'>

                                {
                                    currentElements.map(event => {
                                       
                                        const eventDate = new Date(event.dateAndTime);

                                        // Extract day, month, and year
                                        const day = eventDate.getDate(); // Returns the day of the month (1-31)
                                        const month = eventDate.toLocaleString('en-US', { month: 'long' }); // Returns the full month name
                                        const year = eventDate.getFullYear(); // Returns the year

                                        return (
                                            <div key={event.id} className='h-[270px] relative'>
                                                <div className="bg-gradient-to-b from-main from-4% via-transparent via-50% w-full h-full absolute z-20"></div>
                                                <img src={event.image} alt="" className='absolute h-[270px] w-full object-cover	z-10' />
                                                <div className='bg-black/50 leading-1 text-white flex flex-col items-center py-6 px-4 absolute z-30 top-0 left-10'>
                                                    <p className='text-lg font-black'>{day}</p>
                                                    <p className='text-xs'>{month}</p>
                                                    <p className='text-xs'>{year}</p>
                                                </div>
                                                <div className='flex items-center justify-between absolute z-30 text-white bottom-0 w-full px-5 py-5'>
                                                    <div className='flex flex-col items-start space-y-1'>
                                                        <h1 className='text-md font-black'>{event.eventName}</h1>
                                                        <p>Morocco</p>
                                                    </div>
                                                    <a onClick={()=>{
                                                        setCookie('event',event.id)
                                                        router.push('/details')
                                                    }} className='text-xs bg-main px-3 py-2 rounded-full cursor-pointer'>GET TICKET</a>
                                                </div>
                                            </div>
                                        );
                                    })
                                }

                            </div>
                            :
                            <div className="bg-main/70 rounded py-5 my-10 w-full flex items-center justify-center space-x-2 text-white">
                                <i className='bx bxs-sad'></i>
                                <span>Aucun evenement pour le momment</span>
                            </div>
                    }

                    <div className='flex items-center justify-end space-x-3'>
                        <p className='font-black text-sm'>PAGES</p>

                        <div className='flex items-center space-x-2 text-main w-6 h-6 font-bold justify-center border border-main rounded'>
                            <p>1</p>
                        </div>

                        <div className='flex items-center space-x-2 text-white bg-main w-6 h-6 font-bold justify-center border border-main rounded'>
                            <p>2</p>
                        </div>

                        <div className='flex items-center space-x-2 text-main w-6 h-6 font-bold justify-center border border-main rounded'>
                            <p>3</p>
                        </div>

                        <div className='flex items-center space-x-2 text-main w-6 h-6 font-bold justify-center border border-main rounded'>
                            <p>4</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
