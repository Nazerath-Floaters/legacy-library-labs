import { useState } from 'react'
import './App.css'

import rg35xxPlus from './assets/legacy/rg35xxplus.png'
import vhsImage from './assets/legacy/vhs.png'
import genesisImage from './assets/legacy/genesis.png'
import computerImage from './assets/legacy/computer.png'
import fanGame2 from './assets/legacy/fan-game-2.webp'

const orderFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScoQfgOt2XlIcp3LDK-njbH1TpxoZin3h4Z6-2fkQoRd0g9DA/viewform?usp=header'
const appsScriptEndpoint = 'https://script.google.com/macros/s/AKfycbxCX-oQ2FeiPlsWCG1ozIy4YX3KSynpIsC59yVAOeGM-TI_Lyz0h3Lk2MffN32K7dw/exec'
const honeypotFieldName = 'company'

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionState, setSubmissionState] = useState('idle')

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    if (appsScriptEndpoint.includes('PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE')) {
      setSubmitNotice('Form backend is not connected yet. Add your Google Apps Script web app URL and try again.')
      return
    }

    setIsSubmitting(true)
    setSubmitNotice('Sending your request...')

    const formData = new FormData(event.currentTarget)
    const payload = {
      email: formData.get('email')?.toString().trim() || '',
      phone: formData.get('phone')?.toString().trim() || '',
      hardware: formData.get('hardware')?.toString().trim() || '',
      digitize: formData.get('digitize')?.toString().trim() || '',
      details: formData.get('details')?.toString().trim() || '',
      submittedAt: new Date().toISOString(),
      source: window.location.href,
      userAgent: navigator.userAgent,
      [honeypotFieldName]: formData.get(honeypotFieldName)?.toString().trim() || '',
    }

    let requestSent = false

    try {
      await fetch(appsScriptEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })
      requestSent = true
    } catch (error) {
      console.warn('Apps Script submission fallback triggered.', error)
    } finally {
      if (requestSent) {
        setSubmissionState('success')
        setSubmitNotice('Request sent successfully.')
        event.currentTarget.reset()
      } else {
        setSubmissionState('uncertain')
        setSubmitNotice('We could not confirm the send from this browser. If no new row appears in the sheet shortly, use the direct order form link below.')
      }
      setIsSubmitting(false)
    }
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
              This form keeps the storefront look while sending submissions into a private spreadsheet backend.
            </p>
          </div>

          {submissionState === 'success' ? (
            <div className="submission-success-card">
              <p className="form-kicker">Submission Received</p>
              <h3>Your order request is officially in the queue.</h3>
              <p>
                Thanks for sending your build details. An agent will be reaching out shortly to coordinate the order,
                confirm the setup, and go over any next steps.
              </p>
              <div className="success-next-steps">
                <div>
                  <strong>What happens next?</strong>
                  <ul>
                    <li>We review your requested hardware, media, and personalization notes.</li>
                    <li>We follow up to confirm pricing, timing, and any missing details.</li>
                    <li>We help coordinate the build and delivery process from there.</li>
                  </ul>
                </div>
              </div>
              <div className="form-actions success-actions">
                <a className="submit-order-button success-link-button" href={orderFormUrl} target="_blank" rel="noreferrer">
                  Open Direct Intake Form
                </a>
                <button type="button" className="secondary-form-button" onClick={() => {
                  setSubmissionState('idle')
                  setSubmitNotice('')
                }}>
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form className="custom-order-form" onSubmit={handleFormSubmit}>
              <div className="form-grid">
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                  <span>Phone Number</span>
                  <input type="text" name="phone" placeholder="Optional contact number" />
                </label>
                <label className="honeypot-field" aria-hidden="true">
                  <span>Company</span>
                  <input type="text" name="company" tabIndex="-1" autoComplete="off" />
                </label>
                <label>
                  <span>Base Hardware</span>
                  <select name="hardware" defaultValue="Budget  Mini PC ($150)">
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
                  <select name="digitize" defaultValue="Send My Own Digitized Media (N/A)">
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
                  <textarea name="details" rows="7" placeholder="Describe exactly what you want built, what media needs digitizing, device preferences, links, budget notes, timelines, and anything else important." required />
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-order-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
                <p className="form-note">
                  Submissions go to a private sheet. If the form gives you trouble, use the direct intake form instead.
                  {' '}
                  <a href={orderFormUrl} target="_blank" rel="noreferrer">Open direct form</a>
                </p>
              </div>
              {submitNotice ? <p className="form-success-notice">{submitNotice}</p> : null}
            </form>
          )}
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
