import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import './Nav.css'

function useLisbonTime() {
  const [time, setTime] = useState(() => formatLisbon())
  useEffect(() => {
    const id = setInterval(() => setTime(formatLisbon()), 30_000)
    return () => clearInterval(id)
  }, [])
  return time
}

function formatLisbon() {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Europe/Lisbon',
    }).format(new Date())
  } catch {
    return '—'
  }
}

export default function Nav() {
  const time = useLisbonTime()
  return (
    <motion.header
      className="nav"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav__edge nav__edge--l">
        <span className="eyebrow">Halcyon Atelier</span>
        <span className="nav__dot" aria-hidden />
        <span className="eyebrow">Est. MMXVII</span>
      </div>
      <nav className="nav__center" aria-label="Primary">
        <a href="#work" className="nav__link"><span>Work</span></a>
        <a href="#practice" className="nav__link"><span>Practice</span></a>
        <a href="#contact" className="nav__link"><span>Contact</span></a>
      </nav>
      <div className="nav__edge nav__edge--r">
        <span className="eyebrow">Lisboa</span>
        <span className="nav__dot" aria-hidden />
        <span className="eyebrow" aria-live="polite">{time} WET</span>
      </div>
    </motion.header>
  )
}
