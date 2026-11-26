import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { SUPPORT_URL } from '../config';

export default function NotFoundPage() {
  return (
    <div className="container page-header centered simple-page">
      <div className="error-art" aria-hidden="true">
        4<span>◌</span>4
      </div>
      <div className="eyebrow">A little silence</div>
      <h1>
        This page missed its cue<span>.</span>
      </h1>
      <p>The link might have changed. Let’s get you back to the good sounds.</p>
      <div className="button-row">
        <Link to="/" className="button">
          Back to the soundboard
          <Icon name="arrow" size={17} />
        </Link>
        <a href={SUPPORT_URL} className="text-link">
          Need a hand?
          <Icon name="external" size={15} />
        </a>
      </div>
    </div>
  );
}
