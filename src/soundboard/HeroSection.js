import React, { useCallback, useRef, useState } from 'react';
import Icon, { BrandMark } from '../components/Icon';
import AppScreenshot from '../components/AppScreenshot';
import HudPopup from '../components/HudPopup';
import { demoSounds } from '../data/demo';
import { useOnScreenInterval } from '../lib/motion';
import { APP_STORE_URL } from '../config';
import './HeroSection.css';

/** A shortcut pressed, its sound announced: the loop the app runs every time you play. */
function useDemoLoop(stageRef) {
  const [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  const tick = useCallback(() => {
    setPressed(true);
    window.setTimeout(() => setPressed(false), 220);
    setIndex((current) => (current + 1) % demoSounds.length);
  }, []);
  useOnScreenInterval(stageRef, tick, 2800);
  return { sound: demoSounds[index], index, pressed };
}

export default function HeroSection() {
  const stage = useRef(null);
  const { sound, index, pressed } = useDemoLoop(stage);
  const [modifier, key] = [sound.key.slice(0, 1), sound.key.slice(1)];

  return (
    <section className="hero-section">
      <div className="hero-aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="hero-badge reveal">
            <BrandMark size={20} />
            <span>A soundboard. Made for Mac.</span>
          </div>
          <h1 className="reveal" style={{ '--delay': '0.06s' }}>
            Every moment.
            <br />
            <span className="spectrum-text">On cue.</span>
          </h1>
          <p className="reveal" style={{ '--delay': '0.12s' }}>
            The perfect sound, at the perfect time. Turn your keyboard into a soundboard for your
            streams, calls, and everything in between.
          </p>
          <div className="button-row reveal" style={{ '--delay': '0.18s' }}>
            <a className="button" href={APP_STORE_URL}>
              <Icon name="apple" size={19} />
              Get KeySoundboard
            </a>
            <a className="button button-secondary" href="#tour">
              See it in action
              <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="hero-notes reveal" style={{ '--delay': '0.24s' }}>
            <span>
              <Icon name="check" size={14} /> Native macOS app
            </span>
            <span>
              <Icon name="check" size={14} /> Works with Discord, OBS & Zoom
            </span>
          </div>
        </div>

        <div className="hero-stage reveal" style={{ '--delay': '0.1s' }} ref={stage}>
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-window">
            <AppScreenshot name="board" priority sizes="(max-width: 1000px) 100vw, 900px" />
          </div>
          <div className="hero-keys" aria-hidden="true">
            <kbd className={`keycap ${pressed ? 'is-pressed' : ''}`}>{modifier}</kbd>
            <span>+</span>
            <kbd className={`keycap keycap-accent ${pressed ? 'is-pressed' : ''}`}>{key}</kbd>
          </div>
          <HudPopup key={index} sound={sound} className="hero-hud" />
        </div>
      </div>
    </section>
  );
}
