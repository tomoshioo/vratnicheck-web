import { motion } from 'framer-motion';
import { Shield, Smartphone, Link, BarChart3 } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';

const benefits = [
  {
    icon: Shield,
    title: 'Bezpečnost na prvním místě',
    description: 'Kontrola každého vstupu do školy. Víte kdo, kdy a kde vstoupil.',
    color: '#3ECFA0'
  },
  {
    icon: Smartphone,
    title: 'Mobilní technologie',
    description: 'Otevírání dveří telefonem, hlášení rodičům, přehled v aplikaci.',
    color: '#FF6B9D'
  },
  {
    icon: Link,
    title: 'Integrace se systémy',
    description: 'Propojení s Bakaláři, Škola Online, Edupage a dalšími.',
    color: '#9B7EDE'
  },
  {
    icon: BarChart3,
    title: 'Přehledný reporting',
    description: 'Statistiky, reporty a analýzy pro ředitele a zřizovatele.',
    color: '#FFE66D'
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#A8E6CF]/20 via-white to-[#9B7EDE]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Proč zvolit Vrátnícheck?"
          subtitle="Přinášíme řešení, která školy skutečně potřebují"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${benefit.color}20` }}
              >
                <benefit.icon 
                  className="w-8 h-8" 
                  style={{ color: benefit.color }}
                />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a4e] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
