import React, { useEffect, useRef } from 'react'
import Footer from '../common/Footer'
import gsap from 'gsap'
import { useRouter } from 'next/router'

const Wrapper = ({ children }) => {
  const footerRef = useRef(null)
  const route = useRouter()
  useEffect(()=>{
    if(route.pathname !== '/') return;
    gsap.fromTo(footerRef.current,{
      opacity:0
    },{
      opacity:1,
      delay:2,
      ease:'power4.inOut'
    })
  },[route.pathname])
  return (
    <div>
      {children}
      <Footer footerRef={footerRef}/>
    </div>
  )
}

export default Wrapper