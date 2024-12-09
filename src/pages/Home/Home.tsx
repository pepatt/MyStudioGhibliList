import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Content from '../../components/Content/Content'
import "./Home.scss"

function Home() {
  return (
    <div className='home'>
      <Header/>
    <div className='home__content'>
      <Sidebar/>
      <Content/>
    </div>
    </div>
  )
}

export default Home