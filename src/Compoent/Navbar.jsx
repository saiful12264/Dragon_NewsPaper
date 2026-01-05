import React, { use } from "react";
import { NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { Link } from "react-router";
import { AuthContext } from "../Auth/Auth_provider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user ,signOutFunc,setUser } = use(AuthContext);
 
  const handleLogOut =() =>{

    signOutFunc().then(() => {
      toast("LogOut Successful");
      setUser(null);

  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  toast.error(error.message);
});
   

  } 
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="left">{user && <p>{user.email}</p>}</div>
      <div className="nav flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login flex gap-5">
        <img className="w-10 rounded-full" src={user ? user?.photoURL : userIcon} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-8">LogOut</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
