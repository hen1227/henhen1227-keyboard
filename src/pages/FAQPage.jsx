import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import FAQList from '../components/FAQList';
import Icon from '../components/Icon';
import DownloadCTA from '../components/DownloadCTA';
import { SUPPORT_URL } from '../config';
import './Pages.css';
import './FAQ.css';

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All questions');
  const filtered = faqs.filter(
    (item) =>
      (category === 'All questions' || item.category === category) &&
      [item.question, ...item.answer].join(' ').toLowerCase().includes(search.trim().toLowerCase())
  );
  return (
    <>
      <div className="container page-header">
        <div className="eyebrow">A little help goes a long way</div>
        <h1>
          Good questions.
          <br />
          <span>Sound answers.</span>
        </h1>
        <p>
          Getting started, getting connected, or getting unstuck. Find what you need right here.
        </p>
      </div>
      <div className="container faq-page-content">
        <aside className="faq-sidebar">
          <label className="search-field">
            <Icon name="search" size={18} />
            <input
              aria-label="Search questions"
              placeholder="Find an answer…"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {search && (
              <button
                className="icon-button"
                aria-label="Clear search"
                onClick={() => setSearch('')}
              >
                <Icon name="close" size={14} />
              </button>
            )}
          </label>
          <div className="faq-categories" aria-label="Question categories">
            {['All questions', 'Getting started', 'Audio & microphone', 'Troubleshooting'].map(
              (name) => (
                <button
                  key={name}
                  aria-pressed={category === name}
                  onClick={() => setCategory(name)}
                >
                  {name}
                  <Icon name="chevron" size={14} />
                </button>
              )
            )}
          </div>
          <div className="faq-contact">
            <Icon name="chat" size={22} />
            <h2>Still need a hand?</h2>
            <p>We’re an email away.</p>
            <a href={SUPPORT_URL} className="text-link">
              Get in touch
              <Icon name="external" size={15} />
            </a>
          </div>
        </aside>
        <div>
          <p className="result-count" role="status">
            {filtered.length} {filtered.length === 1 ? 'answer' : 'answers'}
            {search.trim() ? ` for “${search.trim()}”` : ''}
          </p>
          {filtered.length ? (
            <FAQList items={filtered} />
          ) : (
            <div className="empty-state">
              <Icon name="search" size={30} />
              <h2>No answers found. Yet.</h2>
              <p>Try a different search, or send us your question.</p>
              <button
                className="button button-secondary"
                onClick={() => {
                  setSearch('');
                  setCategory('All questions');
                }}
              >
                Show all questions
              </button>
            </div>
          )}
        </div>
      </div>
      <DownloadCTA />
    </>
  );
}
