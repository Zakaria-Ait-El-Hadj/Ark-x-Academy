import { Route, Routes } from 'react-router-dom';

//components
import Header from './components/header'
import Footer from './components/footer'

//pages
import RegistrationPage from './pages/registrationPage'
import HomePage from './pages/homePage'
import Newpost from './pages/Newpost'

//data
import {name,links ,bgColor} from './index'

//style
import './output.css'
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {

  return (
    <>  
      <Header name={name} links={links} bgColor={bgColor} />

      <Routes>
      <Route path="/" element={
        <ProtectedRoutes >
         <HomePage  />
        </ProtectedRoutes>
      } />

      <Route path="/login" element={<RegistrationPage />} />
      <Route path="/new-post" element={
        <ProtectedRoutes  >
        <Newpost  />
        </ProtectedRoutes>
      } />

      </Routes>

      <Footer />
    </>
  )
}

export default App
