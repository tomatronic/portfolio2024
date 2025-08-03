'use client'

import Image from "next/legacy/image"
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  
  // Ensure component is mounted before accessing window
  useEffect(() => {
    setMounted(true)
  }, [])

  // Function to check if a nav item is currently active
  const isActive = (path) => {
    if (!mounted) return false // Prevent hydration mismatch
    
    if (path === '/#work') {
      // Only active if we're on home page AND either no hash or #work hash
      return pathname === '/' && (typeof window !== 'undefined' && 
        (window.location.hash === '#work' || window.location.hash === ''))
    }
    if (path === '/about') {
      // Only active if we're specifically on the about page
      return pathname === '/about'
    }
    return pathname === path
  }

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
      <nav className="z-50">
        <div className="container mx-auto max-w-screen-xl px-6 py-12 md:px-0">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-6 text-slate-950 transition duration-300 hover:text-gray-600">
              <Image
                src="/static/tomspencer.png"
                alt="Tom Spencer - Senior UX Designer"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="ml-4 text-lg font-bold uppercase tracking-wide">TOM SPENCER</span>
             </Link>
            
            <button 
              ref={buttonRef}
              className="text-slate-950 md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>

            <div className="hidden md:flex md:space-x-8">
              <Link 
                href="/#work" 
                className="group relative text-base text-slate-950"
              >
                <span className="relative z-10">Work</span>
                <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-slate-950 ${isActive('/#work') ? '' : 'hidden'}`}></span>
                <span className={`absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-slate-950 transition-transform duration-300 ease-out group-hover:scale-x-100 ${isActive('/#work') ? 'hidden' : ''}`}></span>
              </Link>
              <Link 
                href="/about" 
                className="group relative text-base text-slate-950"
              >
                <span className="relative z-10">About</span>
                <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-slate-950 ${isActive('/about') ? '' : 'hidden'}`}></span>
                <span className={`absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-slate-950 transition-transform duration-300 ease-out group-hover:scale-x-100 ${isActive('/about') ? 'hidden' : ''}`}></span>
              </Link>
              <a
                href="/resume.pdf"
                className="group relative text-base text-slate-950"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Resume</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-slate-950 hidden"></span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-slate-950 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
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
              className="absolute right-6 top-12 text-slate-950 md:hidden"
            >
              Close
            </button>

            <div className="flex h-full flex-col items-center justify-center space-y-8">
              <Link 
                href="/#work" 
                className="group relative text-3xl font-bold text-slate-950"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Work</span>
                {/* Current page indicator for mobile - slate grey underline optimized for text-3xl */}
                <span className={`absolute bottom-0 left-0 h-1 w-full bg-slate-950 ${isActive('/#work') ? '' : 'hidden'}`}></span>
                {/* Hover animation for mobile - hidden when current page is active */}
                <span className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-slate-950 transition-transform duration-300 ease-out group-hover:scale-x-100 ${isActive('/#work') ? 'hidden' : ''}`}></span>
              </Link>
              <Link 
                href="/about" 
                className="group relative text-3xl font-bold text-slate-950"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">About</span>
                {/* Current page indicator for mobile - slate grey underline optimized for text-3xl */}
                <span className={`absolute bottom-0 left-0 h-1 w-full bg-slate-950 ${isActive('/about') ? '' : 'hidden'}`}></span>
                {/* Hover animation for mobile - shows when not current page */}
                <span className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-slate-950 transition-transform duration-300 ease-out group-hover:scale-x-100 ${isActive('/about') ? 'hidden' : ''}`}></span>
              </Link>
              <a
                href="/resume.pdf"
                className="group relative text-3xl font-bold text-slate-950"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Resume</span>
                {/* Resume never shows as active since it's an external PDF */}
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-slate-950 hidden"></span>
                {/* Hover animation for mobile - always shows for resume */}
                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-slate-950 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}