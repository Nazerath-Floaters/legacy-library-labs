import { useState } from 'react'
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

const customFormAction = 'https://docs.google.com/forms/d/e/1FAIpQLScoQfgOt2XlIcp3LDK-njbH1TpxoZin3h4Z6-2fkQoRd0g9DA/formResponse'

function App() {
  const [submitNotice, setSubmitNotice] = useState('')

  const handleFormSubmit = () => {
    setSubmitNotice('Request sent. If Google accepts it, it should appear in the linked sheet shortly.')
  }

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
              This form keeps the storefront look while submitting into your existing Google intake setup behind the scenes.
            </p>
          </div>

          <form className="custom-order-form" action={customFormAction} method="POST" target="hidden-google-form-target" onSubmit={handleFormSubmit}>
            <div className="form-grid">
              <label>
                <span>Email</span>
                <input type="email" name="emailAddress" placeholder="you@example.com" required />
              </label>
              <label>
                <span>Phone Number</span>
                <input type="text" name="entry.1338169496" placeholder="Optional contact number" />
              </label>
              <label>
                <span>Base Hardware</span>
                <input type="hidden" name="entry.1957698574_sentinel" value="" />
                <select name="entry.1957698574" defaultValue="Budget  Mini PC ($150)">
                  <option>USB ($30)</option>
                  <option>SSD ($100)</option>
                  <option>Budget  Mini PC ($150)</option>
                  <option>Budget Handheld Gameboy Style ($75)</option>
                  <option>SUPER Handheld (PS2 Capable) ($290)</option>
                  <option>Gaming Rig PC ($545)</option>
                  <option>Bring Your Own Device ($0.00) + Shipping</option>
                  <option>Gaming Laptop ($745)</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                <span>Digitize My Media</span>
                <input type="hidden" name="entry.78145169_sentinel" value="" />
                <select name="entry.78145169" defaultValue="Send My Own Digitized Media (N/A)">
                  <option>DVD ($1.50)</option>
                  <option>Blueray ($2.00)</option>
                  <option>Gameboy Advanced ($2.50)</option>
                  <option>DS ($2.50)</option>
                  <option>3DS ($2.50)</option>
                  <option>PS1 ($1.50)</option>
                  <option>PS2 ($2.50)</option>
                  <option>Sega Genesis ($4.50)</option>
                  <option>GameCube ($2.50)</option>
                  <option>Send My Own Digitized Media (N/A)</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="full-width">
                <span>Personalize</span>
                <textarea name="entry.1232892038" rows="7" placeholder="Describe exactly what you want built, what media needs digitizing, device preferences, links, budget notes, timelines, and anything else important." required />
              </label>
            </div>

            <input type="hidden" name="fvv" value="1" />
            <input type="hidden" name="partialResponse" value="[null,null,&quot;8587773801775500531&quot;]" />
            <input type="hidden" name="fbzx" value="8587773801775500531" />
            <input type="hidden" name="pageHistory" value="0" />
            <input type="hidden" name="submissionTimestamp" value="-1" />

            <div className="form-actions">
              <button type="submit" className="submit-order-button">Send Request</button>
              <p className="form-note">
                Submissions are sent into the existing Google intake flow without showing the public Google Form page.
              </p>
            </div>
            {submitNotice ? <p className="form-success-notice">{submitNotice}</p> : null}
          </form>
          <iframe title="hidden-google-form-target" name="hidden-google-form-target" className="hidden-form-frame" />
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
