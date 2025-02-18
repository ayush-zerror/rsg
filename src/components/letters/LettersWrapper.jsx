import React from 'react'
import Header from '../common/Header'
import List from '../common/List'

const LettersWrapper = () => {
    const data = ["Letters from the Chairman 2025", "Letters from the Chairman 2024", "Letters from the Chairman 2023", "Letters from the Chairman 2022", "Letters from the Chairman 2021", "Letters from the Chairman 2020", "Letters from the Chairman 2019"]
    return (
        <div className='Wrapper'>
            <Header />
            <List data={data}/>
        </div>
    )
}

export default LettersWrapper