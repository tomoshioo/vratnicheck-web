import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Wallet, 
  Palette, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';

const benefits = [
  {
    icon: Wallet,
    title: 'Ekonomické řešení',
    description: 'Dostupná alternativa ke skříňkám. Ideální pro školy s omezeným rozpočtem.',
    color: '#3ECFA0'
  },
  {
    icon: Palette,
    title: 'Personalizace',
    description: 'Různé barvy a možnost potisku logem školy.',
    color: '#FF6B9D'
  },
  {
    icon: Users,
    title: 'Flexibilní použití',
    description: 'Vhodné pro třídy, skupiny nebo individuální použití.',
    color: '#9B7EDE'
  },
  {
    icon: ShoppingBag,
    title: 'Skladné a přenosné',
    description: 'Lehké pouche, které se vejde do každé tašky.',
    color: '#FFE66D'
  }
];

const Imapouch = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#9B7EDE]/10 via-white to-[#3ECFA0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9B7EDE]/10 text-[#9B7EDE] font-medium text-sm mb-6">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Pouche na mobily
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a4e] mb-6">
                imaPOUCH
              </h1>
              <p className="text-2xl text-[#9B7EDE] font-semibold mb-4">
                Mobilní telefon do batohu nebo do pouche?
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Flexibilní řešení pro úschovu mobilních telefonů ve škole. 
                Jednoduché pouche, které žákům pomáhá odložit telefon a soustředit se na výuku.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/kontakt">
                  <Button className="bg-[#9B7EDE] hover:bg-[#8a6dd0] text-white px-8 py-3 rounded-full font-medium">
                    Chci nabídku
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop" 
                alt="imaPOUCH"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4e] mb-6">
              Jednoduché řešení pro každou školu
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              imaPOUCH je ideální volba pro školy, které hledají ekonomické a flexibilní řešení 
              pro odkládání mobilních telefonů během výuky. Na rozdíl od skříňek nevyžaduje 
              instalaci a může být použito okamžitě.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Žádná instalace',
                'Okamžité použití',
                'Personalizace',
                'Skladné'
              ].map((item, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-[#9B7EDE]/10 text-[#9B7EDE] font-medium"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {item}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Výhody imaPOUCH"
            subtitle="Proč zvolit pouche pro vaši školu"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 h-full shadow-md hover:shadow-lg transition-shadow text-center">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: `${benefit.color}20` }}
                  >
                    <benefit.icon className="w-8 h-8" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a4e] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop" 
                alt="Jak to funguje"
                className="rounded-3xl shadow-xl"
              />
            </AnimatedSection>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4e] mb-6">
                Jak imaPOUCH funguje?
              </h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Žák obdrží pouche', text: 'Každý žák dostane své vlastní pouche s identifikací.' },
                  { step: 2, title: 'Příchod do třídy', text: 'Žák vloží telefon do pouche a odevzdá učiteli.' },
                  { step: 3, title: 'Bezpečné uložení', text: 'Učitel uloží pouche na bezpečné místo.' },
                  { step: 4, title: 'Konec hodiny', text: 'Žák si vyzvedne pouche s telefonem zpět.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#9B7EDE] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a1a4e] mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Varianty a možnosti"
            subtitle="Vyberte si řešení, které nejlépe vyhovuje vašim potřebám"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Základní',
                description: 'Jednoduché pouche v jedné barvě.',
                features: ['Jedna barva', 'Bez potisku', 'Hromadná sleva']
              },
              {
                title: 'Personalizované',
                description: 'Pouche s logem školy a identifikací.',
                features: ['Logo školy', 'Čísla/identifikace', 'Více barev']
              },
              {
                title: 'Premium',
                description: 'Luxusní provedení s extra ochranou.',
                features: ['Zesílený materiál', 'RFID ochrana', 'Individuální design']
              }
            ].map((variant, index) => (
              <AnimatedSection key={variant.title} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 h-full shadow-md">
                  <h3 className="text-2xl font-bold text-[#1a1a4e] mb-2">
                    {variant.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {variant.description}
                  </p>
                  <ul className="space-y-3">
                    {variant.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-[#3ECFA0] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#9B7EDE] to-[#8a6dd0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hledáte ekonomické řešení?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Kontaktujte nás pro cenovou nabídku na míru vaší škole.
          </p>
          <Link to="/kontakt">
            <Button className="bg-white text-[#9B7EDE] hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg">
              Chci nabídku
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Imapouch;
