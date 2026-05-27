import { motion } from 'framer-motion'

/* Each Plate is a bespoke typographic specimen — not a photo —
   that *represents* the imagined brand identity. Built in pure SVG. */

export function CasaVerolPlate({ hover }) {
  return (
    <div className="plate plate--verol">
      <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" className="plate__svg">
        {/* Background — deep forest with a soft top wash */}
        <defs>
          <linearGradient id="verolBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#2E3A2C" />
            <stop offset="1" stopColor="#1A2419" />
          </linearGradient>
          <pattern id="verolGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0 L0 0 0 20" fill="none" stroke="#C9B998" strokeOpacity="0.06" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="480" fill="url(#verolBg)" />
        <rect width="400" height="480" fill="url(#verolGrid)" />

        {/* Iron-railing inspired wordmark */}
        <g transform="translate(200 240)" textAnchor="middle">
          <motion.text
            className="plate__display"
            y="-30"
            fontSize="70"
            letterSpacing="-2"
            fill="#E7DECC"
            animate={{ y: hover ? -36 : -30 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Casa
          </motion.text>
          <motion.text
            className="plate__display plate__display--italic"
            y="40"
            fontSize="86"
            fontStyle="italic"
            letterSpacing="-3"
            fill="#C9B998"
            animate={{ y: hover ? 46 : 40 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Verol
          </motion.text>
        </g>

        {/* Decorative hairline frame */}
        <rect x="22" y="22" width="356" height="436" fill="none" stroke="#C9B998" strokeOpacity="0.35" strokeWidth="0.6" />
        <rect x="28" y="28" width="344" height="424" fill="none" stroke="#C9B998" strokeOpacity="0.18" strokeWidth="0.4" />

        {/* Corner ornament */}
        <g transform="translate(40 60)" fill="#C9B998">
          <text fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="2">SINTRA · MMXXIV</text>
        </g>
        <g transform="translate(360 440)" fill="#C9B998" textAnchor="end">
          <text fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="2">IDENTITY · N°127</text>
        </g>

        {/* Ornamental rule */}
        <line x1="160" y1="350" x2="240" y2="350" stroke="#C9B998" strokeOpacity="0.5" strokeWidth="0.6" />
        <circle cx="200" cy="350" r="2" fill="#C9B998" />
      </svg>
    </div>
  )
}

export function TartinePlate({ hover }) {
  return (
    <div className="plate plate--tartine">
      <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" className="plate__svg">
        <defs>
          <pattern id="tartineSpeck" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="#7A2616" fillOpacity="0.18" />
          </pattern>
        </defs>
        <rect width="400" height="480" fill="#E7C082" />
        <rect width="400" height="480" fill="url(#tartineSpeck)" />

        {/* Circular stamp */}
        <motion.g
          transform="translate(200 240)"
          animate={{ rotate: hover ? 8 : -4 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <circle r="115" fill="none" stroke="#7A2616" strokeWidth="1.2" />
          <circle r="100" fill="none" stroke="#7A2616" strokeWidth="0.5" strokeDasharray="2 3" />
          {/* Curved text — top */}
          <defs>
            <path id="tartineArc" d="M -90 0 A 90 90 0 0 1 90 0" fill="none" />
            <path id="tartineArcB" d="M -90 0 A 90 90 0 0 0 90 0" fill="none" />
          </defs>
          <text fill="#7A2616" fontFamily="'IBM Plex Mono', monospace" fontSize="10" letterSpacing="6">
            <textPath href="#tartineArc" startOffset="50%" textAnchor="middle">
              PADARIA · NÓMADA · DESDE 2023
            </textPath>
          </text>
          <text fill="#7A2616" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="5">
            <textPath href="#tartineArcB" startOffset="50%" textAnchor="middle">
              SEM MORADA FIXA
            </textPath>
          </text>
          {/* Center mark */}
          <text textAnchor="middle" y="-6" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="40" fill="#7A2616">
            Tartine
          </text>
          <text textAnchor="middle" y="32" fontFamily="Fraunces, serif" fontSize="22" letterSpacing="6" fill="#7A2616">
            MÓVEL
          </text>
        </motion.g>
      </svg>
    </div>
  )
}

export function PomeloPlate({ hover }) {
  return (
    <div className="plate plate--pomelo">
      <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" className="plate__svg">
        <defs>
          <radialGradient id="pomeloBg" cx="0.5" cy="0.4" r="0.8">
            <stop offset="0" stopColor="#F4C49B" />
            <stop offset="1" stopColor="#C44A1E" />
          </radialGradient>
        </defs>
        <rect width="400" height="480" fill="url(#pomeloBg)" />

        {/* Soft segmented citrus pattern */}
        <motion.g
          transform="translate(200 240)"
          animate={{ rotate: hover ? -10 : 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2="0"
              y2="-160"
              stroke="#231C16"
              strokeOpacity="0.18"
              strokeWidth="0.6"
              transform={`rotate(${i * 30})`}
            />
          ))}
          <circle r="140" fill="none" stroke="#231C16" strokeOpacity="0.4" strokeWidth="0.8" />
          <circle r="120" fill="none" stroke="#231C16" strokeOpacity="0.18" strokeWidth="0.5" />
        </motion.g>

        {/* Monogram */}
        <g transform="translate(200 240)" textAnchor="middle">
          <text fontFamily="Fraunces, serif" fontStyle="italic" fontSize="180" fill="#231C16" y="55" letterSpacing="-12">
            P
          </text>
        </g>

        {/* Footer */}
        <text x="200" y="430" textAnchor="middle" fill="#231C16" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="5">
          THE POMELO ROOM · A MEMBERS&apos; ROOM
        </text>
        <line x1="160" y1="446" x2="240" y2="446" stroke="#231C16" strokeWidth="0.5" strokeOpacity="0.4" />
      </svg>
    </div>
  )
}

export function LumeiraPlate({ hover }) {
  return (
    <div className="plate plate--lumeira">
      <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" className="plate__svg">
        <defs>
          <linearGradient id="lumeiraBg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#1A1714" />
            <stop offset="1" stopColor="#2A241D" />
          </linearGradient>
        </defs>
        <rect width="400" height="480" fill="url(#lumeiraBg)" />

        {/* Shaft of light */}
        <motion.polygon
          points="120,0 280,0 240,480 160,480"
          fill="#D8CFBC"
          fillOpacity="0.06"
          animate={{ x: hover ? 12 : 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Vertical wordmark */}
        <g transform="translate(200 240)" textAnchor="middle">
          {'LUMEIRA'.split('').map((ch, i) => (
            <text
              key={i}
              x="0"
              y={-110 + i * 35}
              fontFamily="Fraunces, serif"
              fontSize="38"
              letterSpacing="0"
              fill="#D8CFBC"
            >
              {ch}
            </text>
          ))}
        </g>

        {/* Side meta */}
        <g transform="translate(28 240)" fill="#9E3712">
          <text fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="3" transform="rotate(-90)">
            ÉVORA · TWELVE ROOMS · MMXXII
          </text>
        </g>
        <g transform="translate(372 240)" fill="#9E3712" textAnchor="end">
          <text fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="3" transform="rotate(90)">
            HOTEL · A CONVENT BY ANOTHER NAME
          </text>
        </g>

        {/* Center dot */}
        <circle cx="200" cy="380" r="3" fill="#9E3712" />
      </svg>
    </div>
  )
}

export function StellaPlate({ hover }) {
  return (
    <div className="plate plate--stella">
      <svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid slice" className="plate__svg">
        <rect width="400" height="480" fill="#E5D9B6" />

        {/* Star field */}
        <g fill="#14110E">
          {[
            [60, 80, 1.6],
            [340, 70, 1.2],
            [120, 410, 1.8],
            [320, 380, 1.4],
            [50, 250, 1.0],
            [360, 240, 1.0],
          ].map(([cx, cy, r], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              animate={{ opacity: hover ? [0.4, 1, 0.4] : 0.7 }}
              transition={{ duration: 2.2, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </g>

        {/* Monogram */}
        <g transform="translate(200 240)" textAnchor="middle" fill="#14110E">
          <text fontFamily="Fraunces, serif" fontStyle="italic" fontSize="120" letterSpacing="-6" y="20">
            Stella
          </text>
          <text fontFamily="Fraunces, serif" fontSize="60" letterSpacing="10" y="90">
            NOTTE
          </text>
        </g>

        {/* Single star above */}
        <motion.g
          transform="translate(200 110)"
          fill="#C44A1E"
          animate={{ rotate: hover ? 180 : 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <path d="M 0 -12 L 3 -3 L 12 0 L 3 3 L 0 12 L -3 3 L -12 0 L -3 -3 Z" />
        </motion.g>

        {/* Footer */}
        <text x="200" y="430" textAnchor="middle" fill="#14110E" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="5">
          VINHO NATURAL · ABERTO ATÉ ACABAR
        </text>
      </svg>
    </div>
  )
}
