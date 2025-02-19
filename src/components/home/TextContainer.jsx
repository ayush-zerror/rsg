import React from 'react'

const TextContainer = ({textRef}) => {
    return (
        <div ref={textRef} className='text-container'>
            <h2>RSG Conglomeration is an entrepreneurial investment vehicle.</h2>
            <h2>All major operating, investment and capital allocation decisions are made for the <br /> corporation by Rohi S. Gupta, founder. Chairman & Chief Executive Officer.</h2>
        </div>
    )
}

export default TextContainer