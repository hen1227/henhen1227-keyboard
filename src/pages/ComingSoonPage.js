import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { SUPPORT_URL } from '../config';
import './Pages.css';

export default function ComingSoonPage() {
  return (
    <div className="container page-header centered simple-page">
      <div className="eyebrow">An idea in the making</div>
      <h1>
        Something’s
        <br />
        <span>taking shape.</span>
      </h1>
      <p>
        This project isn’t available yet. In the meantime, there’s a whole soundboard to play with.
      </p>
      <div className="button-row">
        <Link className="button" to="/">
          Meet KeySoundboard
          <Icon name="arrow" size={17} />
        </Link>
        <a className="text-link" href={SUPPORT_URL}>
          Get in touch
          <Icon name="external" size={15} />
        </a>
      </div>
    </div>
  );
}
