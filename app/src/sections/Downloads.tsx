import { FileText } from 'lucide-react';

const Downloads = () => {
  const downloads = [
    {
      title: 'Technická specifikace',
      pdf: '#',
    },
    {
      title: 'Produktový list',
      pdf: '#',
    },
    {
      title: 'Ceník',
      pdf: '#',
    },
    {
      title: 'Návod k instalaci',
      pdf: '#',
    },
    {
      title: 'Uživatelská příručka',
      pdf: '#',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-light text-[#1a1a4e] mb-8">
          Ke stažení
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {downloads.map((item, index) => (
            <a
              key={index}
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <FileText className="w-12 h-12 text-[#3ECFA0] mb-3" />
              <span className="text-sm text-gray-700 font-medium">
                {item.title}
              </span>
              <span className="text-xs text-gray-500 mt-1">PDF</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;
