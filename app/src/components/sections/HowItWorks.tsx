import { motion } from 'framer-motion';
import { MessageSquare, FileText, Wrench, Headphones } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';

const steps = [
  {
    step: 1,
    title: 'Konzultace a analýza',
    description: 'Zdarma vyhodnotíme vaše potřeby, vstupy a rizika budovy. Přijedeme, prohlédneme si prostor a navrhneme optimální řešení.',
    icon: MessageSquare,
    color: '#3ECFA0'
  },
  {
    step: 2,
    title: 'Návrh řešení',
    description: 'Připravíme nabídku šitou na míru vaší škole. Technická specifikace, cenová kalkulace a časový harmonogram.',
    icon: FileText,
    color: '#FF6B9D'
  },
  {
    step: 3,
    title: 'Instalace a zaškolení',
    description: 'Profesionální instalace našimi techniky a kompletní zaškolení všech uživatelů. Systém je připraven k okamžitému použití.',
    icon: Wrench,
    color: '#9B7EDE'
  },
  {
    step: 4,
    title: 'Podpora a servis',
    description: 'Non-stop technická podpora a pravidelný servis. Jsme tu pro vás, kdykoliv nás potřebujete.',
    icon: Headphones,
    color: '#FFE66D'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Jak to funguje?"
          subtitle="Od první konzultace po plně funkční systém - jednoduše a rychle"
        />

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#3ECFA0] via-[#FF6B9D] to-[#9B7EDE] -translate-y-1/2 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full relative z-10">
                  {/* Step Number */}
                  <div 
                    className="absolute -top-4 left-8 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-4"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon 
                      className="w-8 h-8" 
                      style={{ color: item.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1a1a4e] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
