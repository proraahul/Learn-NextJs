'use client'
import Link from "next/link";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
    const router = useRouter()
  return (
    <div className="flex flex-col items-center gap-y-10 p-24">
      <h1 className="text-red-500 text-2xl">Login Page</h1>
      <button className="bg-green-700 text-white font-medium p-2 hover:text-black" onClick={() => router.push('/login/loginStudent')}>Go to Student Login Page</button>
      <button className=" bg-green-700 text-white font-medium p-2 hover:text-black"onClick={() => router.push('/login/loginTeacher')}>Go to Teacher Login Page</button>
      <button className=" bg-green-700 text-white font-medium p-2 hover:text-black" onClick={() => router.push("/")}>
        Go To Home Page
      </button>
    </div>
  );
};

export default Login;
