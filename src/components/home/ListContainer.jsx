import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect } from 'react'

const ListContainer = ({listRef}) => {

    return (
        <div ref={listRef} className='listContainer'>
            <ul>
                <li><span className='dot'><i class="ri-arrow-right-line"></i></span><Link href="/letters">Letters from the Chairman</Link></li>
                <li><span className='dot'><i class="ri-arrow-right-line"></i></span><Link href="/reports">Quarterly & Annual Reports</Link></li>
                <li><span className='dot'><i class="ri-arrow-right-line"></i></span><Link href="/governance">Corporate Governance</Link></li>
                <li><span className='dot'><i class="ri-arrow-right-line"></i></span><Link href="/">Information for Owners</Link></li>
                <li><span className='dot'><i class="ri-arrow-right-line"></i></span><Link href="/">Incentive Agreement</Link></li>
            </ul>
        </div>
    )
}

export default ListContainer