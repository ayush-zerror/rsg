import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect } from 'react'

const ListContainer = () => {

    useEffect(() => {
        document.querySelectorAll(".text-effect").forEach((element) => {
            Array.from(element.children).forEach((child) => {
                let clutter = "";
                child.textContent.split("").forEach((letter) => {
                    clutter += `<span>${letter === " " ? "&nbsp;" : letter}</span>`;
                });
                child.innerHTML = clutter;
            });
        });
    }, []);

    useEffect(() => {
        document.querySelectorAll(".text-effect").forEach((element) => {
          element.addEventListener("mouseenter", function () {
            gsap.fromTo(element.children[0].querySelectorAll("span"),{
                y:"0%",
            },{
                y:"-100%",
                stagger:{
                    amount:.1
                }
            })
            
            gsap.fromTo(element.children[1].querySelectorAll("span"),{
                y:"0%",
            },{
                y:"-100%",
                stagger:{
                    amount:.1
                }
            })

          });
        });
      
        return () => {
          document.querySelectorAll(".text-effect").forEach((element) => {
            element.removeEventListener("mouseenter", this);
          });
        };
      }, []);

    return (
        <div className='listContainer'>
            <ul>
                <li><span className='dot'></span><Link href="/letters"><div className='text-effect'><p>Letters from the Chairman</p><p>Letters from the Chairman</p></div></Link></li>
                <li><span className='dot'></span><Link href="/reports"><div className='text-effect'><p>Quarterly & Annual Reports</p><p>Quarterly & Annual Reports</p></div></Link></li>
                <li><span className='dot'></span><Link href="/governance"><div className='text-effect'><p>Corporate Governance</p><p>Corporate Governance</p></div></Link></li>
                <li><span className='dot'></span><Link href="/"><div className='text-effect'><p>Information for Owners</p><p>Information for Owners</p></div></Link></li>
                <li><span className='dot'></span><Link href="/"><div className='text-effect'><p>Incentive Agreement</p><p>Incentive Agreement</p></div></Link></li>
            </ul>
        </div>
    )
}

export default ListContainer