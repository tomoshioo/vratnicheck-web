import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook } from 'lucide-react';
import { XLogo } from '@/components/icons/XLogo';

const Footer = () => {
  const quickLinks = [
    { label: 'Domů', href: '/' },
    { label: 'Média', href: '/media' },
    { label: 'O nás', href: '/o-nas' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  const productLinks = [
    { label: 'imaPORTER', href: '/produkty/importer' },
    { label: 'imaLOCKER', href: '/produkty/imalocker' },
    { label: 'imaLOCKER Mobile', href: '/produkty/imalocker-mobile' },
    { label: 'imaPOUCH', href: '/produkty/imapouch' },
  ];

  return (
    <footer className="bg-[#1a1a4e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="text-white">VRÁTNÍ</span>
                <span className="text-[#3ECFA0]">CHECK</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Kompletní řešení pro bezpečnost škol. Přístupové systémy, 
              skříňky na mobily a pouche. Vyvíjíme a vyrábíme v ČR.
            </p>
            <a
              href="https://www.ima.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3ECFA0] hover:underline text-sm mb-6 inline-block"
            >
              www.ima.cz
            </a>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/ima-s-r-o-/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3ECFA0] transition-colors"
                aria-label="IMA s.r.o. na LinkedInu"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/imaczech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3ECFA0] transition-colors"
                aria-label="IMA s.r.o. na Facebooku"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ima_cz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3ECFA0] transition-colors"
                aria-label="IMA s.r.o. na X"
              >
                <XLogo className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Rychlé odkazy</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-[#3ECFA0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Produkty</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-[#3ECFA0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#3ECFA0] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  IMA s.r.o.<br />
                  Na Valentince 1003/1<br />
                  Praha 5, 150 00
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#3ECFA0] flex-shrink-0" />
                <a href="tel:+420771129469" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                  (+420) 771 129 469
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#3ECFA0] flex-shrink-0" />
                <a href="mailto:jsem@vratnicheck.cz" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                  jsem@vratnicheck.cz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Právní odkazy a copyright */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link to="/obchodni-podminky" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                Všeobecné obchodní podmínky
              </Link>
              <Link to="/servisni-podminky" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                Všeobecné servisní podmínky
              </Link>
              <Link to="/ochrana-osobnich-udaju" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                Informace o zpracování osobních údajů
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-[#3ECFA0] transition-colors">
                Prohlášení o cookies
              </Link>
            </div>
            <p className="text-gray-400 text-sm">© 2026 IMA s.r.o.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
