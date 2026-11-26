import React from 'react';

const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  external: <path d="M7 17 17 7M7 7h10v10" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  headphones: (
    <>
      <path d="M4 14v-3a8 8 0 0 1 16 0v3" />
      <rect x="3" y="12" width="5" height="9" rx="2" />
      <rect x="16" y="12" width="5" height="9" rx="2" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="2" width="6" height="13" rx="3" />
      <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8" />
    </>
  ),
  keyboard: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10" />
    </>
  ),
  wave: <path d="M3 10v4M7 6v12M11 2v20M15 7v10M19 4v16M23 10v4" />,
  sliders: (
    <>
      <path d="M6 3v3m0 4v11M12 3v11m0 4v3M18 3v6m0 4v8" />
      <path d="M3 6h6v4H3zM9 14h6v4H9zM15 9h6v4h-6z" />
    </>
  ),
  folder: (
    <path d="M3 7V5a2 2 0 0 1 2-2h5l3 3h6a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  ),
  upload: (
    <>
      <path d="m7 8 5-5 5 5M12 3v12M4 15v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M12 17v5M7 22h10" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  speaker: (
    <>
      <path d="M11 5 6.5 8.8H3.8A.8.8 0 0 0 3 9.6v4.8c0 .44.36.8.8.8h2.7L11 19V5Z" fill="currentColor" />
      <path d="M15.2 9a4.2 4.2 0 0 1 0 6M18 6.4a8 8 0 0 1 0 11.2" />
    </>
  ),
  play: <path d="M8 5.5v13a.8.8 0 0 0 1.2.7l10.4-6.5a.8.8 0 0 0 0-1.4L9.2 4.8A.8.8 0 0 0 8 5.5Z" fill="currentColor" />,
  stop: <rect x="6.5" y="6.5" width="11" height="11" rx="2" fill="currentColor" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />,
  sparkles: (
    <path d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.7l-1.6-5.5L5 10.6 10.4 9 12 3.5ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
  ),
  bolt: <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" />,
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </>
  ),
  house: <path d="M3.5 10.5 12 3.5l8.5 7V19a1.5 1.5 0 0 1-1.5 1.5h-4v-6H9v6H5A1.5 1.5 0 0 1 3.5 19v-8.5Z" />,
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  gamepad: (
    <>
      <path d="M7 7h10a4 4 0 0 1 4 3l1 6a3 3 0 0 1-5 3l-2-2H9l-2 2a3 3 0 0 1-5-3l1-6a4 4 0 0 1 4-3Z" />
      <path d="M7 10v5M4.5 12.5h5M16 11h.01M19 14h.01" />
    </>
  ),
  chat: <path d="M21 11a9 9 0 0 1-9 9 10 10 0 0 1-4-.9L3 21l1.8-5a9 9 0 1 1 16.2-5Z" />,
  broadcast: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M7 7a7 7 0 0 0 0 10M17 7a7 7 0 0 1 0 10M4 4a11 11 0 0 0 0 16M20 4a11 11 0 0 1 0 16" />
    </>
  ),
  apple: (
    <path d="M16.4 3.2c.8-1 1.3-2.2 1.2-3.2-1.2.1-2.5.8-3.3 1.7-.7.8-1.4 2-1.2 3.1 1.3.1 2.5-.6 3.3-1.6ZM20 17.1c-.5 1.2-.8 1.7-1.5 2.8-.9 1.4-2.1 3.1-3.7 3.1-1.4 0-1.8-.9-3.7-.9s-2.4.9-3.8.9c-1.6 0-2.8-1.6-3.7-3-2.5-3.8-2.8-8.4-1.2-10.8 1.2-1.7 3-2.7 4.8-2.7 1.5 0 2.5.9 3.8.9 1.2 0 2-.9 3.8-.9 1.5 0 3 .8 4.1 2.1-3.6 2-3 7.1 1.1 8.5Z" />
  ),
};

export default function Icon({ name, size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={name === 'apple' ? 'currentColor' : 'none'}
      stroke={name === 'apple' ? 'none' : 'currentColor'}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.wave}
    </svg>
  );
}
export function BrandMark({ size = 30 }) {
  return (
    <img
      className="brand-mark"
      src={`${process.env.PUBLIC_URL}/app-icon-128.png`}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      draggable="false"
    />
  );
}
