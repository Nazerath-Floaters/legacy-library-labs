import './App.css'

import rg35xxPlus from './assets/legacy/rg35xxplus.png'
import vhsImage from './assets/legacy/vhs.png'
import genesisImage from './assets/legacy/genesis.png'
import computerImage from './assets/legacy/computer.png'
import fanGame2 from './assets/legacy/fan-game-2.webp'

const orderFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScoQfgOt2XlIcp3LDK-njbH1TpxoZin3h4Z6-2fkQoRd0g9DA/viewform?usp=header'

const serviceCards = [
  {
    title: 'Piano Console',
    accent: 'blue',
    badge: '🎮',
    badgeClass: 'badge-gamepad',
    image: computerImage,
    secondaryImage: rg35xxPlus,
    description: [
      'Flagship all-in-one entertainment bundle.',
      'Retro libraries from Genesis through PS3.',
      'VHS, DVD, and Blu-ray playback support.',
      'Pocket-ready control for portable play.',
      'Save sync across your favorite devices.',
    ],
    price: '$185 - $699',
    subline: 'Built to scale from simple setups to full showcase builds.',
  },
  {
    title: 'Archive Service',
    accent: 'gold',
    badge: '📼',
    badgeClass: 'badge-archive',
    image: vhsImage,
    secondaryImage: genesisImage,
    description: [
      'Convert tapes, discs, and home media into digital libraries.',
      'Preserve personal archives before age and damage set in.',
      'Prepare clean files for desktop, mobile, or home playback.',
      'Great for families, collectors, and media backup projects.',
    ],
    price: '$65 + $2.50',
    priceSuffix: 'per digitization',
    subline: 'A simple path for preserving the media you already own.',
  },
  {
    title: 'Fan Games',
    accent: 'purple',
    badge: '⭐',
    badgeClass: 'badge-star',
    image: fanGame2,
    secondaryImage: fanGame2,
    description: [
      'Expanded libraries with fan projects and custom extras.',
      'ROM hacks, remixes, and curated side collections.',
      'Great for custom retro bundles and themed builds.',
      'Designed to make a library feel unique instead of generic.',
    ],
    price: 'At Cost Upsale',
    subline: 'A fun add-on layer for people who want more than the basics.',
  },
]

const trustPoints = [
  {
    title: 'Trusted by Collectors',
    text: 'Quality you can rely on.',
    icon: '🛡️',
  },
  {
    title: 'Privacy First',
    text: 'Your data stays yours.',
    icon: '🔒',
  },
  {
    title: 'Fast Turnaround',
    text: 'Quick, reliable delivery.',
    icon: '🚀',
  },
  {
    title: 'Support That Cares',
    text: 'Real people, real help.',
    icon: '💬',
  },
]

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <main className="landing-shell">
        <section className="hero" id="preserve">
          <p className="hero-kicker">Build. Preserve. Play.</p>
          <h1>
            Everything You Need for
            <span> Retro Gaming &amp; Beyond</span>
          </h1>
          <p className="hero-subtitle">
            Premium consoles, digital archives, and custom game libraries.
            <br />
            Built for players, collectors, and creators.
          </p>
          <a className="hero-cta" href={orderFormUrl} target="_blank" rel="noreferrer">
            <span className="cta-icon">🚀</span>
            Start Your Setup
          </a>
        </section>

        <section className="service-grid" aria-label="Services">
          {serviceCards.map((card) => (
            <article key={card.title} className={`service-card accent-${card.accent}`}>
              <div className="service-head">
                <div className={`service-badge ${card.badgeClass || ''}`} aria-hidden="true">{card.badge}</div>
                <h2>{card.title}</h2>
              </div>

              <div className={`service-image-wrap image-glow-${card.accent}`}>
                <img src={card.image} alt={card.title} className="service-main-image" />
                <img src={card.secondaryImage} alt="Related media" className="service-secondary-image" />
              </div>

              <div className="service-copy">
                {card.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="service-footer">
                <div className="price-block">
                  <p className="price-line">
                    <strong>{card.price}</strong>
                    {card.priceSuffix ? <span>{card.priceSuffix}</span> : null}
                  </p>
                  <p>{card.subline}</p>
                </div>

                <a className={`learn-button button-${card.accent}`} href={orderFormUrl} target="_blank" rel="noreferrer">
                  <span>Learn More</span>
                  <span aria-hidden="true">›</span>
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="trust-row" aria-label="Trust points">
          {trustPoints.map((point) => (
            <div key={point.title} className="trust-card">
              <div className="trust-icon" aria-hidden="true">{point.icon}</div>
              <div>
                <p className="trust-title">{point.title}</p>
                <p className="trust-text">{point.text}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
