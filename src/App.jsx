import './App.css'

import ps2Base from './assets/legacy/ps2-base.webp'
import ps2Console from './assets/legacy/ps2-console.png'
import rg35xxPlus from './assets/legacy/rg35xxplus.png'
import dvdImage from './assets/legacy/dvd.png'
import blurayImage from './assets/legacy/bluray.png'
import vhsImage from './assets/legacy/vhs.png'
import computerImage from './assets/legacy/computer.png'
import usbImage from './assets/legacy/usb.png'

const orderFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScoQfgOt2XlIcp3LDK-njbH1TpxoZin3h4Z6-2fkQoRd0g9DA/viewform?usp=header'

const offerCards = [
  {
    title: 'Media Library Conversion',
    body: 'Turn DVD and Blu-ray collections into organized digital libraries built for browsing, playback, and long-term ownership.',
    image: dvdImage,
  },
  {
    title: 'VHS and Archive Preservation',
    body: 'Preserve aging home videos and analog media in safer formats that are easier to store, back up, and revisit.',
    image: vhsImage,
  },
  {
    title: 'Custom Retro Setups',
    body: 'Build a handheld, SSD, or home-console experience that feels curated and ready to use instead of cluttered and improvised.',
    image: ps2Console,
  },
]

const processSteps = [
  {
    title: 'Tell us what you have',
    body: 'Start with your discs, tapes, game libraries, or the type of device build you want.',
  },
  {
    title: 'We recommend the right path',
    body: 'We help match your collection to the right archive, playback setup, or custom build tier.',
  },
  {
    title: 'Get a clean finished result',
    body: 'The goal is a setup that feels organized, usable, and worth keeping for the long haul.',
  },
]

const pricingCards = [
  {
    title: 'Digital Archive Delivery',
    price: 'Starting around $90',
    body: 'Best for media conversion and preservation projects where the result is a clean digital archive.',
    image: computerImage,
  },
  {
    title: 'Handheld Retro Setup',
    price: 'Starting around $80',
    body: 'A strong entry point for curated portable gaming libraries and giftable retro setups.',
    image: rg35xxPlus,
  },
  {
    title: 'SSD or USB Setup',
    price: 'Starting around $150',
    body: 'Ideal when you already have hardware and want the library, frontend, and content delivered on external storage.',
    image: usbImage,
  },
  {
    title: 'Flagship Home Build',
    price: 'Custom pricing',
    body: 'For larger libraries, broader compatibility, and a more premium all-in-one home setup.',
    image: ps2Base,
  },
]

const faqs = [
  {
    question: 'What kinds of media can I submit?',
    answer: 'DVD, Blu-ray, VHS, retro game libraries, and related preservation or custom setup requests all fit the site.',
  },
  {
    question: 'Are these prices final quotes?',
    answer: 'No. These are general starting points to help customers understand which level of setup makes sense before ordering.',
  },
  {
    question: 'How do I get started?',
    answer: 'Use the order form, describe what you have, and explain what kind of result you want back.',
  },
]

function App() {
  return (
    <div className="page-shell minimalist-shell">
      <header className="hero simple-hero">
        <nav className="topbar simple-topbar">
          <div className="brand">
            <span className="brand-mark">◈</span>
            <span>Legacy Library Labs</span>
          </div>
          <div className="nav-links simple-nav-links">
            <a href="#offers">Services</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
        </nav>

        <section className="hero-stage simple-hero-stage">
          <div className="simple-hero-copy">
            <p className="eyebrow">PRESERVE • ORGANIZE • PLAY</p>
            <h1>Simple digital libraries and custom setups for media you actually care about.</h1>
            <p className="hero-text">Legacy Library Labs helps turn aging collections into clean, usable archives, playback libraries, and retro-ready systems without the cluttered nonsense.</p>
            <div className="hero-actions">
              <a className="button-link" href={orderFormUrl} target="_blank" rel="noreferrer">Start Your Order</a>
              <a className="button-link ghost" href="#pricing">View Pricing</a>
            </div>
          </div>
          <div className="simple-hero-panel premium-surface">
            <div className="hero-panel-block">
              <span className="comparison-label">Best for</span>
              <h2>DVD and Blu-ray libraries, VHS preservation, and custom retro builds</h2>
            </div>
            <div className="hero-panel-block">
              <span className="comparison-label">What customers want</span>
              <p>Cleaner libraries, safer archives, and setups that feel finished instead of hacked together.</p>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section trust-strip minimalist-trust-strip">
          <div className="trust-pill">Clean digital libraries</div>
          <div className="trust-pill">Preservation-focused workflows</div>
          <div className="trust-pill">Simple pricing paths</div>
          <div className="trust-pill">Order form ready</div>
        </section>

        <section className="section offers-section" id="offers">
          <div className="section-head split">
            <div>
              <p className="eyebrow">SERVICES</p>
              <h2>Three clear offers, instead of one giant messy pitch.</h2>
            </div>
            <p>The new direction is intentionally simpler. Less motion, fewer gimmicks, and clearer reasons to buy.</p>
          </div>

          <div className="offer-grid">
            {offerCards.map((offer) => (
              <article key={offer.title} className="offer-card premium-surface">
                <div className="offer-image-wrap">
                  <img src={offer.image} alt={offer.title} className="offer-image" />
                </div>
                <div className="offer-body">
                  <h3>{offer.title}</h3>
                  <p>{offer.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-head split">
            <div>
              <p className="eyebrow">PROCESS</p>
              <h2>A seller page should explain the path in seconds.</h2>
            </div>
            <p>This is the heart of the new concept: low friction, clear expectations, and obvious next steps.</p>
          </div>

          <div className="process-grid simple-process-grid">
            {processSteps.map((step, index) => (
              <article key={step.title} className="process-card premium-surface">
                <span className="process-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="section-head split">
            <div>
              <p className="eyebrow">PRICING</p>
              <h2>Generic pricing by device and delivery type.</h2>
            </div>
            <p>Not final quotes, just simple guide rails so people can self-sort before filling out the order form.</p>
          </div>

          <div className="pricing-simple-grid">
            {pricingCards.map((item) => (
              <article key={item.title} className="pricing-simple-card premium-surface">
                <div className="offer-image-wrap">
                  <img src={item.image} alt={item.title} className="offer-image" />
                </div>
                <div className="offer-body">
                  <p className="comparison-label">{item.price}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-head split">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>Answer the obvious questions and get out of the way.</h2>
            </div>
            <p>No overexplaining. Just enough clarity to reduce hesitation.</p>
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

        <section className="section legacy-callout simple-callout" id="contact">
          <div className="callout-card">
            <p className="eyebrow">READY TO ORDER?</p>
            <h2>Use the form and tell us what you want built, preserved, or cleaned up.</h2>
            <p>The whole page now points to one job: get the right person to the right form with the least friction possible.</p>
            <div className="hero-actions centered">
              <a className="button-link" href={orderFormUrl} target="_blank" rel="noreferrer">Open Order Form</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
