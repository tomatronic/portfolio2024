'use client'

import Image from "next/legacy/image"
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const pathname = usePathname()

  const [hash, setHash] = useState('')

  useEffect(() => {
    const updateHash = () => {
      const next = window.location.hash || ''
      setHash(prev => (prev === next ? prev : next))
    }

    const scheduleUpdateHash = () => {
      // Avoid scheduling state updates during React insertion phase
      if (typeof queueMicrotask === 'function') queueMicrotask(updateHash)
      else Promise.resolve().then(updateHash)
    }

    // Initial sync (safe to do in useEffect)
    updateHash()

    // Native events
    window.addEventListener('hashchange', updateHash)
    window.addEventListener('popstate', updateHash)

    // Patch history methods (Next can update the URL via these without firing hashchange)
    const originalPushState = window.history.pushState
    const originalReplaceState = window.history.replaceState

    window.history.pushState = function (...args) {
      originalPushState.apply(this, args)
      scheduleUpdateHash()
    }

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args)
      scheduleUpdateHash()
    }

    return () => {
      window.removeEventListener('hashchange', updateHash)
      window.removeEventListener('popstate', updateHash)
      window.history.pushState = originalPushState
      window.history.replaceState = originalReplaceState
    }
  }, [])

  const isActive = (path) => {
    if (path === '/#work') return pathname === '/' && hash === '#work'
    if (path === '/about') return pathname === '/about'
    return pathname === path
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <>
      <nav className="z-50">
        <div className="container mx-auto max-w-screen-xl px-6 py-12 md:px-0">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setHash('')}
              className="flex items-center space-x-6 text-slate-950 transition duration-300 hover:text-gray-600"
            >
              {/* <Image
                src="/static/tomspencer.png"
                alt="Tom Spencer - Senior UX Designer"
                width={48}
                height={48}
                className="rounded-full"
              /> */}
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
                onClick={() => setHash('#work')}
                className={`text-base ${isActive('/#work') ? 'text-sky-500' : 'text-slate-950 hover:text-sky-500'}`}
              >
                Work
              </Link>

              <Link
                href="/about"
                className={`text-base ${isActive('/about') ? 'text-sky-500' : 'text-slate-950 hover:text-sky-500'}`}
              >
                About
              </Link>

              <a
                href="/resume.pdf"
                className="text-base text-slate-950 hover:text-sky-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-50 bg-sky-500 md:hidden"
        >
          <div className="container relative mx-auto h-full px-6 py-12">
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
                <span className={`absolute bottom-0 left-0 h-1 w-full bg-slate-950 ${isActive('/#work') ? '' : 'hidden'}`}></span>
                <span className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-slate-950 transition-transform duration-300 ease-out group-hover:scale-x-100 ${isActive('/#work') ? 'hidden' : ''}`}></span>
              </Link>

              <Link
                href="/about"
                className="group relative text-3xl font-bold text-slate-950"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">About</span>
                <span className={`absolute bottom-0 left-0 h-1 w-full bg-slate-950 ${isActive('/about') ? '' : 'hidden'}`}></span>
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
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-slate-950 hidden"></span>
                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-slate-950 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
