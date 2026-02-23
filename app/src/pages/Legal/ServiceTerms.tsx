import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceTerms = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-[#1a1a4e] to-[#2a2a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-[#3ECFA0] hover:underline text-sm mb-4 inline-block">Zpět Domů</Link>
            <h1 className="text-4xl md:text-5xl font-bold">Všeobecné servisní podmínky</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg">
          <p className="text-gray-700">
            Všeobecné servisní podmínky (VSP) společnosti IMA s.r.o. upravují poskytování servisních, údržbových a opravárenských služeb v souvislosti s dodanými systémy a produkty (včetně produktů Vrátnícheck).
          </p>
          <p className="text-gray-700">
            Platné a úplné znění VSP je zveřejněno na webu IMA s.r.o.:
          </p>
          <p className="not-prose my-8">
            <a
              href="https://www.ima.cz/o-nas/vsp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1a1a4e] px-6 py-3 text-white font-medium hover:bg-[#2a2a6e] transition-colors"
            >
              VSP na www.ima.cz
              <span className="text-[#3ECFA0]" aria-hidden>→</span>
            </a>
          </p>
          <p className="text-gray-600 text-sm">
            Odkaz otevře oficiální stránku IMA s.r.o. v novém okně. Pro dotazy k servisním podmínkám nás kontaktujte na{' '}
            <a href="mailto:jsem@vratnicheck.cz" className="text-[#3ECFA0] hover:underline">jsem@vratnicheck.cz</a> nebo{' '}
            <a href="tel:+420771129469" className="text-[#3ECFA0] hover:underline">(+420) 771 129 469</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceTerms;
