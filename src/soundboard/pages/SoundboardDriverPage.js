import React from 'react';
import Icon from '../../components/Icon';
import RoutingDiagram from '../../components/RoutingDiagram';
import Showcase from '../../components/Showcase';
import FAQList from '../../components/FAQList';
import { LEGACY_UNINSTALLER_URL, SUPPORT_URL } from '../../config';
import { faqs } from '../../data/faqs';
import '../DriverSection.css';
import './SoundboardDriverPage.css';
import '../../pages/Pages.css';

const steps = [
  {
    title: 'Activate the built-in driver.',
    text: (
      <>
        Open <strong>KeySoundboard → Settings</strong> and choose <strong>Activate Driver</strong>.
        There’s no separate driver installer to download.
      </>
    ),
    note: (
      <>
        If macOS asks for approval, open <strong>System Settings → Privacy & Security</strong> and
        approve the KeySoundboard extension. Follow any restart instructions macOS displays.
      </>
    ),
  },
  {
    title: 'Bring your microphone into the mix.',
    text: (
      <>
        Enable your microphone in KeySoundboard and select the physical mic you want to use. Allow
        microphone access when macOS requests it.
      </>
    ),
    note: (
      <>
        KeySoundboard mixes your voice, voice effects, and sound clips. It normally selects its own
        virtual output automatically unless you intentionally chose another available output.
      </>
    ),
  },
  {
    title: 'Choose KeySoundboard in your other app.',
    text: (
      <>
        In your voice-chat, streaming, or recording app, open audio settings and select{' '}
        <strong>KeySoundboard</strong> as the microphone or input device.
      </>
    ),
    note: (
      <>
        Keep your normal headphones or speakers selected for that app’s output, so you can still
        hear everyone else.
      </>
    ),
  },
  {
    title: 'Give it a quick sound check.',
    text: (
      <>
        Play a clip and speak into your mic. Check the input meter or microphone test in your other
        app to confirm that both come through.
      </>
    ),
    note: (
      <>
        If your app filters out a sound effect, check its noise suppression and automatic input
        sensitivity settings.
      </>
    ),
  },
];

export default function SoundboardDriverPage() {
  return (
    <>
      <div className="container page-header driver-page-header">
        <div>
          <div className="eyebrow">The built-in virtual audio driver</div>
          <h1>
            Your sound.
            <br />
            <span className="spectrum-text">In good company.</span>
          </h1>
          <p>
            Bring your voice and your favorite effects into calls, streams, and recordings. Here’s
            how to connect the dots.
          </p>
          <a href="#setup" className="button">
            Let’s get connected
            <Icon name="arrow" size={17} />
          </a>
        </div>
        <RoutingDiagram />
      </div>
      <div className="container setup-layout" id="setup">
        <aside className="setup-sidebar">
          <span className="eyebrow">Your setup guide</span>
          <h2>
            One mix.
            <br />
            Every moment.
          </h2>
          <p>
            The virtual microphone carries your complete KeySoundboard mix into any app that lets
            you choose an audio input.
          </p>
          <div className="setup-check">
            <Icon name="check" size={16} />
            <span>Built into the Mac app</span>
          </div>
          <div className="setup-check">
            <Icon name="check" size={16} />
            <span>No separate installer</span>
          </div>
          <a href={SUPPORT_URL} className="text-link">
            Need help connecting?
            <Icon name="external" size={15} />
          </a>
        </aside>
        <div className="setup-steps">
          {steps.map((step, index) => (
            <article className="setup-step" key={step.title}>
              <span className="setup-step-number">0{index + 1}</span>
              <div>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
                <p className="step-note">{step.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Showcase
        reversed
        eyebrow="See it in the app"
        title={
          <>
            Every route,
            <br />
            <span className="spectrum-text">in plain sight.</span>
          </>
        }
        copy="The Audio screen follows your mic and your sounds through their effects to each output, live — so you can see at a glance that your call will hear you."
        points={['Your mic, its effects, and its level', 'Where every sound goes', 'Pick your input and the app output']}
        shot="audio"
        alt="KeySoundboard’s Audio screen: the live microphone, a routing diagram from sources through effects to outputs, and device pickers."
      />
      <section className="container driver-manage">
        <div>
          <div className="eyebrow">You’re in control</div>
          <h2 className="section-heading">A little housekeeping.</h2>
          <p className="section-copy">
            Check driver status, retry activation, or deactivate the driver in KeySoundboard
            Settings. If a restart is needed, macOS will let you know.
          </p>
        </div>
        <div className="legacy-panel" id="uninstall">
          <div className="eyebrow muted">Moving from an older version?</div>
          <h3>Keep the new. Clear out the old.</h3>
          <p>
            If KeySoundboard reports that its older audio plug-in is still present, activate and
            select the new built-in driver first. Then use the legacy cleanup package. It asks for
            an administrator password and restarts macOS audio, which drops any call or stream in
            progress — run it between calls, then open KeySoundboard again.
          </p>
          <a className="button button-secondary button-small" href={LEGACY_UNINSTALLER_URL}>
            Download legacy uninstaller
            <Icon name="external" size={15} />
          </a>
          <small>
            This is only for older installations. The uninstaller checks the old bundle’s identifier
            and executable before removing it, leaving unrelated audio drivers alone.
          </small>
        </div>
      </section>
      <section className="container driver-faq">
        <h2 className="section-heading">One more thing?</h2>
        <FAQList items={[faqs[4], faqs[6], faqs[7]]} />
      </section>
      <div className="container driver-foundation">
        <Icon name="wave" size={18} />
        <p>
          The current driver is KeySoundboard’s own AudioDriverKit extension, based on{' '}
          <a href="https://developer.apple.com/documentation/audiodriverkit/creating-an-audio-device-driver">
            Apple’s permissively licensed audio driver sample
          </a>
          .
        </p>
      </div>
    </>
  );
}
