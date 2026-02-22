import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DoorOpen, 
  Smartphone, 
  CreditCard, 
  Link as LinkIcon, 
  Bell, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';

const features = [
  {
    icon: Smartphone,
    title: 'Otevírání mobilem',
    description: 'Aplikace IMAporter MobileAccess Key pro Android a iOS. Otevřete dveře jedním dotykem.',
    color: '#3ECFA0'
  },
  {
    icon: CreditCard,
    title: 'Čipy a karty',
    description: 'Podpora ISIC, karet MHD (Lítačka), InKarta ČD a vlastních čipových karet.',
    color: '#FF6B9D'
  },
  {
    icon: LinkIcon,
    title: 'Integrace se systémy',
    description: 'Plná kompatibilita s Bakaláři, Škola Online, Edupage, Strava.cz a Edookit.',
    color: '#9B7EDE'
  },
  {
    icon: Bell,
    title: 'Hlášení rodičům',
    description: 'Automatické notifikace o příchodu a odchodu dítěte přímo do mobilu rodiče.',
    color: '#FFE66D'
  },
  {
    icon: Shield,
    title: 'Bezpečnost',
    description: 'Šifrovaná komunikace, certifikace NBÚ, 99.9% dostupnost systému.',
    color: '#3ECFA0'
  },
  {
    icon: CheckCircle,
    title: 'Snadná správa',
    description: 'Webové rozhraní pro správu přístupových práv, reporty a statistiky.',
    color: '#FF6B9D'
  }
];

const techSpecs = [
  { label: 'Kapacita paměti', value: 'až 2100 uživatelů / čtečka' },
  { label: 'Frekvence', value: '13.56 MHz & 2.4 GHz' },
  { label: 'Technologie', value: 'NFC, Bluetooth, LAN, RS485' },
  { label: 'Rozměry čtečky', value: '117 x 50 x 20 mm' },
  { label: 'Krytí', value: 'IP 65' },
  { label: 'Teplota', value: '-25°C až +60°C' },
];

const Imaporter = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#3ECFA0]/10 via-white to-[#9B7EDE]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#3ECFA0]/10 text-[#3ECFA0] font-medium text-sm mb-6">
                <DoorOpen className="w-4 h-4 mr-2" />
                Přístupový systém
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a4e] mb-6">
                imaPORTER
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Chytrý vstup do školy. Moderní přístupový systém, který umožňuje 
                bezpečný vstup pomocí mobilního telefonu, čipové karty nebo ISIC.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/kontakt">
                  <Button className="bg-[#3ECFA0] hover:bg-[#2ab88a] text-white px-8 py-3 rounded-full font-medium">
                    Chci nabídku
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-2 border-gray-300 px-8 py-3 rounded-full font-medium">
                  <Download className="w-5 h-5 mr-2" />
                  Technická specifikace
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop" 
                alt="imaPORTER systém"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Funkce a výhody"
            subtitle="Vše, co potřebujete pro bezpečný provoz školy"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-3xl p-8 h-full hover:shadow-lg transition-shadow">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a4e] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop" 
                alt="Schéma systému"
                className="rounded-3xl shadow-xl"
              />
            </AnimatedSection>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4e] mb-6">
                Jak systém funguje?
              </h2>
              <div className="space-y-6">
                {[
                  { step: 1, text: 'Žák přiloží mobil nebo kartu k čtečce' },
                  { step: 2, text: 'Systém ověří oprávnění v reálném čase' },
                  { step: 3, text: 'Dveře se otevřou a záznam se uloží' },
                  { step: 4, text: 'Rodič dostane notifikaci o příchodu' },
                ].map((item) => (
                  <div key={item.step} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#3ECFA0] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Technické parametry"
            subtitle="Profesionální hardware pro spolehlivý provoz"
          />

          <div className="bg-gray-50 rounded-3xl overflow-hidden">
            {techSpecs.map((spec, index) => (
              <div 
                key={spec.label}
                className={`flex justify-between items-center p-6 ${
                  index !== techSpecs.length - 1 ? 'border-b border-gray-200' : ''
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
      <section className="py-24 bg-gradient-to-br from-[#3ECFA0] to-[#2ab88a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Připraveni na bezpečnější školu?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku.
          </p>
          <Link to="/kontakt">
            <Button className="bg-white text-[#3ECFA0] hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg">
              Chci nabídku
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Imaporter;
