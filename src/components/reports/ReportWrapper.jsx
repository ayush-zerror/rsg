import React from 'react'
import Header from '../common/Header'
import List from '../common/List'

const ReportWrapper = () => {
    const data = ["1st Quarter", "2nd Quarter", "3rd Quarter","Annual Report"]
    return (
        <div className='inner-wrapper'>
            <Header />
            <List data={data}/>
        </div>
    )
}
export default ReportWrapper