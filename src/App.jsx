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
    image: computerImage,
    secondaryImage: rg35xxPlus,
    description: [
      'Flagship all in one entertainment bundle.',
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
    image: vhsImage,
    secondaryImage: genesisImage,
    description: [
      'Convert tapes, discs, and home media into digital libraries.',
      'Preserve personal archives before age and damage set in.',
      'Prepare clean files for desktop, mobile, or home playback.',
      'Great for families, collectors, and media backup projects.',
    ],
    price: '$65 + $2.50 per digitization',
    subline: 'A simple path for preserving the media you already own.',
  },
  {
    title: 'Fan Games',
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

const aboutPoints = [
  'Preserve old media before it disappears to time, damage, and neglect.',
  'Give people alternatives to disposable streaming culture and algorithm-driven entertainment.',
  'Return ownership of entertainment back to the customer.',
  'Treat nostalgia like something worth preserving, not milking.',
]

function App() {
  return (
    <div className="page-shell refined-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="hero">
        <div className="simple-title-wrap">
          <p className="simple-title">Legacy Library Labs</p>
        </div>

        <section className="hero-stage refined-hero-stage">
          <div className="hero-media-frame premium-surface">
            <div className="hero-media-split">
              <div className="hero-media-panel left-panel">
                <img src={ps2Console} alt="Classic PlayStation 2 showcase" className="hero-feature-image hero-feature-console" />
                <div className="hero-panel-caption">Classic console builds with room for deep libraries and polished frontends.</div>
              </div>
              <div className="hero-media-divider" />
              <div className="hero-media-panel right-panel">
                <img src={dvdImage} alt="Film and archive media showcase" className="hero-feature-image hero-feature-disc" />
                <div className="hero-panel-caption">Archive movies, discs, and home media into digital libraries you control.</div>
              </div>
            </div>
            <div className="hero-fade" />
          </div>
        </section>
      </header>

      <main>
        <p className="browse-note">Browse builds or order custom now through the <a href={orderFormUrl} target="_blank" rel="noreferrer">customer form</a>.</p>

        <section className="service-grid" id="builds">
          {serviceCards.map((card) => (
            <div key={card.title} className="service-stack">
              <article className="service-card premium-surface warm-card">
                <h2>{card.title}</h2>
                <div className="service-image-wrap">
                  <img src={card.image} alt={card.title} className="service-main-image" />
                  <img src={card.secondaryImage} alt="Related media" className="service-secondary-image" />
                </div>
                <div className="service-copy">
                  {card.description.map((line, index) => (
                    <p key={line}>{index + 1}. {line}</p>
                  ))}
                </div>
              </article>

              <article className="price-card premium-surface warm-card">
                <p><strong>Price:</strong> {card.price}</p>
                <p>{card.subline}</p>
                <p><strong>Order Form:</strong> <a href={orderFormUrl} target="_blank" rel="noreferrer">LINK</a></p>
              </article>
            </div>
          ))}
        </section>

        <section className="about-card premium-surface warm-card" id="about">
          <p className="about-title">About:</p>
          <p className="about-subtitle">LLA (Legacy Archive Library)</p>
          <p>We have four primary objectives:</p>
          <ol>
            {aboutPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ol>
          <p className="support-line">Support and follow us for more info.</p>
        </section>
      </main>
    </div>
  )
}

export default App
