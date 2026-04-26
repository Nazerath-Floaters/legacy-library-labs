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

const heroServices = [
  {
    title: 'DVD Archive Console',
    eyebrow: 'Family movie shelves',
    media: 'DVD libraries',
    outcome: 'Living-room ready browsing',
    body: 'Turn stacks of movies into a clean couch-friendly archive that is easier to browse, easier to replay, and much harder to lose to clutter.',
    bullets: ['Artwork-led browsing', 'Searchable family collection', 'Simple hardware handoff'],
    sourceImage: dvdImage,
    sourceAlt: 'DVD media art',
    deviceImage: rg35xxPlus,
    deviceAlt: 'Portable console used as playback device',
    cta: { label: 'Plan Your DVD Archive', href: '#contact' },
  },
  {
    title: 'PS2 Collection Build',
    eyebrow: 'Heavy nostalgia libraries',
    media: 'PlayStation 2 discs',
    outcome: 'Curated console experience',
    body: 'For collectors with bigger libraries and deeper nostalgia pull, this offer turns a hardware-era mess into a premium system that feels worth showing off.',
    bullets: ['PS2-focused hardware matching', 'Library-first presentation', 'High-value showcase category'],
    sourceImage: ps2Base,
    sourceAlt: 'PlayStation 2 source media visual',
    deviceImage: ps2Console,
    deviceAlt: 'PlayStation 2 console visual',
    cta: { label: 'Build a PS2 Vault', href: '#contact' },
  },
  {
    title: 'Blu-ray Premium Archive',
    eyebrow: 'Collector presentation',
    media: 'Blu-ray discs',
    outcome: 'Sharper premium playback',
    body: 'This is the cleaner, richer collector offer. Better presentation, stronger shelf value, and a more premium story for people who care about image quality.',
    bullets: ['Premium visual identity', 'High-bitrate collection framing', 'Collector-friendly browsing'],
    sourceImage: blurayImage,
    sourceAlt: 'Blu-ray media art',
    deviceImage: rg35xxPlus,
    deviceAlt: 'Archive playback device visual',
    cta: { label: 'Start a Blu-ray Archive', href: '#contact' },
  },
  {
    title: 'VHS Memory Rescue',
    eyebrow: 'Family history and old tapes',
    media: 'VHS collections',
    outcome: 'Preserved and usable memories',
    body: 'The emotional sell lives here. Old recordings, forgotten tapes, and fragile family history become easier to revisit and much less likely to disappear.',
    bullets: ['Preservation-led storytelling', 'Emotional high-trust offer', 'Ideal mid-page conversion hook'],
    sourceImage: vhsImage,
    sourceAlt: 'VHS media art',
    deviceImage: rg35xxPlus,
    deviceAlt: 'Portable archive viewer visual',
    cta: { label: 'Rescue VHS Memories', href: '#contact' },
  },
  {
    title: 'Handheld Retro Vault',
    eyebrow: 'Portable nostalgia',
    media: 'DS, 3DS, and GBA collections',
    outcome: 'Compact replay-anywhere setup',
    body: 'A strong product for people who want old handheld favorites organized into something compact, modern-feeling, and instantly replayable.',
    bullets: ['Portable-first curation', 'Strong gifting appeal', 'Multi-platform retro support'],
    sourceImage: threeDsImage,
    sourceAlt: 'Nintendo 3DS media art',
    deviceImage: rg35xxPlus,
    deviceAlt: 'Handheld playback device visual',
    cta: { label: 'Build a Handheld Vault', href: '#contact' },
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
  {
    name: 'PlayStation 2',
    tag: 'Heavy library',
    copy: 'High-value showcase category with strong nostalgia and clear hardware upsell potential.',
    image: ps2Console,
  },
  {
    name: 'DVD',
    tag: 'Family media',
    copy: 'Movie shelves become browseable, searchable, and playback-ready for the living room again.',
    image: dvdImage,
  },
  {
    name: 'Blu-ray',
    tag: 'Premium playback',
    copy: 'Sharper masters, stronger artwork, and a more premium sales story for collectors.',
    image: blurayImage,
  },
  {
    name: 'VHS',
    tag: 'Memory rescue',
    copy: 'The emotional sell lives here. Old tapes and moments become easier to preserve and revisit.',
    image: vhsImage,
  },
  {
    name: 'Nintendo DS',
    tag: 'Portable archive',
    copy: 'Dual-screen favorites with lightweight playback paths and broad family appeal.',
    image: dsImage,
  },
  {
    name: 'Nintendo 3DS',
    tag: 'Modern handheld',
    copy: 'Beloved handheld libraries presented like a real collectible ecosystem.',
    image: threeDsImage,
  },
  {
    name: 'Game Boy Advance',
    tag: 'Pocket nostalgia',
    copy: 'A small format with massive emotional recognition and easy visual merchandising.',
    image: gbaImage,
  },
  {
    name: 'PlayStation 1',
    tag: 'Classic console',
    copy: 'A foundational legacy platform that signals credibility the moment it appears.',
    image: ps1Image,
  },
  {
    name: 'Sega Genesis',
    tag: '16-bit legacy',
    copy: 'A strong supporting format for retro collectors and classic living room history.',
    image: genesisImage,
  },
]

const hardwareCards = [
  {
    title: 'Flagship Terminal PC',
    price: '$90 to $900',
    badge: 'Most flexible',
    body: 'For clients who want the polished all-in-one solution and the broadest compatibility ceiling.',
    image: ps2Base,
  },
  {
    title: 'RG35XX Plus',
    price: '$80',
    badge: 'Compact favorite',
    body: 'A clean entry point for lighter libraries, retro-friendly use, and giftable appeal.',
    image: rg35xxPlus,
  },
  {
    title: 'Bootable SSD',
    price: '$150',
    badge: 'Bring your own setup',
    body: 'Strong for users who already have hardware and mainly need the archive and launch experience prepared well.',
    image: blurayImage,
  },
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
            <h1>Browse the service, center the offer, and let the best archive path step forward.</h1>
            <p className="hero-text">
              Each card represents a real product offer. The side cards tease the next services, and the centered card expands to show exactly what media comes in and what experience comes out.
            </p>
          </div>

          <div className="service-carousel-shell">
            <button type="button" className="carousel-arrow left" onClick={prevService} aria-label="Previous service">←</button>

            <div className="service-carousel" role="tablist" aria-label="Legacy archive services">
              {heroServices.map((service, index) => {
                const offset = index - activeService
                const isActive = offset === 0
                const isNear = Math.abs(offset) <= 2

                return (
                  <article
                    key={service.title}
                    className={`service-card ${isActive ? 'active' : ''} ${isNear ? 'near' : 'far'}`}
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

                      <div className="service-visual-flow">
                        <div className="service-source-block">
                          <img src={service.sourceImage} alt={service.sourceAlt} className="service-source-image" />
                          <span>{service.media}</span>
                        </div>
                        <div className="service-flow-arrow">→</div>
                        <div className="service-device-block">
                          <img src={service.deviceImage} alt={service.deviceAlt} className="service-device-image" />
                          <span>{service.outcome}</span>
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
            <p>
              A visitor should be able to skim this section and immediately understand the breadth of what Legacy Library Labs can preserve.
            </p>
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
            <p>
              The old section should gracefully move up and out while the next one fades and slides into place. That gives us rhythm without making the site feel gimmicky.
            </p>
          </div>
        </section>

        <section className="section hardware-section" id="hardware" data-reveal>
          <div className="section-head split">
            <div>
              <p className="eyebrow">HARDWARE OFFERS</p>
              <h2>Show the archive, then sell the playback path that fits the collection.</h2>
            </div>
            <p>
              This section should feel like product merchandising, not an afterthought. Better cards, cleaner pricing, clearer differences.
            </p>
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
            <p>
              We now have the right direction: a service-first hero, real imagery, reveal-based sections, and cleaner responsive structure. Next pass, I’d tune swipe behavior and upgrade the strongest cards with banner-grade artwork.
            </p>
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
