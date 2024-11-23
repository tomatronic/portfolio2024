'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="z-50 bg-slate-950">
        <div className="container mx-auto max-w-screen-lg px-6 py-12 md:px-0">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4 text-gray-100 transition duration-300 hover:text-gray-600">
              <Image
                src="/static/tomspencer.png"
                alt="Tom Spencer - Senior UX Designer"
                width={48}
                height={48}
                className="rounded-full"
              />
             </Link>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menu
            </button>

            <div className="hidden md:flex md:space-x-8">
              <Link href="/#work" className="text-base text-gray-100 hover:text-gray-600">Work</Link>
              <Link href="/about" className="text-base text-gray-100 hover:text-gray-600">About</Link>
              <a
                href="/resume.pdf"
                className="text-base text-gray-100 hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed left-0 right-0 z-40 bg-white shadow-md md:hidden">
          <div className="container mx-auto max-w-screen-xl px-6 py-4">
            <div className="flex flex-col items-center space-y-4">
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
      )}
    </>
  )
}