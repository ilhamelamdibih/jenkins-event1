import React from 'react'

export default function Footer() {
  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="flex flex-col w-full font-poppins bg-custBlue py-10 px-16 text-white">
      <div className="flex items-center justify-between border-b pb-8 border-white">
        <img src="/images/logo_event_white 1.png" alt="" />
        <p className='text-xs'>© 2016 MYTICKET.COM. ALL RIGHTS RESEVED</p>
      </div>
      <div className='pt-8 flex items-center justify-between'>

        <div className='flex flex-col space-y-3'>

          <div className="flex items-center space-x-4">
            <h3 className='font-bold'>ABOUT</h3>
            <p className='text-xs'>Our Company | Careers |  Advertising |  Press Room | Trademarks | Terms of service | Privacy Policy </p>
          </div>

          <div className="flex items-center space-x-4">
            <h3 className='font-bold'>SUPPORT AND CONTACT</h3>
            <p className='text-xs'>Customer Support Contacts | Feedback | Help | Sitemap  </p>
          </div>

          <div className="flex items-center space-x-9">
            <h3 className='font-bold'>STAY CONNECTED</h3>
            <div className='flex items-center space-x-5'>
                <div className='flex items-center space-x-2'>
                  <img src="/images/facebook.png" alt="" />
                  <p className='text-xs'>Facebook</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <img src="/images/insta.png" alt="" />
                  <p className='text-xs'>Instagram</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <img src="/images/twitter.png" alt="" />
                  <p className='text-xs'>Twitter</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <img src="/images/in.png" alt="" />
                  <p className='text-xs'>LinkdIn</p>
                </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 border-l pl-6 border-white">
            <h3 className='font-bold'>LIVEEVENT DASHBOARD</h3>
            <p className='text-xs'>Professional</p>
            <p className='text-xs'>Subscriber Login</p>
        </div>



      </div>
    </div>
  )
}
