import { motion } from 'framer-motion';
import { Award, Users, Building2, Globe } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';

const milestones = [
  { year: '1992', title: 'Založení IMA', description: 'Společnost IMA začala vyvíjet identifikační systémy.' },
  { year: '2000', title: 'První školy', description: 'Nasazení prvních přístupových systémů ve školském sektoru.' },
  { year: '2010', title: 'Mobilní technologie', description: 'Vývoj aplikací pro mobilní přístup.' },
  { year: '2021', title: 'WITTE Automotive', description: 'IMA se stává členem skupiny WITTE Automotive GmbH.' },
  { year: '2024', title: 'Vrátnícheck', description: 'Launch brandu Vrátnícheck specializovaného na školy.' },
];

const clients = [
  'Škoda Auto',
  'ČEZ',
  'Foxconn',
  'ČVUT',
  'Ministerstvo vnitra',
  'Desítky škol'
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#1a1a4e] to-[#2a2a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                O nás
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                IMA s.r.o. je přední český vývojář v oblasti vstupních a identifikačních systémů. 
                Jsme součástí skupiny WITTE Automotive GmbH.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#3ECFA0]" />
                </div>
                <div>
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-gray-400">let zkušeností</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Building2, label: 'Společnost', value: 'IMA s.r.o.' },
                { icon: Globe, label: 'Skupina', value: 'WITTE Automotive' },
                { icon: Users, label: 'Zaměstnanců', value: '50+' },
                { icon: Award, label: 'Certifikace', value: 'ISO 9001' },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-6">
                  <item.icon className="w-8 h-8 text-[#3ECFA0] mb-3" />
                  <div className="text-gray-400 text-sm">{item.label}</div>
                  <div className="text-xl font-semibold">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4e] mb-6">
                Náš příběh
              </h2>
            </div>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Od roku <strong className="text-[#1a1a4e]">1992</strong> je společnost IMA synonymem 
                pro výzkum a vývoj v oblasti softwaru a hardwaru, zejména v segmentu identifikačních systémů.
              </p>
              <p className="mb-6">
                Naše technologie využívají přední české i mezinárodní společnosti jako 
                <strong className="text-[#1a1a4e]"> Škoda Auto, ČEZ, Foxconn, ČVUT</strong> a další. 
                Naše identifikační řešení jsou ve firmách, úřadech i školách po celé České republice.
              </p>
              <p className="mb-6">
                V roce <strong className="text-[#1a1a4e]">2021</strong> se IMA stala plnohodnotným členem 
                silné německé skupiny <strong className="text-[#1a1a4e]">WITTE Automotive GmbH</strong>, 
                což nám umožňuje ještě více rozšiřovat naše know-how a technologickou základnu.
              </p>
              <p>
                V roce <strong className="text-[#1a1a4e]">2024</strong> jsme spustili brand 
                <strong className="text-[#3ECFA0]"> Vrátnícheck</strong> - specializované řešení 
                pro školy, které kombinuje naše dlouholeté zkušenosti s potřebami moderního školství.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Naše cesta"
            subtitle="Klíčové milníky v historii naší společnosti"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3ECFA0] via-[#FF6B9D] to-[#9B7EDE] -translate-x-1/2 rounded-full" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={milestone.year} delay={index * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    <div className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                    }`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                        <div className="text-3xl font-bold text-[#3ECFA0] mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-[#1a1a4e] mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-[#3ECFA0] rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0" />
                    <div className="w-full md:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Naši klienti"
            subtitle="Důvěřují nám přední společnosti a instituce"
          />

          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((client, index) => (
              <AnimatedSection key={client} delay={index * 0.1}>
                <div className="bg-gray-50 px-8 py-4 rounded-2xl">
                  <span className="text-lg font-semibold text-[#1a1a4e]">{client}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#3ECFA0] to-[#2ab88a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pojďme společně zabezpečit vaši školu
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Kontaktujte nás a my vám pomůžeme najít to nejlepší řešení.
          </p>
          <a 
            href="/kontakt"
            className="inline-flex items-center bg-white text-[#3ECFA0] hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
          >
            Kontaktujte nás
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
