import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import '../pages/FAQ.css';

export default function FAQList({ items }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.id}>
          <summary>
            {item.question}
            <Icon name="plus" size={18} />
          </summary>
          <div className="faq-answer">
            {item.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {item.link && (
              <Link className="text-link" to={item.link}>
                {item.linkText}
                <Icon name="arrow" size={15} />
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
