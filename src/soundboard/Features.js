import React from 'react';
import './Features.css';
import FeatureItem from './FeatureItem';
import Head from './pages/Head'
import {Button} from "../components/Button";


export default function Features() {
  return <>
    <Head/>
      <div className='features'>
          <div className='features-title'>
              <h1 style={{color: "#fff"}}>KeySoundboard</h1>
              <br/>
              <p>KeySoundboard allows you to play sound files at the press of a button.</p>
          </div>

          <div className='features__container'>
              <ul className='features__items'>
                  <FeatureItem
                      src={'/images/soundControl.png'}
                      alt="Sound Control"
                      text="Control the sound effect's speed, reverb, and volume"
                  />
                  <FeatureItem
                      src={'/images/keybinds.png'}
                      alt="Keybinds"
                      text='Set sounds to play on any keybind'
                  />
                  <FeatureItem
                      src={'/images/keypad.jpg'}
                      alt="Keypad"
                      text='Fully compatible with numpads too!'
                  />
                  <FeatureItem
                      src={'/images/MLGHorn.png'}
                      alt="Keybinds"
                      text='Play your favorite sounds with their assigned keybinds in ANY window'
                  />
              </ul>
          </div>
          <div className='features__container'>
              <ul className='features__items'>
                  <FeatureItem
                      src={'/images/combineAudio.png'}
                      alt="Audiowaves merging into microphone"
                      text="Combine your microphone audio with sound effects and play it to a virtual microphone"
                  />
                  <FeatureItem
                      src={'/images/multipleOutputs.png'}
                      alt="Three apps with sound waves coming out of them connecting to keysoundboard app icon"
                      text="Play sounds outloud and in voice calls and streams"
                      learnMore={'/soundboard/driver'}
                  />
                  <FeatureItem
                      src={'/images/sparkleMicrophone.png'}
                      alt="Sparkles surrounding a microphone"
                      text='Add effects to your voice such as low pitch and high reverb'
                  />
              </ul>
          </div>
          <div className='hero-btns' style={{paddingBottom: '40px'}}>
              <Button
                  className='btns'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
                  destination='/soundboard/'
              >
                  KEYSOUNDBOARD
              </Button>
              <Button
                  className='btns'
                  buttonStyle='btn--primary'
                  buttonSize='btn--large'
                  localDestination={false}
                  destination="https://apps.apple.com/us/app/keysoundboard/id1636744123?mt=12"
              >
                  VIEW ON APP STORE
              </Button>
          </div>
          {/* <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <h1 style={{color:"#fff"}}>Coming soon!</h1>
      <div className='features__container'>
            <ul className='features__items'>
      <FeatureItem
        src={'/soundboard/main/keypad.jpg'}
        alt="Keypad"
        text='Fully compatible with numpads too!'
        />
        <FeatureItem
        src={'/soundboard/main/MLGHorn.png'}
        alt="Keybinds"
        text='Play your favorite sounds with their assigned keybinds in ANY window'
        />
        </ul>
        </div> */}
      </div>
  </>
}
