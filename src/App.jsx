import './App.css'

const mediaFormats = [
  'DVD',
  'Blu-ray',
  'PlayStation 2',
  'PlayStation 1',
  'PS Vita',
  'DS',
  '3DS',
  'Game Boy Advance',
  'Sega Genesis',
]

const enhancements = [
  {
    title: 'Custom Fan Games',
    body: 'Celebrate the worlds you grew up with through curated fan-made experiences, custom setups, and showcase-ready collections.',
  },
  {
    title: 'ROM Hacks',
    body: 'Surface community-made improvements, challenge runs, translations, and expanded classics that deepen the original experience.',
  },
  {
    title: 'AI-Enhanced Playback',
    body: 'Explore richer playback pipelines, cleaner presentation, and upgraded visual depth for the media you already care about.',
  },
]

const consoles = [
  {
    title: 'Flagship: Terminal PC',
    price: '$90 - $900',
    desc: 'Pick your power, from simple playback boxes to premium all-in-one archive stations.',
    badge: 'Best overall flexibility',
  },
  {
    title: 'RG35XX Plus',
    price: '$80',
    desc: 'Mini-TV style retro box with video out for lightweight library access.',
    badge: 'Compact favorite',
  },
  {
    title: 'RG476H',
    price: '$300',
    desc: 'Best PS2-ready experience in the lineup and built for heavier playback demands.',
    badge: 'PS2-focused',
  },
  {
    title: 'Bring Your Own Device',
    price: '$0.00',
    desc: 'Use your own supported hardware and only pay for shipping, setup, and archive prep.',
    badge: 'Budget option',
  },
  {
    title: 'Boot Loaded SSD',
    price: '$150',
    desc: 'Play on compatible legacy boot PCs with a prepared drive and curated setup.',
    badge: 'Flexible install',
  },
  {
    title: 'Thumb Drive',
    price: '$50',
    desc: 'A straightforward digital backup option for simple preservation and transfer.',
    badge: 'Archive-only',
  },
]

function App() {
  return (
    <div className="page-shell">
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
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">PRESERVE WHAT YOU OWN</p>
            <h1>Your games were meant to be played, your collection was meant to last.</h1>
            <p className="hero-text">
              We turn shelves, discs, cartridges, and family favorites into a modern personal archive,
              then help you enjoy it on curated hardware that fits your library.
            </p>
            <div className="hero-actions">
              <button>Build Your Archive</button>
              <button className="ghost">See How It Works</button>
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
                <span>legacy-first experience</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-glow" />
            <div className="panel-card tall">
              <span className="panel-label">Collection DNA</span>
              <h3>Own your access</h3>
              <p>Stop digging through shelves or re-buying what you already love. Build a playable archive with permanence.</p>
            </div>
            <div className="panel-card">
              <span className="panel-label">Trusted Focus</span>
              <p>Preservation, playback, nostalgia, and family legacy, all in one flow.</p>
            </div>
            <div className="panel-card accent">
              <span className="panel-label">Signature Promise</span>
              <p>Turn your shelf into a living library.</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section preserve" id="preserve">
          <div className="section-head">
            <p className="eyebrow">SCROLL THROUGH THE COLLECTION</p>
            <h2>From shelf to searchable digital archive</h2>
            <p>
              A cinematic horizontal showcase can live here, showing every media type transitioning from physical format to preserved digital access.
            </p>
          </div>

          <div className="media-rail">
            {mediaFormats.map((item) => (
              <article key={item} className="media-card">
                <div className="media-art" />
                <h3>{item}</h3>
                <p>Digitize, organize, preserve, and prepare for modern access.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section more" id="more">
          <div className="section-head split">
            <div>
              <p className="eyebrow">GET MORE FROM YOUR MEDIA</p>
              <h2>Preservation is the start, not the ceiling</h2>
            </div>
            <p>
              Expand the value of your archive with curated enhancements, fan creativity, and playback upgrades that make old favorites feel alive again.
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
              <h2>Choose the playback path that fits your archive</h2>
            </div>
            <p>
              This section is built to become interactive. Media selections can enable or disable device options, with PS2 narrowing to the most capable recommendations.
            </p>
          </div>

          <div className="compatibility-banner">
            <div>
              <span className="compatibility-title">Dynamic compatibility logic</span>
              <p>PS2 archives should spotlight Flagship PC and RG476H. Lighter formats can open up most playback options.</p>
            </div>
            <button className="ghost small">Prototype logic later</button>
          </div>

          <div className="console-grid">
            {consoles.map((item) => (
              <article key={item.title} className="console-card">
                <span className="console-badge">{item.badge}</span>
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section legacy-callout">
          <div className="callout-card">
            <p className="eyebrow">LEGACY, NOT CLUTTER</p>
            <h2>Create an archive your friends and family can actually use.</h2>
            <p>
              Movies, games, discs, cartridges, and favorites that shaped your life should not disappear into boxes, dead hardware, or subscription churn.
            </p>
            <button>Start Planning</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
