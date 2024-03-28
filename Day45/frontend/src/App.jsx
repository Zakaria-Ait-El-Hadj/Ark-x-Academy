import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

//components
import Header from './components/header'
import Footer from './components/footer'

//pages
import RegistrationPage from './pages/registrationPage'
import HomePage from './pages/homePage'
import Newpost from './pages/Newpost'

//data
import {postsList,name,links,isloggedIn,bgColor} from './index'

//style
import './output.css'
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {

  const [posts , setposts] = useState(postsList);
  let [isLogged , setLoggedIn] = useState(isloggedIn);

  function changeAuthState() {
    console.log(setLoggedIn(prevIsLogged => !prevIsLogged));
  }
  function addPost(newPost){
    setposts(prevState => [...prevState , newPost]);
  }

  return (
    <>  
      <Header name={name} links={links} isloggedIn={isLogged} bgColor={bgColor} changeAuth = {() => changeAuthState()}/>

      <Routes>
      <Route path="/" element={<HomePage posts={posts} />} />
      <Route path="/login" element={<RegistrationPage isLoggedIn={isLogged} changeAuth = {() => changeAuthState()}/>} />
      <Route path="/new-post" element={
        <ProtectedRoutes isLoggedIn={isLogged} >
        <Newpost addPost={addPost} />
        </ProtectedRoutes>
      } />
      </Routes>

      <Footer />
    </>
  )
}

export default App
