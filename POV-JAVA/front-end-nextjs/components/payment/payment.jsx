


import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert2'

import {clearCart} from "../../app/cartSlice";

export default function PaymentForm() {

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


    const [paymentInput, setPayment] = useState({
        cardNumber: '',
        cvv: '',
        expirationDate: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setPayment({ ...paymentInput, [e.target.name]: e.target.value });
    }


       



    const paymentSubmit = (e) => {
        e.preventDefault();
        if (paymentInput.cardNumber == "" || paymentInput.cvv == "" || paymentInput.expirationDate == "") {
            setPayment({ ...paymentInput, error_list: { 'messageErr': "Un champs est vide", 'error': true } })
        }
        else {

            const reservationData = {
                userId: getCookie('userId'),
                ligneReservation: [],
            };

            cart.cartItems.forEach(event => {
                reservationData.ligneReservation.push({
                    eventId: event.id,
                    quantity: event.cartQuantity,
                });
            });


            axios.post('http://localhost:6662/api/reservation', reservationData).then(res => {

                const paymentData = {
                    cardNumber: paymentInput.cardNumber,
                    cvv: paymentInput.cvv,
                    expirationDate: paymentInput.expirationDate,
                    commande_id: res.data.id,
                    price: total,
                    user:getCookie("userId"),
                    transactionDate: new Date().toLocaleDateString()
                }

                console.log(paymentData)

                axios.post('http://127.0.0.1:8000/payment/payment-create/', paymentData).then(res => {
                    swal.fire("Votre est valider","","success");
                    dispatch(clearCart());
                    router.push('/tickets')
                })


            })


        }
    }





    return (
        <div className="py-7 bg-gray-100 px-10 flex items-start justify-between space-x-7 w-full">
            <div className="rounded shadow bg-white py-5 px-7">
                <p className="text-[40px] font-cormorant">Payment</p>
                <div className="flex items-center space-x- text-xs border-b pb-5">
                    <p className="text-gray-400">Cart</p>
                    <i className='bx bx-chevron-right' ></i>
                    <p>Payment Method</p>
                </div>
                <div className="py-3">
                    <p className="text-[20px]">Payment Information</p>
                    <div className="grid  gap-5 py-5">
                        <input type="text" name='cardNumber' onChange={handleInput} value={paymentInput.cardNumber} className="text-sm outline-none focus:border-main border border-gray-300 rounded py-2 px-3 placeholder:text-gray-500 md:w-[400px]" placeholder="Card number" />
                        <input type="text" name='cvv' onChange={handleInput} value={paymentInput.cvv} className="text-sm outline-none focus:border-main border border-gray-300 rounded py-2 px-3 placeholder:text-gray-500 md:w-[400px]" placeholder="cvv" />
                        <input type="text" name='expirationDate' onChange={handleInput} value={paymentInput.expirationDate} className="text-sm outline-none focus:border-main border border-gray-300 rounded py-2 px-3 placeholder:text-gray-500 md:w-[400px]" placeholder="Expiration date" />
                    </div>
                    <img src="images/image23.png" className="lg:w-[400px] pt-3 pb-7" />
                    <div className="flex items-center justify-between">
                        <a href="" className="flex items-center space-x-1 text-sm">
                            <i className='bx bx-chevron-left' ></i>
                            <span>Return to Cart </span>
                        </a>
                        <a onClick={paymentSubmit} className="text-white bg-black hover:bg-main py-2 px-7 text-sm tracking-widest rounded transition-all duration-300 ease-in-out">
                            Valid your paiment
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-white py-5 px-7 rounded shadow flex flex-col space-y-5">
                <h1 className='font-bold text-xl'>Your Events</h1>

                {
                    cart.cartItems &&
                    countItems !== 0
                    &&
                    cart.cartItems.map(item => (
                        <div className='flex items-start justify-between space-x-7'>

                            <img src={item.image} alt="" className='w-[150px] h-[150px] object-cover' />
                            <div className='flex flex-col  justify-between h-[150px]'>
                                <div className='flex flex-col space-y-3'>
                                    <h1 className='font-black'>{item.evenName}</h1>
                                    <p className='text-xs text-justify'>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                                    </p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-xl font-black'>
                                        {item.cartQuantity} Tickets
                                    </h1>
                                    <h1 className='text-xl font-black'>
                                        {item.ticketPrice} Dh
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))
                }




                <div className='border-t border-gray-300 pt-5 flex items-center justify-between'>

                    <h1 className='font-black text-2xl'>TOTAL</h1>
                    <p className='font-black text-3xl text-main'>{total} Dh</p>
                </div>
            </div>
        </div>
    )
}
