
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
import CartSide from '../components/CartSide'





const Home= () => {

  return (
    <div className="font-poppins">
      <Head>
        <title>Live Event</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet" />
       </Head>
      <Header />
       <CartSide />
      <AuthModal />
      <Banner />
      <Sidebar />
      <Schedule />
      <Upcoming />
      <Category />
      <Stats />
      <Latest />
      <Footer />
    </div>
  )
}

export default Home
