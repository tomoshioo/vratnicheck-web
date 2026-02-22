// Cookie Banner Component
import { Button } from '@/components/ui/button';

interface CookieBannerProps {
  onAccept: () => void;
}

const CookieBanner = ({ onAccept }: CookieBannerProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-700 text-center md:text-left">
            Na našem webu používáme soubory cookies, abychom neustále zlepšovali uživatelskou kvalitu poskytovaných služeb. Kliknutím na Přijmout vyjadřujete Váš souhlas s tímto použitím a za to děkujeme.{' '}
            <a
              href="#"
              className="text-[#3ECFA0] hover:text-[#2ab88a] underline"
            >
              Zásady ochrany osobních údajů
            </a>
          </p>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Nastavení
            </Button>
            <Button
              onClick={onAccept}
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

export default CookieBanner;
