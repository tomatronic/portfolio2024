import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="z-50 bg-white">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between px-6 py-6 md:px-0">
        <Link href="/" className="flex items-center space-x-4 text-gray-600 transition duration-300 hover:text-gray-600">
          <Image
            src="/static/tomspencer.png"
            alt="Tom Spencer - Senior UX Designer"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">Tom Spencer</h1>            
          </div>
        </Link>
        <div className="space-x-4">
          <Link href="/#work" className="text-base text-gray-800 hover:text-gray-600">Work</Link>

          <Link href="about" className="text-base text-gray-800 hover:text-gray-600">About</Link>
          <a
            href="/resume.pdf"
            className="text-base text-gray-800 hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}