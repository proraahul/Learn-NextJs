import Link from "next/link"

const Layout = ({children}) => {
  return (
    <div className="min-h-screen">
        <ul className="flex justify-around items-center border py-2 m-20">
            <li className="text-teal-600 hover:underline"><Link href={'/about'}>About Main</Link></li>
            <li className="text-teal-600 hover:underline"><Link href={'/about/aboutStudent'}>About Student</Link></li>
            <li className="text-teal-600 hover:underline"><Link href={'/about/aboutCollege'}>About College</Link></li>
        </ul>
        {children}
    </div>
  )
}

export default Layout