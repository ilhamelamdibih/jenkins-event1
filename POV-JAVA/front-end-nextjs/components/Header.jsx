import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'




export default function Header() {



    const router = useRouter();
    const logout = () => {
        deleteCookie('username')
        deleteCookie('jwt')

        const currentUrl = router.asPath;
        router.push(currentUrl)

    }




    const ModalAuth = () => {
        const modal = document.querySelector('.authmodal')
        modal.classList.remove('hidden')
        modal.classList.add('flex')
    }


    useEffect(() => {

        const header = document.querySelector('.header')

        window.addEventListener('scroll', () => {
            if ((window.scrollY || window.pageYOffset) > 10) {
                header.classList.add('fixed')
                header.classList.add('z-100')
                header.classList.add('shadow');
                header.classList.add('top-0');
                header.classList.add('w-screen');
                header.classList.remove('py-5');
                header.classList.add('py-3');
            } else {
                header.classList.remove('fixed')
                header.classList.remove('w-screen');
                header.classList.remove('z-100')
                header.classList.remove('shadow');
                header.classList.remove('py-3');
                header.classList.remove('top-0');
                header.classList.add('py-5');
            }
        })
    }, []);




    const sidebar = () => {

        const sidebar1 = document.querySelector('.sidebar1')
        const sidebar2 = document.querySelector('.sidebar2')
        sidebar1.classList.remove('hidden')
        sidebar2.classList.remove('-left-full')
        sidebar2.classList.add('left-0');
    }

    const reservationbar = () => {

        const reservationbar1 = document.querySelector('.reservationbar1')
        const reservationbar2 = document.querySelector('.reservationbar2')
        reservationbar1.classList.remove('hidden')
        reservationbar2.classList.remove('-right-full')
        reservationbar2.classList.add('right-0');
    }

    const dropDown = () => {
        const dropDown = document.querySelector('.dropDown')
        dropDown.classList.toggle('hidden')
    }

    const dropDown1 = () => {
        const dropDown = document.querySelector('.dropDown1')
        dropDown.classList.toggle('hidden')
    }

    const dropDown2 = () => {
        const dropDown = document.querySelector('.dropDown2')
        dropDown.classList.toggle('hidden')
    }

    const cartModal = () => {
        const cart = document.querySelector('.cart')
        cart.classList.remove('hidden')
        cart.classList.add('flex')
    }


    const [userName, setUserName] = useState(null)

    useEffect(() => {
        if (getCookie('username') == null)
            setUserName(null)
        else
            setUserName(getCookie('username'))
    }, [getCookie('username')])


    return (
        <div className=''>
            <div className="bg-main text-white font-poppins text-xs xl:text-sm  py-2 flex items-center justify-between space-x-7 px-5">
                <div className='flex items-center space-x-2'>
                    <i className='bx bxs-phone'></i>
                    <p>07 01 84 56 43</p>
                </div>
                <p className='hidden md:flex'>Don’t hesitate to buy your tickets</p>
                <div className='flex itms-center space-x-2'>
                    <i className='bx bxl-pinterest' ></i>
                    <i className='bx bxl-github' ></i>
                    <i className='bx bxl-facebook' ></i>
                    <i className='bx bxl-instagram' ></i>
                </div>
            </div>

            <div className="flex  bg-white font-poppins text-sm  px-5 shadow-sm  py-4 text-gray-600 header select-none">
                <div className="flex items-center justify-between space-x-10 w-full">
                    <img src="/images/logo_event 1.png" className="w-[150px] " />
                    <div className="md:flex items-center space-x-8 hidden font-bold">
                        <a onClick={() => router.push('/events')} className=" text-main cursor-pointer">SCHEDULE</a>
                        <a onClick={() => router.push('/events')} className=" cursor-pointer">CONCERTS</a>
                        <a onClick={() => router.push('/events')} className=" cursor-pointer">SPORTS</a>
                        <a onClick={() => router.push('/events')} className=" cursor-pointer">PARTIES</a>
                        <a onClick={() => router.push('/events')} className=" cursor-pointer">THEATER</a>
                        <a onClick={() => router.push('/events')} className=" cursor-pointer">GALLERY</a>
                        {userName != null
                            &&
                            <a onClick={() => router.push('/tickets')} className=" cursor-pointer">TICEKTS</a>
                        }
                        <div className='w-[1px] h-[10px] bg-gray-400'></div>


                        {userName == null ?
                            <i onClick={ModalAuth} className='bx bx-user text-xl cursor-pointer' ></i>
                            :

                            <div className='relative'>
                                <button onClick={dropDown} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-sm flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{userName}<svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                                <div id="dropdownNavbar" className="dropDown hidden z-10 absolute top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </div>

                        }

                        <i className='bx bx-cart  text-xl cursor-pointer hover:text-main hover:-translate-y-1 duration-300' onClick={cartModal}></i>

                    </div>
                    <i onClick={sidebar} className='bx bx-menu-alt-right text-lg cursor-pointer flex lg:hidden '></i>
                </div>
            </div>


        </div>
    )
}
