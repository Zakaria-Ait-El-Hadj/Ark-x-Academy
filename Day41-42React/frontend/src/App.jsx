import { useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

import {posts,name,links,isloggedIn,bgColor} from './index'

import './output.css'

function App() {
  return (
    <>
      <Header name={name} links={links} isloggedIn={isloggedIn} bgColor={bgColor} />
      <Main posts={posts}/>
      <Footer />
    </>
  )
}

export default App
