import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white drop-shadow z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4 text-gray-800 hover:text-gray-600 transition duration-300">
          <Image
            src="/static/tomspencer.png"
            alt="Tom Spencer - Senior UX Designer"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1 className="font-bold text-lg">Tom Spencer</h1>
            <p className="text-sm text-gray-600">Senior UX Designer</p>
          </div>
        </Link>
        <div className="space-x-4">
          <Link href="/#work" className="text-gray-800 hover:text-gray-600">Work</Link>

          <Link href="about" className="text-gray-800 hover:text-gray-600">About</Link>
          <a
            href="/resume.pdf"
            className="text-gray-800 hover:text-gray-600"
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