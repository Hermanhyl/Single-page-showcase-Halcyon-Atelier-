import { motion } from 'framer-motion'
import { Children } from 'react'
import './Marquee.css'

/**
 * Marquee — continuous, gap-aware, infinite scroll.
 * `speed` = pixels per second. Duplicates the track once so the loop is seamless.
 */
export default function Marquee({ children, speed = 50, reverse = false, className = '' }) {
  const items = Children.toArray(children)
  // We don't know pixel width at runtime without measurement; we duplicate and
  // animate by 50% so one copy is always in view. Duration is derived from a
  // nominal track width estimate for consistency across viewports.
  const duration = Math.max(20, 1800 / speed)

  return (
    <div className={`marquee ${className}`} aria-hidden>
      <motion.div
        className="marquee__track"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {[0, 1].map((dup) => (
          <div className="marquee__group" key={dup}>
            {items.map((child, i) => (
              <span className="marquee__item" key={`${dup}-${i}`}>
                {child}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
