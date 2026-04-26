import { useMemo, useState } from 'react'
import './App.css'

const mediaFormats = [
  {
    name: 'DVD',
    tag: 'Film archive',
    tone: 'from home shelves to family movie nights',
    detail: 'Menu-preserved rips, polished metadata, and couch-ready playback for collections that deserve better than streaming roulette.',
    accent: 'cyan',
    physicalType: 'DISC',
    className: 'dvd',
  },
  {
    name: 'Blu-ray',
    tag: 'Premium playback',
    tone: 'high-bitrate favorites without hunting across services',
    detail: 'Sharper masters, richer presentation, and a catalog that stays yours instead of vanishing with licensing changes.',
    accent: 'violet',
    physicalType: 'DISC',
    className: 'bluray',
  },
  {
    name: 'PlayStation 2',
    tag: 'Heavy library',
    tone: 'the era worth preserving properly',
    detail: 'Larger libraries, stronger hardware needs, and the deepest nostalgia pull, translated into a cleaner modern archive.',
    accent: 'gold',
    physicalType: 'DISC',
    className: 'ps2',
  },
  {
    name: 'PlayStation 1',
    tag: 'Classic console',
    tone: 'memory-card era favorites made easy to revisit',
    detail: 'Iconic collections prepared for fast launch, clean browsing, and replay without the friction of aging hardware.',
    accent: 'rose',
    physicalType: 'DISC',
    className: 'ps1',
  },
  {
    name: 'PS Vita',
    tag: 'Portable archive',
    tone: 'sleek handheld libraries with modern convenience',
    detail: 'Keep niche gems organized, portable, and ready to jump back into with a setup that respects the original library.',
    accent: 'cyan',
    physicalType: 'CARD',
    className: 'vita',
  },
  {
    name: 'DS',
    tag: 'Dual-screen era',
    tone: 'touchscreen classics with family appeal',
    detail: 'Portable preservation with lightweight setup paths and broad compatibility for family-friendly favorites and deep cuts.',
    accent: 'violet',
    physicalType: 'CARD',
    className: 'ds',
  },
  {
    name: '3DS',
    tag: 'Modern handheld',
    tone: 'beloved handheld collections that should stay playable',
    detail: 'Curated libraries for owners who want their favorites accessible again without losing the sense of a real collection.',
    accent: 'cyan',
    physicalType: 'CARD',
    className: '3ds',
  },
  {
    name: 'Game Boy Advance',
    tag: 'Pocket nostalgia',
    tone: 'small cartridges, huge emotional weight',
    detail: 'Quick-launch libraries built for replayability, lightweight devices, and archival pride around the games you carried everywhere.',
    accent: 'rose',
    physicalType: 'CART',
    className: 'gba',
  },
  {
    name: 'Sega Genesis',
    tag: '16-bit legacy',
    tone: 'arcade energy and living-room history preserved',
    detail: 'A compact archive path for foundational collections, living-room icons, and hardware-era personality that still matters.',
    accent: 'gold',
    physicalType: 'CART',
    className: 'genesis',
  },
]

const enhancements = [
  {
    title: 'Custom Fan Games',
    body: 'Celebrate the worlds you grew up with through curated fan-made experiences, custom setups, and showcase-ready collections.',
  },
  {
    title: 'ROM Hacks',
    body: 'Surface community-made improvements, translations, challenge runs, and expanded classics that deepen the original experience.',
  },
  {
    title: 'AI-Enhanced Playback',
    body: 'Explore richer playback pipelines, cleaner presentation, and upgraded visual depth for the media you already care about.',
  },
]

const consoles = [
  {
    title: 'Flagship Terminal PC',
    price: '$90 - $900',
    desc: 'Pick your power, from simple playback boxes to premium all-in-one archive stations.',
    badge: 'Best overall flexibility',
    supportsPs2: true,
    supportsLight: true,
    tier: 'flagship',
  },
  {
    title: 'RG35XX Plus',
    price: '$80',
    desc: 'Mini-TV style retro box with video out for lightweight library access.',
    badge: 'Compact favorite',
    supportsPs2: false,
    supportsLight: true,
    tier: 'compact',
  },
  {
    title: 'RG476H',
    price: '$300',
    desc: 'Best PS2-ready handheld-style experience in the lineup for heavier playback demands.',
    badge: 'PS2-focused',
    supportsPs2: true,
    supportsLight: true,
    tier: 'performance',
  },
  {
    title: 'Bring Your Own Device',
    price: '$0.00',
    desc: 'Use your own supported hardware and only pay for shipping, setup, and archive prep.',
    badge: 'Budget option',
    supportsPs2: false,
    supportsLight: true,
    tier: 'budget',
  },
  {
    title: 'Boot Loaded SSD',
    price: '$150',
    desc: 'Play on compatible legacy boot PCs with a prepared drive and curated setup.',
    badge: 'Flexible install',
    supportsPs2: false,
    supportsLight: true,
    tier: 'storage',
  },
  {
    title: 'Thumb Drive',
    price: '$50',
    desc: 'A straightforward digital backup option for simple preservation and transfer.',
    badge: 'Archive-only',
    supportsPs2: false,
    supportsLight: true,
    tier: 'archive',
  },
]

const trustPoints = [
  'Preserve what you already legally own',
  'Turn shelves into a searchable living library',
  'Choose a playback path that fits your collection',
]

const archiveBenefits = [
  {
    title: 'Readable at a glance',
    body: 'Big shelves become browsable collections with clearer titles, platform grouping, and cleaner metadata.',
  },
  {
    title: 'Built around ownership',
    body: 'The pitch is simple: keep what is yours accessible instead of buried in boxes, worn media, or licensing churn.',
  },
  {
    title: 'Made for real households',
    body: 'The archive is easier for friends, family, and future-you to use without needing a crash course in emulators.',
  },
]

const archiveExamples = [
  {
    label: 'Before',
    title: 'Shelf friction',
    items: ['Mixed cases and loose media', 'No fast way to browse by platform or genre', 'Playback depends on aging hardware'],
  },
  {
    label: 'After',
    title: 'Legacy vault',
    items: ['Organized by format, series, and favorites', 'Searchable and artwork-forward browsing', 'Matched to hardware that fits the library'],
  },
]

const heroSlides = [
  {
    eyebrow: 'COLLECTION ARCHIVING',
    title: 'Turn shelves into a library worth showing off.',
    text: 'Preserve discs, cartridges, and family favorites in a cleaner catalog that feels modern without losing the personality of the original collection.',
    primaryCta: { label: 'Build Your Archive', href: '#console' },
    secondaryCta: { label: 'See the Process', href: '#process' },
    stats: [
      { value: '9', label: 'archive formats planned' },
      { value: '6', label: 'playback paths' },
      { value: '1', label: 'ownership-first philosophy' },
    ],
    featureLabel: 'Archive signal',
    featureTitle: 'From physical shelf to living vault.',
    featureText: 'A more product-like presentation that makes the service feel real at first glance.',
    tags: ['DISC', 'CART', 'CASE', 'VAULT'],
  },
  {
    eyebrow: 'FAMILY MEDIA PRESERVATION',
    title: 'Make old favorites easy to find, play, and revisit.',
    text: 'Movies, game libraries, and nostalgic collections become browseable again, with metadata, artwork, and playback paths that are easier for real households to use.',
    primaryCta: { label: 'Preview the Archive', href: '#preserve' },
    secondaryCta: { label: 'Pick Hardware', href: '#console' },
    stats: [
      { value: '3', label: 'clear service steps' },
      { value: '∞', label: 'less shelf friction' },
      { value: '24/7', label: 'ready-to-browse vibe' },
    ],
    featureLabel: 'Why it matters',
    featureTitle: 'Less clutter, more connection to what you kept.',
    featureText: 'The site should instantly communicate preservation, organization, and easy access, not just abstract tech polish.',
    tags: ['MOVIES', 'GAMES', 'FAMILY', 'ACCESS'],
  },
  {
    eyebrow: 'HARDWARE + ARCHIVE',
    title: 'Match every archive to a playback setup that fits.',
    text: 'Some collections want a compact box, some want a handheld, and some need a full flagship station. The site should sell that choice clearly.',
    primaryCta: { label: 'Explore Hardware', href: '#console' },
    secondaryCta: { label: 'Contact Us', href: '#contact' },
    stats: [
      { value: 'PS2', label: 'heavy library ready' },
      { value: 'SSD', label: 'bootable options' },
      { value: '$0+', label: 'bring-your-own paths' },
    ],
    featureLabel: 'Hardware fit',
    featureTitle: 'Guidance that feels practical, not generic.',
    featureText: 'This gives the homepage a merchandised feel, like featured offers instead of a single static hero block.',
    tags: ['HANDHELD', 'TV', 'SSD', 'TERMINAL'],
  },
]

const processSteps = [
  {
    label: '01',
    title: 'Intake the collection',
    body: 'We identify what you own, what matters most, and what kind of playback experience you actually want.',
  },
  {
    label: '02',
    title: 'Build the archive',
    body: 'Physical media is organized into a cleaner digital structure with metadata, categories, and a more usable browsing flow.',
  },
  {
    label: '03',
    title: 'Match the hardware',
    body: 'Your library gets paired with the right playback path, from compact access devices to flagship all-in-one setups.',
  },
]

function App() {
  const [selectedFormat, setSelectedFormat] = useState('PlayStation 2')
  const [activeSlide, setActiveSlide] = useState(0)

  const selectedMedia = useMemo(
    () => mediaFormats.find((item) => item.name === selectedFormat) ?? mediaFormats[0],
    [selectedFormat],
  )

  const ps2Selected = selectedFormat === 'PlayStation 2'
  const currentSlide = heroSlides[activeSlide]

  const goToPrevSlide = () => {
    setActiveSlide((current) => (current === 0 ? heroSlides.length - 1 : current - 1))
  }

  const goToNextSlide = () => {
    setActiveSlide((current) => (current === heroSlides.length - 1 ? 0 : current + 1))
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
            <a href="#preserve">Archive</a>
            <a href="#console">Hardware</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-slider-shell">
            <button type="button" className="hero-nav hero-nav-left" onClick={goToPrevSlide} aria-label="Previous slide">
              ‹
            </button>

            <div className="hero-slide-content">
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

              <div className="hero-visual-system">
            <article className="hero-device-panel main-panel">
              <div className="panel-topline">
                <span className="stage-label">Archive signal</span>
                <span className="panel-status">Active</span>
              </div>

              <div className="shelf-composition">
                <div className="physical-stack">
                  <div className="media-piece disc one" />
                  <div className="media-piece case two" />
                  <div className="media-piece cart three" />
                </div>

                <div className="conversion-beam">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="digital-vault">
                  <div className="vault-header">
                    <strong>Legacy Vault</strong>
                    <span>Indexed collection</span>
                  </div>
                  <div className="vault-grid">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div className="bright" />
                  </div>
                </div>
              </div>
            </article>

                <div className="hero-side-panels">
                  <article className="hero-device-panel info-panel emphasis">
                    <span className="stage-label">{currentSlide.featureLabel}</span>
                    <h3>{currentSlide.featureTitle}</h3>
                    <p>{currentSlide.featureText}</p>
                  </article>
                  <article className="hero-device-panel info-panel compact-panel">
                    <span className="stage-label">Collection DNA</span>
                    <div className="mini-tags">
                      {currentSlide.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <button type="button" className="hero-nav hero-nav-right" onClick={goToNextSlide} aria-label="Next slide">
              ›
            </button>
          </div>

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
        </div>
      </header>

      <main>
        <section className="section trust-strip">
          {trustPoints.map((point) => (
            <div key={point} className="trust-pill">{point}</div>
          ))}
        </section>

        <section className="section process-section" id="process">
          <div className="section-head split">
            <div>
              <p className="eyebrow">HOW IT WORKS</p>
              <h2>A cleaner, more premium flow from ownership to access.</h2>
            </div>
            <p>
              The process should read like a real service, not a mood board. Clear steps make the offer feel grounded and believable.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.label} className="process-card">
                <span className="process-number">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section preserve" id="preserve">
          <div className="section-head split preserve-head">
            <div>
              <p className="eyebrow">FROM SHELF TO SEARCHABLE ARCHIVE</p>
              <h2>Select a format and preview the transformation.</h2>
            </div>
            <p>
              The archive section works better when it feels concrete, like a before-and-after transformation from cluttered ownership to clean access.
            </p>
          </div>

          <div className="format-selector" role="tablist" aria-label="Media format selector">
            {mediaFormats.map((item) => (
              <button
                key={item.name}
                type="button"
                className={`format-chip ${selectedFormat === item.name ? 'active' : ''}`}
                onClick={() => setSelectedFormat(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="archive-preview premium-preview">
            <article className={`preview-visual ${selectedMedia.accent}`}>
              <div className="preview-backdrop-lines" />
              <div className="preview-stage-labels">
                <span>Physical media</span>
                <span>Archive build</span>
                <span>Living library</span>
              </div>
              <div className={`format-object ${selectedMedia.className}`}>
                <span>{selectedMedia.physicalType}</span>
                <strong>{selectedMedia.name}</strong>
              </div>
              <div className="preview-flow premium-flow">
                <span />
                <span />
                <span />
              </div>
              <div className="library-surface">
                <div className="library-topline">
                  <span>DIGITAL LIBRARY</span>
                  <strong>Ready to browse</strong>
                </div>
                <div className="library-tiles">
                  <div />
                  <div />
                  <div className="focus" />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </article>

            <article className="preview-copy premium-copy">
              <p className="eyebrow">{selectedMedia.tag}</p>
              <h3>{selectedMedia.name}</h3>
              <p className="preview-tone">{selectedMedia.tone}</p>
              <p>{selectedMedia.detail}</p>
              <ul>
                <li>Cleaner visual organization and metadata-ready presentation</li>
                <li>Playback options matched to the strength and complexity of the source library</li>
                <li>Preservation-first flow built around collections you already own</li>
              </ul>

              <div className="archive-compare-grid">
                {archiveExamples.map((example) => (
                  <div key={example.label} className="archive-compare-card">
                    <span className="compare-label">{example.label}</span>
                    <h4>{example.title}</h4>
                    <ul>
                      {example.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="archive-benefits-grid">
            {archiveBenefits.map((item) => (
              <article key={item.title} className="archive-benefit-card premium-surface">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section more" id="more">
          <div className="section-head split">
            <div>
              <p className="eyebrow">GET MORE FROM YOUR MEDIA</p>
              <h2>Preservation is the floor, not the ceiling.</h2>
            </div>
            <p>
              Once the archive exists, you can layer in upgrades, better playback, fan work, cleaner presentation, and more reasons to revisit what already matters.
            </p>
          </div>

          <div className="enhancement-grid">
            {enhancements.map((item) => (
              <article key={item.title} className="enhancement-card premium-surface">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section console" id="console">
          <div className="section-head split">
            <div>
              <p className="eyebrow">PICK YOUR HARDWARE PATH</p>
              <h2>Match the archive to the device that makes sense.</h2>
            </div>
            <p>
              Hardware should feel like practical guidance, not filler. The selected media type shifts which options make sense for the collection in front of you.
            </p>
          </div>

          <div className="compatibility-banner premium-surface">
            <div>
              <span className="compatibility-title">Current logic preview</span>
              <p>
                Active media: <strong>{selectedFormat}</strong>. {ps2Selected ? 'PS2 mode is highlighting the heavier-duty hardware paths.' : 'Standard mode keeps most playback options available.'}
              </p>
            </div>
            <a className="button-link ghost small" href="#preserve">Change media type</a>
          </div>

          <div className="console-grid premium-console-grid">
            {consoles.map((item) => {
              const available = ps2Selected ? item.supportsPs2 : item.supportsLight

              return (
                <article key={item.title} className={`console-card console-tier-${item.tier} ${available ? 'highlighted' : 'disabled'}`}>
                  <div className="console-card-topline">
                    <span className="console-badge">{item.badge}</span>
                    <span className={`console-dot ${available ? 'on' : 'off'}`} />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="price">{item.price}</p>
                  <p>{item.desc}</p>
                  <span className={`availability ${available ? 'yes' : 'no'}`}>
                    {available ? 'Recommended for this archive' : 'Not recommended for this archive'}
                  </span>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section legacy-callout" id="contact">
          <div className="callout-card">
            <p className="eyebrow">LEGACY, NOT CLUTTER</p>
            <h2>Create an archive your friends and family can actually use.</h2>
            <p>
              Movies, games, discs, cartridges, and favorites that shaped your life should not disappear into boxes, dead hardware, or modern subscription churn.
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
