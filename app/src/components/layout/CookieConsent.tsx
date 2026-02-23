import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'vratnicheck-cookie-consent';

const CookieConsent = () => {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setAccepted(stored === 'accepted');
    } catch {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
      setAccepted(true);
    } catch {
      setAccepted(true);
    }
  };

  if (accepted !== false) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a4e] text-white border-t border-white/10 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-200 text-center md:text-left">
            Na našem webu používáme soubory cookies pro měření návštěvnosti a zlepšení služeb. Kliknutím na „Přijmout“ vyjadřujete souhlas.{' '}
            <Link to="/cookies" className="text-[#3ECFA0] hover:underline">
              Prohlášení o cookies
            </Link>
            {' · '}
            <Link to="/ochrana-osobnich-udaju" className="text-[#3ECFA0] hover:underline">
              Ochrana osobních údajů
            </Link>
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              asChild
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link to="/cookies">Nastavení</Link>
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-[#3ECFA0] hover:bg-[#2ab88a] text-white"
            >
              Přijmout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
