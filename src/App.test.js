import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import FAQPage from './pages/FAQPage';

beforeEach(() => {
  window.history.replaceState(null, '', '/');
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
});

test('homepage has working download destinations and navigation to setup', async () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Every moment.');
  expect(screen.getByRole('link', { name: 'Get KeySoundboard', exact: true })).toHaveAttribute(
    'href',
    expect.stringContaining('id1636744123')
  );
  fireEvent.click(
    within(screen.getByRole('navigation', { name: 'Main navigation' })).getByRole('link', {
      name: 'Audio setup',
    })
  );
  expect(
    await screen.findByRole('heading', { name: 'Activate the built-in driver.' })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Download legacy uninstaller/ })).toHaveAttribute(
    'href',
    expect.stringContaining('keysoundboard_legacy_uninstaller')
  );
});

test('FAQ search and categories work together and recover from no results', () => {
  render(
    <MemoryRouter>
      <FAQPage />
    </MemoryRouter>
  );
  fireEvent.change(screen.getByRole('textbox', { name: 'Search questions' }), {
    target: { value: 'MP3' },
  });
  expect(screen.getByRole('status')).toHaveTextContent('1 answer');
  expect(screen.getByText('Can I use my own sounds?')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Troubleshooting' }));
  expect(screen.getByText('No answers found. Yet.')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Show all questions' }));
  expect(screen.getByRole('status')).toHaveTextContent('9 answers');
  expect(screen.getByRole('textbox', { name: 'Search questions' })).toHaveValue('');
});

test('unknown routes offer a useful way home', () => {
  window.history.replaceState(null, '', '/missing-page');
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('This page missed its cue.');
  fireEvent.click(screen.getByRole('link', { name: 'Back to the soundboard' }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Every moment.');
});

test('legacy homepage URLs redirect to the new homepage', () => {
  window.history.replaceState(null, '', '/soundboard');
  render(<App />);
  expect(window.location.pathname).toBe('/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Every moment.');
});

test('legacy install fragments scroll to the current setup instructions', () => {
  window.history.replaceState(null, '', '/soundboard/driver#install');
  render(<App />);
  expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({ behavior: 'instant' });
  expect(Element.prototype.scrollIntoView.mock.instances[0]).toBe(document.getElementById('setup'));
});

test('contact links point at the support site', () => {
  render(<App />);
  expect(
    within(screen.getByRole('navigation', { name: 'Main navigation' })).getByRole('link', {
      name: 'Contact',
    })
  ).toHaveAttribute('href', 'https://henhen1227.com/support');
  expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute(
    'href',
    'https://henhen1227.com/support'
  );
});

test('mobile navigation closes on route changes and Escape', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
  expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
    'aria-expanded',
    'true'
  );
  fireEvent.keyDown(screen.getByRole('button', { name: 'Close menu' }), { key: 'Escape' });
  expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
    'aria-expanded',
    'false'
  );
  fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
  fireEvent.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'FAQ' }));
  expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
    'aria-expanded',
    'false'
  );
});
