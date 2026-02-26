import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Wallet, 
  Palette, 
  Users,
  CheckCircle,
  ArrowRight,
  User,
  Phone,
  Mail
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
    description: 'Lehké uzamykatelné pouzdro, které se vejde do každé tašky.',
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
                Jedná se o uzamykatelné pouzdro na telefon. Flexibilní řešení pro úschovu mobilů ve škole – žákům pomáhá odložit mobil a soustředit se na výuku.
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
                src="/images/products/imapouch-rozmery.png" 
                alt="imaPOUCH – pouche s rozměry"
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto object-contain"
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
              imaPOUCH je uzamykatelné pouzdro na telefon a ideální volba pro školy, které hledají ekonomické a flexibilní řešení 
              pro odkládání mobilů během výuky. Na rozdíl od skříňek nevyžaduje 
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
                src="/images/products/imapouch-how-to-use.png" 
                alt="Jak imaPOUCH používat – návod krok za krokem"
                className="rounded-3xl shadow-xl w-full"
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

      {/* Kontaktní osoba pro imaPOUCH */}
      <section id="kontakt" className="py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Chcete cenovou nabídku?"
            subtitle="Kontaktujte našeho specialistu na imaPOUCH – rád s vámi probere možnosti a připraví nabídku na míru."
          />
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 max-w-md">
              <h3 className="text-xl font-bold text-[#1a1a4e] mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-[#9B7EDE]" />
                Kontaktní osoba pro imaPOUCH
              </h3>
              <p className="text-2xl font-semibold text-[#1a1a4e] mb-6">
                Pavel Zvára
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+420733595617"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#9B7EDE] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#9B7EDE]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#9B7EDE]" />
                  </div>
                  <span className="text-lg">733 595 617</span>
                </a>
                <a
                  href="mailto:pavel.zvara@ima.cz"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#9B7EDE] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#9B7EDE]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#9B7EDE]" />
                  </div>
                  <span className="text-lg">pavel.zvara@ima.cz</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
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
