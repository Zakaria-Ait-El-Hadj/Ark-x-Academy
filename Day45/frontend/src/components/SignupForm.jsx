import { useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from "zod";
import { useState } from "react"

function SignupForm() {

  const schema = z.object({
    username : z.string().min(3),
    email : z.string().email(),
    password : z.string().min(8).regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/,
        "Password must contain at least one uppercase letter, one number, and one special character",
    ),
  })

  const {register , handleSubmit , formState : {errors , isSubmitting}} = useForm({ resolver : zodResolver(schema) });

  const [successMessage, setSuccessMessage] = useState(null);

  const submit = () => {
    console.log("submitted");
    setSuccessMessage("Submitted Successfully!");
  }

  return (
    <div>

<section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(submit)}>
                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Your Username</label>
                      <input {...register('username')} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="username" />
                      {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input {...register('email')} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com"  />
                      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input {...register('password')} type='password' name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"  />
                      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                  </div>
                                   
                  <button disabled={isSubmitting} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{isSubmitting ? "Loading..." :  "Create an account"}  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline ">Login here</a>
                  </p>
                  {successMessage && <p className="text-green-500">{successMessage}</p>}
              </form>
          </div>
      </div>
  </div>
</section>

    </div>
  )
}

export default SignupForm