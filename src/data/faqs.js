export const faqs = [
  {
    id: 'what',
    category: 'Getting started',
    question: 'What is KeySoundboard?',
    answer: [
      'KeySoundboard is a native Mac app that plays your favorite audio clips with a click or a keyboard shortcut. Create your own soundboards, customize your sounds, and bring them into games, streams, and voice calls.',
    ],
  },
  {
    id: 'files',
    category: 'Getting started',
    question: 'Can I use my own sounds?',
    answer: [
      'Absolutely. Add your MP3, WAV, M4A, or AIFF files, or drag several compatible files straight into a soundboard. Organize your clips into different boards and give each one a shortcut.',
    ],
  },
  {
    id: 'shortcuts',
    category: 'Getting started',
    question: 'Do shortcuts work when I’m in another app?',
    answer: [
      'Yes. KeySoundboard supports global keybinds, so you can trigger a sound while another app is in focus. External keyboards and numpads work too. Grant any keyboard or accessibility permissions requested by KeySoundboard, and choose shortcuts that don’t conflict with the apps you use.',
    ],
  },
  {
    id: 'calls',
    category: 'Audio & microphone',
    question: 'Can my friends hear the sounds in a voice call?',
    answer: [
      'Yes. Activate the built-in audio driver in KeySoundboard Settings and enable your microphone. Then choose KeySoundboard as the microphone input in your voice-chat or streaming app.',
      'KeySoundboard normally selects its own virtual output automatically unless you have intentionally selected another available output.',
    ],
    link: '/soundboard/driver',
    linkText: 'Follow the audio setup guide',
  },
  {
    id: 'driver',
    category: 'Audio & microphone',
    question: 'Do I need to download a separate audio driver?',
    answer: [
      'No. The current audio driver is built into KeySoundboard. Open Settings and choose Activate Driver. The first activation may need approval in System Settings under Privacy & Security.',
      'You can check its status, retry activation, or deactivate it from the same settings panel. macOS will tell you if a restart is required. A legacy uninstaller is available only for people moving from an older release.',
    ],
    link: '/soundboard/driver',
    linkText: 'See setup and legacy instructions',
  },
  {
    id: 'virtual',
    category: 'Audio & microphone',
    question: 'What does the virtual audio device do?',
    answer: [
      'Think of it as a microphone that carries your complete mix. KeySoundboard combines your physical microphone, voice effects, and soundboard clips, then sends them to the virtual microphone. Choose that microphone in an app that accepts audio input to share the mix.',
    ],
  },
  {
    id: 'permission',
    category: 'Audio & microphone',
    question: 'Why does the app ask for microphone access?',
    answer: [
      'Microphone access lets KeySoundboard mix your voice with your sound effects and apply voice effects, including pitch and reverb. Enable it when you want your voice included in the virtual microphone output.',
    ],
  },
  {
    id: 'hear',
    category: 'Troubleshooting',
    question: 'Why can’t I hear a sound?',
    answer: [
      'Check that the sound’s volume and your Mac’s output volume are turned up, and that KeySoundboard is using the speakers or headphones you expect. If a file has been moved or deleted, add it to the soundboard again.',
      'If the sound plays locally but not in a call, activate the driver and select KeySoundboard as the microphone in the calling app.',
    ],
    link: '/soundboard/driver',
    linkText: 'Check your audio setup',
  },
  {
    id: 'mac',
    category: 'Getting started',
    question: 'Is KeySoundboard available for Windows or iPhone?',
    answer: [
      'KeySoundboard is made for macOS. The app, its global shortcuts, and the virtual audio driver run on your Mac. Visit the Mac App Store for the current release’s system requirements.',
    ],
  },
];
