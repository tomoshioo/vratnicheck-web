export type ArticleCategory =
  | 'tiskova-zprava'
  | 'rozhovor'
  | 'clanek'
  | 'reportaz'
  | 'reportaz-a-rozhovor'
  | 'reportaz-a-promo';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: ArticleCategory;
  image: string;
  slug: string;
  /** Plný obsah článku po rozkliknutí „Číst dál“ (odpovídá obsahu na vratnicheck.cz) */
  content: string;
  /** Cesta k PDF manuálu ke stažení (např. /downloads/Manual_IMA-IDCloud-CZ.pdf) */
  manualPdf?: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'IMA a Vrátnícheck na konferenci ElectroJobs 2025',
    excerpt:
      'Ve čtvrtek 4. září 2025 jsme se zúčastnili konference ElectroJobs 2025, která propojuje školy, firmy a technologie. Akce se konala v reprezentativních prostorech Ministerstva průmyslu a obchodu v Praze.',
    date: '5. 9. 2025',
    category: 'tiskova-zprava',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=500&fit=crop',
    slug: 'electrojobs-2025',
    content: `Ve čtvrtek 4. září 2025 jsme se zúčastnili konference ElectroJobs 2025, která propojuje školy, firmy a technologie. Akce se konala v reprezentativních prostorech Ministerstva průmyslu a obchodu v Praze.

Byl to již pátý ročník konference, která je určena elektrotechnickým, elektronickým a IT firmám na jedné straně a středním a vysokým školám na straně druhé. Cílem je podpořit přímou spolupráci mezi školami a firmami, otevřít prostor pro nové kontakty a posílit ta partnerství, která už dnes fungují.

Program nabídnul přednášky věnované aktuálním tématům ve vzdělávání, prezentace nosných studijních oborů i konkrétní příklady úspěšné spolupráce. Zazněly také návrhy, jak může průmysl školám pomoci a jak naopak školy přispívají k rozvoji oboru.

V rámci odborného bloku "Technologie pro bezpečnější školy" IMA představila, jak mohou školy s pomocí moderních technologií zvyšovat bezpečnost žáků i personálu. Prezentovali jsme příklady z praxe, jak lze efektivně řídit přístupy do budov, propojovat systémy a snižovat administrativní zátěž.

Pro ty z Vás, kteří se nemohli účastnit této akce, jsme k dispozici také pro individuální konzultace a dotazy, ať už se týkají konkrétních technologií nebo možné spolupráce, stačí se nám ozvat.

Slovo manažera projektu Vrátnícheck:
„Tato produktová řada vstupních systémů imaPORTER byla vyvinutá speciálně na míru pro školská zařízení. Jsme IMA s.r.o., přední český vývojář v oblasti vstupních a identifikačních systémů a jsme součástí velmi silné skupiny WITTE Automotive GmbH.“
Jan Orlický, vedoucí projektový manažer`,
  },
  {
    id: '2',
    title: 'Nová verze aplikace imaPORTER MobileAccess Key: NFC nově i na iPhonu',
    excerpt:
      'Spouštíme aktualizovanou verzi aplikace imaPORTER MobileAccess Key 3.0, která přináší zásadní novinku - podporu technologie NFC i pro iPhony (od iOS 17.4). Aplikace tak nyní funguje nejen na Androidu, ale i na nejnovějších zařízeních Apple.',
    date: '7. 8. 2025',
    category: 'tiskova-zprava',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
    slug: 'nfc-iphone',
    content: `Spouštíme aktualizovanou verzi aplikace imaPORTER MobileAccess Key 3.0, která přináší zásadní novinku – podporu technologie NFC i pro iPhony (od iOS 17.4). Aplikace tak nyní funguje nejen na Androidu, ale i na nejnovějších zařízeních Apple.

Mobil místo klíče – i pro iOS

MobileAccess Key slouží jako chytrý přístupový klíč pro školská zařízení vybavená systémy imaPORTER Pro a Basic – Vrátnícheck. Otevírání dveří je možné nejen pomocí čipu nebo karty, ale nově také pomocí NFC i v iPhonu.

Výhody pro správce systému / administrátory:

• Přehledná správa přístupů z mobilu i počítače
• Není potřeba tisknout karty nebo vydávat klíče
• Bezpečné a plně v souladu s GDPR
• Možnost správy i na dálku
• Přístup i pro návštěvy a externisty
• Lze nastavit časově omezená oprávnění
• Okamžité zablokování ztraceného přístupu

Využití NFC v zařízeních Apple předpokládá aktualizaci čteček na nejnovější verze.

Obraťte se na nás a rádi Vám doporučíme konkrétní řešení pro Vaši školu.

Jak aplikaci získat?

Více informací o aplikaci naleznete ZDE. Odkaz vede na zabezpečenou webovou stránku, kde je dostupná verze ke stažení i další informace.

Slovo manažera projektu Vrátnícheck:
„Tato produktová řada vstupních systémů imaPORTER byla vyvinutá speciálně na míru pro školská zařízení. Jsme IMA s.r.o., přední český vývojář v oblasti vstupních a identifikačních systémů a jsme součástí velmi silné skupiny WITTE Automotive GmbH.“
Jan Orlický, vedoucí projektový manažer`,
  },
  {
    id: '3',
    title: 'Postaven na zkušenostech, vyvinut pro školy',
    excerpt:
      'Přístupový a docházkový systém Vrátnícheck, určený pro školy všech typů, slaví první rok od spuštění. Adaptuje se na specifické potřeby škol dnes pomáhá desítkám školám po celé ČR zvyšovat úroveň bezpečnosti, šetřit čas a zjednodušovat správu vstupů.',
    date: '4. 6. 2025',
    category: 'tiskova-zprava',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
    slug: 'prvni-narozeniny',
    content: `Stavíme na třech desetiletích zkušeností

Za systémem Vrátnícheck stojí tým společnosti IMA, která vyvíjí identifikační a přístupové technologie už od roku 1992. Téměř třicetileté know-how v oblasti bezpečnosti a technologií pomohlo vytvořit řešení přizpůsobené školskému prostředí.

„Věděli jsme, že každá škola má jiné potřeby – proto je Vrátnícheck od začátku stavěný na míru. Flexibilita, jednoduchost a lidský přístup jsou pro nás základ.“

Ověřená technologie, která funguje

Vrátnícheck spojuje moderní přístupový systém s jednoduchou správou, dostupnou odkudkoliv. Školám přináší:

• Spolehlivost i bez připojení k internetu
• Identifikaci přes mobil, čip nebo kartu
• Napojení na školní systémy (Bakaláři, Škola Online, Edookit, EduPage)
• Možnost růstu systému (další vstupy, oprávnění, typy uživatelů)
• Přehlednou správu přes webové nebo mobilní rozhraní

Školy s různými nároky, jedno řešení

Za první rok jsme spolupracovali se školami nejrůznějšího typu – od malotřídek v menších obcích až po víceoborové areály ve městech. Instalovali jsme čtečky do hlavních vstupů, šaten, výtahů i samostatných pavilonů – vždy s ohledem na specifika konkrétní školy.

Co chystáme dál?

Na základě zpětné vazby připravujeme další rozvoj systému:

• Modul pro šatní skříňky a úložné prostory
• NFC identifikaci i pro zařízení Apple
• Rozšíření integrací se školními systémy

Víc než produkt. Dlouhodobý partner

Vrátnícheck není jen technologie – je to chytré řešení postavené na důvěře, zkušenostech a porozumění školnímu prostředí. Navrhujeme systém, který skutečně odlehčuje každodennímu provozu a roste spolu se školou.

Chcete vědět, jak by mohl fungovat i ve vaší škole? Ozvěte se nám – rádi vám ukážeme, jak může Vrátnícheck fungovat i u vás.

Více na www.vratnicheck.cz`,
  },
  {
    id: '4',
    title: 'Aktualizovaná verze imaPORTER IDcloud spuštěna',
    excerpt:
      'S radostí oznamujeme spuštění významné aktualizace systému imaPORTER IDcloud. Nová verze přináší modernizované uživatelské rozhraní, které výrazně zlepšuje komfort při správě školského přístupového systému Vrátnícheck.',
    date: '24. 2. 2025',
    category: 'tiskova-zprava',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    slug: 'idcloud-update',
    manualPdf: '/downloads/Manual_IMA-IDCloud-CZ.pdf',
    content: `S radostí oznamujeme spuštění významné aktualizace systému imaPORTER IDcloud. Nová verze přináší modernizované uživatelské rozhraní, které výrazně zlepšuje komfort při správě školského přístupového systému Vrátnícheck.

Klíčová vylepšení zahrnují:

• Modernější a uživatelsky přívětivější design
• Intuitivnější ovládání všech funkcí systému
• Optimalizovaný výkon a rychlejší odezvu
• Posílenou bezpečnost a stabilitu celé platformy

Pro snadný přechod na novou verzi jsme připravili podrobný uživatelský manuál. Manuál Vás provede všemi funkcemi a vylepšeními krok za krokem.

Uvítáme Vaše postřehy a připomínky k novému rozhraní i k samotnému manuálu. Vaše zpětná vazba je pro nás velmi cenná a pomůže nám systém dále vylepšovat. Své komentáře můžete zasílat přímo na e-mailovou adresu podpora@ima.cz.

Věříme, že nová verze imaPORTER IDcloud přispěje k ještě efektivnější správě Vašich přístupových systémů. V případě jakýchkoliv dotazů je Vám k dispozici náš technický tým na výše uvedeném kontaktu.

Pro více informací o bezpečnostních řešeních pro školy nás kontaktujte na www.vratnicheck.cz/prezentace.`,
  },
  {
    id: '5',
    title: 'Bezpečnost na školách, jak jsme na tom u nás v Česku?',
    excerpt:
      'Jak jsou na tom české školy ohledně bezpečnosti a dokážeme se inspirovat v zahraničí, jaká řešení používají například v USA? A co etická otázka neustálého dohledu studentů? Více v exkluzivním rozhovoru, který poskytl náš projektový manažer Jan Orlický.',
    date: '27. 1. 2025',
    category: 'reportaz-a-rozhovor',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    slug: 'bezpecnost-rozhovor',
    content: `Jak jsou na tom české školy ohledně bezpečnosti a dokážeme se inspirovat v zahraničí, jaká řešení používají například v USA? A co etická otázka neustálého dohledu studentů? Více v exkluzivním rozhovoru, který poskytl náš projektový manažer Jan Orlický.`,
  },
  {
    id: '6',
    title: 'Zabezpečovací systémy ve školách, chybí systematický přístup',
    excerpt:
      'Chybí systematický přístup k zabezpečení českých škol, shodují se odborníci, které Seznam Zprávy oslovily. Například Institut mikroelektronických aplikací odhaduje, že přístupový systém má jen čtvrtina základních a středních škol.',
    date: '30. 11. 2024',
    category: 'clanek',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    slug: 'systematicky-pristup',
    content: `Chybí systematický přístup k zabezpečení českých škol, shodují se odborníci, které Seznam Zprávy oslovily. Například Institut mikroelektronických aplikací odhaduje, že přístupový systém má jen čtvrtina základních a středních škol.`,
  },
  {
    id: '7',
    title: 'Vstup do školy jen s mobilní aplikací',
    excerpt:
      'Otevření debaty o úrovni zabezpečení na českých školách je zcela zásadní společenská povinnost. Řada zřizovatelů i díky tomu v posledních několika měsících začala zavádět různá bezpečnostní opatření. Jsme u toho a radíme.',
    date: '1. 7. 2024',
    category: 'clanek',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
    slug: 'vstup-mobilni-aplikace',
    content: `Otevření debaty o úrovni zabezpečení na českých školách je zcela zásadní společenská povinnost. Řada zřizovatelů i díky tomu v posledních několika měsících začala zavádět různá bezpečnostní opatření. Jsme u toho a radíme.`,
  },
  {
    id: '8',
    title: 'Změna přístupu škol k bezpečnosti',
    excerpt:
      'Debata o úrovni zabezpečení na českých školách znovu otevřena. Řada škol zaváděla za poslední půlrok turnikety, rámy, kamery a hlavně - přístupové karty. Technologická jednička na trhu Vrátnícheck v reportáži popisuje, jak chrání žáky.',
    date: '27. 5. 2024',
    category: 'reportaz-a-rozhovor',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    slug: 'zmena-pristupu',
    content: `Debata o úrovni zabezpečení na českých školách znovu otevřena. Řada škol zaváděla za poslední půlrok turnikety, rámy, kamery a hlavně - přístupové karty. Technologická jednička na trhu Vrátnícheck v reportáži popisuje, jak chrání žáky.`,
  },
  {
    id: '9',
    title: 'Nový člen rodiny IMA: Vrátnícheck',
    excerpt:
      'Společnost IMA s hrdostí oznamuje oficiální spuštění svého nového produktu, Vrátnícheck. Tento spolehlivý přístupový systém je nejen inovativní, moderní a jednoduchý, ale hlavně přináší revoluční způsob zajištění bezpečnosti ve školách.',
    date: '20. 5. 2024',
    category: 'tiskova-zprava',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    slug: 'novy-clen-rodiny-imaporter',
    content: `Společnost IMA s hrdostí oznamuje oficiální spuštění svého nového produktu, Vrátnícheck. Tento spolehlivý přístupový systém je nejen inovativní, moderní a jednoduchý, ale hlavně přináší revoluční způsob zajištění bezpečnosti ve školách.

Plná integrace s dalšími systémy – Vrátnícheck je plně kompatibilní s dalšími systémy, využívanými ve školách - jednoduchá integrace a efektivita.

Nejmodernější bezpečnostní funkcionality – Široká škála moderních bezpečnostních funkcí, které zajišťují ochranu školního prostředí a bezpečnost žáků a personálu.

Hlášení rodičům a nahrazení čipu mobilním telefonem – Snadné a rychlé zasílání hlášení rodičům o příchodech a odchodech žáků. Místo čipu - mobil. Praktický a moderní.

Třídění událostí a propisování do jakékoliv evidence – Možnost třídit události a propisovat informace do jakéhokoliv evidenčního systému, snadná organizace školních procesů.

Flexibilita a individuální nastavení – Jako vývojář jsme flexibilní a Vrátnícheck individuálně vyladíme dle potřeb každé školy.

„Vrátnícheck je odpovědí na aktuální potřeby školství a přináší moderní a efektivní řešení pro zajištění bezpečnosti ve školách.“
Jan Orlický, manažer projektu Vrátnícheck`,
  },
  {
    id: '10',
    title: 'Školy posilují zabezpečení budov',
    excerpt:
      'Prosincová střelba na FF UK v Praze přinesla řadu otazníků ohledně zabezpečení všech škol v Česku. Ukazuje se, že mezi jednotlivými institucemi jsou značné rozdíly. Existuje přitom mnoho moderních řešení, jako jsou vstupní systémy s identifikátory v telefonu.',
    date: '20. 5. 2024',
    category: 'reportaz',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    slug: 'skoly-posiluji-zabezpeceni',
    content: `Prosincová střelba na FF UK v Praze přinesla řadu otazníků ohledně zabezpečení všech škol v Česku. Ukazuje se, že mezi jednotlivými institucemi jsou značné rozdíly. Existuje přitom mnoho moderních řešení, jako jsou vstupní systémy s identifikátory v telefonu.`,
  },
  {
    id: '11',
    title: 'Amper 2024: Firma IMA představuje',
    excerpt:
      'Společnost IMA byla založena v roce 1992. Kromě výzkumu a poskytování vývojových služeb v oblasti SW a HW se IMA pohybuje v EPS, UPS, také poskytuje zabezpečovací techniku, videotelefony a další.',
    date: '27. 3. 2024',
    category: 'reportaz-a-promo',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    slug: 'amper-2024',
    content: `Společnost IMA byla založena v roce 1992. Kromě výzkumu a poskytování vývojových služeb v oblasti SW a HW se IMA pohybuje v EPS, UPS, také poskytuje zabezpečovací techniku, videotelefony a další.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const categoryLabels: Record<ArticleCategory, string> = {
  'tiskova-zprava': 'Tisková zpráva',
  'rozhovor': 'Rozhovor',
  'clanek': 'Článek',
  'reportaz': 'Reportáž',
  'reportaz-a-rozhovor': 'Reportáž a rozhovor',
  'reportaz-a-promo': 'Reportáž a promo',
};

export const categoryColors: Record<ArticleCategory, string> = {
  'tiskova-zprava': '#3ECFA0',
  'rozhovor': '#FF6B9D',
  'clanek': '#9B7EDE',
  'reportaz': '#3B82F6',
  'reportaz-a-rozhovor': '#F59E0B',
  'reportaz-a-promo': '#8B5CF6',
};
