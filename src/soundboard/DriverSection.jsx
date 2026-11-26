import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import RoutingDiagram from '../components/RoutingDiagram';
import './DriverSection.css';

export default function DriverSection() {
  return (
    <section className="driver-section">
      <div className="container driver-grid">
        <div className="reveal">
          <div className="eyebrow">Let everyone in on the fun</div>
          <h2 className="section-heading">
            Sounds better
            <br />
            <span className="spectrum-text">together.</span>
          </h2>
          <p className="section-copy">
            Your mic, your sound effects, one happy mix. The built-in virtual audio driver brings it
            all into your voice chats, streams, and recordings.
          </p>
          <Link to="/soundboard/driver" className="text-link">
            Get your audio connected
            <Icon name="arrow" size={18} />
          </Link>
          <div className="driver-note">
            <Icon name="check" size={13} />
            Built into KeySoundboard. No separate installer.
          </div>
        </div>
        <div className="reveal" style={{ '--delay': '0.1s' }}>
          <RoutingDiagram />
        </div>
      </div>
    </section>
  );
}
