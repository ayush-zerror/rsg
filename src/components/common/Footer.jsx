import Link from 'next/link'
import React from 'react'

const footer = ({footerRef}) => {
  return (
    <footer ref={footerRef}>
      <Link id='address' href="">EXECUTIVE OFFICES 825 Willow Creek Blvd, Suite 450, Denver, Colorado 80203</Link>
      {/* <hr /> */}
      <span className='copy-right'>COPYRIGHT © 2025 RSG Conglomeration</span>
    </footer>
  )
}

export default footer