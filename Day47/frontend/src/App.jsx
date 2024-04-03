import { useState ,  useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

//components
import Header from './components/header'
import Footer from './components/footer'

//pages
import RegistrationPage from './pages/registrationPage'
import HomePage from './pages/homePage'
import Newpost from './pages/Newpost'

//data
import {name,links,isloggedIn,bgColor} from './index'

//style
import './output.css'
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  const postsUrl = 'http://localhost:3000/posts/getpost';
  const [posts , setposts] = useState([]);
  const [isLogged , setLoggedIn] = useState(isloggedIn);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function changeAuthState() {
    setLoggedIn(prevIsLogged => !prevIsLogged);
  }
  function addPost(newPost){
    setposts(prevState => [...prevState , newPost]);
  }

  async function fetchPosts () {
    try{
      const response = await axios.get(postsUrl , {withCredentials : true});
      if (response.data === null) { // Check for empty response data
        throw new Error('API response data is empty');
      }     
      setposts(response.data);    
      console.log(response)
    }
    catch(e){
      setError(e.message);
      console.log(e.message)
    }
    finally{
      setIsLoading(false);
    }
  }

  return (
    <>  
      <Header name={name} links={links} isloggedIn={isLogged} bgColor={bgColor} changeAuth = {() => changeAuthState()}/>

      <Routes>
      <Route path="/" element={
        <ProtectedRoutes isLoggedIn={isLogged}>
      <HomePage posts={posts} fetchPosts={fetchPosts} isLoading={isLoading} error={error} />
        </ProtectedRoutes>
      } />

      <Route path="/login" element={<RegistrationPage isLoggedIn={isLogged} changeAuth = {() => changeAuthState()}/>} />
      <Route path="/new-post" element={
        <ProtectedRoutes isLoggedIn={isLogged} >
        <Newpost addPost={addPost} posts={posts} />
        </ProtectedRoutes>
      } />

      </Routes>

      <Footer />
    </>
  )
}

export default App
