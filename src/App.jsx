import { useEffect, useState } from 'react'
import './App.css'

import ps2Base from './assets/legacy/ps2-base.webp'
import ps2Console from './assets/legacy/ps2-console.png'
import rg35xxPlus from './assets/legacy/rg35xxplus.png'
import dvdImage from './assets/legacy/dvd.png'
import blurayImage from './assets/legacy/bluray.png'
import vhsImage from './assets/legacy/vhs.png'
import dsImage from './assets/legacy/ds.png'
import threeDsImage from './assets/legacy/3ds.png'
import gbaImage from './assets/legacy/gba.png'
import genesisImage from './assets/legacy/genesis.png'
import ps1Image from './assets/legacy/ps1.png'
import computerImage from './assets/legacy/computer.png'
import androidPhoneImage from './assets/legacy/android-phone.png'
import usbImage from './assets/legacy/usb.png'
import fanGame1 from './assets/legacy/fan-game-1.webp'
import fanGame2 from './assets/legacy/fan-game-2.webp'
import fanGame3 from './assets/legacy/fan-game-3.webp'
import fanGame4 from './assets/legacy/fan-game-4.webp'
import fanGame5 from './assets/legacy/fan-game-5.webp'

const heroServices = [
  {
    title: 'DVD Collection On the Go!',
    eyebrow: 'Take your movie shelf with you',
    sources: [{ image: dvdImage, alt: 'DVD icon', label: 'DVD Collection' }],
    sourceLayout: 'single',
    devices: [{ image: androidPhoneImage, alt: 'Android phone icon', label: 'Cellphone Access' }],
    body: 'Turn your DVD collection into a portable library you can carry anywhere instead of leaving it trapped on shelves and aging discs.',
    bullets: ['Watch offline', 'Keep the collection forever', 'Simple everyday access'],
    cta: { label: 'Start Your DVD Library', href: '#contact' },
  },
  {
    title: 'Preserve Aging Media',
    eyebrow: 'Rescue fragile tapes before they fade',
    sources: [{ image: vhsImage, alt: 'VHS icon', label: 'VHS Media' }],
    sourceLayout: 'single',
    devices: [{ image: computerImage, alt: 'Computer icon', label: 'Computer Archive' }],
    body: 'Preserve old tapes and fragile media by converting them into a safer digital library that is easier to store, copy, and revisit.',
    bullets: ['Protect aging media', 'Keep family memories usable', 'Make old content easy to access'],
    cta: { label: 'Preserve Your Media', href: '#contact' },
  },
  {
    title: 'Piano Console',
    eyebrow: 'A custom system for classic favorites',
    sources: [
      { image: ps2Console, alt: 'PlayStation 2 icon', label: 'PS2' },
      { image: gbaImage, alt: 'Game Boy Advance icon', label: 'Game Boy Advance' },
      { image: threeDsImage, alt: '3DS icon', label: '3DS' },
    ],
    sourceLayout: 'collage',
    collageLabel: 'Multi-system library',
    devices: [{ image: rg35xxPlus, alt: 'RG35XX Plus icon', label: 'RG35XX Plus' }],
    body: 'Blend multiple classic libraries into one polished handheld console so your best old favorites are ready to launch from a single device.',
    bullets: ['Multi-system setup', 'Travel-friendly hardware', 'Curated for instant play'],
    cta: { label: 'Build a Piano Console', href: '#contact' },
  },
  {
    title: 'Add Hundreds of Fan Games to your Collection!',
    eyebrow: 'Go far beyond stock libraries',
    sources: [
      { image: fanGame1, alt: 'Fan game art one', label: 'Fan Game 1' },
      { image: fanGame2, alt: 'Fan game art two', label: 'Fan Game 2' },
      { image: fanGame3, alt: 'Fan game art three', label: 'Fan Game 3' },
      { image: fanGame4, alt: 'Fan game art four', label: 'Fan Game 4' },
      { image: fanGame5, alt: 'Fan game art five', label: 'Fan Game 5' },
    ],
    sourceLayout: 'fanboard',
    collageLabel: 'Fan game board',
    devices: [{ image: usbImage, alt: 'USB icon', label: 'USB Delivery' }],
    body: 'Expand the library with fan games, hacks, and extra content so the archive feels deeper, more personal, and more exciting than a standard stock setup.',
    bullets: ['Fan games and hacks', 'Huge variety in one delivery', 'Great for custom collections'],
    cta: { label: 'Expand My Collection', href: '#contact' },
  },
  {
    title: 'Cancel Subscriptions | Save $$$',
    eyebrow: 'Own your media instead of renting it forever',
    sources: [{ image: blurayImage, alt: 'Blu-ray icon', label: 'Blu-ray Library' }],
    sourceLayout: 'single',
    devices: [{ image: computerImage, alt: 'Computer icon', label: 'Computer Playback' }],
    body: 'Stop chasing streaming catalogs and monthly fees by converting owned media into a permanent offline library you control.',
    bullets: ['Cut recurring costs', 'Keep access offline', 'Build a permanent home catalog'],
    cta: { label: 'Replace My Subscriptions', href: '#contact' },
  },
  {
    title: 'All In One Piano Console',
    eyebrow: 'The big everything build',
    sources: [
      { image: ps2Console, alt: 'PlayStation 2 icon', label: 'PS2' },
      { image: ps1Image, alt: 'PlayStation 1 icon', label: 'PS1' },
      { image: threeDsImage, alt: '3DS icon', label: '3DS' },
      { image: dsImage, alt: 'DS icon', label: 'DS' },
      { image: gbaImage, alt: 'Game Boy Advance icon', label: 'GBA' },
      { image: genesisImage, alt: 'Sega Genesis icon', label: 'Genesis' },
    ],
    sourceLayout: 'collage-wide',
    collageLabel: 'All-in-one library',
    devices: [
      { image: computerImage, alt: 'Desktop computer icon', label: 'Desktop Hub' },
      { image: rg35xxPlus, alt: 'RG35XX Plus icon', label: 'RG35XX Plus' },
    ],
    body: 'Bring together your biggest cross-platform library into one flagship setup with both a home base and a portable companion.',
    bullets: ['Massive mixed library support', 'Desktop and handheld pairing', 'Best showcase offer on the page'],
    cta: { label: 'Build the All In One Setup', href: '#contact' },
  },
  {
    title: 'Save File and Game Sync BUILT IN!',
    eyebrow: 'Keep progress moving with you',
    sources: [{ image: computerImage, alt: 'Desktop computer icon', label: 'Desktop Saves' }],
    sourceLayout: 'single',
    devices: [{ image: rg35xxPlus, alt: 'RG35XX Plus icon', label: 'Handheld Sync' }],
    body: 'Move between your desktop setup and handheld device without losing your place, your saves, or your momentum.',
    bullets: ['Save syncing', 'Cross-device continuity', 'Built for real daily use'],
    cta: { label: 'Get Sync Built In', href: '#contact' },
  },
]

const revealSections = [
  {
    id: 'promise',
    eyebrow: 'WHY THIS SELLS',
    title: 'Right now the website talks like a concept, not a product.',
    body: 'We need tighter headlines, stronger visual anchors, and sections that reveal a concrete value proposition as you scroll instead of dumping oversized text blocks on the visitor.',
  },
  {
    id: 'process',
    eyebrow: 'PROCESS',
    title: 'Each section should arrive like the next step in a premium offer.',
    body: 'Scroll should feel controlled. One section introduces the promise, the next proves the transformation, the next shows supported formats, and the next closes with hardware choices and contact.',
  },
  {
    id: 'responsiveness',
    eyebrow: 'RESPONSIVE BY DEFAULT',
    title: 'Desktop should feel cinematic, tablet should stay balanced, and mobile should stay readable.',
    body: 'Huge type can work on a billboard hero, but not when it collapses into a giant vertical wall on smaller screens. We are designing for hierarchy, rhythm, and conversion, not drama for its own sake.',
  },
]

const formatCards = [
  { name: 'PlayStation 2', tag: 'Heavy library', copy: 'High-value showcase category with strong nostalgia and clear hardware upsell potential.', image: ps2Console },
  { name: 'DVD', tag: 'Family media', copy: 'Movie shelves become browseable, searchable, and playback-ready for the living room again.', image: dvdImage },
  { name: 'Blu-ray', tag: 'Premium playback', copy: 'Sharper masters, stronger artwork, and a more premium sales story for collectors.', image: blurayImage },
  { name: 'VHS', tag: 'Memory rescue', copy: 'The emotional sell lives here. Old tapes and moments become easier to preserve and revisit.', image: vhsImage },
  { name: 'Nintendo DS', tag: 'Portable archive', copy: 'Dual-screen favorites with lightweight playback paths and broad family appeal.', image: dsImage },
  { name: 'Nintendo 3DS', tag: 'Modern handheld', copy: 'Beloved handheld libraries presented like a real collectible ecosystem.', image: threeDsImage },
  { name: 'Game Boy Advance', tag: 'Pocket nostalgia', copy: 'A small format with massive emotional recognition and easy visual merchandising.', image: gbaImage },
  { name: 'PlayStation 1', tag: 'Classic console', copy: 'A foundational legacy platform that signals credibility the moment it appears.', image: ps1Image },
  { name: 'Sega Genesis', tag: '16-bit legacy', copy: 'A strong supporting format for retro collectors and classic living room history.', image: genesisImage },
]

const hardwareCards = [
  { title: 'Flagship Terminal PC', price: '$90 to $900', badge: 'Most flexible', body: 'For clients who want the polished all-in-one solution and the broadest compatibility ceiling.', image: ps2Base },
  { title: 'RG35XX Plus', price: '$80', badge: 'Compact favorite', body: 'A clean entry point for lighter libraries, retro-friendly use, and giftable appeal.', image: rg35xxPlus },
  { title: 'Bootable SSD', price: '$150', badge: 'Bring your own setup', body: 'Strong for users who already have hardware and mainly need the archive and launch experience prepared well.', image: blurayImage },
]

const proofPoints = [
  'Card-based browsing that feels like a storefront',
  'Real imagery instead of abstract placeholders',
  'Scroll-reveal pacing that feels premium on desktop and mobile',
  'Product-forward sections that support conversion',
]

function App() {
  const [activeService, setActiveService] = useState(1)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveService((current) => (current + 1) % heroServices.length)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.2 },
    )

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const prevService = () => {
    setActiveService((current) => (current === 0 ? heroServices.length - 1 : current - 1))
  }

  const nextService = () => {
    setActiveService((current) => (current + 1) % heroServices.length)
  }

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="hero">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-mark">◈</span>
            <span>Legacy Library Labs</span>
          </div>
          <div className="nav-links">
            <a href="#process">Process</a>
            <a href="#formats">Formats</a>
            <a href="#hardware">Hardware</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-stage service-stage" data-reveal>
          <div className="hero-stage-intro">
            <p className="eyebrow">CUSTOM CONSOLES • FOREVER MEDIA</p>
            <h1>Build Your Library</h1>
            <p className="hero-text">Convert Movies, Shows, and Games into a permanent, offline, FREE Home Console.</p>
          </div>

          <div className="service-carousel-shell">
            <button type="button" className="carousel-arrow left" onClick={prevService} aria-label="Previous service">←</button>

            <div className="service-carousel" role="tablist" aria-label="Legacy archive services">
              {heroServices.map((service, index) => {
                const offset = index - activeService
                const isNear = Math.abs(offset) <= 2
                const layoutClass = service.sourceLayout ?? `source-count-${Math.min(service.sources.length, 6)}`

                return (
                  <article
                    key={service.title}
                    className={`service-card ${offset === 0 ? 'active' : ''} ${isNear ? 'near' : 'far'}`}
                    data-offset={offset}
                    onClick={() => setActiveService(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        setActiveService(index)
                      }
                    }}
                  >
                    <div className="service-card-inner">
                      <span className="service-eyebrow">{service.eyebrow}</span>
                      <h2>{service.title}</h2>

                      <div className="service-visual-flow multi-source-flow">
                        <div className={`service-source-grid ${layoutClass}`}>
                          {service.sourceLayout === 'collage' || service.sourceLayout === 'collage-wide' || service.sourceLayout === 'fanboard' ? (
                            <div className={`source-collage-box ${service.sourceLayout}`}>
                              {service.sources.map((source, sourceIndex) => (
                                <div key={`${service.title}-${source.label}`} className={`source-collage-item collage-item-${sourceIndex + 1}`}>
                                  <img src={source.image} alt={source.alt} className="service-source-image" />
                                </div>
                              ))}
                              <span className="source-collage-label">{service.collageLabel}</span>
                            </div>
                          ) : (
                            service.sources.map((source) => (
                              <div key={`${service.title}-${source.label}`} className="service-source-block compact">
                                <img src={source.image} alt={source.alt} className="service-source-image" />
                                <span>{source.label}</span>
                              </div>
                            ))
                          )}
                        </div>

                        <div className="service-flow-arrow flow-center">→</div>

                        <div className={`service-device-grid device-count-${Math.min(service.devices.length, 2)}`}>
                          {service.devices.map((device) => (
                            <div key={`${service.title}-${device.label}`} className="service-device-block compact">
                              <img src={device.image} alt={device.alt} className="service-device-image" />
                              <span>{device.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="service-expanded-copy">
                        <p>{service.body}</p>
                        <ul>
                          {service.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                        <a className="button-link service-cta" href={service.cta.href}>{service.cta.label}</a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <button type="button" className="carousel-arrow right" onClick={nextService} aria-label="Next service">→</button>
          </div>

          <div className="hero-slider-controls" aria-label="Service navigation">
            {heroServices.map((service, index) => (
              <button
                key={service.title}
                type="button"
                className={`hero-dot ${index === activeService ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
                aria-label={`Go to ${service.title}`}
              />
            ))}
          </div>
        </section>
      </header>

      <main>
        <section className="section trust-strip" data-reveal>
          {proofPoints.map((point) => (
            <div key={point} className="trust-pill">{point}</div>
          ))}
        </section>

        {revealSections.map((section) => (
          <section key={section.id} id={section.id} className="section story-section reveal-panel" data-reveal>
            <div className="section-head narrow">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          </section>
        ))}

        <section className="section feature-split" id="formats" data-reveal>
          <div className="section-head split">
            <div>
              <p className="eyebrow">SUPPORTED FORMATS</p>
              <h2>Use real images to make each archive category feel like a tangible offer.</h2>
            </div>
            <p>A visitor should be able to skim this section and immediately understand the breadth of what Legacy Library Labs can preserve.</p>
          </div>

          <div className="format-grid">
            {formatCards.map((card) => (
              <article key={card.name} className="format-card premium-surface" data-reveal>
                <div className="format-image-wrap">
                  <img src={card.image} alt={card.name} className="format-image" />
                </div>
                <div className="format-body">
                  <span className="format-tag">{card.tag}</span>
                  <h3>{card.name}</h3>
                  <p>{card.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-band" data-reveal>
          <div className="section-head split">
            <div>
              <p className="eyebrow">SCROLL STORY</p>
              <h2>As visitors move down the page, each new block should feel like the next reason to buy.</h2>
            </div>
            <p>The old section should gracefully move up and out while the next one fades and slides into place. That gives us rhythm without making the site feel gimmicky.</p>
          </div>
        </section>

        <section className="section hardware-section" id="hardware" data-reveal>
          <div className="section-head split">
            <div>
              <p className="eyebrow">HARDWARE OFFERS</p>
              <h2>Show the archive, then sell the playback path that fits the collection.</h2>
            </div>
            <p>This section should feel like product merchandising, not an afterthought. Better cards, cleaner pricing, clearer differences.</p>
          </div>

          <div className="hardware-grid">
            {hardwareCards.map((item) => (
              <article key={item.title} className="hardware-card premium-surface" data-reveal>
                <div className="hardware-image-wrap">
                  <img src={item.image} alt={item.title} className="hardware-image" />
                </div>
                <div className="hardware-body">
                  <span className="hardware-badge">{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p className="price">{item.price}</p>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section legacy-callout" id="contact" data-reveal>
          <div className="callout-card">
            <p className="eyebrow">READY FOR A REAL STOREFRONT PASS</p>
            <h2>This can become a genuinely slick product site, not just a decent mockup.</h2>
            <p>We now have the right direction: a service-first hero, real imagery, reveal-based sections, and cleaner responsive structure. Next pass, I’d tune swipe behavior and upgrade the strongest cards with banner-grade artwork.</p>
            <div className="hero-actions centered">
              <a className="button-link" href="mailto:hello@legacylibrarylabs.com">Start Planning</a>
              <a className="button-link ghost" href="https://github.com/Nazerath-Floaters/legacy-library-labs">View Project Repo</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
