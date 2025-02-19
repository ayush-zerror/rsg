import React from 'react'
import TopStrip from '../common/TopStrip'
import Footer from '../common/Footer'

const Wrapper = ({children}) => {
  return (
    <div>
        <TopStrip/>
        {children}
        <Footer/>
    </div>
  )
}

export default Wrapper