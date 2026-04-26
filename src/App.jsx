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

const orderFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScoQfgOt2XlIcp3LDK-njbH1TpxoZin3h4Z6-2fkQoRd0g9DA/viewform?usp=header'

const heroServices = [
  {
    title: 'DVD and Blu-ray Libraries That Actually Feel Usable',
    eyebrow: 'Own your collection, browse it cleanly, and watch offline',
    sources: [{ image: dvdImage, alt: 'DVD icon', label: 'DVD and Blu-ray Collection' }],
    sourceLayout: 'single',
    devices: [{ image: androidPhoneImage, alt: 'Android phone icon', label: 'Phone and Tablet Playback' }],
    body: 'We convert physical movie collections into organized digital libraries built for real browsing, offline access, and long-term ownership.',
    bullets: ['Offline playback', 'Organized artwork and browsing'],
    cta: { label: 'Start My Media Library', href: orderFormUrl },
  },
  {
    title: 'VHS Preservation for Home Videos and Aging Media',
    eyebrow: 'Save fragile tapes before they become harder to recover',
    sources: [{ image: vhsImage, alt: 'VHS icon', label: 'VHS and Analog Media' }],
    sourceLayout: 'single',
    devices: [{ image: computerImage, alt: 'Computer icon', label: 'Digital Archive' }],
    body: 'Older media deserves a safer home. We help preserve footage and personal archives in formats that are easier to store, back up, and revisit.',
    bullets: ['Preservation-first workflow', 'Archive-ready delivery'],
    cta: { label: 'Preserve My Media', href: orderFormUrl },
  },
  {
    title: 'Custom Retro Console Builds',
    eyebrow: 'A polished handheld or desktop setup built around your favorite systems',
    sources: [
      { image: ps2Console, alt: 'PlayStation 2 icon', label: 'PS2' },
      { image: gbaImage, alt: 'Game Boy Advance icon', label: 'Game Boy Advance' },
      { image: threeDsImage, alt: '3DS icon', label: '3DS' },
    ],
    sourceLayout: 'collage',
    collageLabel: 'Curated game library',
    devices: [{ image: rg35xxPlus, alt: 'RG35XX Plus icon', label: 'Handheld or Console Delivery' }],
    body: 'We build custom libraries that feel intentional, clean, and ready to play instead of dumped together in a messy folder pile.',
    bullets: ['Curated setup', 'Ready to use from day one'],
    cta: { label: 'Build My Console', href: orderFormUrl },
  },
]

const proofPoints = [
  'Physical media turned into organized digital libraries',
  'Retro builds prepared for handheld, desktop, or living-room use',
  'Clear delivery paths for archives, consoles, and portable setups',
  'Built around ownership, preservation, and everyday usability',
]

const processSteps = [
  {
    title: 'Tell us what you have',
    body: 'Discs, tapes, game libraries, or a dream device build. Start with the collection you already own and what you want it to become.',
  },
  {
    title: 'We scope the right setup',
    body: 'We match the archive, organization, and playback path to your goals, whether that means preservation, portability, or a premium showcase build.',
  },
  {
    title: 'Receive a ready-to-use result',
    body: 'You get a cleaner, more usable library with the files, hardware path, or custom setup prepared for real day-to-day use.',
  },
]

const formatCards = [
  { name: 'PlayStation 2', tag: 'Heavy library', copy: 'A strong flagship category for larger retro builds and premium custom setups.', image: ps2Console },
  { name: 'DVD', tag: 'Family media', copy: 'Movie collections turned into browseable libraries that feel much easier to revisit.', image: dvdImage },
  { name: 'Blu-ray', tag: 'Premium playback', copy: 'Collector-friendly media with a sharper, more premium library presentation.', image: blurayImage },
  { name: 'VHS', tag: 'Memory rescue', copy: 'Home videos and aging tapes preserved in a format that is easier to keep safe.', image: vhsImage },
  { name: 'Nintendo DS', tag: 'Portable archive', copy: 'Portable favorites organized into lightweight setups with broad appeal.', image: dsImage },
  { name: 'Nintendo 3DS', tag: 'Modern handheld', copy: 'A beloved handheld platform that fits naturally into custom portable builds.', image: threeDsImage },
  { name: 'Game Boy Advance', tag: 'Pocket nostalgia', copy: 'Compact, recognizable, and perfect for curated handheld-first libraries.', image: gbaImage },
  { name: 'PlayStation 1', tag: 'Classic console', copy: 'A foundational legacy platform that adds weight to premium retro offerings.', image: ps1Image },
  { name: 'Sega Genesis', tag: '16-bit legacy', copy: 'An easy nostalgia win for classic console fans and family-friendly builds.', image: genesisImage },
]

const pricingCards = [
  {
    title: 'Digital Archive Delivery',
    price: 'Starting around $90',
    badge: 'Media conversion',
    body: 'Best for DVD, Blu-ray, VHS, and personal archive projects where the goal is preservation and clean digital access.',
    bullets: ['File conversion and organization', 'Great for archives and home playback'],
    image: computerImage,
  },
  {
    title: 'Handheld Retro Setup',
    price: 'Starting around $80',
    badge: 'Portable build',
    body: 'A compact option for curated retro libraries, gifting, and people who want an easy pickup-and-play experience.',
    bullets: ['Portable gaming focus', 'Strong for curated lighter builds'],
    image: rg35xxPlus,
  },
  {
    title: 'Bootable SSD or USB Setup',
    price: 'Starting around $150',
    badge: 'Bring your own hardware',
    body: 'Ideal if you already have a PC and want the frontend, content, and browsing experience prepared on external storage.',
    bullets: ['Uses your existing system', 'Strong middle ground for larger libraries'],
    image: usbImage,
  },
  {
    title: 'Flagship Home Console Build',
    price: 'Custom pricing',
    badge: 'Premium setup',
    body: 'For larger libraries, broader compatibility, and the most polished all-in-one home experience.',
    bullets: ['Best for showcase builds', 'Highest flexibility and customization'],
    image: ps2Base,
  },
]

const comparisonRows = [
  {
    source: 'Shelf of discs or tapes',
    result: 'A clean digital library with artwork, organization, and easier playback',
  },
  {
    source: 'Loose ROM packs and random files',
    result: 'A curated console build that feels intentional and ready to use',
  },
  {
    source: 'Streaming dependence and subscription churn',
    result: 'A permanent collection you control offline',
  },
]

const deliveryExamples = [
  {
    title: 'Movie Library Delivery',
    body: 'Converted discs organized into a browseable library for home playback or portable access.',
  },
  {
    title: 'Preservation Archive',
    body: 'Older footage and personal media prepared in a safer digital format for storage and backup.',
  },
  {
    title: 'Custom Retro Build',
    body: 'A curated handheld or desktop setup with the library organized around the way you actually want to play.',
  },
]

const faqs = [
  {
    question: 'What kinds of media can I submit?',
    answer: 'DVD, Blu-ray, VHS, retro game libraries, and related archive or custom setup requests are all fair starting points.',
  },
  {
    question: 'Are these prices final quotes?',
    answer: 'No. The pricing shown on the site is a starting guide so customers can picture the right tier before submitting the order form.',
  },
  {
    question: 'Do I need to already own the media or hardware?',
    answer: 'Usually yes. The site is strongest when framed around preserving or organizing collections the customer already has.',
  },
  {
    question: 'How do I get started?',
    answer: 'Use the order form, describe what you have and what you want back, and that gives enough information to scope the right path.',
  },
]

function App() {
  const [activeService, setActiveService] = useState(0)
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
            <a href="#pricing">Pricing</a>
            <a href="#contact">Order</a>
          </div>
        </nav>

        <section className="hero-stage service-stage" data-reveal>
          <div className="hero-stage-intro">
            <p className="eyebrow">CUSTOM CONSOLES • FOREVER MEDIA</p>
            <h1>Turn Physical Collections into Libraries You Actually Want to Use</h1>
            <p className="hero-text">We help preserve aging media, build better playback setups, and turn shelves of discs, tapes, and games into clean digital libraries.</p>
            <div className="hero-actions centered hero-primary-actions">
              <a className="button-link" href={orderFormUrl} target="_blank" rel="noreferrer">Start Your Order</a>
              <a className="button-link ghost" href="#pricing">View Pricing Paths</a>
            </div>
          </div>

          <div className="service-carousel-shell">
            <button type="button" className="carousel-arrow left" onClick={prevService} aria-label="Previous service">←</button>

            <div ref={carouselRef} className="service-carousel" role="tablist" aria-label="Legacy archive services">
              {heroServices.map((service, index) => {
                const offset = index - activeService
                const isNear = Math.abs(offset) <= 1
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
                        <a className="button-link service-cta" href={service.cta.href} target="_blank" rel="noreferrer">{service.cta.label}</a>
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

        <section className="section story-section promise-section" data-reveal>
          <div className="section-head narrow">
            <p className="eyebrow">WHAT LEGACY LIBRARY LABS DOES</p>
            <h2>We turn aging media and scattered game libraries into organized setups worth keeping.</h2>
            <p>Whether the goal is preservation, offline ownership, or a premium custom build, the finished result should feel cleaner, easier to use, and much more intentional than the raw source material.</p>
          </div>
        </section>

        <section className="section process-section" id="process" data-reveal>
          <div className="section-head split">
            <div>
              <p className="eyebrow">HOW IT WORKS</p>
              <h2>A simple path from physical collection to ready-to-use setup.</h2>
            </div>
            <p>We keep the process straightforward, so customers understand what they are ordering and what kind of result they can expect.</p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article key={step.title} className="process-card premium-surface" data-reveal>
                <span className="process-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section comparison-section" data-reveal>
          <div className="section-head split">
            <div>
              <p className="eyebrow">THE TRANSFORMATION</p>
              <h2>This is about making old collections feel usable again.</h2>
            </div>
            <p>The strongest sales story on the site is not abstract design language. It is clearly showing what someone starts with and what they end up getting.</p>
          </div>

          <div className="comparison-list premium-surface">
            {comparisonRows.map((row) => (
              <div key={row.source} className="comparison-row">
                <div>
                  <span className="comparison-label">Start with</span>
                  <p>{row.source}</p>
                </div>
                <div className="comparison-arrow" aria-hidden="true">→</div>
                <div>
                  <span className="comparison-label">End with</span>
                  <p>{row.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section feature-split" id="formats" data-reveal>
          <div className="section-head split">
            <div>
              <p className="eyebrow">SUPPORTED FORMATS</p>
              <h2>Use real source categories to show the breadth of what can be preserved or rebuilt.</h2>
            </div>
            <p>A visitor should be able to skim this section and quickly recognize their own collection somewhere in the grid.</p>
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

        <section className="section pricing-section" id="pricing" data-reveal>
          <div className="section-head split">
            <div>
              <p className="eyebrow">STARTING PRICE PATHS</p>
              <h2>Generic pricing by device type helps people picture the right order.</h2>
            </div>
            <p>These are not hard quotes. They are guide rails that help customers understand which setup tier fits the kind of result they want.</p>
          </div>

          <div className="hardware-grid pricing-grid">
            {pricingCards.map((item) => (
              <article key={item.title} className="hardware-card premium-surface pricing-card" data-reveal>
                <div className="hardware-image-wrap">
                  <img src={item.image} alt={item.title} className="hardware-image" />
                </div>
                <div className="hardware-body">
                  <span className="hardware-badge">{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p className="price">{item.price}</p>
                  <p>{item.body}</p>
                  <ul className="pricing-bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section examples-section" data-reveal>
          <div className="section-head split">
            <div>
              <p className="eyebrow">EXAMPLES OF WHAT CUSTOMERS GET</p>
              <h2>Show the end result clearly, not just the source media.</h2>
            </div>
            <p>This section helps customers imagine the finished delivery, whether that means a cleaner archive, a portable media library, or a custom device-ready setup.</p>
          </div>

          <div className="process-grid examples-grid">
            {deliveryExamples.map((example) => (
              <article key={example.title} className="process-card premium-surface" data-reveal>
                <span className="process-number">Result</span>
                <h3>{example.title}</h3>
                <p>{example.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq-section" data-reveal>
          <div className="section-head split">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>Answer the practical questions before people have to ask them.</h2>
            </div>
            <p>A small FAQ improves trust and lowers friction, especially when the service covers different media types and delivery formats.</p>
          </div>

          <div className="faq-list premium-surface">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section legacy-callout" id="contact" data-reveal>
          <div className="callout-card">
            <p className="eyebrow">READY TO PLACE AN ORDER?</p>
            <h2>Use the order form to tell us what you have, what you want preserved, and what kind of setup you want back.</h2>
            <p>That gives us enough to scope the right archive, device path, or custom build without making the first step feel confusing.</p>
            <div className="hero-actions centered">
              <a className="button-link" href={orderFormUrl} target="_blank" rel="noreferrer">Open Order Form</a>
              <a className="button-link ghost" href="https://github.com/Nazerath-Floaters/legacy-library-labs" target="_blank" rel="noreferrer">View Project Repo</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
