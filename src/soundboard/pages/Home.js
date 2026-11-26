import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../HeroSection';
import { FeaturesSection } from '../Features';
import DriverSection from '../DriverSection';
import Icon from '../../components/Icon';
import FAQList from '../../components/FAQList';
import DownloadCTA from '../../components/DownloadCTA';
import ScreenTour from '../../components/ScreenTour';
import { faqs } from '../../data/faqs';

const stepIcons = ['upload', 'keyboard', 'speaker'];
const stepTints = ['var(--accent)', 'var(--accent-violet)', 'var(--accent-magenta)'];

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="compatibility">
        <div className="container compatibility-inner reveal">
          <p className="compatibility-copy">
            Your sounds, wherever you hang out.{' '}
            <br />
            <strong>Connect with virtual audio.</strong>
          </p>
          <div className="compatibility-apps">
            <span>
              <Icon name="gamepad" size={25} />
              Discord
            </span>
            <span>
              <Icon name="broadcast" size={24} />
              OBS Studio
            </span>
            <span>
              <Icon name="chat" size={23} />
              Zoom
            </span>
            <span>
              <Icon name="mic" size={22} />
              Streamlabs
            </span>
            <span>And your favorite apps.</span>
          </div>
        </div>
      </div>
      <FeaturesSection />
      <ScreenTour />
      <section className="section steps-section">
        <div className="container">
          <div className="section-topline reveal">
            <div>
              <div className="eyebrow">Less setup. More play.</div>
              <h2 className="section-heading">
                From “what if” to <span className="spectrum-text">“play that.”</span>
              </h2>
            </div>
            <p>Make your first soundboard in a few simple steps. The timing? That’s all you.</p>
          </div>
          <div className="steps-grid">
            {[
              [
                '01',
                'Drop in your sounds.',
                'That legendary clip. Your favorite effect. Drag your audio files into a board and give them a home.',
              ],
              [
                '02',
                'Give them a shortcut.',
                'Pick a key or a combination. Adjust the volume, speed, and reverb to get things just right.',
              ],
              [
                '03',
                'Make the moment.',
                'Press your shortcut from any app. Add virtual audio when you’re ready to share the fun.',
              ],
            ].map(([number, title, text], index) => (
              <article
                className="step-item surface-card spotlight reveal"
                key={number}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <span className="step-icon icon-tile" style={{ '--tint': stepTints[index] }}>
                  <Icon name={stepIcons[index]} size={18} />
                </span>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <DriverSection />
      <section className="section container home-faq">
        <div className="reveal">
          <div className="eyebrow">A few good questions</div>
          <h2 className="section-heading">
            Before you
            <br />
            <span className="spectrum-text">press play.</span>
          </h2>
          <p className="section-copy">
            A little clarity, so you can get straight to the good part.
          </p>
          <Link to="/faq" className="text-link">
            All questions & answers
            <Icon name="arrow" size={17} />
          </Link>
        </div>
        <FAQList items={[faqs[1], faqs[2], faqs[3], faqs[4]]} />
      </section>
      <DownloadCTA />
    </>
  );
}
