"use client";

import { useRouter } from "next/navigation";
const CustomError = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div className="min-h-screen max-w-screen flex flex-col items-center justify-center bg-gray-100 px-32 lg:px-0">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1>
          <span className="text-4xl font-bold">Server Error !</span>
        </h1>
        <p className="text-gray-800 mb-12">
          We apologize for the inconvenience. Our server is currently
          experiencing issues. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default CustomError;
