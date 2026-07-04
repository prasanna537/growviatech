import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { WhyChooseUs } from '@/components/why-choose-us'
import { ContactCTA } from '@/components/contact-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </main>
  )
}
