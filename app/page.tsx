import Link from 'next/link'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import MagazineGrid from '@/components/magazine-grid'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <MagazineGrid />
      <Footer />
    </main>
  )
}
