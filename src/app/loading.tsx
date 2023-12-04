import React from "react";

const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <div className="border-t-4 border-green-300 border-solid rounded-full animate-spin w-10 h-10"></div>
        <p className="mt-4 text-green-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
