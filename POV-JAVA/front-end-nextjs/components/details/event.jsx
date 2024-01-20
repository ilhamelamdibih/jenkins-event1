import React, { useEffect, useState } from 'react'


import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
  } from "../../app/cartSlice";

import { useDispatch,useSelector  } from 'react-redux';
import { getCookie } from 'cookies-next';





export default function Event({events}) {

    var [displayedEvents,setDisplayed]= useState(events)

    const [currentPage, setCurrentPage] = useState(1)
    const [elementPerPage, seEelementPerPage] = useState(6)

    const indexOfLastElement = currentPage * elementPerPage
    const indexOfFirstElement = indexOfLastElement - elementPerPage
    //const [currentElements,setCurrentElements] = useState([])

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const currentElements = displayedEvents.slice(indexOfFirstElement, indexOfLastElement)


    
    

    useEffect(() =>{
        if(getCookie('event'))
        {
            setDisplayed(events.filter(val=>{ if(val.id==getCookie('event'))  return val}))
        }

    },[getCookie('event')])

    const [cart,setCart] = useState([])
    const [countItems,setCount] = useState(0)
    const c = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
    setCart({})
    },[])

    const [total,setTotal] = useState(0)

    useEffect(() => {
    setCart(c)
    
    var totalitem= 0
    var i=0
    c.cartItems.map(c=>{
        totalitem += c.prix * c.cartQuantity
        i+=1
    })
    setTotal(totalitem)
    setCount(i)
    }, [cart, dispatch,c]);

    const handleAddToCart = (event) => {
    dispatch(addToCart(event));
    };
    const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
    dispatch(clearCart());
    };





    return (
        <div className='bg-white py-10 w-full space-y-10 px-5 flex flex-col'>

            <div className='flex items-start space-x-5 '>
                <div className='w-3 bg-main h-6'></div>
                <div className="flex flex-col items-start space-y-5  w-full">
                    <h1 className='text-custBlue text-2xl font-black'>EVENT DETAILS</h1>
                </div>
            </div>

            <div className='grid grid-cols-9 gap-10'>

                <div className='col-span-4 w-full'>
                    <div className='flex flex-col space-y-5'>
                        <img src={currentElements[0].image} alt="" className="w-full object-cover h-[460px]" />

                        <div className='flex items-center space-x-3 justify-between'>
                            <img src="/images/image19.png" alt="" className="w-[110px] h-[90px] object-cover" />
                            <img src={currentElements[0].image} alt="" className="w-[110px] h-[90px] object-cover border-2 border-main" />
                            <img src="/images/image21.png" alt="" className="w-[110px] h-[90px] object-cover" />
                            <img src="/images/image22.png" alt="" className="w-[110px] h-[90px] object-cover" />
                        </div>
                    </div>
                </div>

                <div className='col-span-5 '>
                    <div className='flex flex-col space-y-4'>
                        <h1 className='text-xl font-black'>{currentElements[0].eventName}</h1>

                        <p className='text-sm text-justify'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>

                        <h3 className='font-black'>People</h3>
                        
                        <div className="flex items-center space-x-6">

                            <div className="flex flex-col items-center space-y-2">
                                <img src="/images/rock.png" alt="" className='w-[76px] h-[76px] rounded-full object-cover'/>
                                <p className="text-xs">The Rock</p>
                            </div>

                            <div className="flex flex-col items-center space-y-2">
                                <img src="/images/dies.png" alt="" className='w-[76px] h-[76px] rounded-full object-cover'/>
                                <p className="text-xs">Diesel</p>
                            </div>

                            <div className="flex flex-col items-center space-y-2">
                                <img src="/images/rodri.png" alt="" className='w-[76px] h-[76px] rounded-full object-cover'/>
                                <p className="text-xs">Rodriguez</p>
                            </div>

                            <div className="flex flex-col items-center space-y-2">
                                <img src="/images/luda.png" alt="" className='w-[76px] h-[76px] rounded-full object-cover'/>
                                <p className="text-xs">Ludacris</p>
                            </div>
                        </div>

                        <h3 className='font-black'>Price</h3>

                        <h1 className='text-main font-black text-xl'>{currentElements[0].ticketPrice} Dh</h1>

                        <h3 className='font-black'>Rating</h3>

                        <div className="flex items-center space-x-4">
                            <i className='text-yellow-400 text-xl bx bxs-star' ></i>
                            <i className='text-yellow-400 text-xl bx bxs-star' ></i>
                            <i className='text-yellow-400 text-xl bx bxs-star' ></i>
                            <i className='text-yellow-400 text-xl bx bxs-star' ></i>
                            <i className='text-yellow-400 text-xl bx bxs-star-half' ></i>
                            <p className='text-sm'>(30000 + VOTES)</p>
                        </div>

                        <div className='flex flex-col space-y-3'>
                            <p className='font-black'>Only <span className='text-main'>10 Tickets </span>left </p>
                            <div className='w-full h-[10px] rounded-full bg-gray-300'>
                                <div className='w-[20%] h-full bg-main rounded-full'></div>
                            </div>
                        </div>

                        <div className='flex items-center justify-between pt-5'>

                            <div className='flex items-center space-x-10 justify-between border border-gray-300 py-2 px-5 rounded-full'>
                                <button className='cursor-pointer text-gray-500'>
                                    -
                                </button>

                                <p className=''>0</p>

                                <button className='cursor-pointer text-gray-500'>
                                    +
                                </button>
                            </div>

                            <button onClick={()=>handleAddToCart(currentElements[0])} className='cursor-pointer bg-black text-white w-[70%] py-3'>
                            ADD TO CART
                            </button>
                        </div>

                        <img src="/images/image23.png" alt="" className='pt-5'/>
                    </div>
                </div>

            </div>


        </div>
    )
}
