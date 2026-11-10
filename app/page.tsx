import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Process />
      <Footer />
    </main>
  )
}