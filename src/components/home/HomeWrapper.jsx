import React from 'react'
import Header from '../common/Header'
import TextContainer from './TextContainer'
import ListContainer from './ListContainer'

const HomeWrapper = () => {
  return (
    <div className='inner-wrapper'>
        <Header/>
        <TextContainer/>
        <ListContainer/>
    </div>
  )
}

export default HomeWrapper