import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AnimatedSection from '@/components/shared/AnimatedSection';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Děkujeme za váš zájem. Brzy se vám ozveme!');
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#1a1a4e] to-[#2a2a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kontaktujte nás
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Jsme tu pro vás. Ozvěte se a my vám pomůžeme najít to nejlepší řešení pro vaši školu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="bg-[#1a1a4e] rounded-3xl p-8 lg:p-12 text-white h-full">
                <h2 className="text-3xl font-bold mb-8">
                  IMA s.r.o.
                </h2>
                <p className="text-gray-300 mb-10">
                  Member of WITTE Automotive GmbH
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-[#3ECFA0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Adresa</h3>
                      <div className="text-gray-300">
                        Na Valentince 1<br />
                        Praha 5, 150 00<br />
                        IČO: 45277397
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <User className="w-7 h-7 text-[#3ECFA0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Josef Purnoch</h3>
                      <div className="text-gray-300">
                        Vedoucí projektový manažer
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-[#3ECFA0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Telefon</h3>
                      <a 
                        href="tel:+420771129469" 
                        className="text-[#3ECFA0] hover:text-white transition-colors text-lg"
                      >
                        (+420) 771 129 469
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-[#3ECFA0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <a 
                        href="mailto:jsem@vratnicheck.cz" 
                        className="text-[#3ECFA0] hover:text-white transition-colors text-lg"
                      >
                        jsem@vratnicheck.cz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-[#3ECFA0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Otevírací doba</h3>
                      <div className="text-gray-300">
                        Po - Pá: 8:00 - 17:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-[#1a1a4e] mb-8">
                  Napište nám
                </h2>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-[#1a1a4e] text-base">
                      Jméno a příjmení *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="mt-2 bg-white border-gray-200 focus:border-[#3ECFA0] focus:ring-[#3ECFA0] h-12"
                      placeholder="Vaše jméno"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-[#1a1a4e] text-base">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="mt-2 bg-white border-gray-200 focus:border-[#3ECFA0] focus:ring-[#3ECFA0] h-12"
                        placeholder="vas@email.cz"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#1a1a4e] text-base">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="mt-2 bg-white border-gray-200 focus:border-[#3ECFA0] focus:ring-[#3ECFA0] h-12"
                        placeholder="+420 123 456 789"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="school" className="text-[#1a1a4e] text-base">
                      Škola / Organizace
                    </Label>
                    <Input
                      id="school"
                      type="text"
                      className="mt-2 bg-white border-gray-200 focus:border-[#3ECFA0] focus:ring-[#3ECFA0] h-12"
                      placeholder="Název školy"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#1a1a4e] text-base">
                      Zpráva
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      className="mt-2 bg-white border-gray-200 focus:border-[#3ECFA0] focus:ring-[#3ECFA0]"
                      placeholder="Co vás zajímá?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#3ECFA0] hover:bg-[#2ab88a] text-white py-4 rounded-full font-semibold text-lg transition-all hover:scale-[1.02]"
                  >
                    Odeslat zprávu
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Odesláním formuláře souhlasíte se zpracováním osobních údajů.
                  </p>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">IMA s.r.o.</p>
                <p className="text-gray-400">Na Valentince 1, Praha 5</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
