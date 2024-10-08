'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="z-50 bg-white">
      <div className="container mx-auto max-w-screen-xl px-4 py-6">
        <div className="flex flex-row items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 text-gray-600 transition duration-300 hover:text-gray-600">
            <Image
              src="/static/tomspencer.png"
              alt="Tom Spencer - Senior UX Designer"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold">Tom Spencer</h1>            
            </div>
          </Link>
          
          <button 
            className="mt-4 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>

          <div className={`${isMenuOpen ? 'flex' : 'hidden'} mt-4 flex-col items-center space-y-4 md:mt-0 md:flex md:flex-row md:space-y-0 md:space-x-12`}>
            <Link href="/#work" className="text-base text-gray-800 hover:text-gray-600">Work</Link>
            <Link href="/about" className="text-base text-gray-800 hover:text-gray-600">About</Link>
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
      </div>
    </nav>
  )
}