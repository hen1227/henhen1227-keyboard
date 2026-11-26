import React from 'react';
import { screenshots } from '../data/screenshots';

/**
 * A real screenshot of KeySoundboard, rendered from the app's own SwiftUI views (window shadow
 * and all, on a transparent background). Each comes in a full 2x size and a lighter one.
 */
export default function AppScreenshot({
  name,
  appearance = 'dark',
  alt,
  className = '',
  sizes = '(max-width: 900px) 100vw, 60vw',
  priority = false,
}) {
  const shot = screenshots[name];
  if (!shot) return null;
  const base = `${process.env.PUBLIC_URL}/images/app/${appearance}/${name}`;
  return (
    <img
      className={`app-shot ${className}`}
      src={`${base}.webp`}
      srcSet={`${base}-small.webp ${Math.round(shot.width / 2)}w, ${base}.webp ${shot.width}w`}
      sizes={sizes}
      width={shot.width}
      height={shot.height}
      alt={alt ?? shot.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      draggable="false"
    />
  );
}
