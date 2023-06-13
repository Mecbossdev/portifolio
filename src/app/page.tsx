import { About } from '@/components/About'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import { Projects } from '@/components/Projects'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <section>
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div className="absolute right-80 top-1/2 h-[288px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-r from-red-500 via-blue-500 to-teal-400 opacity-50 blur-full" />
        <Hero />

        <Profile />
      </div>
      <About />
      <Services />
      <Projects />
    </section>
  )
}
