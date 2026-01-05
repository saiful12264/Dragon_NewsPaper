import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Auth/Auth_provider";
import { toast } from "react-toastify";

const Login = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const form = location.state || '/';
  const {signInWithEmailAndPasswordFunc} = use(AuthContext);
  const handleSingIn =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPasswordFunc(email,password)
    .then(result =>{
      toast.success("Login Successful");
      navigate(form);
    })
    .catch(error =>{
      toast.error(error.message);
    })
  }

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <form onSubmit={handleSingIn} className="card-body ">
            <h2 className="font-semibold text-2xl text-center py-10">Login your account</h2>
            <hr className="text-base-200 py-5"/>
          <fieldset className="fieldset w-full ">
              {/* email  */}

            <label className="label font-bold">Email</label>
            <input name="email" type="email" className="input w-full bg-base-200" placeholder="Email" />
             {/* password  */}
            <label className="label font-bold">Password</label>
            <input name="password" type="password" className="input w-full bg-base-200" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>

            <p className="text-center mt-5 text-lg">Dont’t Have An Account ? <Link className="text-secondary" to='/auth/register'>Register</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
