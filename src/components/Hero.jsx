import { motion } from 'framer-motion'
import { Fragment } from 'react'
import Marquee from './Marquee.jsx'
import './Hero.css'

const HEADLINE_A = 'Halcyon'
const HEADLINE_B = 'Atelier'

const MANIFESTO = [
  'Quiet',
  'identities',
  'for',
  'places',
  'that',
  'intend',
  'to',
  'be',
  'remembered.',
]

const wordIn = {
  hidden: { y: '110%', opacity: 0 },
  show: (i) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 1.05,
      delay: 0.9 + i * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const letterIn = {
  hidden: { y: '105%', rotate: 6, opacity: 0 },
  show: (i) => ({
    y: '0%',
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.15 + i * 0.05,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function Hero({ ready }) {
  return (
    <section className="hero" id="top">
      {/* Ambient drifting terracotta wash */}
      <motion.div
        className="hero__drift"
        aria-hidden
        animate={{
          x: ['-6%', '4%', '-2%', '-6%'],
          y: ['-4%', '3%', '5%', '-4%'],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 28, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        className="hero__drift hero__drift--two"
        aria-hidden
        animate={{
          x: ['3%', '-5%', '2%', '3%'],
          y: ['2%', '-3%', '-6%', '2%'],
          scale: [1.05, 0.95, 1.1, 1.05],
        }}
        transition={{ duration: 36, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Editorial corner marks */}
      <motion.div
        className="hero__mark hero__mark--tl"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: ready ? 1 : 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="eyebrow">Vol. VII</span>
        <span className="hero__mark-rule" />
        <span className="eyebrow">N° 27</span>
        <span className="hero__mark-rule" />
        <span className="eyebrow">Summer Folio</span>
      </motion.div>

      <motion.div
        className="hero__mark hero__mark--tr"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: ready ? 1 : 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="eyebrow">Independent</span>
        <span className="hero__mark-rule" />
        <span className="eyebrow">By Appointment</span>
      </motion.div>

      {/* Hairline frame */}
      <div className="hero__frame" aria-hidden>
        <motion.span
          className="hero__frame-l"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: ready ? 1 : 0 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="hero__frame-r"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: ready ? 1 : 0 }}
          transition={{ duration: 1.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Headline */}
      <div className="hero__stage">
        <h1 className="hero__headline" aria-label="Halcyon Atelier">
          <span className="hero__line">
            {HEADLINE_A.split('').map((ch, i) => (
              <span className="hero__letter-wrap" key={`a-${i}`}>
                <motion.span
                  className="hero__letter display"
                  variants={letterIn}
                  initial="hidden"
                  animate={ready ? 'show' : 'hidden'}
                  custom={i}
                >
                  {ch}
                </motion.span>
              </span>
            ))}
          </span>

          <span className="hero__line hero__line--b">
            {HEADLINE_B.split('').map((ch, i) => (
              <span className="hero__letter-wrap" key={`b-${i}`}>
                <motion.span
                  className={
                    'hero__letter display' +
                    (ch === 'A' ? ' italic-display hero__letter--accent' : '')
                  }
                  variants={letterIn}
                  initial="hidden"
                  animate={ready ? 'show' : 'hidden'}
                  custom={HEADLINE_A.length + i + 1}
                >
                  {ch}
                </motion.span>
              </span>
            ))}

            {/* Punctuating decorative dot */}
            <motion.span
              className="hero__dot"
              aria-hidden
              initial={{ scale: 0 }}
              animate={{ scale: ready ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        </h1>

        {/* Manifesto */}
        <div className="hero__manifesto" aria-label={MANIFESTO.join(' ')}>
          {MANIFESTO.map((word, i) => (
            <Fragment key={`w-${i}`}>
              <span className="hero__word-wrap">
                <motion.span
                  className="hero__word"
                  variants={wordIn}
                  initial="hidden"
                  animate={ready ? 'show' : 'hidden'}
                  custom={i}
                >
                  {word}
                </motion.span>
              </span>{' '}
            </Fragment>
          ))}
        </div>

        {/* Meta line */}
        <motion.div
          className="hero__meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 1.4, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__meta-col">
            <span className="label">Discipline</span>
            <span className="hero__meta-val">Identity · Editorial · Spatial</span>
          </div>
          <div className="hero__meta-col">
            <span className="label">Field</span>
            <span className="hero__meta-val">Hospitality &amp; Place</span>
          </div>
          <div className="hero__meta-col">
            <span className="label">Latitude</span>
            <span className="hero__meta-val">38.7079° N · 9.1366° W</span>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 1.4, delay: 2.1 }}
          aria-label="Scroll to the studio's note"
        >
          <span className="eyebrow">Scroll</span>
          <motion.span
            className="hero__scroll-line"
            animate={{ scaleY: [0.2, 1, 0.2] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.a>
      </div>

      {/* Bottom marquee */}
      <div className="hero__marquee-wrap">
        <Marquee speed={45}>
          <span>An independent studio</span>
          <span className="hero__marquee-glyph">✦</span>
          <span>Lisboa &mdash; Praça das Flores</span>
          <span className="hero__marquee-glyph">✦</span>
          <span>For hotels, kitchens &amp; rooms</span>
          <span className="hero__marquee-glyph">✦</span>
          <span>Working hours by correspondence</span>
          <span className="hero__marquee-glyph">✦</span>
          <span>Currently accepting two commissions for autumn</span>
          <span className="hero__marquee-glyph">✦</span>
        </Marquee>
      </div>
    </section>
  )
}
