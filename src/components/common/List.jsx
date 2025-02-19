import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const List = ({data}) => {
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
                gsap.fromTo(element.children[0].querySelectorAll("span"), {
                    y: "0%",
                }, {
                    y: "-100%",
                    stagger: {
                        amount: .1
                    }
                })

                gsap.fromTo(element.children[1].querySelectorAll("span"), {
                    y: "0%",
                }, {
                    y: "-100%",
                    stagger: {
                        amount: .1
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