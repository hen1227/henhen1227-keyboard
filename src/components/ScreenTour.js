import React, { useCallback, useRef, useState } from 'react';
import Icon from './Icon';
import AppScreenshot from './AppScreenshot';
import { useOnScreenInterval } from '../lib/motion';
import './ScreenTour.css';

const screens = [
  {
    id: 'board',
    label: 'Soundboards',
    icon: 'grid',
    title: 'Every sound, one key away.',
    text: 'Each sound gets a card: its shortcut, its length, and how you have tuned it. Press play, or press the key from any app.',
    points: ['Drag in MP3, WAV, M4A or AIFF', 'Shortcuts that work in any app', 'See what is playing, and stop it'],
  },
  {
    id: 'audio',
    label: 'Audio',
    icon: 'mic',
    title: 'Your voice, in the mix.',
    text: 'Pick your mic, give it some character, and send it — with your sounds — to Discord, OBS, Zoom and anything else that listens.',
    points: ['Live mic with mute shortcut', 'Pitch, reverb and ducking', 'Built-in virtual audio driver'],
  },
  {
    id: 'home',
    label: 'Home',
    icon: 'house',
    title: 'Everything at a glance.',
    text: 'Whether your shortcuts are live, your mic is on and your audio is connected — and every board, a click away.',
    points: ['Status you can trust', 'Quick actions', 'All your boards in one place'],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'gear',
    title: 'Made to fit how you play.',
    text: 'Global shortcuts, heads-up popups, a mute badge that floats over your game, and the options that matter — in plain switches.',
    points: ['Stop-all and pause shortcuts', 'Popups and mute badge', 'Open at login'],
  },
];

/** The app, screen by screen — real screenshots, in dark or light, behind a macOS-style control. */
export default function ScreenTour() {
  const [active, setActive] = useState(0);
  const [appearance, setAppearance] = useState('dark');
  const [isAuto, setIsAuto] = useState(true);
  const section = useRef(null);
  const advance = useCallback(() => {
    if (isAuto) setActive((current) => (current + 1) % screens.length);
  }, [isAuto]);
  useOnScreenInterval(section, advance, 7000);
  const screen = screens[active];

  const choose = (index) => {
    setIsAuto(false);
    setActive(index);
  };

  return (
    <section className="section tour-section" id="tour" ref={section}>
      <div className="container">
        <div className="tour-heading reveal">
          <div className="eyebrow">A closer look</div>
          <h2 className="section-heading">
            Feels right at home
            <br />
            <span className="spectrum-text">on your Mac.</span>
          </h2>
          <p className="section-copy">
            Native through and through: a real sidebar, real switches, light and dark, and the
            shortcuts you already know.
          </p>
        </div>

        <div className="tour-controls reveal" style={{ '--delay': '0.08s' }}>
          <div className="segmented" role="tablist" aria-label="App screens">
            <span
              className="segmented-thumb"
              style={{ '--index': active, '--count': screens.length }}
              aria-hidden="true"
            />
            {screens.map((item, index) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={index === active}
                aria-controls="tour-panel"
                className={index === active ? 'is-active' : ''}
                onClick={() => choose(index)}
              >
                <Icon name={item.icon} size={15} />
                {item.label}
              </button>
            ))}
          </div>
          <div className="appearance-toggle" role="group" aria-label="Appearance">
            <button
              aria-pressed={appearance === 'light'}
              onClick={() => setAppearance('light')}
              title="Light appearance"
            >
              <Icon name="sun" size={15} />
            </button>
            <button
              aria-pressed={appearance === 'dark'}
              onClick={() => setAppearance('dark')}
              title="Dark appearance"
            >
              <Icon name="moon" size={15} />
            </button>
          </div>
        </div>

        <div className="tour-body" id="tour-panel" role="tabpanel">
          <div className="tour-stage reveal" style={{ '--delay': '0.12s' }}>
            <div className="tour-glow" aria-hidden="true" />
            {screens.map((item, index) => (
              <div
                key={item.id}
                className={`tour-shot ${index === active ? 'is-active' : ''}`}
                aria-hidden={index !== active}
              >
                {['dark', 'light'].map((mode) => (
                  <AppScreenshot
                    key={mode}
                    name={item.id}
                    appearance={mode}
                    className={mode === appearance ? 'is-shown' : ''}
                    sizes="(max-width: 1000px) 100vw, 1100px"
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="tour-caption" key={screen.id}>
            <h3>{screen.title}</h3>
            <p>{screen.text}</p>
            <ul>
              {screen.points.map((point) => (
                <li key={point}>
                  <Icon name="check" size={14} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
