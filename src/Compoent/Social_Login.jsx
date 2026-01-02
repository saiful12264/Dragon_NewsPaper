import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Social_Login = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-3">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>

        <button className="btn btn-primary btn-outline w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default Social_Login;
