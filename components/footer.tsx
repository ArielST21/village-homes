import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Global Dwellings</h3>
            <p className="text-sm leading-relaxed opacity-90">
              A curated showcase of traditional architecture and cultural heritage from around the world, presented in partnership with National Geographic.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:opacity-75 transition-opacity">
                  Magazine
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:opacity-75 transition-opacity">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Connect</h4>
            <p className="text-sm opacity-90 mb-2">
              National Geographic Editorial
            </p>
            <p className="text-xs opacity-75">
              Preserving and sharing the world's cultural treasures
            </p>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8">
          <p className="text-xs opacity-75 text-center">
            © 2025 National Geographic. All rights reserved. Committed to cultural preservation and authentic storytelling.
          </p>
        </div>
      </div>
    </footer>
  )
}
