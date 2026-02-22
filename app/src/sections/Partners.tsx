const Partners = () => {
  const certifications = [
    {
      name: 'Certifikát 1',
      pdf: '/cert1.pdf',
    },
    {
      name: 'Certifikát 2',
      pdf: '/cert2.pdf',
    },
    {
      name: 'Certifikát 3',
      pdf: '/cert3.pdf',
    },
    {
      name: 'Certifikát 4',
      pdf: '/cert4.pdf',
    },
  ];

  const partners = [
    {
      name: 'MIFARE',
      url: 'https://www.mifare.net/en/',
    },
    {
      name: 'LEGIC',
      url: 'https://www.legic.com/',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-[#3ECFA0] mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm text-gray-600">PDF</span>
              </div>
            </a>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-gray-400 hover:text-[#3ECFA0] transition-colors"
            >
              {partner.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
