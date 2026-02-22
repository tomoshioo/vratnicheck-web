export interface Partner {
  name: string;
  logo?: string;
  url: string;
  category: 'system' | 'certification' | 'technology';
}

export const partners: Partner[] = [
  // School systems
  {
    name: 'Bakaláři',
    url: 'https://bakalari.cz',
    category: 'system'
  },
  {
    name: 'Škola Online',
    url: 'https://www.skolaonline.cz',
    category: 'system'
  },
  {
    name: 'Edupage',
    url: 'https://www.edupage.org',
    category: 'system'
  },
  {
    name: 'Strava.cz',
    url: 'https://strava.cz',
    category: 'system'
  },
  {
    name: 'Edookit',
    url: 'https://edookit.com',
    category: 'system'
  },
  // Certifications
  {
    name: 'ISO 9001',
    url: '#',
    category: 'certification'
  },
  {
    name: 'NBÚ',
    url: '#',
    category: 'certification'
  },
  {
    name: 'Český výrobek',
    url: '#',
    category: 'certification'
  },
  // Technologies
  {
    name: 'MIFARE',
    url: 'https://www.mifare.net',
    category: 'technology'
  },
  {
    name: 'LEGIC',
    url: 'https://www.legic.com',
    category: 'technology'
  }
];

export const testimonials = [
  {
    quote: 'Vrátnícheck nám pomohl zvýšit bezpečnost školy a zároveň zjednodušit administrativu. Rodiče oceňují, že vědí, kdy jejich děti přišly do školy.',
    author: 'Mgr. Jana Novotná',
    position: 'Ředitelka ZŠ',
    school: 'Základní škola Praha'
  },
  {
    quote: 'Instalace proběhla rychle a bez problémů. Systém je intuitivní a naši zaměstnanci se s ním naučili pracovat během jednoho dne.',
    author: 'Ing. Petr Svoboda',
    position: 'Ředitel',
    school: 'Střední škola Brno'
  },
  {
    quote: 'imaLOCKER je skvělé řešení pro naše třídy. Studenti se konečně soustředí na výuku a ne na telefony.',
    author: 'MUDr. Kateřina Dvořáková',
    position: 'Ředitelka',
    school: 'Gymnázium Ostrava'
  }
];
