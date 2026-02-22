import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-coral relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Chcete bezpečnější školu?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Kontaktujte nás pro nezávaznou konzultaci. Zdarma vyhodnotíme vaše potřeby 
            a navrhneme optimální řešení.
          </p>
          <Link to="/kontakt">
            <Button 
              className="bg-white text-[#FF6B9D] hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 inline-flex items-center"
            >
              Chci bezplatnou konzultaci
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
