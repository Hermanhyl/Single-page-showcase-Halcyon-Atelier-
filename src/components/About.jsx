import { motion, useInView } from 'framer-motion'
import { Fragment, useRef } from 'react'
import './About.css'

const PASSAGE =
  "We design slowly, by hand, and for places that intend to last. Halcyon is a studio of four — a designer, a writer, a typographer, and a printer — working from a converted second floor on Praça das Flores. We do not pitch. We correspond, we visit, we make. Every identity we build is drawn the long way around."

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' })

  const words = PASSAGE.split(' ')

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__inner">
        <div className="about__side">
          <motion.div
            className="about__label"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label">A note —</span>
            <motion.span
              className="about__rule"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <span className="label">001</span>
          </motion.div>

          <motion.div
            className="about__sig"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SignatureSVG />
            <span className="about__sig-name">— Mariana Sève, director</span>
          </motion.div>
        </div>

        <div className="about__body">
          <p className="about__passage" aria-label={PASSAGE}>
            {words.map((word, i) => (
              <Fragment key={i}>
                <span className="about__word-wrap">
                  <motion.span
                    className={
                      'about__word ' +
                      (['slowly,', 'long', 'hand,'].includes(word) ? 'about__word--em' : '')
                    }
                    initial={{ y: '110%', opacity: 0 }}
                    animate={inView ? { y: '0%', opacity: 1 } : {}}
                    transition={{
                      duration: 1.1,
                      delay: 0.25 + i * 0.018,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>{' '}
              </Fragment>
            ))}
          </p>

          <motion.div
            className="about__footnote"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <span className="about__dot" />
            <span className="eyebrow">Founded 2017 · Independent · Two commissions a season</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SignatureSVG() {
  return (
    <motion.svg
      viewBox="0 0 220 70"
      width="180"
      height="56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <motion.path
        d="M6 50 C 14 18, 28 18, 30 46 C 32 60, 44 56, 48 42 C 54 22, 70 26, 64 52 M 72 30 C 78 24, 90 22, 86 44 C 84 56, 98 56, 102 38 C 106 24, 118 28, 114 50 M 124 26 C 134 18, 150 26, 142 46 C 138 56, 156 60, 160 40 M 170 22 L 170 56 M 178 38 C 188 32, 198 36, 196 48 C 194 60, 184 60, 180 50 M 206 14 C 214 30, 214 50, 206 60"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 3.4, ease: [0.65, 0, 0.35, 1] }}
      />
    </motion.svg>
  )
}
