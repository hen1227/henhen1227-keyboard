import React from 'react';
import Icon from './Icon';
import AppScreenshot from './AppScreenshot';
import './Showcase.css';

/** Copy on one side, a real screenshot of the app on the other. */
export default function Showcase({ eyebrow, title, copy, points = [], shot, alt, reversed = false }) {
  return (
    <section className={`section container showcase ${reversed ? 'is-reversed' : ''}`}>
      <div className="showcase-copy reveal">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="section-heading">{title}</h2>
        <p className="section-copy">{copy}</p>
        {points.length > 0 && (
          <ul>
            {points.map((point) => (
              <li key={point}>
                <Icon name="check" size={14} />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="showcase-shot reveal" style={{ '--delay': '0.1s' }}>
        <div className="showcase-glow" aria-hidden="true" />
        <AppScreenshot name={shot} alt={alt} sizes="(max-width: 1000px) 100vw, 760px" />
      </div>
    </section>
  );
}
