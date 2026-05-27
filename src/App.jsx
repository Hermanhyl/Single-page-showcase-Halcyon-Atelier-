import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Practice from './components/Practice.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Give fonts a beat to load before the entrance staggers start
    const t = setTimeout(() => setReady(true), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero ready={ready} />
        <About />
        <Work />
        <Practice />
        <Contact />
      </main>
      <div className="vignette" aria-hidden />
      <div className="grain" aria-hidden />
    </>
  )
}
