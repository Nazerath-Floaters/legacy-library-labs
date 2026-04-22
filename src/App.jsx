import { useMemo, useState } from 'react'
import './App.css'

const mediaFormats = [
  {
    name: 'DVD',
    tag: 'Film archive',
    tone: 'from home shelves to family movie nights',
    detail: 'Menu-preserved rips, polished metadata, and couch-ready playback.',
    accent: 'cyan',
  },
  {
    name: 'Blu-ray',
    tag: 'Premium playback',
    tone: 'high-bitrate favorites without hunting across services',
    detail: 'Sharper masters, richer presentation, and a catalog that stays yours.',
    accent: 'violet',
  },
  {
    name: 'PlayStation 2',
    tag: 'Heavy library',
    tone: 'the era worth preserving properly',
    detail: 'Larger libraries, stronger hardware needs, and the deepest nostalgia pull.',
    accent: 'gold',
  },
  {
    name: 'PlayStation 1',
    tag: 'Classic console',
    tone: 'memory-card era favorites made easy to revisit',
    detail: 'Iconic collections prepared for fast launch and clean browsing.',
    accent: 'rose',
  },
  {
    name: 'PS Vita',
    tag: 'Portable archive',
    tone: 'sleek handheld libraries with modern convenience',
    detail: 'Keep niche gems organized, portable, and ready to jump back into.',
    accent: 'cyan',
  },
  {
    name: 'DS',
    tag: 'Dual-screen era',
    tone: 'touchscreen classics with family appeal',
    detail: 'Portable preservation with lightweight setup paths and broad compatibility.',
    accent: 'violet',
  },
  {
    name: '3DS',
    tag: 'Modern handheld',
    tone: 'beloved handheld collections that should stay playable',
    detail: 'Curated libraries for owners who want their favorites accessible again.',
    accent: 'cyan',
  },
  {
    name: 'Game Boy Advance',
    tag: 'Pocket nostalgia',
    tone: 'small cartridges, huge emotional weight',
    detail: 'Quick-launch libraries built for replayability and archival pride.',
    accent: 'rose',
  },
  {
    name: 'Sega Genesis',
    tag: '16-bit legacy',
    tone: 'arcade energy and living-room history preserved',
    detail: 'A compact archive path for foundational collections and fan favorites.',
    accent: 'gold',
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
  },
  {
    title: 'RG35XX Plus',
    price: '$80',
    desc: 'Mini-TV style retro box with video out for lightweight library access.',
    badge: 'Compact favorite',
    supportsPs2: false,
    supportsLight: true,
  },
  {
    title: 'RG476H',
    price: '$300',
    desc: 'Best PS2-ready handheld-style experience in the lineup for heavier playback demands.',
    badge: 'PS2-focused',
    supportsPs2: true,
    supportsLight: true,
  },
  {
    title: 'Bring Your Own Device',
    price: '$0.00',
    desc: 'Use your own supported hardware and only pay for shipping, setup, and archive prep.',
    badge: 'Budget option',
    supportsPs2: false,
    supportsLight: true,
  },
  {
    title: 'Boot Loaded SSD',
    price: '$150',
    desc: 'Play on compatible legacy boot PCs with a prepared drive and curated setup.',
    badge: 'Flexible install',
    supportsPs2: false,
    supportsLight: true,
  },
  {
    title: 'Thumb Drive',
    price: '$50',
    desc: 'A straightforward digital backup option for simple preservation and transfer.',
    badge: 'Archive-only',
    supportsPs2: false,
    supportsLight: true,
  },
]

const trustPoints = [
  'Preserve what you already legally own',
  'Turn shelves into a searchable living library',
  'Choose a playback path that fits your collection',
]

function App() {
  const [selectedFormat, setSelectedFormat] = useState('PlayStation 2')

  const selectedMedia = useMemo(
    () => mediaFormats.find((item) => item.name === selectedFormat) ?? mediaFormats[0],
    [selectedFormat],
  )

  const ps2Selected = selectedFormat === 'PlayStation 2'

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="hero">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-mark">◈</span>
            <span>Legacy Library Labs</span>
          </div>
          <div className="nav-links">
            <a href="#preserve">Services</a>
            <a href="#more">Enhancements</a>
            <a href="#console">Console Builder</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">PRESERVE WHAT YOU OWN</p>
            <h1>Turn your shelf into a living library.</h1>
            <p className="hero-text">
              Legacy Library Labs helps you preserve the movies, discs, cartridges, and games you already love,
              then makes them feel modern, playable, and easy to reach again.
            </p>

            <div className="hero-actions">
              <a className="button-link" href="#console">Build Your Archive</a>
              <a className="button-link ghost" href="#preserve">See How It Works</a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>9</strong>
                <span>archive formats planned</span>
              </div>
              <div>
                <strong>6</strong>
                <span>playback paths</span>
              </div>
              <div>
                <strong>1</strong>
                <span>ownership-first philosophy</span>
              </div>
            </div>
          </div>

          <div className="hero-stage">
            <div className="stage-card featured">
              <span className="stage-label">Collection DNA</span>
              <h3>Own your access</h3>
              <p>Preservation, playback, and pride, designed for the media that shaped your life.</p>
              <div className="mini-shelf">
                <span>DISC</span>
                <span>CART</span>
                <span>CASE</span>
                <span>VAULT</span>
              </div>
            </div>
            <div className="stage-card glass tilt-right">
              <span className="stage-label">Trusted Focus</span>
              <p>Legally grounded preservation, thoughtful presentation, and hardware paths that actually fit the archive.</p>
            </div>
            <div className="stage-card glass tilt-left accent">
              <span className="stage-label">Signature Promise</span>
              <p>Keep what matters playable, searchable, and close.</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section trust-strip">
          {trustPoints.map((point) => (
            <div key={point} className="trust-pill">{point}</div>
          ))}
        </section>

        <section className="section preserve" id="preserve">
          <div className="section-head split preserve-head">
            <div>
              <p className="eyebrow">FROM SHELF TO SEARCHABLE ARCHIVE</p>
              <h2>Choose a format, preview the archive path.</h2>
            </div>
            <p>
              The site now has a stronger visual direction and a live selection state. This can become the horizontal cinematic showcase next, but already behaves like a guided archive preview.
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

          <div className="archive-preview">
            <article className={`preview-visual ${selectedMedia.accent}`}>
              <div className="preview-orb" />
              <div className="preview-frame physical">
                <span>PHYSICAL</span>
                <strong>{selectedMedia.name}</strong>
              </div>
              <div className="preview-flow" />
              <div className="preview-frame digital">
                <span>DIGITAL LIBRARY</span>
                <strong>Indexed, preserved, playable</strong>
              </div>
            </article>

            <article className="preview-copy">
              <p className="eyebrow">{selectedMedia.tag}</p>
              <h3>{selectedMedia.name}</h3>
              <p className="preview-tone">{selectedMedia.tone}</p>
              <p>{selectedMedia.detail}</p>
              <ul>
                <li>Clean organization and metadata-ready presentation</li>
                <li>Playback options matched to the strength of the source library</li>
                <li>Preservation-first flow built around collections you already own</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section more" id="more">
          <div className="section-head split">
            <div>
              <p className="eyebrow">GET MORE FROM YOUR MEDIA</p>
              <h2>Preservation is the start, not the ceiling.</h2>
            </div>
            <p>
              Build on top of the archive with curated enhancements, fan creativity, and presentation upgrades that make old favorites feel alive again.
            </p>
          </div>

          <div className="enhancement-grid">
            {enhancements.map((item) => (
              <article key={item.title} className="enhancement-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section console" id="console">
          <div className="section-head split">
            <div>
              <p className="eyebrow">PICK YOUR CONSOLE</p>
              <h2>Choose the playback path that fits your archive.</h2>
            </div>
            <p>
              The compatibility layer is now visually prototyped. Selecting PS2 narrows the recommendations to the more capable paths, while lighter libraries keep most options open.
            </p>
          </div>

          <div className="compatibility-banner">
            <div>
              <span className="compatibility-title">Current logic preview</span>
              <p>
                Active media: <strong>{selectedFormat}</strong>. {ps2Selected ? 'PS2 mode is highlighting the heavier-duty hardware paths.' : 'Standard mode keeps most playback options available.'}
              </p>
            </div>
            <a className="button-link ghost small" href="#preserve">Change media type</a>
          </div>

          <div className="console-grid">
            {consoles.map((item) => {
              const available = ps2Selected ? item.supportsPs2 : item.supportsLight

              return (
                <article key={item.title} className={`console-card ${available ? '' : 'disabled'}`}>
                  <span className="console-badge">{item.badge}</span>
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
              Movies, games, discs, cartridges, and favorites that shaped your life should not disappear into boxes, dead hardware, or subscription churn.
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
