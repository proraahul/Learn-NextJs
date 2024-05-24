"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-around p-24">
      <h1 className="text-red-500 text-2xl">About Page</h1>
      <Link href={"/about/aboutCollege"}>About Student</Link>
      <Link href={"/about/aboutStudent"}>About College</Link>
      <button className="border p-2" onClick={() => router.push("/")}>
        Go To Home Page
      </button>
    </div>
  );
};

export default About;
