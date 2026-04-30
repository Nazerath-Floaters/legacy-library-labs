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
    badgeClass: 'badge-gamepad',
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
    badgeClass: 'badge-archive',
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
    badgeClass: 'badge-star',
    image: fanGame2,
    secondaryImage: fanGame2,
    description: [
      'Expanded libraries with fan projects and custom extras.',
      'ROM hacks, remixes, and curated side collections.',
      'Great for custom retro bundles and themed builds.',
      'Designed to make a library feel unique instead of generic.',
    ],
    price: 'Free With Your Build',
    subline: 'A fun add-on layer for people who want more than the basics.',
  },
]

const trustPoints = [
  {
    title: 'Trusted by Collectors',
    text: 'Quality you can rely on.',
    icon: '🛡️',
  },
  {
    title: 'Privacy First',
    text: 'Your data stays yours.',
    icon: '🔒',
  },
  {
    title: 'Fast Turnaround',
    text: 'Quick, reliable delivery.',
    icon: '🚀',
  },
  {
    title: 'Support That Cares',
    text: 'Real people, real help.',
    icon: '💬',
  },
]

const customFormAction = 'https://formspree.io/f/your-form-id'

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <main className="landing-shell">
        <section className="hero" id="preserve">
          <p className="hero-kicker">Build. Preserve. Play.</p>
          <h1>
            Your Dream Console
            <span> Starts Here</span>
          </h1>
          <p className="hero-subtitle">
            Premium consoles, digital archives, and custom game libraries.
            <br />
            Built for players, collectors, and creators.
          </p>
          <a className="hero-cta" href="#custom-order-form">
            <span className="cta-icon">🚀</span>
            Start Your Setup
          </a>
        </section>

        <section className="service-grid" aria-label="Services">
          {serviceCards.map((card) => (
            <article key={card.title} className={`service-card accent-${card.accent}`}>
              <div className="service-head">
                <div className={`service-badge ${card.badgeClass || ''}`} aria-hidden="true">{card.badge}</div>
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

                <a className={`learn-button button-${card.accent}`} href="#custom-order-form">
                  <span>Learn More</span>
                  <span aria-hidden="true">›</span>
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="order-form-card" id="custom-order-form">
          <div className="form-intro">
            <p className="form-kicker">Custom Order Form</p>
            <h2>Request your build directly from the site.</h2>
            <p>
              This replaces the plain Google Form flow with a storefront-matched intake form.
              Submissions can be routed to <strong>burketmicah@gmail.com</strong> once the final email endpoint is connected.
            </p>
          </div>

          <form className="custom-order-form" action={customFormAction} method="POST">
            <div className="form-grid">
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                <span>Preferred Contact</span>
                <select name="contact_preference" defaultValue="Email">
                  <option>Email</option>
                  <option>Discord</option>
                  <option>Text Message</option>
                </select>
              </label>
              <label>
                <span>What are you ordering?</span>
                <select name="service_interest" defaultValue="Piano Console">
                  <option>Piano Console</option>
                  <option>Archive Service</option>
                  <option>Fan Games</option>
                  <option>Custom Build</option>
                </select>
              </label>
              <label>
                <span>Budget Range</span>
                <input type="text" name="budget" placeholder="$200 - $700" />
              </label>
              <label>
                <span>Timeline</span>
                <input type="text" name="timeline" placeholder="As soon as possible / Flexible" />
              </label>
              <label className="full-width">
                <span>Project Details</span>
                <textarea name="details" rows="6" placeholder="Tell us what kind of build, media archive, or add-ons you want." required />
              </label>
              <label className="full-width">
                <span>Anything else?</span>
                <textarea name="notes" rows="4" placeholder="Special requests, hardware preferences, game eras, media types, etc." />
              </label>
            </div>

            <input type="hidden" name="_subject" value="Legacy Library Labs website order form" />
            <input type="hidden" name="_replyto" value="burketmicah@gmail.com" />

            <div className="form-actions">
              <button type="submit" className="submit-order-button">Send Request</button>
              <p className="form-note">
                I still need to swap in the live email form endpoint so submissions actually route to your inbox.
              </p>
            </div>
          </form>
        </section>

        <section className="trust-row" aria-label="Trust points">
          {trustPoints.map((point) => (
            <div key={point.title} className="trust-card">
              <div className="trust-icon" aria-hidden="true">{point.icon}</div>
              <div>
                <p className="trust-title">{point.title}</p>
                <p className="trust-text">{point.text}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
