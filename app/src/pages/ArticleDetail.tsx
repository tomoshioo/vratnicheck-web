import { useParams, Link } from 'react-router-dom';
import { Calendar, FileDown } from 'lucide-react';
import { getArticleBySlug, categoryLabels, categoryColors } from '@/data/articles';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1a1a4e] mb-4">Článek nenalezen</h1>
          <Link to="/media" className="text-[#3ECFA0] hover:underline">
            Zpět na Média
          </Link>
        </div>
      </div>
    );
  }

  const contentParagraphs = article.content
    .split(/\n\n+/)
    .filter((p) => p.trim().length > 0);

  return (
    <div className="pt-20">
      <section className="py-12 bg-gradient-to-br from-[#3ECFA0]/10 via-white to-[#9B7EDE]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/media"
            className="text-[#3ECFA0] hover:underline text-sm mb-6 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zpět na Média
          </Link>

          <article className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: categoryColors[article.category] }}
              >
                {categoryLabels[article.category]}
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1a4e] mb-6">
                {article.title}
              </h1>

              <div className="prose prose-gray prose-lg max-w-none">
                {contentParagraphs.map((paragraph, i) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  const isListBlock = /^[•\-]\s/m.test(trimmed) || trimmed.split('\n').every((line) => /^\d+\.\s/.test(line.trim()) || /^[•\-]\s/.test(line.trim()));
                  if (isListBlock) {
                    const items = trimmed.split('\n').filter((l) => l.trim());
                    return (
                      <ul key={i} className="list-none space-y-2 my-4">
                        {items.map((item, j) => (
                          <li key={j} className="pl-4 border-l-2 border-[#3ECFA0]/30 py-1 text-gray-700">
                            {item.replace(/^[•\-]\s/, '').replace(/^\d+\.\s/, '').trim()}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (/^„/.test(trimmed)) {
                    return (
                      <blockquote
                        key={i}
                        className="italic text-gray-600 border-l-4 border-[#3ECFA0] pl-4 my-4"
                      >
                        {trimmed}
                      </blockquote>
                    );
                  }
                  const singleLine = trimmed.indexOf('\n') === -1;
                  const looksLikeHeading =
                    singleLine &&
                    trimmed.length < 85 &&
                    (/[–—:]$/.test(trimmed) || trimmed.endsWith('?') || (trimmed.includes(' – ') && !trimmed.endsWith('.') && trimmed.length < 50)) &&
                    !/^[Vv]íce\s/.test(trimmed) &&
                    !/^Pro ty z Vás/.test(trimmed) &&
                    !/^Obraťte se/.test(trimmed);
                  if (looksLikeHeading) {
                    return (
                      <h3 key={i} className="text-lg font-semibold text-[#1a1a4e] mt-6 mb-2">
                        {trimmed}
                      </h3>
                    );
                  }
                  return (
                    <p key={i} className="text-gray-700 leading-relaxed my-4">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              {article.manualPdf && (
                <div className="mt-8 p-6 rounded-2xl bg-[#3ECFA0]/10 border border-[#3ECFA0]/30">
                  <h3 className="text-lg font-semibold text-[#1a1a4e] mb-2 flex items-center gap-2">
                    <FileDown className="w-5 h-5 text-[#3ECFA0]" />
                    Manuál ke stažení
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Podrobný uživatelský manuál imaPORTER IDcloud vás provede všemi funkcemi a vylepšeními krok za krokem.
                  </p>
                  <a
                    href={article.manualPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#3ECFA0] text-white font-medium rounded-lg hover:bg-[#2ab88a] transition-colors"
                  >
                    <FileDown className="w-4 h-4" />
                    Stáhnout manuál (PDF)
                  </a>
                </div>
              )}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;
