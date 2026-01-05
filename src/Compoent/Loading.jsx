import React from "react";
import { ClockLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ClockLoader />
    </div>
  );
};

export default Loading;
