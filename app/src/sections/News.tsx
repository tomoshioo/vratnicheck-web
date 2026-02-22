const News = () => {
  const articles = [
    {
      title: 'IMA a Vrátnícheck na konferenci ElectroJobs 2025',
      date: '5. 9. 2025',
      type: 'tisková zpráva',
      excerpt:
        'Ve čtvrtek 4. září 2025 jsme se zúčastnili konference ElectroJobs 2025, která propojuje školy, firmy a technologie. Akce se konala v reprezentativních prostorech Ministerstva průmyslu a obchodu v Praze. Téma naší přednášky bylo Technologie pro bezpečnější školy.',
      image:
        'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&h=300&fit=crop',
      link: '#',
    },
    {
      title: 'Nová verze aplikace IMAporter MobileAccess Key: NFC nově i na iPhonu',
      date: '7. 8. 2025',
      type: 'tisková zpráva',
      excerpt:
        'Spouštíme aktualizovanou verzi aplikace IMAporter MobileAccess Key 3.0, která přináší zásadní novinku - podporu technologie NFC i pro iPhony (od iOS 17.4). Aplikace tak nyní funguje nejen na Androidu, ale i na nejnovějších zařízeních Apple.',
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      link: '#',
    },
    {
      title: 'Postaven na zkušenostech, vyvinut pro školy',
      date: '4. 6. 2025',
      type: 'tisková zpráva',
      excerpt:
        'Přístupový a docházkový systém Vrátnícheck, určený pro školy všech typů, slaví první rok od spuštění. Adaptuje se na specifické potřeby škol dnes pomáhá desítkám školám po celé ČR zvyšovat úroveň bezpečnosti, šetřit čas a zjednodušovat správu vstupů.',
      image:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
      link: '#',
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="aktuality">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a4e]">
            Aktuality
          </h2>
          <a
            href="#"
            className="text-[#3ECFA0] hover:text-[#2ab88a] font-medium transition-colors"
          >
            Další články a rozhovory v sekci zde
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.type}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a4e] mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
