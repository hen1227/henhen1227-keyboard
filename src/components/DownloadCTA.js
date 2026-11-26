import React from 'react';
import Icon from './Icon';
import { APP_STORE_URL } from '../config';

export default function DownloadCTA() {
  return (
    <section className="download-section">
      <div className="download-rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container reveal">
        <img
          className="download-icon"
          src={`${process.env.PUBLIC_URL}/logo512.png`}
          width="104"
          height="104"
          alt=""
          aria-hidden="true"
        />
        <div className="eyebrow">Your keyboard has a fun side.</div>
        <h2>
          Give your moments
          <br />
          <span className="spectrum-text">a soundtrack.</span>
        </h2>
        <p>Your favorite sounds. One keystroke away.</p>
        <a className="button" href={APP_STORE_URL}>
          <Icon name="apple" size={19} />
          Download on the Mac App Store
        </a>
        <small>Available on the Mac App Store · Requires macOS 14 Sonoma or later</small>
      </div>
    </section>
  );
}
