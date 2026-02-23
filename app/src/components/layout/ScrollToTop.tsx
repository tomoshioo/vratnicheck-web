import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Při změně stránky posune viewport nahoru, nebo na prvek s id z hash (#sekce).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Po vykreslení stránky posunout na prvek s daným id
      const id = hash.replace(/^#/, '');
      const scroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0, 0);
        }
      };
      // Krátké zpoždění, aby měl React čas vykreslit novou stránku
      const t = requestAnimationFrame(() => {
        requestAnimationFrame(scroll);
      });
      return () => cancelAnimationFrame(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
