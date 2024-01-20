
import Head from 'next/head'
import AuthModal from '../components/AuthModal'
import Header from '../components/Header'
import Sidebar from '../components/SideBar'
import ShoppingCart from '../components/cart/cart'

import Footer from '../components/Footer'
import CartSide from '../components/CartSide'





const Cart= () => {

  return (
    <div className="font-poppins">
      <Head>
        <title>Cart</title>
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
      <ShoppingCart />
      <Footer />
    </div>
  )
}

export default Cart
