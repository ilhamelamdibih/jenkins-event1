
import Head from 'next/head'
import AuthModal from '../components/AuthModal'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Sidebar from '../components/SideBar'
import Schedule from '../components/schedule'
import Upcoming from '../components/upcoming'
import Category from '../components/Category'
import Stats from '../components/stats'
import Latest from '../components/latest'
import Footer from '../components/Footer'
import EventBanner from '../components/events/eventBanner'
import ListEvent from '../components/events/listevents'
import ListTicket from '../components/ticket/listTikets'
import TicketBanner from '../components/ticket/ticketBanner'
import CartSide from '../components/CartSide'



export async function getServerSideProps(context) {

  const response = await fetch('http://localhost:6661/api/event');
  const data = await response.json();
  

  const response1 = await fetch('http://localhost:6662/api/reservation');
  const data1 = await response1.json();

  return {
    props: {
      events:data,
      reservations:data1
    },
  }
}


const Tickets= ({events,reservations}) => {
  return (
    <div className="font-poppins">
      <Head>
        <title>Tickets</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet" />
       </Head>
      <Header />
      <CartSide />
      <AuthModal />
      <Sidebar />
      <TicketBanner />
      <ListTicket events={events} reservations={reservations}/>
      <Footer />
    </div>
  )
}

export default Tickets
