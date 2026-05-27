import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Practice.css'

const ROMAN = ['I', 'II', 'III', 'IV', 'V']

const PRACTICES = [
  {
    name: 'Identity',
    sub: 'Marks, monograms & systems',
    detail:
      'A studio identity is the result of a hundred small decisions — drawing, naming, ranging, printing — held together by a single point of view. We deliver wordmarks, monograms, paper systems and the rules to live with them.',
    deliverables: ['Wordmark', 'Monogram', 'Paper system', 'Type spec', 'Guidelines'],
  },
  {
    name: 'Editorial',
    sub: 'Print, periodicals & menus',
    detail:
      'We set books, menus, broadsheets and seasonal folios. Almost always printed letterpress or on uncoated stock from a mill in Setúbal we have known for nine years.',
    deliverables: ['Menus', 'Folios', 'Stationery', 'Periodicals', 'Press releases'],
  },
  {
    name: 'Spatial',
    sub: 'Wayfinding, signage & atmosphere',
    detail:
      'Lettering applied to brass, lime-washed walls, painted glass and the underside of awnings. Always drawn for the place, never reproduced from a kit.',
    deliverables: ['Signage', 'Wayfinding', 'Door numbers', 'Painted glass', 'Awnings'],
  },
  {
    name: 'Voice',
    sub: 'Naming, tone & copywriting',
    detail:
      'Naming a hotel is half the work. We write the manifesto, the breakfast card, the room directory. We will not write something we would not enjoy reading at a table.',
    deliverables: ['Naming', 'Tone of voice', 'Manifesto', 'Long-form copy', 'Letterheads'],
  },
  {
    name: 'Digital',
    sub: 'Quiet websites, restraint applied',
    detail:
      'A website is the calmest room in a hotel. We build small, well-typeset sites that load instantly and feel as considered as the printed matter beside the bed.',
    deliverables: ['Site design', 'Build', 'Photography direction', 'Booking flow'],
  },
]

export default function Practice() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [open, setOpen] = useState(null)

  return (
    <section className="practice" id="practice" ref={ref}>
      <header className="practice__header">
        <motion.span
          className="label"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          § Three — Practice
        </motion.span>
        <motion.h2
          className="practice__title display"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Five disciplines, <em className="italic-display practice__title-em">held in</em>
          <br />
          tension with one another.
        </motion.h2>
      </header>

      <ol className="practice__list">
        {PRACTICES.map((item, i) => {
          const isOpen = open === i
          return (
            <li
              key={item.name}
              className={'row ' + (isOpen ? 'row--open' : '')}
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(null)}
              onFocus={() => setOpen(i)}
              onBlur={() => setOpen(null)}
              tabIndex={0}
            >
              <motion.div
                className="row__top"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="row__roman eyebrow">{ROMAN[i]}</div>

                <h3 className="row__name display">
                  <span className="row__name-base">{item.name}</span>
                  <motion.span
                    className="row__name-ghost italic-display"
                    aria-hidden
                    animate={{
                      x: isOpen ? 0 : '-2%',
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {item.name.toLowerCase()}
                  </motion.span>
                </h3>

                <div className="row__sub">
                  <span className="eyebrow">{item.sub}</span>
                </div>

                <motion.div
                  className="row__caret"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  aria-hidden
                >
                  +
                </motion.div>
              </motion.div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="row__expand"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <div className="row__expand-inner">
                      <p className="row__detail">{item.detail}</p>
                      <ul className="row__deliverables">
                        {item.deliverables.map((d, j) => (
                          <motion.li
                            key={d}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.1 + j * 0.05,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <span className="row__deliv-num">{String(j + 1).padStart(2, '0')}</span>
                            <span>{d}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <span className="row__rule" />
            </li>
          )
        })}
      </ol>
    </section>
  )
}
