import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import DownloadCTA from '../components/DownloadCTA';
import Showcase from '../components/Showcase';
import { APP_STORE_URL } from '../config';
import { useOnScreenInterval } from '../lib/motion';
import './Features.css';

/** A sound card as the app draws it, playing on a loop. */
function KeyVisual() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const tick = useCallback(() => {
    setPlaying(true);
    window.setTimeout(() => setPlaying(false), 1600);
  }, []);
  useOnScreenInterval(ref, tick, 3200);
  return (
    <div className="key-visual" aria-hidden="true" ref={ref}>
      <div className={`mini-card ${playing ? 'is-playing' : ''}`}>
        <div className="mini-card-top">
          <div>
            <strong>
              {playing && <Icon name="wave" size={13} className="mini-card-wave" />}
              Air Horn
            </strong>
            <small>2.1s · MP3</small>
          </div>
          <span className="mini-play">
            <Icon name={playing ? 'stop' : 'play'} size={14} />
            {playing && <i className="mini-ring" />}
          </span>
        </div>
        <div className="mini-card-foot">
          <Icon name="keyboard" size={14} />
          <kbd className={`keycap keycap-sm ${playing ? 'is-pressed' : ''}`}>⌥1</kbd>
        </div>
      </div>
    </div>
  );
}
/** The sliders from the sound editor, settling on their values. */
function MixerVisual() {
  return (
    <div className="mixer-visual" aria-hidden="true">
      {[
        ['Volume', '82%', 82, 'var(--accent)', 'speaker'],
        ['Speed', '1.2×', 58, 'var(--accent-violet)', 'bolt'],
        ['Reverb', '24%', 24, '#40c8c0', 'sparkles'],
        ['Pitch', '+200 ct', 66, '#ff9f5a', 'sliders'],
      ].map(([name, value, width, tint, icon], index) => (
        <div className="mixer-row" key={name} style={{ '--tint': tint, '--value': `${width}%`, '--i': index }}>
          <span className="icon-tile" style={{ '--tint': tint }}>
            <Icon name={icon} size={14} />
          </span>
          <span className="mixer-name">{name}</span>
          <div className="mixer-track">
            <i />
          </div>
          <b>{value}</b>
        </div>
      ))}
    </div>
  );
}
/** The app's sidebar of boards, each in its own colour. */
function LibraryVisual() {
  return (
    <div className="library-visual" aria-hidden="true">
      <span className="library-heading">Soundboards</span>
      {[
        ['Stream Essentials', 12, '#7c7dff', true],
        ['Game Night', 8, '#b26bff', false],
        ['The Group Chat', 24, '#ea63d8', false],
        ['Podcast Stingers', 6, '#59dcff', false],
      ].map(([name, count, tint, selected]) => (
        <div className={`library-row ${selected ? 'is-selected' : ''}`} key={name}>
          <span className="icon-tile" style={{ '--tint': selected ? '#fff' : tint }}>
            <Icon name="grid" size={12} />
          </span>
          <span>{name}</span>
          <small>{count}</small>
        </div>
      ))}
    </div>
  );
}

export function FeatureGrid() {
  return (
    <div className="feature-grid">
      <article className="feature-card feature-keyboard surface-card spotlight reveal">
        <div className="feature-label">
          <Icon name="keyboard" size={18} />
          <span>ALWAYS WITHIN REACH</span>
          <span>01</span>
        </div>
        <KeyVisual />
        <div className="feature-card-copy">
          <h3>Big moments. Small shortcuts.</h3>
          <p>Give any sound its own keybind. Trigger it from any app, without missing a beat.</p>
        </div>
      </article>
      <article className="feature-card feature-mixer surface-card spotlight reveal" style={{ '--delay': '0.08s' }}>
        <div className="feature-label">
          <Icon name="sliders" size={18} />
          <span>MAKE IT YOURS</span>
          <span>02</span>
        </div>
        <MixerVisual />
        <div className="feature-card-copy">
          <h3>Your sound. Fine-tuned.</h3>
          <p>
            A little faster. A little louder. A lot more reverb. Dial in every sound until it feels
            right.
          </p>
        </div>
      </article>
      <article className="feature-card feature-library surface-card spotlight reveal" style={{ '--delay': '0.16s' }}>
        <div className="feature-label">
          <Icon name="folder" size={18} />
          <span>ROOM FOR EVERY MOOD</span>
          <span>03</span>
        </div>
        <LibraryVisual />
        <div className="feature-card-copy">
          <h3>A home for your greatest hits.</h3>
          <p>
            Drag in your audio files and organize them into soundboards. Keep your favorites at your
            fingertips.
          </p>
        </div>
      </article>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="section container" id="features">
      <div className="section-topline reveal">
        <div>
          <div className="eyebrow">Small app. Big personality.</div>
          <h2 className="section-heading">
            Everything you need.
            <br />
            <span className="spectrum-text">Right at your fingertips.</span>
          </h2>
        </div>
        <Link to="/soundboard/features" className="text-link">
          Meet your new soundboard <Icon name="arrow" size={17} />
        </Link>
      </div>
      <FeatureGrid />
      <div className="feature-footline reveal">
        <span>
          <Icon name="apple" size={14} /> Built for macOS
        </span>
        <span>
          <Icon name="upload" size={14} /> Drag. Drop. Play.
        </span>
        <span>
          <Icon name="headphones" size={14} /> Speakers, headphones & virtual audio
        </span>
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <>
      <div className="container page-header reveal">
        <div className="eyebrow">A closer look</div>
        <h1>
          Serious about sound.
          <br />
          <span>Playful about everything else.</span>
        </h1>
        <p>
          From the first file you drop in to the perfectly timed sound effect, KeySoundboard keeps
          the good stuff one keystroke away.
        </p>
        <div className="button-row">
          <a className="button" href={APP_STORE_URL}>
            <Icon name="apple" size={18} />
            Get for Mac
            <Icon name="external" size={16} />
          </a>
        </div>
      </div>
      <section className="container features-page-grid" aria-label="Soundboard features">
        <FeatureGrid />
      </section>
      <Showcase
        eyebrow="Shape every sound"
        title={
          <>
            Trim it. Tune it.
            <br />
            <span className="spectrum-text">Make it yours.</span>
          </>
        }
        copy="Cut a clip down to the good part, fade it out, and set its volume, speed, pitch and reverb. Preview it on your Mac before anyone else hears it."
        points={[
          'Trim and fade with a live waveform',
          'Volume, speed, pitch and reverb per sound',
          'Choose who hears it: you, your call, or both',
        ]}
        shot="edit-sound"
        alt="KeySoundboard’s sound editor: a waveform with trim handles, preview buttons and the sound’s file."
      />
      <section className="section container detail-features">
        <div className="reveal">
          <span className="eyebrow">Your files. Your collection.</span>
          <h2 className="section-heading">
            Bring your own
            <br />
            kind of funny.
          </h2>
          <p className="section-copy">
            Add a single clip or drag a whole collection into your soundboard. Build separate boards
            for game night, your next stream, or a very specific inside joke.
          </p>
          <div className="format-tags">
            <span>MP3</span>
            <span>WAV</span>
            <span>M4A</span>
            <span>AIFF</span>
          </div>
        </div>
        <div className="import-visual reveal" aria-hidden="true" style={{ '--delay': '0.1s' }}>
          <div className="drop-zone">
            <span className="drop-panel">
              <Icon name="wave" size={30} />
              <strong>Drop to add sounds</strong>
            </span>
          </div>
          <div className="floating-file">
            <span className="icon-tile" style={{ '--tint': 'var(--accent-magenta)' }}>
              <Icon name="speaker" size={16} />
            </span>
            <span>
              <strong>perfect-timing.wav</strong>
              <small>0:02 · WAV</small>
            </span>
          </div>
        </div>
      </section>
      <section className="container extra-features">
        <article className="reveal">
          <span className="icon-tile" style={{ '--tint': 'var(--accent)' }}>
            <Icon name="mic" size={19} />
          </span>
          <h2>A new side to your voice.</h2>
          <p>
            Mix your microphone with your sounds. Add pitch and reverb to give your voice a little
            extra character.
          </p>
          <Link className="text-link" to="/soundboard/driver">
            Meet virtual audio
            <Icon name="arrow" size={15} />
          </Link>
        </article>
        <article className="reveal" style={{ '--delay': '0.08s' }}>
          <span className="icon-tile" style={{ '--tint': 'var(--accent-violet)' }}>
            <Icon name="keyboard" size={19} />
          </span>
          <h2>Your whole keyboard is invited.</h2>
          <p>
            Use custom shortcuts and external numpads. Play sounds while another app is in focus,
            then stop them all with a shortcut.
          </p>
          <Link className="text-link" to="/faq">
            Shortcut questions?
            <Icon name="arrow" size={15} />
          </Link>
        </article>
      </section>
      <DownloadCTA />
    </>
  );
}
