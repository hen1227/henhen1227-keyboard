// The sounds the hero's little demo "plays": the board in the screenshots, key for key.
export const demoBoard = 'Stream Essentials';
export const demoSounds = [
  { name: 'Air Horn', key: '⌥1', duration: '2.4s' },
  { name: 'Rimshot', key: '⌥2', duration: '1.1s' },
  { name: 'Sad Trombone', key: '⌥3', duration: '3.2s' },
  { name: 'Crowd Cheer', key: '⌥4', duration: '6.2s' },
  { name: 'Record Scratch', key: '⌥6', duration: '0.7s' },
  { name: 'Victory Fanfare', key: '⌥0', duration: '5.3s' },
].map((sound) => ({ ...sound, board: demoBoard }));
