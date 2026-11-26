import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { APP_STORE_URL } from '../config';
import './Pages.css';

export default function UpdatesPage() {
  return (
    <>
      <div className="container page-header">
        <div className="eyebrow">Keep the good sounds coming</div>
        <h1>
          Always finding
          <br />
          <span>a better rhythm.</span>
        </h1>
        <p>Find the latest release notes and app version on the Mac App Store.</p>
      </div>
      <div className="container simple-page">
        <article className="notice-panel">
          <Icon name="apple" size={29} />
          <h2>The latest, straight from the source.</h2>
          <p>
            Visit KeySoundboard on the Mac App Store and open Version History to see what changed in
            each release, along with current compatibility and availability.
          </p>
          <a className="button" href={APP_STORE_URL}>
            View on the Mac App Store
            <Icon name="external" size={16} />
          </a>
        </article>
        <article className="notice-panel">
          <Icon name="mic" size={26} />
          <h2>Setting up the built-in audio driver?</h2>
          <p>
            The current setup guide covers driver activation, routing your microphone and sound
            effects, and moving from the legacy audio plug-in.
          </p>
          <Link className="text-link" to="/soundboard/driver">
            Read the audio setup guide
            <Icon name="arrow" size={16} />
          </Link>
        </article>
      </div>
    </>
  );
}
