import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="border-t-8 border-gray-500 border-solid rounded-full animate-spin w-16 h-16"></div>
      <p className="mt-4 text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
