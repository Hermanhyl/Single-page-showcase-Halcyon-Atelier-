import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Marquee from './Marquee.jsx'
import './Contact.css'

const FAREWELLS = ['Até breve', 'À bientôt', 'A presto', 'See you', 'Hasta pronto']

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const [farewell, setFarewell] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setFarewell((f) => (f + 1) % FAREWELLS.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="contact" id="contact" ref={ref}>
      <header className="contact__header">
        <motion.span
          className="label"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          § Four — Correspondence
        </motion.span>
      </header>

      <h2 className="contact__title display" aria-label="Let us correspond.">
        <span className="contact__title-l">
          {'Let us'.split('').map((ch, i) => (
            <span className="contact__char-wrap" key={`l-${i}`}>
              <motion.span
                className="contact__char"
                initial={{ y: '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{
                  duration: 1.1,
                  delay: 0.2 + i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {ch === ' ' ? ' ' : ch}
              </motion.span>
            </span>
          ))}
        </span>
        <span className="contact__title-r italic-display">
          {'correspond.'.split('').map((ch, i) => (
            <span className="contact__char-wrap" key={`r-${i}`}>
              <motion.span
                className="contact__char contact__char--accent"
                initial={{ y: '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{
                  duration: 1.1,
                  delay: 0.5 + i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {ch}
              </motion.span>
            </span>
          ))}
        </span>
      </h2>

      <div className="contact__grid">
        <motion.div
          className="contact__col"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label">By post</span>
          <p className="contact__line">
            Rua das Janelas Verdes 47<br />
            Segundo andar, 1200-690<br />
            Lisboa, Portugal
          </p>
        </motion.div>

        <motion.div
          className="contact__col"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label">By wire</span>
          <p className="contact__line">
            <a className="contact__link" href="mailto:estudio@halcyonatelier.pt">
              estudio@halcyonatelier.pt
            </a>
            <br />
            <span className="contact__sub">Replies within five working days</span>
          </p>
        </motion.div>

        <motion.div
          className="contact__col"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label">In person</span>
          <p className="contact__line">
            Tuesday — Friday<br />
            10h — 18h<br />
            <span className="contact__sub">By appointment only</span>
          </p>
        </motion.div>

        <motion.div
          className="contact__col"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label">Currently</span>
          <p className="contact__line contact__line--status">
            <motion.span
              className="contact__dot"
              animate={{ opacity: [1, 0.35, 1], scale: [1, 0.85, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            />
            Accepting two commissions
            <br />
            for autumn 2026.
          </p>
        </motion.div>
      </div>

      {/* Drawing flourish */}
      <div className="contact__flourish">
        <ContactFlourish inView={inView} />
      </div>

      {/* Cycling farewell */}
      <div className="contact__farewell" aria-live="polite">
        <span className="eyebrow">Farewell, in passing —</span>
        <span className="contact__farewell-stack">
          {FAREWELLS.map((word, i) => (
            <motion.span
              key={word}
              className="contact__farewell-word italic-display"
              animate={{
                y: farewell === i ? 0 : farewell === (i + 1) % FAREWELLS.length ? '100%' : '-100%',
                opacity: farewell === i ? 1 : 0,
              }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </div>

      {/* Bottom marquee — reverse direction, larger */}
      <div className="contact__marquee">
        <Marquee speed={35} reverse>
          <span>Halcyon Atelier</span>
          <span className="contact__marquee-glyph">✷</span>
          <span className="italic-display">Lisboa</span>
          <span className="contact__marquee-glyph">✷</span>
          <span>MMXVII</span>
          <span className="contact__marquee-glyph">✷</span>
          <span className="italic-display">By appointment</span>
          <span className="contact__marquee-glyph">✷</span>
          <span>Halcyon Atelier</span>
          <span className="contact__marquee-glyph">✷</span>
          <span className="italic-display">Praça das Flores</span>
          <span className="contact__marquee-glyph">✷</span>
        </Marquee>
      </div>

      {/* Tiny footer */}
      <footer className="contact__base">
        <span className="eyebrow">© Halcyon Atelier · Lda</span>
        <span className="eyebrow">Site set in Fraunces &amp; IBM Plex Mono</span>
        <span className="eyebrow">Site №07 · Pressed locally</span>
      </footer>
    </section>
  )
}

function ContactFlourish({ inView }) {
  return (
    <svg
      viewBox="0 0 1400 220"
      width="100%"
      height="160"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <motion.path
        d="
          M 40 130
          C 120 30, 240 30, 280 130
          C 320 230, 440 230, 480 130
          C 520 30, 640 30, 680 130
          C 720 230, 840 230, 880 130
          C 920 30, 1040 30, 1080 130
          C 1120 230, 1240 230, 1280 130
          C 1310 60, 1350 60, 1370 110
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 4, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
        style={{ color: 'var(--terracotta)' }}
      />
      <motion.circle
        cx="40"
        cy="130"
        r="3"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ color: 'var(--terracotta)' }}
      />
      <motion.circle
        cx="1370"
        cy="110"
        r="3"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 4.4 }}
        style={{ color: 'var(--terracotta)' }}
      />
    </svg>
  )
}
