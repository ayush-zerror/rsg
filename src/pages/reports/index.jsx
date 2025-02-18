import React from 'react'
import TopStrip from '@/components/common/TopStrip'
import Footer from '@/components/common/Footer'
import ReportWrapper from '@/components/reports/ReportWrapper'

const Reports = () => {
    return (
        <div className='main-wrapper'>
            <div>
                <TopStrip />
                <ReportWrapper/>
            </div>
            <Footer />
        </div>
    )
}

export default Reports