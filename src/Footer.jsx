import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { BrandMark } from './components/Icon';
import { APP_STORE_URL, SUPPORT_URL } from './config';
import './Footer.css';

export const openInNewTab = (url) => window.location.assign(url);
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-intro">
          <Link to="/" className="brand">
            <BrandMark />
            <span>
              KeySoundboard<span className="brand-period">.</span>
            </span>
          </Link>
          <p>
            A little sound goes a long way.
            <br />
            Made for your Mac. And your moments.
          </p>
          <span className="made-with">
            Independently made with <Icon name="heart" size={13} />
          </span>
        </div>
        <div className="footer-column">
          <h2>The app</h2>
          <Link to="/soundboard/features">Features</Link>
          <Link to="/soundboard/driver">Audio setup</Link>
          <a href={APP_STORE_URL}>
            Mac App Store <Icon name="external" size={13} />
          </a>
          <Link to="/updates">What’s new</Link>
        </div>
        <div className="footer-column">
          <h2>Good to know</h2>
          <Link to="/faq">Questions & answers</Link>
          <a href={SUPPORT_URL}>
            Get in touch <Icon name="external" size={13} />
          </a>
          <a href="https://henhen1227.com/overview">
            Other projects <Icon name="external" size={13} />
          </a>
          <a href="https://buymeacoffee.com/HenryAbrahamsen">
            Support the developer <Icon name="external" size={13} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Henhen1227, LLC</span>
        <span className="footer-tagline">
          <span className="status-dot" /> Ready when you are.
        </span>
        <div>
          <a href="https://henhen1227.com/privacy">Privacy</a>
          <a href="https://henhen1227.com/terms-of-service">Terms</a>
        </div>
      </div>
    </footer>
  );
}
