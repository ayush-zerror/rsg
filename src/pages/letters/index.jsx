import React from 'react'
import TopStrip from '@/components/common/TopStrip'
import LettersWrapper from '@/components/letters/LettersWrapper'
import Footer from '@/components/common/Footer'

const Letters = () => {
    return (
        <div className='main-wrapper'>
            <div>
                <TopStrip />
                <LettersWrapper />
            </div>
            <Footer />
        </div>
    )
}

export default Letters