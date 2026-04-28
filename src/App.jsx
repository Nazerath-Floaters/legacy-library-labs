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
    image: computerImage,
    secondaryImage: rg35xxPlus,
    description: [
      'Flagship all-in-one entertainment bundle.',
      'Retro libraries from Genesis through PS3.',
      'VHS, DVD, and Blu-ray playback support.',
      'Pocket-ready control for portable play.',
    ],
    price: '$185 - $699',
    subline: 'Built to scale from simple setups to showcase builds.',
  },
  {
    title: 'Archive Service',
    accent: 'gold',
    badge: '📼',
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

const featurePills = ['LOCAL-FIRST', 'PRIVATE', 'OPEN SOURCE']

const steps = [
  {
    number: '1',
    title: 'Choose Your Setup',
    text: 'Pick the kind of build or preservation package that fits your library goals.',
    icon: '🗂️',
  },
  {
    number: '2',
    title: 'We Organize & Build',
    text: 'We prepare hardware, media, and custom extras into a cleaner system.',
    icon: '🧩',
  },
  {
    number: '3',
    title: 'Preserve & Enjoy',
    text: 'Get a polished library you can play, browse, and keep under your control.',
    icon: '🛡️',
  },
]

const whyChoose = [
  'Premium retro and media setups with a more handcrafted feel.',
  'Private, ownership-first alternatives to disposable streaming ecosystems.',
  'Support for old media, fan projects, and custom multi-device bundles.',
  'Built around preservation, portability, and long-term access.',
  'Straightforward ordering through our customer form.',
]

const transparencyLinks = [
  'About the Project',
  'View on GitHub',
]

const stats = [
  { value: '3', label: 'Core Service Paths' },
  { value: 'Custom', label: 'Builds & Upsales' },
  { value: 'Private', label: 'Customer-First Flow' },
  { value: 'Retro+', label: 'Games, Media, Archives' },
]

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <main className="landing-shell">
        <section className="hero-panel" id="preserve">
          <header className="topbar">
            <div className="brand-mark">
              <span className="brand-icon" aria-hidden="true">📖</span>
              <span>Legacy Library Labs</span>
            </div>
            <nav className="topnav" aria-label="Primary">
              <a href="#preserve">Home</a>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#options">Options</a>
              <a href="#about">About</a>
              <a href="#faq">FAQ</a>
            </nav>
            <a className="topbar-cta" href={orderFormUrl} target="_blank" rel="noreferrer">Try It Now</a>
          </header>

          <div className="hero-layout">
            <div className="hero-copy">
              <div className="pill-row" aria-label="Feature badges">
                {featurePills.map((pill) => (
                  <span key={pill} className="feature-pill">{pill}</span>
                ))}
              </div>

              <h1>
                Preserve Your
                <br />
                Entertainment Library
                <span> Your Way</span>
              </h1>
              <p className="hero-subtitle hero-subtitle-wide">
                Legacy Library Labs helps you build, archive, and protect the media you actually care about.
                No disposable subscriptions. No algorithm-first experience. Just your games, your movies,
                your archives, and your setup.
              </p>

              <div className="hero-actions">
                <a className="hero-cta" href={orderFormUrl} target="_blank" rel="noreferrer">
                  <span className="cta-icon">🚀</span>
                  Try It Now
                </a>
                <a className="hero-secondary" href="#options">View Options</a>
              </div>

              <div className="hero-meta">
                <span>🔒 Ownership-first setups</span>
                <span>🧰 Built for real collectors</span>
                <span>🪓 OpenClaw-crafted storefront</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="screen-shell">
                <div className="screen-topbar">
                  <span>Legacy Library Labs</span>
                  <span>⌕</span>
                </div>
                <div className="screen-body">
                  <aside className="screen-sidebar">
                    <span>Dashboard</span>
                    <span>Libraries</span>
                    <span>Collections</span>
                    <span>Preserve</span>
                    <span>Exports</span>
                    <span>About</span>
                  </aside>
                  <div className="screen-content">
                    <div className="screen-stats">
                      <div>
                        <strong>1,248</strong>
                        <span>Total Files</span>
                      </div>
                      <div>
                        <strong>36</strong>
                        <span>Collections</span>
                      </div>
                      <div>
                        <strong>86.4 GB</strong>
                        <span>Total Size</span>
                      </div>
                      <div>
                        <strong>100%</strong>
                        <span>Preserved</span>
                      </div>
                    </div>
                    <div className="screen-lists">
                      <div className="screen-card-block">
                        <p>Recent Collections</p>
                        <ul>
                          <li>Family Photos</li>
                          <li>Research Papers</li>
                          <li>Books & Articles</li>
                        </ul>
                      </div>
                      <div className="screen-card-block">
                        <p>Quick Actions</p>
                        <ul>
                          <li>Add Files</li>
                          <li>New Collection</li>
                          <li>Export Library</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <p className="section-kicker">How It Works</p>
            <h2>Three steps from old media to a cleaner library.</h2>
            <p>Choose your direction, let us prepare the build, then enjoy a setup that feels like yours.</p>
          </div>

          <div className="steps-row">
            {steps.map((step) => (
              <article key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon" aria-hidden="true">{step.icon}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="info-grid" id="features">
          <article className="info-card">
            <h3>Why Choose Legacy Library Labs?</h3>
            <ul className="check-list">
              {whyChoose.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-card info-card-center">
            <h3>See It In Action</h3>
            <p>A premium storefront that leads into your actual build options.</p>
            <div className="mini-preview">
              <div className="mini-play">▶</div>
            </div>
          </article>

          <article className="info-card" id="about">
            <h3>Built With Transparency</h3>
            <p>
              Legacy Library Labs is about preserving media with more ownership, more privacy,
              and less dependence on disposable platforms.
            </p>
            <div className="transparency-links">
              {transparencyLinks.map((link) => (
                <a key={link} href={link === 'View on GitHub' ? 'https://github.com/Nazerath-Floaters/legacy-library-labs' : '#about'} target={link === 'View on GitHub' ? '_blank' : undefined} rel={link === 'View on GitHub' ? 'noreferrer' : undefined}>{link}</a>
              ))}
            </div>
          </article>
        </section>

        <section className="stats-strip" id="faq">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="options-section" id="options">
          <div className="section-heading reveal-heading">
            <p className="section-kicker">Your Options</p>
            <h2>Scroll down into the builds.</h2>
            <p>The landing page clears out and the three core offers take over.</p>
          </div>

          <section className="service-grid service-grid-reveal" aria-label="Services">
            {serviceCards.map((card) => (
              <article key={card.title} className={`service-card accent-${card.accent}`}>
                <div className="service-head">
                  <div className="service-badge" aria-hidden="true">{card.badge}</div>
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
        </section>
      </main>
    </div>
  )
}

export default App
