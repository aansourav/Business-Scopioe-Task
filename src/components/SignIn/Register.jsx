import { Link, useLocation, useNavigate } from "react-router-dom";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import useAuth from "../Hook/useAuth";
import RegisterS from "./Small/RegisterS";

const Register = () => {
  const { createUser, updateUserProfile, user } = useAuth();
  // show password
  const [pass, setPass] = useState(false);
  const [rPass, setrPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, name, photo, rePassword } = data;

    // password validation
    if (password.length < 6) {
      setError("password", {
        type: "manual",
        message: "Password must be at least 6 characters long.",
      });
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setError("password", {
        type: "manual",
        message: "Password must have at least one lowercase letter.",
      });
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("password", {
        type: "manual",
        message: "Password must have at least one uppercase letter.",
      });
      return;
    }

    if(password !== rePassword)  {
      setError("rePassword", {
        type: "manual",
        message: "Password not match",
      });
      return;
    }

    // create user
    createUser(email, password)
      .then(() => {
        toast.success("Account create Successfully");
        // create user profile
        updateUserProfile(name, photo).then(() => {
          navigate(location?.state ? location.state : "/dashboard");
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("This Email Already Used");
        } else {
          toast.error("An error occurred");
        }
      });
  };
  if(user) return navigate('/dashboard')
  return (
    <div className=" md:my-20 md:mx-9 mx-auto ">
      <div className=" hidden md:grid grid-cols-2 items-center     mx-auto ">

        <div className="w-[430px] mx-auto ">
         <div className="space-y-2">
         <h1 className="text-[40px] font-serif text-[#4285F3] ">LOGO</h1>
          <h3 className="text-3xl font-semibold font-poppins">
            Sign In To Your Account
          </h3>
          <p className=" text-[#5C635A] ">
            elcome Back! By click the sign up button, you're agree <br />
            to Zenitood Terms and Service and acknowledge the <br />
            <span className=" text-[#4285F3] underline "> Privacy and Policy</span>
          </p>
         </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-8">
              <label className="block mb-2 text-sm font-medium ">Name</label>
              <input
                {...register("name", { required: true })}
                className="block w-full px-4    border h-14 rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="@username"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium ">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="block w-full px-4 h-14   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Enter your email"
              />
            </div>
           
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium ">
                  Password
                </label>
              </div>

              <div>
                <div className="flex relative items-center gap-5">
                  <input
                    {...register("password", { required: true })}
                    className="block w-full px-4 h-14  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type={pass ? "text" : "password"}
                    placeholder="Enter your password"
                  />

                  <a className="absolute right-6" onClick={() => setPass(!pass)}>
                    {pass ? <FaRegEye className="" /> : <FaRegEyeSlash />}
                  </a>
                </div>
                {errors.password && (
                  <span className="text-red-600 text-center font-semibold p-1">
                    {errors.password.message}{" "}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium ">
                 Confirm Password
                </label>
              </div>

              <div>
                <div className="flex relative items-center gap-5">
                  <input
                    {...register("rePassword", { required: true })}
                    className="block w-full px-4 h-14  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type={rPass ? "text" : "password"}
                    placeholder="Re-type password"
                  />

                  <a className="absolute right-6" onClick={() => setrPass(!rPass)}>
                    {rPass ? <FaRegEye className="" /> : <FaRegEyeSlash />}
                  </a>
                </div>
                {errors.rePassword && (
                  <span className="text-red-600 text-center font-semibold p-1">
                    {errors.rePassword.message}{" "}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4 flex gap-3">
                <input
                required
                 type="checkbox" />
                <span className="text-[#4285F3] text-sm ">Accept Terms of Service</span>
              </div>

            <div className=" text-center mt-6">
              <button
                type="submit"
                className=" btn btn-wide btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p>Already Have an Account? <Link
              to="/"
              className=" underline text-[#156BCA] "
            >
              Log in
            </Link></p>  
           
          </div>

        </div>

        <div
          className="hidden h-[800px] max-w-[648px] lg:flex lg:items-center lg:justify-center text-center bg-cover rounded-2xl bg-no-repeat m-4 "
          style={{
            backgroundImage: "url(login.png)",
          }}
        >
          <div className="flex flex-col w-fit font-semibold text-[22px] rounded-[10px]   bg-[#152a16b2] p-[30px] ">
            <p className=" text-[#156BCA] ">Create Account</p>
            <p className="text-white">Fill in Your Information</p>
          </div>
        </div>
      </div>

      {/* for small device */}
     <RegisterS/>

    </div>
  );
};

export default Register;
