"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
const NotFound = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div>
      <Head>
        <title>Page Not Found !</title>
      </Head>
      <div className="relative flex flex-col h-full w-full">
        <div className="min-h-screen flex items-center justify-center">
          <h1>404 ! ops sorry page not found ! </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
