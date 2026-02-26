import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Lock,
  Smartphone,
  CreditCard,
  BarChart3,
  Layers,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';

const features = [
  {
    icon: Smartphone,
    title: 'Přístup přes aplikaci',
    description: 'Žáci i pedagogové mohou skříňku otevřít aplikací imaPORTER MobileAccess Key v telefonu – bez klíčů a bez čekání.',
    color: '#3ECFA0',
  },
  {
    icon: CreditCard,
    title: 'Čipová karta nebo PIN',
    description: 'Přístup pomocí školní čipové karty, ISIC nebo PIN kódu. Integrace se stávajícím informačním systémem školy.',
    color: '#FF6B9D',
  },
  {
    icon: BarChart3,
    title: 'Statistiky využití',
    description: 'Přehled obsazenosti, využití skříněk a evidence přístupů. Správa přístupových práv on-line z jednoho místa.',
    color: '#9B7EDE',
  },
  {
    icon: Layers,
    title: 'Skupinové skříňky',
    description: 'Možnost přiřadit skříňky třídám, kroužkům nebo sportovním oddílům. Škola má vše pod kontrolou 24/7.',
    color: '#FFE66D',
  },
  {
    icon: Shield,
    title: 'Bezpečné a pod kontrolou',
    description: 'Díky digitálnímu přístupu vždy víte, kdo skříňku použil a kdy. Transparentní historie událostí.',
    color: '#3ECFA0',
  },
  {
    icon: Zap,
    title: 'Volitelné vybavení',
    description: 'USB nabíjení v přihrádce, EINK display, barevná indikace stavu (volná/obsazená), vnitřní osvětlení.',
    color: '#FF6B9D',
  },
];

const references = [
  {
    place: 'TRIANGL multifunkční budova',
    city: 'Beroun',
    points: ['Šatní a úložné skříňky pro žáky', '240 dřevěných skříněk', 'LED indikace stavu skříňky', 'Systém imaPORTER Pro s integrovanou správou skříněk'],
  },
  {
    place: 'VIA Beroun – školní kampus',
    city: 'Beroun',
    points: ['Šatní a úložné skříňky pro žáky', '360 plechových skříněk', 'LED indikace stavu skříňky', 'Systém imaPORTER Pro s integrovanou správou skříněk'],
  },
];

const Imalocker = () => {
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
                <Lock className="w-4 h-4 mr-2" />
                Chytré skříňky pro školy
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a4e] mb-6">
                imaLOCKER
              </h1>
              <p className="text-2xl text-[#1a1a4e]/90 font-semibold mb-4">
                Skříňky pro žáky na čip. Digitální, bezpečné, 24/7.
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Moderní řešení chytrých skříněk pro školy: šatní a úložné skříňky s digitálním přístupem. 
                Žáci nepotřebují klíče ani karty navíc – otevřou aplikací, čipem nebo PINem. Vše pod kontrolou v cloudu.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/kontakt">
                  <Button className="bg-[#9B7EDE] hover:bg-[#8a6dcd] text-white px-8 py-3 rounded-full font-medium">
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
              className="relative flex items-center justify-center"
            >
              <img
                src="/images/products/imalocker-mistnost.png"
                alt="Moderní chytré skříňky v školní chodbě – bílé skříňky s čtečkami a LED indikací"
                className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jak to funguje – architektura */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Jak imaLOCKER funguje"
            subtitle="Cloud, terminál, chytré zámky – vše pro školy na jednom místě"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-gray-600 mb-6">
                Systém propojuje webový portál pro správu, cloudovou databázi a ovládací terminál u skříněk. 
                Škola spravuje přístupy on-line, žáci otevírají skříňku čipem, mobilem nebo PINem. 
                Na jednu sestavu lze napojit až 120 chytrých zámků.
              </p>
              <ul className="space-y-3 text-gray-600">
                {[
                  'Webový portál: statistiky využití, administrace, skupinové skříňky',
                  'Cloudová databáze: centrální správa a přístup odkudkoli',
                  'API pro propojení se stávajícím informačním systémem školy',
                  'Ovládací terminál: dotykový display, RFID (BT, NFC), biometrika nebo QR kódy',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#3ECFA0] mr-3 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src="/images/products/imalocker-architektura.png"
                alt="Schéma systému imaLOCKER – cloud, webový portál, API, ovládací terminál a chytré zámky"
                className="rounded-3xl shadow-xl w-full object-contain"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Obrázek – chodba se skříňkami */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <img
              src="/images/products/imalocker-chodba.png"
              alt="Školní chodba s řadou chytrých skříněk – žluté a bílé skříňky s LED indikací a čtečkami"
              className="rounded-3xl shadow-xl w-full object-cover max-h-[480px]"
            />
            <p className="text-center text-gray-500 mt-4 text-sm">
              Skříňky pro žáky s digitálním přístupem a moderním designem.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Přístup mobilem – imaPORTER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <img
                src="/images/products/imalocker-mobil.png"
                alt="Otevření skříňky pomocí aplikace IMA PORTER v mobilu – chytré skříňky s podsvíceným kroužkem"
                className="rounded-3xl shadow-xl w-full object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4e] mb-6">
                Otevřete skříňku mobilem
              </h2>
              <p className="text-gray-600 mb-4">
                Přístup lze snadno spravovat přes aplikaci <strong className="text-[#1a1a4e]">imaPORTER MobileAccess Key</strong>, 
                školní čipovou kartu nebo PIN. Žáci nemusí nosit klíče ani extra karty – mají své věci vždy po ruce a celý proces je rychlý a přehledný.
              </p>
              <p className="text-gray-600">
                Každý žák má vlastní chráněný prostor, ke kterému má přístup jen on. Vše běží 24/7 a škola má přehled v cloudové platformě imaLOCKER.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Výhody – karty */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Proč imaLOCKER do školy"
            subtitle="Digitální skříňky šité na míru vzdělávacím zařízením"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.08}>
                <div className="bg-white rounded-3xl p-8 h-full shadow-md hover:shadow-lg transition-shadow">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a4e] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modulární řešení */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9B7EDE]/10 text-[#9B7EDE] font-medium text-sm mb-6">
                <Layers className="w-4 h-4 mr-2" />
                Na míru škole
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4e] mb-6">
                Modulární řešení – jiná velikost, jiný počet
              </h2>
              <p className="text-gray-600 mb-4">
                imaLOCKER je „digitální stavebnice“. Potřebujete jinou velikost přihrádek nebo jiný počet skříněk? 
                Vše se dá přizpůsobit požadavkům školy – od šatních skříněk po úložné prostory pro batohy a pomůcky.
              </p>
              <p className="text-gray-600">
                Řešení je dodáváno v úzké spolupráci se zákazníkem, včetně nezávislého výpočtu ideální sestavy zdarma.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src="/images/products/imalocker-moduly.png"
                alt="Modulární skříňky – různé velikosti a uspořádání bloků"
                className="rounded-3xl shadow-xl w-full object-contain"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Reference – školy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Reference ve školství"
            subtitle="Inspirujte se projekty na školách"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {references.map((ref, index) => (
              <AnimatedSection key={ref.place} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-baseline gap-2 mb-4">
                    <h3 className="text-xl font-bold text-[#1a1a4e]">{ref.place}</h3>
                    <span className="text-gray-500">– {ref.city}</span>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {ref.points.map((point, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#3ECFA0] mr-3 shrink-0" />
                        {point}
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
      <section className="py-24 bg-gradient-to-br from-[#9B7EDE] to-[#7c5cc7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Chytré skříňky pro vaši školu
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Napište nám – připravíme nezávislý výpočet a nabídku na míru.
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

export default Imalocker;
