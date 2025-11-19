import Header from '@/components/header'
import AboutHero from '@/components/about-hero'
import AboutContent from '@/components/about-content'
import Footer from '@/components/footer'

export default function About() {
  return (
    <main className="w-full">
      <Header />
      <AboutHero />
      <AboutContent />
      <Footer />
    </main>
  )
}
