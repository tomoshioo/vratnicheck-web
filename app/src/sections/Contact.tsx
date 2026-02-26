import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { submitToFormspree } from '@/lib/formSubmit';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    role: 'zrizovatel',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    const payload = { ...formData, _subject: 'Vrátnícheck – kontakt z webu' };
    const result = await submitToFormspree(payload);
    if (result.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', school: '', role: 'zrizovatel', message: '' });
    } else {
      setStatus('error');
      setErrorMessage(result.error);
    }
  };

  return (
    <section className="py-20 bg-white" id="kontakt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a4e] mb-4">
            Chcete Vrátnícheck do vaší školy?
          </h2>
          <p className="text-lg text-gray-700">
            Zanechte nám na Vás kontakt, ozveme se zpátky.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Jste ředitel, rodič, žák anebo třeba zřizovatel. Vrátnícheck je vstupní bezpečnostní systém, který ocení všichni. Spojíme se s Vámi, vše do detailu probereme a pomůžeme Vám zavést Vrátnícheck i do Vaší školy.
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-[#1a1a4e] mb-2">
                IMA s.r.o.,
              </h3>
              <p className="text-gray-600">member of WITTE Automotive GmbH.</p>
              <p className="text-gray-600">Na Valentince 1, Praha 5</p>
              <p className="text-gray-600">IČO: 45277397</p>
            </div>

            <div className="bg-[#1a1a4e] p-6 rounded-xl text-white mb-8">
              <h4 className="font-semibold mb-4">
                POTŘEBUJETE PORADIT S ŘEŠENÍM?
              </h4>
              <p className="mb-4">Jsem Vám k dispozici, neváhejte se na mne obrátit!</p>
              <div className="space-y-2">
                <p className="font-semibold">Josef Purnoch</p>
                <a
                  href="tel:+420771129469"
                  className="flex items-center text-[#3ECFA0] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (+420) 771 129 469
                </a>
                <a
                  href="mailto:jsem@vratnicheck.cz"
                  className="flex items-center text-[#3ECFA0] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  jsem@vratnicheck.cz
                </a>
                <a
                  href="mailto:josef.purnoch@ima.cz"
                  className="flex items-center text-[#3ECFA0] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  josef.purnoch@ima.cz
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-[#1a1a4e]">
                  Jméno a příjmení <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#1a1a4e]">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-[#1a1a4e]">
                  Telefon (bez mezer)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="school" className="text-[#1a1a4e]">
                  Škola
                </Label>
                <Input
                  id="school"
                  type="text"
                  value={formData.school}
                  onChange={(e) =>
                    setFormData({ ...formData, school: e.target.value })
                  }
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-[#1a1a4e]">Jsem</Label>
                <RadioGroup
                  value={formData.role}
                  onValueChange={(value) =>
                    setFormData({ ...formData, role: value })
                  }
                  className="mt-2 space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="zamestnanec" id="zamestnanec" />
                    <Label htmlFor="zamestnanec" className="cursor-pointer">
                      Zaměstnanec školy
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rodic" id="rodic" />
                    <Label htmlFor="rodic" className="cursor-pointer">
                      Rodič
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="zrizovatel" id="zrizovatel" />
                    <Label htmlFor="zrizovatel" className="cursor-pointer">
                      Zřizovatel
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="jine" id="jine" />
                    <Label htmlFor="jine" className="cursor-pointer">
                      Jiné
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="message" className="text-[#1a1a4e]">
                  Chcete nám něco sdělit?
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1"
                  rows={4}
                />
              </div>

              {status === 'success' && (
                <p className="text-[#3ECFA0] font-medium text-center text-sm">
                  Děkujeme. Brzy se vám ozveme!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center text-sm">{errorMessage}</p>
              )}
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#3ECFA0] hover:bg-[#2ab88a] text-white py-3 rounded-full font-medium disabled:opacity-70"
              >
                {status === 'loading' ? 'Odesílám…' : 'Odeslat'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
