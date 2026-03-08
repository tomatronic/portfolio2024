'use client'

import Image from "next/legacy/image"
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

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
      <nav className="z-50 bg-transparent">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setHash('')}
              className="flex items-center"
              aria-label="Tom Spencer — home"
            >
              <motion.div
                className="relative h-12 w-12 overflow-hidden rounded-full"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(0,0,0,0.06)' }}
                whileHover={{ scale: 1.08, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <Image
                  src="/just_me.webp"
                  alt="Tom Spencer"
                  layout="fill"
                  className="object-cover object-top"
                />
              </motion.div>
            </Link>

            <button
              ref={buttonRef}
              className="text-slate-950 dark:text-white md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link
                href="/#work"
                onClick={() => setHash('#work')}
                className={`text-base ${isActive('/#work') ? 'text-violet-600 dark:text-violet-400' : 'text-slate-950 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400'}`}
              >
                Work
              </Link>

              <Link
                href="/about"
                className={`text-base ${isActive('/about') ? 'text-violet-600 dark:text-violet-400' : 'text-slate-950 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400'}`}
              >
                About
              </Link>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950/[0.07] px-4 py-1.5 text-base font-medium text-slate-950 transition-colors hover:bg-violet-600 hover:text-white dark:bg-white/10 dark:text-slate-200 dark:hover:bg-violet-600 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={14} strokeWidth={2} />
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
          className="fixed inset-0 z-50 bg-slate-950 md:hidden"
        >
          <div className="container relative mx-auto h-full px-6 py-12">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-6 top-12 text-white md:hidden"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            <div className="flex h-full flex-col items-center justify-center space-y-8">
              <Link
                href="/#work"
                className="group relative text-3xl font-bold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Work</span>
                <span className={`absolute bottom-0 left-0 h-1 w-full bg-white ${isActive('/#work') ? '' : 'hidden'}`}></span>
                <span className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 ${isActive('/#work') ? 'hidden' : ''}`}></span>
              </Link>

              <Link
                href="/about"
                className="group relative text-3xl font-bold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">About</span>
                <span className={`absolute bottom-0 left-0 h-1 w-full bg-white ${isActive('/about') ? '' : 'hidden'}`}></span>
                <span className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 ${isActive('/about') ? 'hidden' : ''}`}></span>
              </Link>

              <a
                href="/resume.pdf"
                className="group relative text-3xl font-bold text-white"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Resume</span>
                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
