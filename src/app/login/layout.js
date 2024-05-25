"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const path = usePathname();
  // console.log(path);
  return (
    <div className="min-h-screen">
      {path !== "/login/loginTeacher" ? (
        <ul className="flex justify-around items-center border py-2 m-20">
          <li className="text-teal-600 hover:underline">
            <Link href={"/login"}>Login Main</Link>
          </li>
          <li className="text-teal-600 hover:underline">
            <Link href={"/login/loginStudent"}>Login Student</Link>
          </li>
          <li className="text-teal-600 hover:underline">
            <Link href={"/login/loginTeacher"}>Login Teacher</Link>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-around items-center border py-2 m-20">
          <li className="text-teal-600 hover:underline">
            <Link href={"/about"} className="text-teal-600 hover:underline">
              Go to About Page
            </Link>
          </li>
        </ul>
      )}
      {children}
    </div>
  );
};

export default Layout;
