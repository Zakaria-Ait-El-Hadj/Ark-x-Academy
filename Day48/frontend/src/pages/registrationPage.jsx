import SignupForm from "../components/SignupForm"
import LoginForm from "../components/LoginForm"
import { useState } from "react";

function RegistrationPage( ) {

  const [isLoginVisible , setLoginVisibility] = useState(true);
  const [isRegisterVisible , setRegisterVisibility] = useState(false);

  function toggleRegister(){
      setLoginVisibility(false);
      setRegisterVisibility(true);
  }
  function toggleLogin(){
    setLoginVisibility(true);
    setRegisterVisibility(false);
  }

  return (
    
    <div className="bg-gray-50">
    <div className="flex items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-10 gap-4 ">
      <button className="rounded-2xl px-4 py-2 bg-primary-100" type="button" onClick={toggleLogin}>Login</button>
      <button className="rounded-2xl px-4 py-2 bg-primary-100" type="button" onClick={toggleRegister}>Sign up</button>
    </div>
        
        {isLoginVisible && <LoginForm  />}
      {isRegisterVisible && <SignupForm />}
    </div>
  )
}

export default RegistrationPage