import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'





export default function ListTicket({ events, reservations }) {


    var [disEvents, setEvents] = useState(events);


    const [currentPage, setCurrentPage] = useState(1)
    const [elementPerPage, seEelementPerPage] = useState(6)

    const indexOfLastElement = currentPage * elementPerPage
    const indexOfFirstElement = indexOfLastElement - elementPerPage
    //const [currentElements,setCurrentElements] = useState([])

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const currentEvents = disEvents.slice(indexOfFirstElement, indexOfLastElement)

    var [tickets, setTickets] = useState([]);
    var [displayedReservations, setReservations] = useState(reservations);

    useEffect(() => {
        if (getCookie('userId')) {
            setReservations(
                displayedReservations.filter(val => { if (val.userId == getCookie('userId')) return val })
            );
        }

        const updatedTickets = displayedReservations.filter(val => { if (val.userId == getCookie('userId')) return val }).flatMap((reservation) =>
            reservation.ligneReservation.flatMap((ligne) => {
                const event = currentEvents.filter(val => { if (val.id == ligne.eventId) return val });
                return {
                    id: reservation.id,
                    event: {
                        name: event[0].eventName,
                        place: event[0].venue,
                        price: event[0].ticketPrice,
                        image: event[0].image,
                        time: event[0].dateAndTime,
                        day: event[0].dateAndTime,
                        category: event[0].category,
                    },
                };
            })
        );

        setTickets(updatedTickets);
    }, [getCookie('userId')]);





    return (
        <div className='bg-white py-10 w-full space-y-10 px-5 flex flex-col'>

            <div className='flex items-start space-x-5 '>
                <div className='w-3 bg-main h-6'></div>
                <div className="flex flex-col items-start space-y-5  w-full">
                    <h1 className='text-custBlue text-2xl font-black'>YOUR TICKETS</h1>
                </div>
            </div>

            <div className='flex flex-col items-center space-y-7 '>

                {
                    tickets.length != 0
                        ?
                        tickets.map(ticket => {

                            const eventDate = new Date(ticket.event.time);

                            // Get the hours, minutes, and seconds separately
                            const hours = eventDate.getHours();
                            const minutes = eventDate.getMinutes();
                            const seconds = eventDate.getSeconds();


                            const day = eventDate.getDate();
                            const year = eventDate.getFullYear();
                            const monthIndex = eventDate.getMonth();

                            const monthsAbbreviation = [
                                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                            ];
                            const monthAbbreviation = monthsAbbreviation[monthIndex];

                            // Create a string representation of the time
                            const formattedTime = `${hours}:${minutes}`;
                            if (ticket.event.category == "SPORT") {
                                return (
                                    <div className='w-[70%] relative overflow-hidden overflow-x-auto bg-white shadow'>
                                        <div className='w-full h-[300px]'></div>
                                        <img src={ticket.event.image} alt="" className='absolute w-[300px] h-full object-cover object-center top-0 z-10' />
                                        <img src="/images/ticket-red.png" alt="" className='w-full h-full top-0 absolute z-30 ' />
                                        <div className='flex flex-col items-center  text-main font-black absolute z-40 top-[41%] left-[20.6%]'>

                                            <p>{day}</p>
                                            <p>{monthAbbreviation}</p>
                                            <p>{year}</p>

                                        </div>

                                        <div className='flex flex-col items-start  text-white absolute z-40 top-[42%] left-[32%]'>

                                            <p className='text-xl'>SPECIAL NIGHT</p>
                                            <p className='text-4xl font-black'>{ticket.event.category} EVENT</p>
                                        </div>

                                        <div className='flex flex-col items-start  text-black absolute z-40 top-[10%] left-[37%]'>
                                            <p className='text-lg'>{ticket.event.name}</p>
                                            <p className='text-sm'>{ticket.event.place}</p>
                                            <p className='font-black text-lg'>PRICE : <span className='text-main'>{ticket.event.price} Dh</span></p>
                                        </div>

                                        <div className='flex flex-col items-start  text-black absolute z-40 top-[13%] left-[78%]'>
                                            <p className='text-lg font-black text-main'>EVENT TICKET {year}</p>
                                            <p className='text-xs'>{ticket.event.place}</p>

                                        </div>

                                        <div className='flex flex-col items-start  text-white space-y-3 absolute z-40 top-[43%] left-[78%]'>
                                            <p className='text-md'>TIME : {formattedTime}</p>
                                            <p className='text-md'>DAY : {day}/{year}</p>

                                        </div>

                                    </div>
                                );
                            }
                            else {
                                return (
                                    <div className='w-[70%] relative overflow-hidden overflow-x-auto bg-white shadow'>
                                        <div className='w-full h-[300px]'></div>
                                        <img src={ticket.event.image} alt="" className='absolute w-[300px] h-full object-cover object-center top-0 z-10' />
                                        <img src="/images/ticket-black.png" alt="" className='w-full h-full top-0 absolute z-30 ' />
                                        <div className='flex flex-col items-center  text-custBlue font-black absolute z-40 top-[41%] left-[20.6%]'>

                                            <p>{day}</p>
                                            <p>{monthAbbreviation}</p>
                                            <p>{year}</p>

                                        </div>

                                        <div className='flex flex-col items-start  text-white absolute z-40 top-[42%] left-[32%]'>

                                            <p className='text-xl'>SPECIAL NIGHT</p>
                                            <p className='text-4xl font-black'>{ticket.event.category} EVENT</p>
                                        </div>

                                        <div className='flex flex-col items-start  text-custBlue absolute z-40 top-[10%] left-[37%]'>
                                            <p className='text-lg'>{ticket.event.name}</p>
                                            <p className='text-sm'>{ticket.event.place}</p>
                                            <p className='font-black text-lg'>PRICE : <span className='text-custBlue'>{ticket.event.price} Dh</span></p>
                                        </div>

                                        <div className='flex flex-col items-start  text-custBlue absolute z-40 top-[13%] left-[78%]'>
                                            <p className='text-lg font-black text-custBlue'>EVENT TICKET {year}</p>
                                            <p className='text-xs'>{ticket.event.place}</p>

                                        </div>

                                        <div className='flex flex-col items-start  text-white space-y-3 absolute z-40 top-[43%] left-[78%]'>
                                            <p className='text-md'>TIME : {formattedTime}</p>
                                            <p className='text-md'>DAY : {day}/{year}</p>

                                        </div>

                                    </div>
                                );
                            }
                        })
                        :
                        <div className='w-full py-7 bg-main text-white flex items-center justify-center rounded'>
                                Vous n'avez pas encord achtez auciun ticket
                        </div>
                }



            </div>
        </div>
    )
}
