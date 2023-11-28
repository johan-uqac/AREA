import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'

import pic from '../../Components/assets/pic.png'
import backgroundImage from '../../Components/assets/background.jpg';

var sectionStyle = {
  backgroundImage: `url(${backgroundImage})`,
  }

export default function LoginForm({ register, handleSubmit, errors, onSubmit }: any) {
  return (
  <div className="bg-image" style={sectionStyle}>
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src={pic}
          alt="Sample image" />
        </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-center">
          <label className="mr-1 font-bold text-2xl">Sign in</label>
          </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <label className=""> Welcome back ! </label>
          </div>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
          {/* <div className="mt-4 flex justify-between font-semibold text-sm">
              <a className="text-teal-600 hover:text-teal-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
            </div> */}
          <div className="text-center md:text-center">
            <button class="mb-2 mt-2 w-[150px] bg-black h-[50px] rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-teal-600 before:to-[rgb(13,148,136)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-slate-50" type="submit">
              Login
            </button>
            </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account? <a className="text-teal-600 hover:underline hover:underline-offset-4" href="#">Register</a>
            </div>
          </div>
        </section>
      </div>
      );
    }
  
