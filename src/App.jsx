import { useEffect, useRef, useState } from 'react'
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
    title: 'Turn Your DVD Shelf into a Pocket Library',
    eyebrow: 'Carry your collection without streaming fees',
    sources: [{ image: dvdImage, alt: 'DVD icon', label: 'DVD Collection' }],
    sourceLayout: 'single',
    devices: [{ image: androidPhoneImage, alt: 'Android phone icon', label: 'Phone Library' }],
    body: 'We convert your discs into a clean, portable library you can browse and watch offline.',
    bullets: ['Offline playback', 'Yours to keep'],
    cta: { label: 'Plan My DVD Library', href: '#contact' },
  },
  {
    title: 'Rescue VHS and Aging Media Before It Fades',
    eyebrow: 'Save fragile memories while they are still recoverable',
    sources: [{ image: vhsImage, alt: 'VHS icon', label: 'VHS Media' }],
    sourceLayout: 'single',
    devices: [{ image: computerImage, alt: 'Computer icon', label: 'Digital Archive' }],
    body: 'We preserve older tapes and home media in a format that is easier to store, back up, and revisit.',
    bullets: ['Protect old footage', 'Easier long-term storage'],
    cta: { label: 'Preserve My Media', href: '#contact' },
  },
  {
    title: 'Build a Custom Piano Console',
    eyebrow: 'A polished multi-system handheld setup',
    sources: [
      { image: ps2Console, alt: 'PlayStation 2 icon', label: 'PS2' },
      { image: gbaImage, alt: 'Game Boy Advance icon', label: 'Game Boy Advance' },
      { image: threeDsImage, alt: '3DS icon', label: '3DS' },
    ],
    sourceLayout: 'collage',
    collageLabel: 'Multi-system library',
    devices: [{ image: rg35xxPlus, alt: 'RG35XX Plus icon', label: 'RG35XX Plus' }],
    body: 'Bring multiple favorite systems together into one handheld build that feels curated, not cluttered.',
    bullets: ['Multi-system setup', 'Ready for instant play'],
    cta: { label: 'Build My Piano Console', href: '#contact' },
  },
  {
    title: 'Add Fan Games, Hacks, and Bonus Content',
    eyebrow: 'Go beyond the standard library',
    sources: [
      { image: fanGame1, alt: 'Fan game art one', label: 'Fan Game 1' },
      { image: fanGame2, alt: 'Fan game art two', label: 'Fan Game 2' },
      { image: fanGame3, alt: 'Fan game art three', label: 'Fan Game 3' },
      { image: fanGame4, alt: 'Fan game art four', label: 'Fan Game 4' },
      { image: fanGame5, alt: 'Fan game art five', label: 'Fan Game 5' },
    ],
    sourceLayout: 'fanstack',
    collageLabel: 'Expanded library',
    devices: [{ image: usbImage, alt: 'USB icon', label: 'USB Delivery' }],
    body: 'Expand your setup with fan projects, curated extras, and deep-cut content that makes the library feel special.',
    bullets: ['Hundreds of extras', 'Curated and delivery-ready'],
    cta: { label: 'Expand My Library', href: '#contact' },
  },
  {
    title: 'Own Your Movies Instead of Renting Them Forever',
    eyebrow: 'Replace subscription churn with a permanent collection',
    sources: [{ image: blurayImage, alt: 'Blu-ray icon', label: 'Blu-ray Library' }],
    sourceLayout: 'single',
    devices: [{ image: computerImage, alt: 'Computer icon', label: 'Home Playback' }],
    body: 'Build a permanent media library you control instead of chasing titles across streaming services.',
    bullets: ['Cut recurring costs', 'Keep access offline'],
    cta: { label: 'Replace My Subscriptions', href: '#contact' },
  },
]

const revealSections = [
  {
    id: 'promise',
    eyebrow: 'WHAT LEGACY LIBRARY LABS DOES',
    title: 'We turn aging collections into clean, usable digital libraries.',
    body: 'From discs and tapes to custom game builds, the goal is simple: preserve what matters, organize it well, and make it easy to enjoy on the right hardware.',
  },
  {
    id: 'process',
    eyebrow: 'HOW IT WORKS',
    title: 'You bring the collection, we handle the conversion, setup, and delivery path.',
    body: 'Each project is scoped around the media you already own, the formats you care about most, and the device you actually want to use every day.',
  },
  {
    id: 'responsiveness',
    eyebrow: 'WHY PEOPLE BUY THIS',
    title: 'It is not just about storage, it is about keeping your library accessible, offline, and yours.',
    body: 'That means less subscription churn, less fear of failing media, and a better day-to-day experience than digging through shelves or broken files.',
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
  { title: 'Flagship Terminal PC', price: 'Custom build pricing', badge: 'Most flexible', body: 'Best for larger libraries, broader compatibility, and clients who want a polished all-in-one home setup.', image: ps2Base },
  { title: 'RG35XX Plus', price: 'Starting around $80', badge: 'Compact favorite', body: 'A strong handheld option for lighter retro libraries, easy gifting, and quick pickup-and-play use.', image: rg35xxPlus },
  { title: 'Bootable SSD', price: 'Starting around $150', badge: 'Bring your own hardware', body: 'Ideal when you already have a PC and mainly want the archive, frontend, and content prepared well.', image: usbImage },
]

const proofPoints = [
  'Physical media converted into organized digital libraries',
  'Custom playback setups for desktop, handheld, and home use',
  'Real source formats shown with real delivery paths',
  'Built for ownership, preservation, and everyday usability',
]

function App() {
  const [activeService, setActiveService] = useState(1)
  const [activeFanCard, setActiveFanCard] = useState(0)
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)
  const carouselRef = useRef(null)
  const isPointerSyncRef = useRef(false)

  useEffect(() => {
    if (!autoScrollEnabled) return undefined

    const timer = window.setInterval(() => {
      setActiveService((current) => (current + 1) % heroServices.length)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [autoScrollEnabled])

  useEffect(() => {
    const fanTimer = window.setInterval(() => {
      setActiveFanCard((current) => (current + 1) % 5)
    }, 2400)

    return () => window.clearInterval(fanTimer)
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

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return undefined

    const stopAutoScroll = () => setAutoScrollEnabled(false)

    const handleScroll = () => {
      stopAutoScroll()

      if (window.innerWidth > 820 || isPointerSyncRef.current) return

      isPointerSyncRef.current = true
      window.requestAnimationFrame(() => {
        const cards = Array.from(carousel.querySelectorAll('.service-card'))
        if (!cards.length) {
          isPointerSyncRef.current = false
          return
        }

        const carouselRect = carousel.getBoundingClientRect()
        const center = carouselRect.left + carouselRect.width / 2

        let closestIndex = 0
        let closestDistance = Number.POSITIVE_INFINITY

        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect()
          const cardCenter = rect.left + rect.width / 2
          const distance = Math.abs(cardCenter - center)

          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        })

        setActiveService((current) => (current === closestIndex ? current : closestIndex))
        isPointerSyncRef.current = false
      })
    }

    carousel.addEventListener('wheel', stopAutoScroll, { passive: true })
    carousel.addEventListener('touchstart', stopAutoScroll, { passive: true })
    carousel.addEventListener('pointerdown', stopAutoScroll)
    carousel.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      carousel.removeEventListener('wheel', stopAutoScroll)
      carousel.removeEventListener('touchstart', stopAutoScroll)
      carousel.removeEventListener('pointerdown', stopAutoScroll)
      carousel.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const syncMobileCarousel = (index) => {
    const carousel = carouselRef.current
    if (!carousel || window.innerWidth > 820) return

    const cards = carousel.querySelectorAll('.service-card')
    const targetCard = cards[index]
    if (!targetCard) return

    targetCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  const prevService = () => {
    setAutoScrollEnabled(false)
    setActiveService((current) => {
      const nextIndex = current === 0 ? heroServices.length - 1 : current - 1
      syncMobileCarousel(nextIndex)
      return nextIndex
    })
  }

  const nextService = () => {
    setAutoScrollEnabled(false)
    setActiveService((current) => {
      const nextIndex = (current + 1) % heroServices.length
      syncMobileCarousel(nextIndex)
      return nextIndex
    })
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

            <div ref={carouselRef} className="service-carousel" role="tablist" aria-label="Legacy archive services">
              {heroServices.map((service, index) => {
                const offset = index - activeService
                const isNear = Math.abs(offset) <= 2
                const layoutClass = service.sourceLayout ?? `source-count-${Math.min(service.sources.length, 6)}`
                const deviceLayoutClass = service.deviceLayout === 'grouped' ? 'devices-grouped' : ''

                return (
                  <article
                    key={service.title}
                    className={`service-card ${offset === 0 ? 'active' : ''} ${isNear ? 'near' : 'far'}`}
                    data-offset={offset}
                    onClick={() => {
                      setAutoScrollEnabled(false)
                      setActiveService(index)
                      syncMobileCarousel(index)
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        setAutoScrollEnabled(false)
                        setActiveService(index)
                        syncMobileCarousel(index)
                      }
                    }}
                  >
                    <div className="service-card-inner">
                      <span className="service-eyebrow">{service.eyebrow}</span>
                      <h2>{service.title}</h2>

                      <div className="service-visual-flow multi-source-flow">
                        <div className={`service-visual-panel source-panel ${layoutClass}`}>
                          <span className="visual-panel-tag">Source</span>
                          {service.sourceLayout === 'collage' || service.sourceLayout === 'allinone-cluster' ? (
                            <div className={`source-collage-stage ${service.sourceLayout}`}>
                              {service.sources.map((source, sourceIndex) => (
                                <div key={`${service.title}-${source.label}`} className={`source-collage-item collage-item-${sourceIndex + 1}`}>
                                  <img src={source.image} alt={source.alt} className="service-source-image" />
                                </div>
                              ))}
                            </div>
                          ) : service.sourceLayout === 'fanstack' ? (
                            <div className="fanstack-stage">
                              {service.sources.map((source, sourceIndex) => {
                                const offsetFromActive = (sourceIndex - activeFanCard + service.sources.length) % service.sources.length
                                return (
                                  <div
                                    key={`${service.title}-${source.label}`}
                                    className={`fanstack-card fanstack-pos-${offsetFromActive}`}
                                  >
                                    <img src={source.image} alt={source.alt} className="service-source-image fanstack-image" />
                                  </div>
                                )
                              })}
                            </div>
                          ) : (
                            <div className={`single-source-stage source-count-${Math.min(service.sources.length, 3)}`}>
                              {service.sources.map((source) => (
                                <div key={`${service.title}-${source.label}`} className="floating-media source-media">
                                  <img src={source.image} alt={source.alt} className="service-source-image" />
                                </div>
                              ))}
                            </div>
                          )}
                          <span className="visual-panel-label">{service.collageLabel ?? service.sources.map((source) => source.label).join(' + ')}</span>
                        </div>

                        <div className="service-flow-arrow flow-center" aria-hidden="true">
                          <span className="flow-line" />
                          <span className="flow-arrow-head">→</span>
                        </div>

                        <div className={`service-visual-panel device-panel ${deviceLayoutClass}`}>
                          <span className="visual-panel-tag">Output</span>
                          <div className={`device-stage device-count-${Math.min(service.devices.length, 2)}`}>
                            {service.devices.map((device) => (
                              <div key={`${service.title}-${device.label}`} className="floating-media device-media">
                                <img src={device.image} alt={device.alt} className="service-device-image" />
                              </div>
                            ))}
                          </div>
                          <span className="visual-panel-label">{service.devices.map((device) => device.label).join(' + ')}</span>
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
                onClick={() => {
                  setAutoScrollEnabled(false)
                  setActiveService(index)
                  syncMobileCarousel(index)
                }}
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
              <p className="eyebrow">WHAT YOU GET</p>
              <h2>A cleaner library, a better playback path, and a setup that feels built for you.</h2>
            </div>
            <p>Whether the goal is preservation, portability, or a premium retro build, the finished result should feel easy to use and worth showing off.</p>
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
            <p className="eyebrow">READY TO BUILD YOUR LIBRARY?</p>
            <h2>Tell us what you have, what you want preserved, and where you want to play it.</h2>
            <p>We can help scope the right archive, console, or delivery setup for your collection, whether you are preserving family media or building a dream retro library.</p>
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
