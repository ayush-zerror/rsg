import React from 'react'
import TopStrip from '@/components/common/TopStrip'
import Footer from '@/components/common/Footer'
import GovernanceWrapper from '@/components/governance/GovernanceWrapper'

const Governance = () => {
    return (
        <div className='main-wrapper'>
            <div>
                <TopStrip />
                <GovernanceWrapper/>
            </div>
            <Footer />
        </div>
    )
}

export default Governance