import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Find_us_on = () => {
  return (
    <div>
      <h2 className="font-bold mb-5 ">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full ">
          <button className="btn join-item bg-base-100 justify-start py-5"><FaFacebook size={24}></FaFacebook> Facebook</button>
          <button className="btn join-item bg-base-100 justify-start py-5">
            <FaTwitter size={24}></FaTwitter>
            Twitter
          </button>
          <button className="btn join-item bg-base-100 justify-start py-5">
            <FaInstagram size={24}></FaInstagram>
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Find_us_on;
