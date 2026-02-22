const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Od roku <span className="font-semibold text-[#1a1a4e]">1992</span> je společnost{' '}
          <span className="font-semibold text-[#1a1a4e]">IMA</span> synonymem pro výzkum a vývoj v oblasti SW a HW, zejména v segmentu identifikačních systémů.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Jsou to technologie, které využívá například{' '}
          <span className="font-semibold text-[#1a1a4e]">Škoda Auto</span>,{' '}
          <span className="font-semibold text-[#1a1a4e]">ČEZ</span>,{' '}
          <span className="font-semibold text-[#1a1a4e]">Foxconn</span>,{' '}
          <span className="font-semibold text-[#1a1a4e]">ČVUT</span>, a další.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          V roce <span className="font-semibold text-[#1a1a4e]">2021</span> se IMA stala plnohodnotným členem silné německé skupiny{' '}
          <span className="font-semibold text-[#1a1a4e]">WITTE Automotive GmbH</span>.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Tato identifikační řešení jsou ve firmách, úřadech i školách. Řídí přístupová práva, zabezpečují vstupy a evidují data.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          IMA po více než <span className="font-semibold text-[#1a1a4e]">30 let</span> nabízí inovativní řešení pro identifikaci, evidenci a lokalizaci osob a věcí.
        </p>

        {/* WITTE Logo */}
        <div className="mt-12">
          <a
            href="https://www.witte-automotive.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-[#1a1a4e] text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-[#2a2a6e] transition-colors">
              WITTE Automotive
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
