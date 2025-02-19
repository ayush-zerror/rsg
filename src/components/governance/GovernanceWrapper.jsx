import React from 'react'
import Header from '../common/Header'
import List from '../common/List'


const GovernanceWrapper = () => {
    const data = ["Officers & Directors", "Constitution"]
    return (
        <div className='inner-wrapper'>
            <Header />
            <List data={data}/>
        </div>
    )
}

export default GovernanceWrapper;