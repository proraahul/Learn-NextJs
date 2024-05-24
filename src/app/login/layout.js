import Link from "next/link"

const Layout = ({children}) => {
  return (
    <div className="min-h-screen">
        <ul className="flex justify-around items-center border py-2 m-20">
            <li className="text-teal-600 hover:underline"><Link href={'/login'}>Login Main</Link></li>
            <li className="text-teal-600 hover:underline"><Link href={'/login/loginStudent'}>Login Student</Link></li>
            <li className="text-teal-600 hover:underline"><Link href={'/login/loginTeacher'}>Login Teacher</Link></li>
        </ul>
        {children}
    </div>
  )
}

export default Layout