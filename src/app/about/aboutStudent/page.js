import Link from 'next/link'

const page = () => {
  return (
    <main className="flex min-h-screen items-center justify-around p-24">
        <h1 className="text-red-500 text-2xl">About Student Page</h1>
        <Link href={'/about'}>Go to About Page</Link>
        <Link href={'/about/aboutCollege'}>Go to About College Page</Link>
        <Link href={'/'}>Go to Home Page</Link>
    </main>
  )
}

export default page