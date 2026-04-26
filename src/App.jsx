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

const heroSlides = [
  {
    eyebrow: 'ARCHIVE-FIRST PRODUCT DESIGN',
    title: 'Your shelves deserve a website that sells the outcome instantly.',
    text: 'Legacy Library Labs should feel like a premium service for turning physical media into a browseable, beautiful, playback-ready library.',
    primaryCta: { label: 'Start Your Archive', href: '#contact' },
    secondaryCta: { label: 'See the Flow', href: '#process' },
    image: ps2Base,
    imageAlt: 'PlayStation 2 collection artwork used as a hero visual',
    stats: [
      { value: 'Ownership', label: 'at the center' },
      { value: 'Premium', label: 'presentation language' },
      { value: 'Scroll', label: 'built to reveal' },
    ],
  },
  {
    eyebrow: 'HARDWARE + MEDIA MATCHING',
    title: 'Recommend the right playback path, not a one-size-fits-all box.',
    text: 'Heavy PS2 libraries, compact movie collections, and handheld nostalgia all need different presentation, different framing, and different product recommendations.',
    primaryCta: { label: 'Explore Hardware', href: '#hardware' },
    secondaryCta: { label: 'Browse Formats', href: '#formats' },
    image: ps2Console,
    imageAlt: 'PlayStation 2 console product-style render',
    stats: [
      { value: '6', label: 'hardware offers' },
      { value: '9+', label: 'media formats' },
      { value: '1', label: 'clear buying story' },
    ],
  },
  {
    eyebrow: 'FOR FAMILIES, COLLECTORS, AND NOSTALGIA NERDS',
    title: 'Make old favorites easy to see, want, and understand.',
    text: 'The page should sell preservation emotionally while still behaving like a polished modern storefront with visible proof, product tiles, and calm hierarchy.',
    primaryCta: { label: 'View Archive Formats', href: '#formats' },
    secondaryCta: { label: 'Contact Us', href: '#contact' },
    image: rg35xxPlus,
    imageAlt: 'Compact RG35XX Plus handheld hardware visual',
    stats: [
      { value: 'Mobile', label: 'clean responsive flow' },
      { value: 'Visual', label: 'proof over abstraction' },
      { value: 'Modern', label: 'commerce feel' },
    ],
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
  'Sharper hierarchy and lower headline sprawl',
  'Actual imagery instead of abstract placeholders',
  'Scroll-reveal pacing that feels premium on desktop and mobile',
  'Product-forward sections that support conversion',
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6500)

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

  const currentSlide = heroSlides[activeSlide]

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

        <section className="hero-stage" data-reveal>
          <div className="hero-copy">
            <p className="eyebrow">{currentSlide.eyebrow}</p>
            <h1>{currentSlide.title}</h1>
            <p className="hero-text">{currentSlide.text}</p>

            <div className="hero-actions">
              <a className="button-link" href={currentSlide.primaryCta.href}>{currentSlide.primaryCta.label}</a>
              <a className="button-link ghost" href={currentSlide.secondaryCta.href}>{currentSlide.secondaryCta.label}</a>
            </div>

            <div className="hero-stats">
              {currentSlide.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual-card">
            <div className="hero-visual-frame">
              <img src={currentSlide.image} alt={currentSlide.imageAlt} className="hero-product-image" />
            </div>
            <div className="hero-visual-caption">
              <span>Featured direction</span>
              <strong>Premium archive merchandising</strong>
              <p>Using real category imagery makes the site feel believable immediately.</p>
            </div>
          </div>
        </section>

        <div className="hero-slider-controls" aria-label="Hero slide navigation">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`hero-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
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
              We now have the right direction: smaller hero headlines, real imagery, reveal-based sections, and cleaner responsive structure. Next pass, I’d want banner-grade photography for the hero and one or two lifestyle images for the middle of the page.
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
