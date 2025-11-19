'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">NG</span>
          </div>
          <span className="font-serif text-2xl font-bold text-accent hidden sm:inline">
            Global Dwellings
          </span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link href="/" className="nav-link">
            Magazine
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}
