import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Lock, 
  Eye, 
  Users, 
  BookOpen, 
  Award,
  CheckCircle,
  ArrowRight,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';

const benefits = [
  {
    icon: BookOpen,
    title: 'Lepší soustředění',
    description: 'Studenti se plně věnují výuce místo telefonů. Žádné vyrušování notifikacemi.',
    color: '#3ECFA0'
  },
  {
    icon: Award,
    title: 'Žádné podvádění',
    description: 'Ideální řešení pro testy, přijímací zkoušky a maturity. Telefony bezpečně uloženy.',
    color: '#FF6B9D'
  },
  {
    icon: Eye,
    title: 'Vizuální kontrola',
    description: 'Transparentní dveře umožňují okamžitou kontrolu obsahu skříňky.',
    color: '#9B7EDE'
  },
  {
    icon: Lock,
    title: 'Bezpečné uložení',
    description: 'Ocelová konstrukce s robustním zámkem. Telefony jsou v bezpečí.',
    color: '#FFE66D'
  },
  {
    icon: Users,
    title: 'Organizované přihrádky',
    description: '36 očíslovaných přihrádek - každý žák má své jasné místo.',
    color: '#3ECFA0'
  },
  {
    icon: Clock,
    title: 'Rychlé ovládání',
    description: 'Jednoduchý princip: Odlož. Zamkni. Soustřeď se.',
    color: '#FF6B9D'
  }
];

const useCases = [
  {
    title: 'Běžná výuka',
    description: 'Vytvořte ve třídách prostředí, kde hraje hlavní roli vzdělávání.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop'
  },
  {
    title: 'Testy a zkoušky',
    description: 'Zajistěte férové podmínky pro všechny studenty.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop'
  },
  {
    title: 'Přijímací zkoušky',
    description: 'Eliminujte možnost podvádění při důležitých zkouškách.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
  }
];

const specs = [
  { label: 'Kapacita', value: '36 mobilních telefonů' },
  { label: 'Materiál', value: 'Ocel s práškovým nástřikem' },
  { label: 'Dveře', value: 'Tvrzené sklo / transparentní' },
  { label: 'Rozměry', value: '500 x 400 x 300 mm (V x Š x H)' },
  { label: 'Zámek', value: 'Mechanický / elektronický (volitelně)' },
  { label: 'Přihrádky', value: '36 očíslovaných slotů' },
];

const Imalocker = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#FF6B9D]/10 via-white to-[#FFE66D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF6B9D]/10 text-[#FF6B9D] font-medium text-sm mb-6">
                <Smartphone className="w-4 h-4 mr-2" />
                Skříňky na mobily
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a4e] mb-6">
                imaLOCKER Mobile 36
              </h1>
              <p className="text-2xl text-[#FF6B9D] font-semibold mb-4">
                Odlož. Zamkni. Soustřeď se.
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Praktická a bezpečná úschova pro 36 mobilních telefonů. 
                Vytvořte ve třídách „phone-free zónu", kde se studenti plně soustředí na učivo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/kontakt">
                  <Button className="bg-[#FF6B9D] hover:bg-[#ff5285] text-white px-8 py-3 rounded-full font-medium">
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
                src="https://images.unsplash.com/photo-1590248889512-76f8199d4a3d?w=800&h=600&fit=crop" 
                alt="imaLOCKER"
                className="rounded-3xl shadow-2xl"
              />
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-4xl font-bold text-[#FF6B9D]">36</div>
                <div className="text-gray-600">telefonů</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4e] mb-6">
                Telefony v lavicích? Raději bezpečně ve skříňce!
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Mobilní telefony jsou dnes ve výuce nejčastějším zdrojem vyrušování. 
                  Neustálé „scrollování" pod lavicí tříští pozornost žáků a komplikuje práci učitelům.
                </p>
                <p>
                  <strong className="text-[#1a1a4e]">imaLOCKER Mobile 36</strong> je praktická a 
                  bezpečná úschova pro 36 mobilních telefonů, která pomáhá vytvořit jasná pravidla 
                  „phone-free zón":
                </p>
                <ul className="space-y-2">
                  {[
                    'Studenti se lépe soustředí',
                    'Porady jsou důvěrnější',
                    'Citlivé prostory lépe chráněné'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#3ECFA0] mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop" 
                alt="Studenti ve třídě"
                className="rounded-3xl shadow-xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Výhody imaLOCKERu"
            subtitle="Proč školy volí naše skříňky na mobily"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 h-full shadow-md hover:shadow-lg transition-shadow">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${benefit.color}20` }}
                  >
                    <benefit.icon className="w-7 h-7" style={{ color: benefit.color }} />
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

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Kdy imaLOCKER využijete?"
            subtitle="Ideální řešení pro různé situace ve škole"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={useCase.title} delay={index * 0.1}>
                <div className="group">
                  <div className="overflow-hidden rounded-3xl mb-6">
                    <img 
                      src={useCase.image} 
                      alt={useCase.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a4e] mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Technické parametry"
            subtitle="Kvalitní zpracování pro dlouhou životnost"
          />

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            {specs.map((spec, index) => (
              <div 
                key={spec.label}
                className={`flex justify-between items-center p-6 ${
                  index !== specs.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <span className="font-medium text-[#1a1a4e]">{spec.label}</span>
                <span className="text-gray-600">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#FF6B9D] to-[#ff5285]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vytvořte ve škole „phone-free zónu"
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Kontaktujte nás pro cenovou nabídku a termín dodání.
          </p>
          <Link to="/kontakt">
            <Button className="bg-white text-[#FF6B9D] hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg">
              Chci nabídku
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Imalocker;
