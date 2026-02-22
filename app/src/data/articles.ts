export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'tiskova-zprava' | 'rozhovor' | 'clanek';
  image: string;
  slug: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'IMA a Vrátnícheck na konferenci ElectroJobs 2025',
    excerpt: 'Ve čtvrtek 4. září 2025 jsme se zúčastnili konference ElectroJobs 2025, která propojuje školy, firmy a technologie. Akce se konala v reprezentativních prostorech Ministerstva průmyslu a obchodu v Praze.',
    date: '5. 9. 2025',
    category: 'tiskova-zprava',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=500&fit=crop',
    slug: 'electrojobs-2025'
  },
  {
    id: '2',
    title: 'Nová verze aplikace IMAporter MobileAccess Key: NFC nově i na iPhonu',
    excerpt: 'Spouštíme aktualizovanou verzi aplikace IMAporter MobileAccess Key 3.0, která přináší zásadní novinku - podporu technologie NFC i pro iPhony (od iOS 17.4).',
    date: '7. 8. 2025',
    category: 'tiskova-zprava',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
    slug: 'nfc-iphone'
  },
  {
    id: '3',
    title: 'Postaven na zkušenostech, vyvinut pro školy',
    excerpt: 'Přístupový a docházkový systém Vrátnícheck, určený pro školy všech typů, slaví první rok od spuštění. Dnes pomáhá desítkám školám po celé ČR.',
    date: '4. 6. 2025',
    category: 'tiskova-zprava',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
    slug: 'prvni-narozeniny'
  },
  {
    id: '4',
    title: 'Aktualizovaná verze IMAporter IDcloud spuštěna',
    excerpt: 'S radostí oznamujeme spuštění významné aktualizace systému IMAporter IDcloud. Nová verze přináší modernizované uživatelské rozhraní.',
    date: '24. 2. 2025',
    category: 'tiskova-zprava',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    slug: 'idcloud-update'
  },
  {
    id: '5',
    title: 'Bezpečnost na školách, jak jsme na tom u nás v Česku?',
    excerpt: 'Jak jsou na tom české školy ohledně bezpečnosti a dokážeme se inspirovat v zahraničí? Více v exkluzivním rozhovoru s naším projektovým manažerem.',
    date: '27. 1. 2025',
    category: 'rozhovor',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    slug: 'bezpecnost-rozhovor'
  },
  {
    id: '6',
    title: 'Zabezpečovací systémy ve školách, chybí systematický přístup',
    excerpt: 'Chybí systematický přístup k zabezpečení českých škol, shodují se odborníci. Přístupový systém má jen čtvrtina základních a středních škol.',
    date: '30. 11. 2024',
    category: 'clanek',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    slug: 'systematicky-pristup'
  },
  {
    id: '7',
    title: 'Vstup do školy jen s mobilní aplikací',
    excerpt: 'Otevření debaty o úrovni zabezpečení na českých školách je zcela zásadní společenská povinnost. Jsme u toho a radíme.',
    date: '1. 7. 2024',
    category: 'clanek',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
    slug: 'vstup-mobilni-aplikace'
  },
  {
    id: '8',
    title: 'Změna přístupu škol k bezpečnosti',
    excerpt: 'Debata o úrovni zabezpečení na českých školách znovu otevřena. Řada škol zaváděla za poslední půlrok turnikety, rámy, kamery a přístupové karty.',
    date: '27. 5. 2024',
    category: 'rozhovor',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    slug: 'zmena-pristupu'
  }
];
