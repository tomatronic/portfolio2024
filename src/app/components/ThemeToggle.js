'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 p-1.5"
    >
      {/* Sun */}
      <span className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${
        !isDark
          ? 'bg-white shadow-sm text-amber-500'
          : 'text-slate-400 dark:text-slate-500'
      }`}>
        <Sun size={16} strokeWidth={2} />
      </span>

      {/* Moon */}
      <span className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${
        isDark
          ? 'bg-slate-700 shadow-sm text-slate-200'
          : 'text-slate-400'
      }`}>
        <Moon size={16} strokeWidth={2} />
      </span>
    </button>
  )
}
