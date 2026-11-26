import React from 'react';
import Icon from './Icon';
import './HudPopup.css';

/**
 * The heads-up popup KeySoundboard floats over whatever app you are in when a shortcut plays a
 * sound — NotificationPopupView in the app, drawn here in HTML so it can come and go.
 */
export default function HudPopup({ sound, className = '', style }) {
  if (!sound) return null;
  return (
    <div className={`hud ${className}`} style={style} aria-hidden="true">
      <span className="hud-glyph">
        <Icon name="speaker" size={17} />
      </span>
      <span className="hud-text">
        <strong>{sound.name}</strong>
        <span className="hud-subtitle">{sound.board}</span>
        <span className="hud-meta">
          <kbd className="keycap keycap-xs">{sound.key}</kbd>
          {sound.duration && <span>{sound.duration}</span>}
          <span>Stop: ⌥.</span>
        </span>
      </span>
    </div>
  );
}
