import { useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from "zod";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';


function LoginForm( {changeAuth}) {

  const loginUrl = 'http://localhost:3000/user/login';

  const [success , setSuccess] = useState(false)
  const navigate = useNavigate();

  const schema = z.object({
    email : z.string().email(),
    password : z.string().min(8),
  });

  const { register , handleSubmit , formState : {errors,isSubmitting} } = useForm({ resolver : zodResolver(schema)});

  // const login = () => {
    

  // }

  const login = async ()  => {
   try{   
      const response = await axios.post(loginUrl , {
        email : email.value,
        password : password.value
      },{
        withCredentials: true // Send cookies with the request
    })
      if(response.data.errors){
        console.log(response)
        throw new Error("Error trying to authenticate the login");
      }
      console.log(response)
      setSuccess(true);
      changeAuth();
      navigate('/');
      console.log(response); // Handle successful login
   }catch(err){
    console.log(err.message);

   }
  }

  return (
    <div>
      <section className="bg-gray-50 ">
       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(login)}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input {...register('email')} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com"  />
                      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input {...register('password')} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "  />
                      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                  </div>
                  
                  <button disabled={isSubmitting} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{isSubmitting ? "Loading..." : "Sign in"}</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
                  {success && <p className="text-green-500">Loged In Successfully</p>}
                </form>
            </div>
          </div>
       </div>
      </section>
    </div>
  )
}

export default LoginForm