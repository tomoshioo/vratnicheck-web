import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-[#1a1a4e] to-[#2a2a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-[#3ECFA0] hover:underline text-sm mb-4 inline-block">Zpět Domů</Link>
            <h1 className="text-4xl md:text-5xl font-bold">Prohlášení o cookies</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg">
          <div className="space-y-6">
            <p>
              <strong>1.</strong> Společnost IMA s.r.o., se sídlem: Na Valentince 1003/1, 150 00 Praha 5, IČ: 45277397, DIČ: CZ45277397, užívá na této webové stránce soubory cookies, které jsou zde užity za účelem měření návštěvnosti webu, cílení reklamy, přizpůsobení zobrazení webových stránek. Cookies jsou vlastně malá množství dat, která se posílají vašemu koncovému zařízení a tím umožňují zejména přizpůsobení našich stránek vašim potřebám a zlepšení využití našich serverů. Cookies používá skoro každá webová stránka, neboť jde o užitečnou službu, která zvyšuje uživatelskou přívětivost opakovaně navštívené webové stránky. Cookies pro měření návštěvnosti webu a přizpůsobení zobrazení jsou zpracovávány na základě oprávněného zájmu společnosti. Cookies pro cílení reklamy jsou zpracovávány na základě vašeho souhlasu.
            </p>
            <p>
              <strong>2.</strong> Údaje, které provozovatel takto získá, mohou být zpřístupněny dalším zpracovatelům, zejména provozovatelům služeb a platforem Google a Facebook.
            </p>
            <p>
              <strong>3.</strong> Webové stránky lze používat i v režimu, který neumožňuje sbírání údajů o chování návštěvníků webu.
            </p>
            <p>
              <strong>4.</strong> Sbírání údajů o chování návštěvníků webu je aktivováno z podnětu návštěvníka webu, vyjádřeného aktivním zaškrtnutím možnosti „Souhlasím“ v cookie liště v dolní části webové stránky. Provozovatel webu, společnost IMA s.r.o., jako správce osobních údajů, zpracovává na této webové stránce cookies pro vyhodnocování návštěvnosti a optimalizaci marketingových aktivit (potřebné pro fungování webu a pro analytické účely a v případě vašeho souhlasu také pro retargeting). Více informací o souborech cookies a možnostech jejich deaktivace naleznete v tomto prohlášení nebo na <a href="http://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#3ECFA0] hover:underline">www.aboutcookies.org</a>.
            </p>
            <p>
              <strong>5.</strong> Souhlas udělujete na dobu uvedenou u jednotlivých marketingových cookies. Souhlas se sbíráním údajů souborů cookies pro marketingové účely lze vzít kdykoliv zpět změnou nastavení příslušného internetového prohlížeče.
            </p>
            <p>
              <strong>6.</strong> Třetí strany – Shromážděné cookies soubory jsou zpracovány zejména prostřednictvím služby Google Analytics (Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA). Sesbírané cookies soubory jsou společností Google Inc. zpracovávány v souladu se Zásadami ochrany soukromí (<a href="https://www.google.com/intl/cs/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#3ECFA0] hover:underline">google.com/policies/privacy</a>). Pomocí Google Analytics analyzujeme datový provoz a využití našich webových stránek. V souvislosti s reklamními službami využívají naše stránky funkce Google Analytics: remarketing, přehledy zobrazení v Reklamní síti Google, integrace se službou DoubleClick Campaign Manager a demografické a zájmové přehledy. Použití tohoto nástroje můžete omezit v nabídce „nastavení reklam“ na adrese <a href="http://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#3ECFA0] hover:underline">www.aboutcookies.org</a>.
            </p>
            <p>
              <strong>7.</strong> V souladu s čl. 12 GDPR informujeme jako správce o tom, že subjekt údajů má právo na přístup k osobním údajům a k informacím o účelu zpracování, kategorii údajů, příjemcích, době uchování, zdroji údajů a o automatizovaném rozhodování. Subjekt údajů má dále právo požadovat přístup, opravu, výmaz (právo být zapomenut), omezení zpracování, přenositelnost údajů, vznést námitku a právo nebýt předmětem rozhodnutí založeného výhradně na automatizovaném zpracování. V případě dotazů nebo stížností se lze obrátit na správce nebo na Úřad pro ochranu osobních údajů. Více v <Link to="/ochrana-osobnich-udaju" className="text-[#3ECFA0] hover:underline">Informacích o zpracování osobních údajů</Link>.
            </p>
            <p>
              <strong>8.</strong> Společnost IMA s.r.o. shromažďuje na svých webových stránkách soubory cookies v rozsahu nezbytném pro fungování webu, měření návštěvnosti a v případě souhlasu pro marketingové účely.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
