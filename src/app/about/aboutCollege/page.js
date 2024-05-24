import Link from 'next/link'

const page = () => {
  return (
    <main className="flex min-h-screen items-center justify-around p-24">
        <h1 className="text-red-500 text-2xl">About College Page</h1>
        <Link href={'/about'}>Go to About Page</Link>
        <Link href={'/about/aboutStudent'}>Go to About Student Page</Link>
        <Link href={'/'}>Go to Home Page</Link>
    </main>
  )
}

export default page