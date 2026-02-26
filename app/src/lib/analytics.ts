/**
 * Sledování návštěvníků pro analýzu a remarketing (cílení reklam).
 *
 * – GA4: měření návštěvnosti (VITE_GA_MEASUREMENT_ID)
 * – Google Ads: remarketing – cílení na návštěvníky v reklamách Google (VITE_GOOGLE_ADS_ID)
 * – Meta Pixel: remarketing – cílení na návštěvníky na Facebooku/Instagramu (VITE_META_PIXEL_ID)
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;

export function initAnalytics(): void {
  if (typeof window === 'undefined') return;

  const useGtag = MEASUREMENT_ID || GOOGLE_ADS_ID;
  if (useGtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());

    if (MEASUREMENT_ID) {
      window.gtag('config', MEASUREMENT_ID, {
        send_page_view: false,
      });
    }
    if (GOOGLE_ADS_ID) {
      window.gtag('config', GOOGLE_ADS_ID);
    }

    const gtagId = MEASUREMENT_ID ?? GOOGLE_ADS_ID!;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
    document.head.appendChild(script);
  }

  if (META_PIXEL_ID) {
    initMetaPixel();
  }
}

function initMetaPixel(): void {
  if (typeof window === 'undefined' || !META_PIXEL_ID || window.fbq) return;

  const f = window;
  const b = document;
  const e = 'script';
  const v = 'https://connect.facebook.net/en_US/fbevents.js';
  let n: (typeof window.fbq) & { callMethod?: (...args: unknown[]) => void; queue: unknown[]; loaded?: boolean; version?: string };
  let t: HTMLScriptElement;
  let s: Element | null;

  n = f.fbq = function () {
    const a = arguments;
    if (n.callMethod) n.callMethod.apply(n, a);
    else n.queue.push(a);
  } as (typeof window.fbq) & { callMethod?: (...args: unknown[]) => void; queue: unknown[] };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];

  t = b.createElement(e);
  t.async = true;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s?.parentNode?.insertBefore(t, s);

  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
}

/**
 * Odešle zobrazení stránky do GA4 a Meta Pixelu (volat při změně route v SPA).
 */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === 'undefined') return;

  if (MEASUREMENT_ID && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title ?? document.title,
    });
  }

  if (META_PIXEL_ID && window.fbq) {
    window.fbq('track', 'PageView');
  }
}
