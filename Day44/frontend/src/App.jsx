import { useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

import {postsList,name,links,isloggedIn,bgColor} from './index'

import './output.css'

function App() {

  const [posts , setposts] = useState(postsList);
  let [isLogged , setLoggedIn] = useState(isloggedIn);

  function changeAuthState() {
    console.log(isLogged);
    console.log(setLoggedIn(prevIsLogged => !prevIsLogged));
    console.log(isLogged); 
  }

  return (
    <>
       
      <Header name={name} links={links} isloggedIn={isLogged} bgColor={bgColor} changeAuth = {() => changeAuthState()}/>
      <Main posts={posts} isLoggedIn={isLogged} changeAuth = {() => changeAuthState()}/>
      <Footer />
    </>
  )
}

export default App
