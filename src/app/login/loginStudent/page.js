'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-around gap-y-10 p-24">
      <h1 className="text-red-500 text-2xl">Login Page For Students</h1>
      <Link href={'/login'} className='text-yellow-400 underline hover:no-underline'> Go to Login Page</Link>
      <Link href={'/login/loginTeacher'} className='text-yellow-400 underline hover:no-underline'>Go to Teacher Login Page</Link>
      <button className=" bg-green-700 text-white font-medium p-2 hover:text-black" onClick={() => router.push("/")}>
        Go To Home Page
      </button>
    </div>
  );
};

export default page;
