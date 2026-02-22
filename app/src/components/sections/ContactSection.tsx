import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SectionTitle from '@/components/shared/SectionTitle';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Děkujeme za váš zájem. Brzy se vám ozveme!');
  };

  return (
    <section className="py-24 bg-white" id="kontakt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Kontaktujte nás"
          subtitle="Jsme tu pro vás. Ozvěte se a my vám pomůžeme najít to nejlepší řešení."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1a1a4e] rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">
                IMA s.r.o.
              </h3>
              <p className="text-gray-300 mb-8">
                Member of WITTE Automotive GmbH
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#3ECFA0]" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Adresa</div>
                    <div className="text-gray-300">
                      Na Valentince 1<br />
                      Praha 5, 150 00<br />
                      IČO: 45277397
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-[#3ECFA0]" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Josef Purnoch</div>
                    <div className="text-gray-300">
                      Vedoucí projektový manažer
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#3ECFA0]" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Telefon</div>
                    <a 
                      href="tel:+420771129469" 
                      className="text-[#3ECFA0] hover:text-white transition-colors"
                    >
                      (+420) 771 129 469
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#3ECFA0]" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <a 
                      href="mailto:jsem@vratnicheck.cz" 
                      className="text-[#3ECFA0] hover:text-white transition-colors"
                    >
                      jsem@vratnicheck.cz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#1a1a4e] mb-6">
                Napište nám
              </h3>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-[#1a1a4e]">
                    Jméno a příjmení *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="mt-2 bg-white border-gray-200 focus:border-[#3ECFA0] focus:ring-[#3ECFA0]"
                    placeholder="Vaše jméno"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#1a1a4e]">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-2 bg-white border-gray-200 focus:border-[#3ECFA0] focus:ring-[#3ECFA0]"
                    placeholder="vas@email.cz"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#1a1a4e]">
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-2 bg-white border-gray-200 focus:border-[#3ECFA0] focus:ring-[#3ECFA0]"
                    placeholder="+420 123 456 789"
                  />
                </div>

                <div>
                  <Label htmlFor="school" className="text-[#1a1a4e]">
                    Škola / Organizace
                  </Label>
                  <Input
                    id="school"
                    type="text"
                    className="mt-2 bg-white border-gray-200 focus:border-[#3ECFA0] focus:ring-[#3ECFA0]"
                    placeholder="Název školy"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#1a1a4e]">
                    Zpráva
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="mt-2 bg-white border-gray-200 focus:border-[#3ECFA0] focus:ring-[#3ECFA0]"
                    placeholder="Co vás zajímá?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#3ECFA0] hover:bg-[#2ab88a] text-white py-3 rounded-full font-medium transition-all hover:scale-[1.02]"
                >
                  Odeslat zprávu
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
