import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Achievements } from '@/components/sections/Achievements'
import { Contact } from '@/components/sections/Contact'
// import { Blog } from '@/components/sections/Blog' // TODO: Re-enable when blog content is ready
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
        {/* <Blog /> */}{/* TODO: Re-enable when blog content is ready */}
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
