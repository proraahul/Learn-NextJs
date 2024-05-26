"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


const page = () => {
  const router = useRouter();

  const navigate = (routeName) => {
    router.push(routeName);
  };

  return (
    <main className="flex min-h-screen items-center justify-around p-24">
      <Link href={"/login"}>Login</Link>
      <Link href={"/about"}>About</Link>


      <br />
      <br />

      <button className="border p-2" onClick={() => navigate("/login")}>
        Go To Login Page
      </button>
      <button className="border p-2" onClick={() => navigate("/about")}>
        Go To About Page
      </button>
    </main>
  );
};

export default page;
