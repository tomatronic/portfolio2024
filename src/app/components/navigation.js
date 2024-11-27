'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  // Toggle menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle clicks outside of menu (though less relevant with full-screen overlay)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) && 
          !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

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
              ref={buttonRef}
              className="text-gray-100 md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>

            <div className="hidden md:flex md:space-x-8">
              <Link 
                href="/#work" 
                className="group relative text-base text-gray-100"
              >
                <span className="relative z-10">Work</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-teal-400 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
              <Link 
                href="/about" 
                className="group relative text-base text-gray-100"
              >
                <span className="relative z-10">About</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-teal-400 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
              <a
                href="/resume.pdf"
                className="group relative text-base text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Resume</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-teal-400 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Full-screen Mobile menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="fixed inset-0 z-50 bg-slate-950 md:hidden"
        >
          <div className="container relative mx-auto h-full px-6 py-12">
            {/* Close button positioned identically to menu button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-6 top-12 text-gray-100 md:hidden"
            >
              Close
            </button>

            <div className="flex h-full flex-col items-center justify-center space-y-8">
              <Link 
                href="/#work" 
                className="group relative text-3xl font-bold text-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Work</span>
                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-teal-400 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
              <Link 
                href="/about" 
                className="group relative text-3xl font-bold text-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">About</span>
                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-teal-400 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
              <a
                href="/resume.pdf"
                className="group relative text-3xl font-bold text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Resume</span>
                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-teal-400 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}