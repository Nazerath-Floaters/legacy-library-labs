import './App.css'

import ps2Base from './assets/legacy/ps2-base.webp'
import ps2Console from './assets/legacy/ps2-console.png'
import rg35xxPlus from './assets/legacy/rg35xxplus.png'
import dvdImage from './assets/legacy/dvd.png'
import vhsImage from './assets/legacy/vhs.png'
import computerImage from './assets/legacy/computer.png'
import usbImage from './assets/legacy/usb.png'
import fanGame1 from './assets/legacy/fan-game-1.webp'

const orderFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScoQfgOt2XlIcp3LDK-njbH1TpxoZin3h4Z6-2fkQoRd0g9DA/viewform?usp=header'

const serviceCards = [
  {
    title: 'Piano Console',
    image: ps2Base,
    imageClass: 'piano-image',
    description: [
      'Our flagship all in one bundle package.',
      'Emulation from Sega Genesis to PS3.',
      'VHS, DVD, and Blu-ray media playback.',
      'Includes Pocket control for play on the go.',
      'Save sync across all devices.',
    ],
    price: '$185 - $699',
    power: 'MIN-MAX',
  },
  {
    title: 'Archive Service',
    image: vhsImage,
    secondaryImage: dvdImage,
    description: [
      'Convert your media to digital assets playable from your new pocket TV.',
      'Beat your own cartridge games.',
      'Record streaming subscriptions.',
      'Build a home and mobile TV anywhere.',
    ],
    price: '$65 + $2.50 per digitization',
    power: 'ARCHIVE',
  },
  {
    title: 'Fan Games',
    image: fanGame1,
    imageClass: 'fan-image',
    description: [
      'Experience your games in exciting new ways.',
      'Old games remastered by fans.',
      'ROM hacks of classic cartridge games.',
      'LAN MMO-RPG servers.',
      'New fan games built from the ground up.',
    ],
    price: 'At Cost ($0.00 Upsale)',
    power: 'CUSTOM',
  },
]

const aboutPoints = [
  'Preserve old media before they are tarnished from aging.',
  'Unhook the minds of the next generation from the latest media sensations from social media and streaming services.',
  'Return ownership of entertainment back to the customer.',
  'Make nostalgia an investment instead of a commercialized honeypot for consumer exploitation.',
]

function App() {
  return (
    <div className="poster-page">
      <main className="poster-shell">
        <p className="poster-kicker">Legacy Library</p>

        <section className="hero-monitor">
          <div className="hero-screen split-left">
            <div className="screen-copy">
              <p>Video of a classic ps2 game</p>
              <p>4:3 ratio</p>
            </div>
          </div>
          <div className="hero-divider" />
          <div className="hero-screen split-right">
            <div className="screen-copy">
              <p>Video of Star Trek</p>
            </div>
          </div>
          <div className="hero-fade-note">Faded vignette from the bottom</div>
        </section>

        <p className="browse-link">
          Browse Builds or Order Custom NOW: <a href={orderFormUrl} target="_blank" rel="noreferrer">(Link)</a>
        </p>

        <section className="service-grid">
          {serviceCards.map((card) => (
            <div key={card.title} className="service-stack">
              <article className="service-card">
                <h2>{card.title}</h2>
                <div className={`service-image-wrap ${card.imageClass ?? ''}`}>
                  <img src={card.image} alt={card.title} className="service-main-image" />
                  {card.secondaryImage ? (
                    <img src={card.secondaryImage} alt="Media example" className="service-secondary-image" />
                  ) : null}
                </div>
                <div className="service-copy">
                  {card.description.map((line, index) => (
                    <p key={line}>
                      {index === 0 ? line : `${index}. ${line}`}
                    </p>
                  ))}
                </div>
              </article>

              <article className="price-card">
                <p><strong>Price:</strong> {card.price}</p>
                <p><strong>Power:</strong> {card.power}</p>
                <p><strong>Order Form:</strong> <a href={orderFormUrl} target="_blank" rel="noreferrer">LINK</a></p>
              </article>
            </div>
          ))}
        </section>

        <section className="about-card">
          <p className="about-title">About:</p>
          <p className="about-subtitle">LLA (Legacy Archive Library)</p>
          <p>We have four primary objectives:</p>
          <ol>
            {aboutPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ol>
          <p className="support-line">Support and follow us for more info!</p>
        </section>
      </main>
    </div>
  )
}

export default App
