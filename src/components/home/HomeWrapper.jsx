import React, { useEffect, useRef } from 'react'
import Header from '../common/Header'
import TextContainer from './TextContainer'
import ListContainer from './ListContainer'
import gsap from 'gsap'

const HomeWrapper = () => {
  const headerRef = useRef(null)
  const textRef = useRef(null)
  const listRef = useRef(null)
  useEffect(() => {
    if (headerRef.current) {
      const centerHeight = window.innerHeight / 2 - headerRef.current.offsetHeight
      const animationHeight = centerHeight + 60
      var tl = gsap.timeline()
      tl
        .fromTo(headerRef.current, {
          y: animationHeight,
        }, {
          y: 0,
          duration: 1,
          delay: 1,
        })
        .fromTo(headerRef.current.querySelector("hr"), {
          opacity: 0,
        }, {
          opacity: 1,
          duration: .2,
        })
        .fromTo(textRef.current, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 1,
        }, "a")
        .fromTo(listRef.current, {
          opacity: 0,
        }, {
          opacity: 1,
          duration: 1,
        }, "a")
    }
  }, [])
  return (
    <div className='inner-wrapper'>
      <Header headerRef={headerRef} />
      <TextContainer textRef={textRef} />
      <ListContainer listRef={listRef} />
    </div>
  )
}

export default HomeWrapper