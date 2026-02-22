const CompatibleSystems = () => {
  const systems = [
    {
      name: 'Bakaláři',
      url: 'https://bakalari.cz/',
      logo: 'https://www.bakalari.cz/wp-content/uploads/2020/07/bakalari-logo.svg',
    },
    {
      name: 'Škola Online',
      url: 'https://www.skolaonline.cz/',
      logo: 'https://www.skolaonline.cz/images/logo-so.png',
    },
    {
      name: 'Edupage',
      url: 'https://login1.edupage.org/',
      logo: 'https://www.edupage.org/assets/img/logo.png',
    },
    {
      name: 'Strava.cz',
      url: 'http://strava.cz',
      logo: 'https://strava.cz/images/logo.png',
    },
    {
      name: 'Edookit',
      url: 'https://edookit.com/cs/',
      logo: 'https://edookit.com/images/logo.png',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {systems.map((system) => (
            <a
              key={system.name}
              href={system.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">{system.name}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#parametry"
            className="inline-flex items-center text-[#3ECFA0] hover:text-[#2ab88a] font-medium transition-colors"
          >
            parametry, technický popis, detaily k instalaci
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompatibleSystems;
