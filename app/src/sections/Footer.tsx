import { Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a4e] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Quote */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">VRÁTNÍ</span>
              <span className="text-[#3ECFA0]">CHECK</span>
            </div>
            <blockquote className="text-gray-300 italic border-l-4 border-[#3ECFA0] pl-4">
              "Tato produktová řada vstupních systémů IMAporter byla vyvinutá speciálně na míru pro školská zařízení. Jsme IMA s.r.o., přední český vývojář v oblasti vstupních a identifikačních systémů a jsme součástí velmi silné skupiny WITTE Automotive GmbH."
            </blockquote>
            <p className="text-[#3ECFA0] mt-2 font-medium">
              Josef Purnoch, vedoucí projektový manažer
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Odkazy</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                  O nás
                </a>
              </li>
              <li>
                <a href="#aktuality" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                  Aktuality
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                  GDPR
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                  Obchodní podmínky
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                  Prohlášení o cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Sledujte nás</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3ECFA0] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3ECFA0] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3ECFA0] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>© {currentYear} IMA s.r.o.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
