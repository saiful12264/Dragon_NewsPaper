import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Social_Login from "../Social_Login";
import Find_us_on from "./Find_us_on";
import Q_zone from "./Q_zone";

const Right_side = () => {
  return (
    <div>
        <section className="space-y-5">
            <Social_Login></Social_Login>
            <Find_us_on></Find_us_on>
            <Q_zone></Q_zone>
        </section>
    
    </div>
  );
};

export default Right_side;
