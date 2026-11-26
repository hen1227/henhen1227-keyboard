import React from 'react';
import Icon, { BrandMark } from './Icon';

/** Wires carrying signal: a faint base line and a spectrum pulse flowing along it. */
function Wires({ paths, className }) {
  return (
    <svg className={`routing-wires ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${className}-flow`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#6f7bff" />
          <stop offset="0.5" stopColor="#b26bff" />
          <stop offset="1" stopColor="#ea63d8" />
        </linearGradient>
      </defs>
      {paths.map((d) => (
        <g key={d}>
          <path d={d} className="wire-base" />
          <path d={d} className="wire-flow" stroke={`url(#${className}-flow)`} />
        </g>
      ))}
    </svg>
  );
}

/** Your voice and your sounds, mixed in KeySoundboard, heard in your other apps — the app's
 *  routing diagram in the same three hues. */
export default function RoutingDiagram() {
  return (
    <div
      className="routing-diagram"
      role="img"
      aria-label="Your microphone and sound effects mix in KeySoundboard and flow to your voice chat, stream, or recording app."
    >
      <div className="routing-inputs">
        <div className="routing-node surface-card">
          <span className="icon-tile" style={{ '--tint': 'var(--accent)' }}>
            <Icon name="mic" size={17} />
          </span>
          <span>
            <strong>Your voice</strong>
            <small>Pitch & reverb, live</small>
          </span>
        </div>
        <div className="routing-node surface-card">
          <span className="icon-tile" style={{ '--tint': 'var(--accent-violet)' }}>
            <Icon name="speaker" size={17} />
          </span>
          <span>
            <strong>Your sounds</strong>
            <small>One key away</small>
          </span>
        </div>
      </div>
      <Wires className="wires-in" paths={['M0 25 C 55 25, 45 50, 100 50', 'M0 75 C 55 75, 45 50, 100 50']} />
      <div className="routing-center">
        <span className="routing-center-glow" aria-hidden="true" />
        <BrandMark size={52} />
        <strong>KeySoundboard</strong>
        <small>The perfect mix</small>
      </div>
      <Wires className="wires-out" paths={['M0 50 H100']} />
      <div className="routing-output surface-card">
        <span className="icon-tile" style={{ '--tint': 'var(--accent-cyan)' }}>
          <Icon name="headphones" size={18} />
        </span>
        <strong>Discord, OBS, Zoom</strong>
        <small>and your other apps</small>
      </div>
    </div>
  );
}
