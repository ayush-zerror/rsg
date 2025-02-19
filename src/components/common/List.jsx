import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const List = ({data}) => {

    useEffect(()=>{
        gsap.fromTo(document.querySelectorAll("li"),{
            opacity:0,
            y:20,
        },{
            opacity:1,
            y:0,
            stagger:{
                amount:0.3,
            }
        })
    },[])

    return (
        <div>
            <ul className='list'>
            {data.map((year) => (
                    <li key={year}>
                        <span className='dot'></span>
                        <Link href="/">{year}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List