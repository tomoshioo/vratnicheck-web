import { Calendar } from 'lucide-react';
import { articles } from '@/data/articles';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';

const categoryLabels: Record<string, string> = {
  'tiskova-zprava': 'Tisková zpráva',
  'rozhovor': 'Rozhovor',
  'clanek': 'Článek'
};

const categoryColors: Record<string, string> = {
  'tiskova-zprava': '#3ECFA0',
  'rozhovor': '#FF6B9D',
  'clanek': '#9B7EDE'
};

const Media = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-[#3ECFA0]/10 via-white to-[#9B7EDE]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Média"
            subtitle="Píšou o nás, píšeme pro vás. Novinky, tiskové zprávy a rozhovory."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.1}>
                <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div 
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium"
                      style={{ backgroundColor: categoryColors[article.category] }}
                    >
                      {categoryLabels[article.category]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a4e] mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                      {article.excerpt}
                    </p>
                    <button className="text-[#3ECFA0] font-medium hover:underline inline-flex items-center">
                      Číst dál
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
