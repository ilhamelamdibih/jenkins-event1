
import Head from 'next/head'
import AuthModal from '../components/AuthModal'
import Header from '../components/Header'
import Sidebar from '../components/SideBar'
import Footer from '../components/Footer'
import DetailBanner from '../components/details/detailBanner'
import Event from '../components/details/event'
import CartSide from '../components/CartSide'


export async function getServerSideProps(context) {

  const response = await fetch('http://localhost:6661/api/event');
  const data = await response.json();
  

  return {
    props: {
      events:data
    },
  }
}





const Details= ({events}) => {

  return (
    <div className="font-poppins">
      <Head>
        <title>Event Details</title>
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
      <DetailBanner />
      <Event events={events}/>
      <Footer />
    </div>
  )
}

export default Details
