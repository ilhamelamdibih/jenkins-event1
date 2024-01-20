


import React, { useEffect, useState } from 'react'

import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../app/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router';


export default function ShoppingCart() {

  const router = useRouter();

  const [cart, setCart] = useState([])
  const [countItems, setCount] = useState(0)
  const c = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const [total, setTotal] = useState(0)


  useEffect(() => {
    setCart({})
  }, [])

  useEffect(() => {
    setCart(c)

    var totalitem = 0
    var i = 0
    c.cartItems.map(c => {
      totalitem += c.ticketPrice * c.cartQuantity
      i += 1
    })
    setTotal(totalitem)
    setCount(i)
  }, [cart, dispatch, c]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
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

  const ModalAuth = () => {
    const modal = document.querySelector('.authmodal')
    modal.classList.remove('hidden')
    modal.classList.add('flex')
}

  const checkOut = () =>{
    if(getCookie('jwt'))
    {
      router.push('/payment')
    }
    else
    {
      ModalAuth()
    }
  }


  return (
    <div className="py-7 flex space-y-5 flex-col items-center justify-center px-5 lg:px-[100px] 2xl:px-[300px]">
      <p className="text-[40px]  font-cormorant">Shopping Cart</p>
      <div className="h-[2.8px] w-[400px] bg-main rounded-lg relative">
        <div className="h-[30px] w-[30px] text-main flex items-center justify-center absolute -top-[13px] right-0 rounded-full border border-main bg-white">
          <i className='bx bx-check text-lg' ></i>
        </div>
      </div>
      <p className="text-[14px] text-[#868686]">Congratulations, you can purchase now your tickets</p>

      <div className="flex flex-col w-full pt-7">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4 w-2/6 font-bold">Event</th>
                    <th scope="col" className="px-6 py-4 w-1/6 text-center font-bold">Quantity</th>
                    <th scope="col" className="px-6 py-4 w-1/6 text-center font-bold">Price</th>
                    <th scope="col" className="px-6 py-4 w-1/6 text-right font-bold">Total</th>
                  </tr>
                </thead>
                <tbody className='relative'>
                  {
                    cart.cartItems &&
                      countItems !== 0
                      &&
                      cart.cartItems.map(item =>(

                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-5 w-full  md:w-2/6 flex flex-col md:flex-row items-center space-x-0 md:space-x-5">
                          <img src={item.image} className="w-[120px] h-[120px] object-cover" />
                          <span className="text-[15px] hover:text-main">{item.eventName}</span>
                        </td>
                        <td className="whitespace-nowrap text-[15px] px-6 py-5 w-1/6 ">
                          <div className="flex flex-col items-center space-y-2">

                            <div className="flex items-center border py-3 px-4 space-x-7 rounded-full w-max">
                              <i onClick={() => handleDecreaseCart(item)} className='bx bx-minus cursor-pointer hover:text-main' ></i>
                              <p>{item.cartQuantity}</p>
                              <i onClick={() => handleAddToCart(item)} className='bx bx-plus cursor-pointer hover:text-main' ></i>
                            </div>
                            <span onClick={() => handleRemoveFromCart(item)} className="cursor-pointer text-[13px] underline underline-offset-2 text-gray-400 ">Remove</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-5 w-1/6 text-center">{item.ticketPrice} dh</td>
                        <td className="whitespace-nowrap px-6 py-5 w-1/6 text-right">{item.ticketPrice} dh</td>
                      </tr>
                      ))
                   }
                </tbody>
              </table>
              {
                  countItems == 0
                  &&
              <div className="bg-main  z-10 w-full  h- py-5 text-white flex items-center justify-center">
                          Votre carte est vide
                      </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 pt-5 w-full">
        <div className="flex flex-col">

          <p>Special instructions for seller</p>
          <textarea placeholder="How can we help you?" className="h-[150px] mt-7 w-full border py-2 px-3 textA" ></textarea>
          <p className="pt-7">Coupon</p>
          <p className="text-gray-400 text-[14px]">* Discount will be calculated and applied at checkout</p>
          <input type="text" placeholder="Coupon code" className="border py-3 px-3 mt-3 textA" />

          <button className="bg-black text-white py-3 w-1/3 mt-3">APPLY COUPON</button>
        </div>
        <div className="flex flex-col items-end text-right space-y-4">
          <div className="flex flex-col space-y-1">
            <p>Subtotal: <span className="text-main font-bold">{total} Dh</span></p>
            <p className="text-gray-500 text-[15px] italic">Taxes and shipping calculated at checkout</p>
          </div>
          <p className="text-gray-500 text-[15px] italic w-3/4">All charges are billed in <span className="text-black">USD</span>. While the content of your cart is currently displayed in <span className="text-black">MAD</span>, the checkout will use <span className="text-black">USD</span> at the most current exchange rate.</p>
          <div className="flex items-center py-3 space-x-3 text-[15px]">
            <input id="link-radio" type="radio" value="" className="w-4 h-4 text-main bg-gray-100 border-gray-300 focus:ring-main dark:focus:ring-main dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="link-radio" className="text-gray-400">I agree with the <a href="#" className="text-black underline underline-offset-2 ">terms and conditions</a></label>
          </div>
          <button onClick={checkOut} className="bg-black text-white py-3 px-8 text-sm tracking-widest">CHECK OUT</button>
        </div>
      </div>
    </div>
  )
}
