import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TermsConditions = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold">Všeobecné obchodní podmínky (VOP)</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg">
          <h2 className="text-2xl font-bold text-[#1a1a4e] mb-6">Všeobecné obchodní podmínky společnosti IMA s.r.o. (VOP)</h2>
          <p>Tyto všeobecné obchodní podmínky se vztahují na všechny dodávky společnosti, platí ve verzi a od data uvedeného v záhlaví. VOP upravují a doplňují obecně platné zákonné podmínky dodávek.</p>
          <p>VOP mohou být upraveny dohodou stran, textem nabídky nebo smlouvou. Podáním objednávky, případně uzavřením smlouvy, Objednatel stvrzuje, že se s VOP seznámil a že s nimi souhlasí. Společnost IMA si vyhrazuje právo VOP změnit bez předchozího upozornění.</p>
          <p className="font-medium mt-6">Společnost IMA dodává za těchto standardních podmínek:</p>

          <h3 className="text-xl font-bold text-[#1a1a4e] mt-10 mb-4">Obecně</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Platnost nabídky je 30 dnů od data jejího vyhotovení.</li>
            <li>Vzhledem k nestabilitě globálního trhu může dojít ke změnám aktuálních dodavatelských cen.</li>
            <li>Místem plnění je sídlo dodavatele IMA s.r.o. Praha.</li>
            <li>Splatnost faktur je 14 dnů od data vystavení.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1a4e] mt-10 mb-4">Záruka</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Záruční doba je 24 měsíců od data zdanitelného plnění.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1a4e] mt-10 mb-4">Záruka na komponenty</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Záruka se vztahuje na dodané HW / SW komponenty a na jejich funkčnost pouze, pokud byly použity v souladu s uživatelskou dokumentací.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1a4e] mt-10 mb-4">Záruka na kompletní systém</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Záruka platí pouze na systém dodaný, instalovaný a oživený společností IMA nebo certifikovaným partnerem dle smlouvy, není-li písemně dohodnuto jinak.</li>
            <li>Záruka na systém a dodané prvky je podmíněna použitím dodavatelem dodaných nebo dodavatelem otestovaných a písemně schválených komponent.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1a4e] mt-10 mb-4">Záruční servis</h3>
          <p>Je poskytován bezplatně takto:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pro HW komponenty výměnným způsobem v sídle dodavatele IMA s.r.o. Praha.</li>
            <li>SW komponenty opravuje a udržuje IMA po dobu záruky dálkovým přístupem v místě instalace.</li>
            <li>Pokud Objednatel dálkový přístup nezajistí, je povinen i v záruční době hradit náklady spojené se záruční opravou v místě instalace.</li>
            <li>Záruční podmínky pro komponenty třetích stran se beze změny přenášejí do podmínek dodávky IMA.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1a4e] mt-10 mb-4">Cenotvorba</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cena dodávky komponent i systémů je tvořena s podmínkou závěrečné fakturace při předání do záručního provozu, u dodávek systémů s trváním delším než dva měsíce nebo etapovým plněním je tvořena s předpokladem fakturací měsíčních / dílčích plnění.</li>
            <li>Případná sleva se vztahuje pouze na kompletní dodávku dle nabídky a je dobropisována do 3 dnů od řádného uhrazení dodávky v termínu splatnosti.</li>
            <li>Kalkulace instalačních prací je platná za předpokladu realizace v pracovní dny v době od 7:00 do 18:00.</li>
            <li>Do uhrazení smluvené ceny zůstává dodávka majetkem IMA s.r.o.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#1a1a4e] mt-10 mb-4">Předávání dodávek</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ukončení dodávky či její části se stvrzuje předávacím protokolem.</li>
            <li>Pokud není zástupce Objednatele přítomen, zašle Zhotovitel předávací protokol elektronicky k potvrzení.</li>
            <li>V případě, že Objednatel do konce následujícího pracovního dne nereaguje, považuje se dodávka za předanou.</li>
            <li>V rámci prvního měsíce záruky poskytuje IMA v ceně dodávky jednoměsíční zkušební provoz, během kterého pomáhá Objednateli formou konzultací se zavedením provozu, nastavením parametrů a osvojením si systému.</li>
            <li>Standardně IMA specifikuje tyto fakturační milníky: dodávku projektové dokumentace, dodávku HW, instalaci + oživení včetně instalace SW, předání dodávky (= zdanitelné plnění a zahájení záručního provozu).</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
