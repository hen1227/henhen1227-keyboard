import { useEffect } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fades `.reveal` elements up as they scroll into view, page by page. Content stays visible
 * with reduced motion or without IntersectionObserver: the page only opts in (`reveal-ready` on
 * <html>, set in index.js) when it can also reveal.
 */
export function useScrollReveal(pathname) {
  useEffect(() => {
    // index.js opts the page in (`reveal-ready`) before the first paint, when it can reveal.
    if (!document.documentElement.classList.contains('reveal-ready')) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.08 }
    );
    const observe = () =>
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el));
    observe();
    const mutations = new MutationObserver(observe);
    mutations.observe(document.getElementById('root') || document.body, {
      childList: true,
      subtree: true,
    });
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);
}

/** Points each `.spotlight` card's glow at the cursor. One listener for the whole page. */
export function useSpotlight() {
  useEffect(() => {
    const move = (event) => {
      const card = event.target.closest && event.target.closest('.spotlight');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', move, { passive: true });
    return () => document.removeEventListener('pointermove', move);
  }, []);
}

/** Calls `tick` every `interval` ms while the element is on screen and motion is allowed. */
export function useOnScreenInterval(ref, tick, interval) {
  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return undefined;
    let timer = null;
    const start = () => {
      if (!timer) timer = window.setInterval(tick, interval);
    };
    const stop = () => {
      window.clearInterval(timer);
      timer = null;
    };
    if (!('IntersectionObserver' in window)) {
      start();
      return stop;
    }
    const observer = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop()
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      stop();
    };
  }, [ref, tick, interval]);
}

export { prefersReducedMotion };
