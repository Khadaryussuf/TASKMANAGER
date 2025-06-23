import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen px-4 bg-gray-50">
      <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-black mb-6">
          Task Manager
        </h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
