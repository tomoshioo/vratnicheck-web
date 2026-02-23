import { Link } from 'react-router-dom';
import { articles, categoryLabels } from '@/data/articles';

const News = () => {
  const featuredArticles = articles.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50" id="aktuality">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a4e]">
            Aktuality
          </h2>
          <Link
            to="/media"
            className="text-[#3ECFA0] hover:text-[#2ab88a] font-medium transition-colors"
          >
            Další články a rozhovory v sekci zde
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/media/${article.slug}`}
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
                  <span>{categoryLabels[article.category]}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a4e] mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
