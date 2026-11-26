import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import './App.css';
import './pages/Pages.css';
import SoundboardPage from './soundboard/pages/Home';
import FeaturesPage from './soundboard/Features';
import DriverPage from './soundboard/pages/SoundboardDriverPage';
import FAQPage from './pages/FAQPage';
import UpdatesPage from './pages/UpdatesPage';
import ComingSoonPage from './pages/ComingSoonPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './Navbar';
import Footer from './Footer';
import { SUPPORT_URL } from './config';
import { useScrollReveal, useSpotlight } from './lib/motion';

const pageInfo = {
  '/': [
    'KeySoundboard — Every moment. On cue.',
    'Turn your Mac keyboard into a soundboard. Play your audio with custom shortcuts, fine-tune your effects, and share your mix in calls and streams.',
  ],
  '/soundboard/features': [
    'Features — KeySoundboard',
    'Custom keybinds, your own audio files, sound effects, microphone mixing, and virtual audio. Explore KeySoundboard for Mac.',
  ],
  '/soundboard/driver': [
    'Audio setup — KeySoundboard',
    'Set up the built-in KeySoundboard virtual audio driver and share your microphone and sound effects in calls, streams, and recordings.',
  ],
  '/faq': [
    'Questions & answers — KeySoundboard',
    'Find help with KeySoundboard shortcuts, sound files, microphone access, virtual audio, and more.',
  ],
  '/contact': [
    'Support — KeySoundboard',
    'KeySoundboard support lives at henhen1227.com/support.',
  ],
  '/updates': [
    'What’s new — KeySoundboard',
    'Find the latest KeySoundboard release information and audio setup guidance.',
  ],
  '/autoclicker': [
    'Coming soon — KeySoundboard',
    'Explore more projects from the maker of KeySoundboard.',
  ],
  '/macros': [
    'Coming soon — KeySoundboard',
    'Explore more projects from the maker of KeySoundboard.',
  ],
};
// Support now lives on henhen1227.com; saved links to /contact still land there.
function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}

let analyticsStarted = false;
function RouteEffects() {
  const { pathname, search, hash, key } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    const [title, description] = pageInfo[pathname] || [
      'Page not found — KeySoundboard',
      'Find your way back to KeySoundboard for Mac.',
    ];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', 'https://keysoundboard.com' + pathname);
    let target = null;
    try {
      target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    } catch {
      /* Invalid fragment: use the top of the page. */
    }
    if (hash === '#install') target = document.getElementById('setup');
    // Route changes should land immediately, even in a background preview tab.
    if (target) target.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (previousPath.current !== pathname)
      document.getElementById('main-content')?.focus({ preventScroll: true });
    previousPath.current = pathname;
    if (
      process.env.NODE_ENV === 'production' &&
      window.location.hostname === 'keysoundboard.com'
    ) {
      if (!analyticsStarted) {
        ReactGA.initialize('G-BJZ1YSP234');
        analyticsStarted = true;
      }
      ReactGA.send({ hitType: 'pageview', page: pathname + search, title });
    }
  }, [pathname, search, hash, key]);
  return null;
}

function MotionEffects() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);
  useSpotlight();
  return null;
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <RouteEffects />
        <MotionEffects />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<SoundboardPage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/soundboard" element={<Navigate to="/" replace />} />
            <Route path="/soundboard/features" element={<FeaturesPage />} />
            <Route path="/soundboard/driver" element={<DriverPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ExternalRedirect to={SUPPORT_URL} />} />
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="/autoclicker" element={<ComingSoonPage />} />
            <Route path="/macros" element={<ComingSoonPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
