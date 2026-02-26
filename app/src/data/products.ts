export interface Product {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  icon: string;
  color: string;
}

export const products: Product[] = [
  {
    id: 'importer',
    name: 'imaPORTER',
    shortName: 'Přístupový systém',
    tagline: 'Chytrý vstup do školy',
    description: 'Moderní přístupový systém pro školy, který umožňuje bezpečný vstup pomocí mobilního telefonu, čipové karty nebo ISIC. Integrace se školními systémy je samozřejmostí.',
    features: [
      'Otevírání dveří mobilem, čipem nebo ISIC',
      'Integrace s Bakaláři, Škola Online, Edupage',
      'Automatická evidence docházky',
      'Hlášení rodičům o příchodu dítěte',
      'Správa přístupových práv v reálném čase',
      '99.9% dostupnost systému'
    ],
    benefits: [
      'Bezpečná škola - kontrola každého vstupu',
      'Úspora času - automatizace procesů',
      'Přehled v mobilu pro ředitele i rodiče',
      'Jednoduchá správa bez IT specialisty'
    ],
    image: '/images/schema_system.png',
    icon: 'DoorOpen',
    color: '#3ECFA0'
  },
  {
    id: 'imalocker',
    name: 'imaLOCKER',
    shortName: 'Chytré skříňky pro školy',
    tagline: 'Skříňky pro žáky na čip',
    description: 'Moderní způsob šatních a úložných skříněk pro žáky i učitele. Možnost propojení se stávajícím přístupovým systémem – jeden čip.',
    features: [
      'Přístup přes aplikaci IMAporter, čip nebo PIN',
      'Cloudová správa a statistiky využití',
      'Skupinové skříňky pro třídy a kroužky',
      'Integrace se stávajícím informačním systémem',
      'Až 120 chytrých zámků na jednu sestavu',
      'Volitelně USB nabíjení, LED indikace, EINK display'
    ],
    benefits: [
      'Žáci bez klíčů – vše v mobilu nebo na kartě',
      'Přehled pro školu 24/7 v jednom portálu',
      'Reference: TRIANGL Beroun, VIA Beroun',
      'Řešení na míru – různé velikosti a počet'
    ],
    image: '/images/products/imalocker-mistnost.png',
    icon: 'Lock',
    color: '#9B7EDE'
  },
  {
    id: 'imalocker-mobile',
    name: 'imaLOCKER Mobile',
    shortName: 'Skříňky na mobily',
    tagline: 'Odlož. Zamkni. Soustřeď se.',
    description: 'Praktická a bezpečná úschova pro 36 mobilních telefonů. Vytvořte ve třídách „phone-free zónu", kde se studenti plně soustředí na učivo.',
    features: [
      'Kapacita 36 mobilních telefonů',
      'Ocelová konstrukce s transparentními dveřmi',
      'Očíslované přihrádky pro každého žáka',
      'Jednoduché ovládání - odlož a zamkni',
      'Ideální pro hodiny, testy i maturity',
      'Možnost napojení na přístupový systém'
    ],
    benefits: [
      'Lepší soustředění studentů',
      'Žádné podvádění při testech',
      'Bezpečné uložení telefonů',
      'Okamžitá vizuální kontrola obsahu'
    ],
    image: '/images/imalocker.png',
    icon: 'Smartphone',
    color: '#FF6B9D'
  },
  {
    id: 'imapouch',
    name: 'imaPOUCH',
    shortName: 'Pouche na mobily',
    tagline: 'Mobilní telefon do batohu nebo do pouche?',
    description: 'Flexibilní řešení pro úschovu mobilních telefonů ve škole. Jedná se o uzamykatelné pouzdro na telefon, které žákům pomáhá odložit mobil a soustředit se na výuku.',
    features: [
      'Jednoduché a levné řešení',
      'Různé velikosti a barvy',
      'Možnost personalizace',
      'Skladné a přenosné',
      'Vhodné pro třídy i skupiny'
    ],
    benefits: [
      'Ekonomické řešení pro každou školu',
      'Flexibilní použití',
      'Podpora digitálního detoxu',
      'Jednoduchá implementace'
    ],
    image: '/images/imapouch.png',
    icon: 'ShoppingBag',
    color: '#9B7EDE'
  }
];

export const statistics = [
  { number: '100+', label: 'Škol v ČR', suffix: '' },
  { number: '50', label: 'Tisíc žáků denně', suffix: '000+' },
  { number: '99.9', label: 'Dostupnost systému', suffix: '%' },
  { number: '30+', label: 'Let zkušeností', suffix: '' }
];

export const benefits = [
  {
    icon: 'Shield',
    title: 'Bezpečnost na prvním místě',
    description: 'Kontrola každého vstupu do školy. Víte kdo, kdy a kde vstoupil.'
  },
  {
    icon: 'Smartphone',
    title: 'Mobilní technologie',
    description: 'Otevírání dveří telefonem, hlášení rodičům, přehled v aplikaci.'
  },
  {
    icon: 'Link',
    title: 'Integrace se systémy',
    description: 'Propojení s Bakaláři, Škola Online, Edupage a dalšími.'
  },
  {
    icon: 'BarChart3',
    title: 'Přehledný reporting',
    description: 'Statistiky, reporty a analýzy pro ředitele a zřizovatele.'
  }
];

export const howItWorks = [
  {
    step: 1,
    title: 'Konzultace a analýza',
    description: 'Zdarma vyhodnotíme vaše potřeby, vstupy a rizika budovy.'
  },
  {
    step: 2,
    title: 'Návrh řešení',
    description: 'Připravíme nabídku šitou na míru vaší škole.'
  },
  {
    step: 3,
    title: 'Instalace a zaškolení',
    description: 'Profesionální instalace a zaškolení všech uživatelů.'
  },
  {
    step: 4,
    title: 'Podpora a servis',
    description: 'Technická podpora a pravidelný servis.'
  }
];
