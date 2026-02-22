const Features = () => {
  return (
    <section className="py-20 bg-white" id="prezentace">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a4e] mb-6">
              Přístupový systém
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <span className="font-semibold text-[#1a1a4e]">Vrátnícheck</span> je nadčasový přístupový systém, plně integrovatelný s dalšími systémy.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Disponuje <span className="font-semibold text-[#1a1a4e]">nejmodernějším zabezpečením</span> a funkcionalitami, jako hlášení rodičům a nahrazení čipu mobilním telefonem.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              <span className="font-semibold text-[#1a1a4e]">Hlášení příchodů</span> a odchodů, přehledné třídění <span className="font-semibold text-[#1a1a4e]">událostí</span>.
            </p>
            <a
              href="#parametry"
              className="inline-flex items-center px-6 py-3 bg-[#3ECFA0] text-white rounded-full font-medium hover:bg-[#2ab88a] transition-colors"
            >
              parametry, technický popis, detaily k instalaci
            </a>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                Systém si rozumí se studentskými kartami, vše se propisuje do libovolné online evidence. Mimo otevírání dveří, systém pracuje také s chytrými skříňkami a otevírá vše tam, kde má a těm, co můžou.
              </p>
            </div>
            <div className="bg-[#1a1a4e] p-6 rounded-xl">
              <p className="text-white text-lg font-medium leading-relaxed">
                Bezpečnost a spolehlivost, to je váš nový přístupový systém Vrátnícheck.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
