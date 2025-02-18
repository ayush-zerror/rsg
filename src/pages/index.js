import HomeWrapper from '@/components/home/HomeWrapper'
import React from 'react'
import Footer from '@/components/common/Footer'
import TopStrip from '@/components/common/TopStrip'

const Home = () => {
  return (
    <div className='main-wrapper'>
      <div>
        <TopStrip />
        <HomeWrapper />
      </div>
      <Footer />
    </div>
  )
}

export default Home