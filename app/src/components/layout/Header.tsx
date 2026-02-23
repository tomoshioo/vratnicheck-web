import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Domů', href: '/' },
    { 
      label: 'Produkty', 
      href: '#',
      submenu: [
        { label: 'imaPORTER', href: '/produkty/importer' },
        { label: 'imaLOCKER', href: '/produkty/imalocker' },
        { label: 'imaLOCKER Mobile', href: '/produkty/imalocker-mobile' },
        { label: 'imaPOUCH', href: '/produkty/imapouch' },
      ]
    },
    { label: 'Média', href: '/media' },
    { label: 'O nás', href: '/o-nas' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - vždy přesměruje na homepage a scroll nahoru */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-2xl font-bold">
              <span className="text-[#1a1a4e]">VRÁTNÍ</span>
              <span className="text-[#3ECFA0]">CHECK</span>
            </span>
            <span className="text-xs text-gray-500 mt-2">by IMA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <button
                      className={`flex items-center px-4 py-2 rounded-full font-medium transition-colors ${
                        isActive('/produkty')
                          ? 'text-[#3ECFA0]'
                          : 'text-gray-700 hover:text-[#3ECFA0]'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 pt-2 w-56 overflow-visible">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="block px-5 py-3 text-gray-700 hover:bg-[#3ECFA0]/10 hover:text-[#3ECFA0] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-[#3ECFA0]'
                        : 'text-gray-700 hover:text-[#3ECFA0]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/kontakt">
              <Button className="bg-[#FF6B9D] hover:bg-[#ff5285] text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105">
                Chci konzultaci
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <button className="p-2">
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold">
                    <span className="text-[#1a1a4e]">VRÁTNÍ</span>
                    <span className="text-[#3ECFA0]">CHECK</span>
                  </span>
                </div>
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.submenu ? (
                        <div className="space-y-2">
                          <span className="px-4 py-2 font-medium text-gray-700">
                            {link.label}
                          </span>
                          <div className="pl-4 space-y-1">
                            {link.submenu.map((item) => (
                              <Link
                                key={item.label}
                                to={item.href}
                                className="block px-4 py-2 text-gray-600 hover:text-[#3ECFA0] transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={link.href}
                          className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                            isActive(link.href)
                              ? 'bg-[#3ECFA0]/10 text-[#3ECFA0]'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Link to="/kontakt">
                    <Button className="w-full bg-[#FF6B9D] hover:bg-[#ff5285] text-white py-3 rounded-full font-medium">
                      Chci konzultaci
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
