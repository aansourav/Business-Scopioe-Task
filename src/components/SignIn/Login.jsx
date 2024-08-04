import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../Hook/useAuth";
import {  FaFacebookF } from "react-icons/fa6";
import LoginS from "./Small/LoginS";


const Login = () => {



   
  const { login ,googleLogin, user} = useAuth();
  
  // show password
  const [pass, setPass] = useState(false);
  
  const location = useLocation();
const navigate = useNavigate();

const {
  register,
  handleSubmit
} = useForm()
const onSubmit = (data) => {
  const {email,password} = data

  // login user
  login(email, password)
    .then(() => {
      toast.success("Login Successfully");
     
      navigate(location?.state ? location.state : "/dashboard");
    })
    .catch((err) => {
      if (err.code === "auth/invalid-credential") {
        toast.error("Invalid user/password");
      }
    });
}

// google
const handleGoogleLogin = () => {
  googleLogin()
    .then(() => {
      toast.success("Login Successfully");
      navigate(location?.state ? location.state : "/dashboard");
    })
    .catch();
};
if(user) return navigate('/dashboard')

    return (
      <div className="md:my-20 md:mx-8  mx-auto">
      <div className=" hidden md:grid grid-cols-2 items-center  gap-6  mx-auto  ">
          
      

          <div className=" max-w-[432px] mx-auto ">
             
          <div className="space-y-2">
         <h1 className="text-[40px] font-serif text-[#4285F3] ">LOGO</h1>
          <h3 className="text-3xl font-semibold font-poppins">
          Log In To Your Account
          </h3>
          <p className="text-[#5C635A] ">
          Welcome Back! Select a method to log in:
          </p>
         </div>
      
      <div className="mt-8 flex gap-6 justify-between">
      <button onClick={handleGoogleLogin} href="#" className="flex items-center justify-center bg-gradient-to-r from-[#E4E4E4] to-white  transition-colors duration-300 transform border rounded-lg btn px-11  hover:bg-gray-50 ">
                  <div className="">
                      <svg className="w-6 h-6" viewBox="0 0 40 40">
                          <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                          <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                          <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                          <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                      </svg>
                  </div>
      
                  <span className=" text-center">Google</span>
              </button>
        <button className="btn bg-[#298FFF] px-11 text-white " href="/">
        <FaFacebookF />
        <span>Facebook</span>
        </button>
      </div>
            
              <div className="flex items-center text-[#5C635A] justify-between mt-8">
                  <span className="w-1/5 border-b  lg:w-1/4"></span>
      
                  <a  className="text-sm text-center ">Or Continue with Email</a>
      
                  <span className="w-1/5 border-b  lg:w-1/4"></span>
              </div>
      
              <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium " >Email </label>
                  <input
                  {...register("email",{required: true})}
                  id="LoggingEmailAddress" className="block w-full h-14 px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="email"
                  placeholder="Enter your email"
                  />

              </div>
      
              <div className="mt-4">
                  <div className="flex justify-between">
                      <label className="block mb-2 text-sm font-medium " >Password</label>
                      
                  </div>
      
                  <div className="flex relative items-center gap-5">
                  <input
                    {...register("password", { required: true })}
                    className="block w-full h-14 px-4 py-2  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type={pass ? "text" : "password"}
                    placeholder="Enter your password"
                  />

                  <a className="absolute right-6" onClick={() => setPass(!pass)}>
                    {pass ? <FaRegEye className="" /> : <FaRegEyeSlash />}
                  </a>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="space-x-2">
                  <input type="checkbox"  />
                  <span className="text-[#5c635ae0] ">Remember me</span>
                </div>
              <a href="#" className="text-sm  text-[#156BCA] font-medium  underline">Forget Password?</a>
              </div>
      
              <div className="mt-6 text-center">
                  <button type="submit" className=" btn btn-wide  btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                      Sign In
                  </button>
              </div>
              </form>
      
              <div className="text-center text-sm mt-4">
             <span> Don’t Have an Account? </span> 
                  <Link to='/register' className=" text-[#156BCA] font-medium underline ">Create Account</Link>
      
              </div>
          </div>
       {/* 2nd part */}
          <div
          className="hidden h-[800px] max-w-[648px] lg:flex lg:items-center lg:justify-center text-center bg-cover rounded-2xl bg-no-repeat m-4 "
          style={{
            backgroundImage: "url(login.png)",
          }}
        >
          <div className="flex flex-col w-fit font-semibold text-[22px] rounded-[10px]   bg-[#152a16b2] p-[30px] ">
            <p className="text-white"> <span className=" text-[#156BCA] " >Sign In</span> to view all the <br /> massage therapists</p>
          </div>
        </div>

      </div> 

        {/* for small device */}
      <LoginS/>

  </div>
    );
};

export default Login;