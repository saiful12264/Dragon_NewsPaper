import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Auth/Auth_provider";
import { toast } from "react-toastify";

const Register = () => {
  const {createUserWithEmailAndPasswordFunc,updateProfileFunc} = use(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) =>{
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    

    createUserWithEmailAndPasswordFunc(email,password)
    .then(result => {
      updateProfileFunc({displayName,photoURL})
      .then(()=>{
        
             
              toast.success("Register Successful");
              navigate('/');


      })
      .catch(error=>{
        toast.error(error.message);
      })

    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage);
    console.log(errorMessage);
    // ..
  });
    

  }
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <form onSubmit={handleSignUp} className="card-body ">
          <h2 className="font-semibold text-2xl text-center py-10">
            Register your account
          </h2>
          <hr className="text-base-200 py-5" />
          <fieldset className="fieldset w-full ">
            {/* Name */}
            <label className="label font-bold">Your Name</label>
            <input
              name="name"
              type="text"
              className="input w-full bg-base-200"
              placeholder="Name"
            />
            {/* Photo URL */}
            <label className="label font-bold">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input w-full bg-base-200"
              placeholder="Photo URL"
            />
            {/* Email */}
            <label className="label font-bold">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full bg-base-200"
              placeholder="Email"
            />

            {/* Password  */}
            <label className="label font-bold">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full bg-base-200"
              placeholder="Password"
            />
            {/* CheckBox */}
            <div className="mt-3 flex items-center gap-1">
              <input type="checkbox" defaultChecked className="checkbox" />
              <p>Accept Term & Conditions</p>

            </div>

            <button type={"submit"} className="btn btn-neutral mt-4">Register</button>

            <p className="text-center mt-5 text-lg">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
