import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  CasaVerolPlate,
  TartinePlate,
  PomeloPlate,
  LumeiraPlate,
  StellaPlate,
} from './WorkPlates.jsx'
import './Work.css'

const PROJECTS = [
  {
    n: '01',
    name: 'Casa Verol',
    year: '2024',
    place: 'Sintra, PT',
    kind: 'A fourteen-room villa',
    line: 'A wordmark drawn from the iron railings of the house itself.',
    Plate: CasaVerolPlate,
    palette: ['#2E3A2C', '#C9B998', '#F1EADD'],
  },
  {
    n: '02',
    name: 'Tartine Móvel',
    year: '2023',
    place: 'Lisboa & elsewhere',
    kind: 'A bakery without an address',
    line: 'A stamp, a paper bag, a single typographic gesture that travels.',
    Plate: TartinePlate,
    palette: ['#7A2616', '#E7C082', '#F1EADD'],
  },
  {
    n: '03',
    name: 'The Pomelo Room',
    year: '2024',
    place: 'Bairro Alto',
    kind: 'A members’ club above a record shop',
    line: 'A citrus monogram, debossed, never reproduced larger than a coin.',
    Plate: PomeloPlate,
    palette: ['#C44A1E', '#F4C49B', '#231C16'],
  },
  {
    n: '04',
    name: 'Hotel Lumeira',
    year: '2022',
    place: 'Évora',
    kind: 'Twelve suites in a former convent',
    line: 'Identity drawn the long way around — from the chapel’s shadow.',
    Plate: LumeiraPlate,
    palette: ['#1A1714', '#D8CFBC', '#9E3712'],
  },
  {
    n: '05',
    name: 'Stella Notte',
    year: '2025',
    place: 'Príncipe Real',
    kind: 'A wine bar that closes when the bottles run out',
    line: 'A monogram set once, in lead, and never re-cut.',
    Plate: StellaPlate,
    palette: ['#14110E', '#B8A684', '#E5D9B6'],
  },
]

export default function Work() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section className="work" id="work" ref={ref}>
      <header className="work__header">
        <motion.div
          className="work__header-left"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label">§ Two — Selected Work</span>
          <motion.span
            className="work__header-rule"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
        <motion.h2
          className="work__title display"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          A small <em className="italic-display work__title-em">catalogue</em>
          <br />
          of recent works.
        </motion.h2>
        <motion.div
          className="work__header-meta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Five of nineteen</span>
          <br />
          <span className="eyebrow">2022 — 2025</span>
        </motion.div>
      </header>

      <div className="work__grid">
        {PROJECTS.map((p, i) => (
          <ProjectTile key={p.n} project={p} index={i} />
        ))}
      </div>

      <motion.footer
        className="work__footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <span className="eyebrow">↳ Full catalogue available on request</span>
      </motion.footer>
    </section>
  )
}

function ProjectTile({ project, index }) {
  const [hover, setHover] = useState(false)
  const { n, name, year, place, kind, line, Plate, palette } = project

  return (
    <motion.article
      className={`tile tile--${n}`}
      data-tile={n}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{
        duration: 1.1,
        delay: 0.05 * index,
        ease: [0.16, 1, 0.3, 1],
      }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      tabIndex={0}
    >
      <div className="tile__plate-wrap">
        <motion.div
          className="tile__plate"
          animate={{
            scale: hover ? 1.015 : 1,
            rotate: hover ? 0 : 0,
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Plate hover={hover} />
        </motion.div>

        {/* Sliding color slab on hover */}
        <motion.div
          className="tile__slab"
          style={{ background: palette[0] }}
          initial={{ y: '100%' }}
          animate={{ y: hover ? '0%' : '100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <div className="tile__slab-inner">
            <p className="tile__line">{line}</p>
            <div className="tile__palette">
              {palette.map((c) => (
                <span key={c} className="tile__chip" style={{ background: c }} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Corner number */}
        <div className="tile__corner">
          <span className="eyebrow">N°{n}</span>
        </div>
      </div>

      <div className="tile__meta">
        <h3 className="tile__name display">
          <FlipText text={name} hover={hover} />
        </h3>
        <div className="tile__bottom">
          <span className="tile__kind">{kind}</span>
          <span className="tile__sep">·</span>
          <span className="tile__place">{place}</span>
          <span className="tile__sep">·</span>
          <span className="tile__year">{year}</span>
        </div>
      </div>
    </motion.article>
  )
}

/**
 * FlipText — on hover, each character is pushed up and replaced from below
 * with an italic terracotta variant. Letters animate in sequence.
 */
function FlipText({ text, hover }) {
  return (
    <span className="flip" aria-label={text}>
      {text.split('').map((ch, i) => {
        const space = ch === ' '
        return (
          <span className={'flip__cell' + (space ? ' flip__cell--space' : '')} key={i}>
            <motion.span
              className="flip__top"
              animate={{ y: hover ? '-110%' : '0%' }}
              transition={{
                duration: 0.55,
                delay: i * 0.02,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {ch}
            </motion.span>
            <motion.span
              className="flip__bottom italic-display"
              animate={{ y: hover ? '0%' : '110%' }}
              transition={{
                duration: 0.55,
                delay: i * 0.02,
                ease: [0.76, 0, 0.24, 1],
              }}
              aria-hidden
            >
              {ch}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
