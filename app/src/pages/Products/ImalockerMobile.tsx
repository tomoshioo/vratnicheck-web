import { useState } from 'react';
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
  Clock,
  User,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { submitToFormspree } from '@/lib/formSubmit';

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
  { label: 'Dveře', value: 'Tvrzený polykarbonát / transparentní' },
  { label: 'Rozměry', value: '27,5 × 43,5 × 20,5 cm (Š × V × H)' },
  { label: 'Zámek', value: 'Mechanický / elektronický (volitelně)' },
  { label: 'Přihrádky', value: '36 očíslovaných slotů' },
];

const ImalockerMobile = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    const payload = { ...formData, _subject: 'imaLOCKER Mobile – poptávka z webu' };
    const result = await submitToFormspree(payload);
    if (result.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
      setErrorMessage(result.error);
    }
  };

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
                imaLOCKER Mobile
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
              className="relative flex items-center justify-center"
            >
              <img 
                src="/images/products/imalocker-mobile-36.png" 
                alt="imaLOCKER Mobile – skříňka na mobily s otevřenými dveřmi a přihrádkami"
                className="rounded-3xl shadow-2xl w-full max-w-lg object-contain"
              />
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
                  <strong className="text-[#1a1a4e]">imaLOCKER Mobile</strong> je praktická a 
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
                src="/images/products/studenti-trida.png" 
                alt="Studenti ve třídě – mobil pod lavicí"
                className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Výhody imaLOCKER Mobile"
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
            title="Kdy imaLOCKER Mobile využijete?"
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

      {/* Kontaktní osoba + formulář */}
      <section id="kontakt" className="py-24 bg-gray-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Chcete cenovou nabídku?"
            subtitle="Zanechte nám kontakt – ozveme se, probereme s vámi vše a připravíme nabídku na míru."
          />
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Kontaktní osoba */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a1a4e] mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-[#FF6B9D]" />
                  Kontaktní osoba pro imaLOCKER Mobile
                </h3>
                <p className="text-2xl font-semibold text-[#1a1a4e] mb-6">
                  Pavel Zvára
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+420733595617"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#FF6B9D] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B9D]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#FF6B9D]" />
                    </div>
                    <span className="text-lg">733 595 617</span>
                  </a>
                  <a
                    href="mailto:pavel.zvara@ima.cz"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#FF6B9D] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B9D]/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#FF6B9D]" />
                    </div>
                    <span className="text-lg">pavel.zvara@ima.cz</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Stručný kontaktní formulář */}
            <AnimatedSection delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#1a1a4e] mb-2">
                  Zanechte nám kontakt
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Ozveme se a rádi s vámi probereme detaily a připravíme cenovou nabídku.
                </p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="mobile-name" className="text-[#1a1a4e]">
                      Jméno
                    </Label>
                    <Input
                      id="mobile-name"
                      type="text"
                      placeholder="Vaše jméno"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 rounded-xl border-gray-200"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile-email" className="text-[#1a1a4e]">
                      E-mail
                    </Label>
                    <Input
                      id="mobile-email"
                      type="email"
                      placeholder="vas@email.cz"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 rounded-xl border-gray-200"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile-message" className="text-[#1a1a4e]">
                      Zpráva
                    </Label>
                    <Textarea
                      id="mobile-message"
                      placeholder="Váš dotaz nebo poptávka..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 rounded-xl border-gray-200 min-h-[100px]"
                      required
                    />
                  </div>
                  {status === 'success' && (
                    <p className="text-[#3ECFA0] font-medium text-sm">
                      Děkujeme. Pavel Zvára se vám brzy ozve!
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-600 text-sm">{errorMessage}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#FF6B9D] hover:bg-[#ff5285] text-white rounded-xl py-3 font-medium disabled:opacity-70"
                  >
                    {status === 'loading' ? 'Odesílám…' : 'Odeslat'}
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Odesláním souhlasíte se zpracováním osobních údajů.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImalockerMobile;
