import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold">Informace o zpracování osobních údajů</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-lg">
          <p className="lead text-gray-700">
            Tento dokument popisuje způsob zpracování osobních údajů, které svěříte našim webovým stránkám. Naše společnost si je vědoma důležitosti ochrany osobních údajů, a proto se zavazuje učinit potřebná opatření, aby zamezila zneužití Vašich osobních údajů svěřených těmto webovým stránkám. Vaše osobní údaje budeme zpracovávat jen k účelům, o kterých Vás informujeme nebo se kterými jste souhlasili a jen po nezbytně nutnou dobu.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a4e] mt-12 mb-4">1. Totožnost a kontaktní údaje správce</h2>
          <p>Správcem Vašich osobních údajů svěřených těmto webovým stránkám je:</p>
          <p className="font-medium">
            IMA s.r.o.<br />
            Na Valentince 1003/1<br />
            150 00 Praha 5<br />
            IČO 45277397 (dále jen „správce“)
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a4e] mt-12 mb-4">2. Jaká legislativa upravuje zpracování osobních údajů?</h2>
          <p>Oblast zpracování osobních údajů se řídí těmito právními předpisy:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nařízením Evropského parlamentu a Rady 2016/679 ze dne 27. 4. 2016 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů a o zrušení směrnice 95/46/ES (dále GDPR),</li>
            <li>zákonem č. 101/2000 Sb. o ochraně osobních údajů v aktuálním znění (dále ZOOÚ),</li>
            <li>Úmluvou o ochraně lidských práv a základních svobod (ochranou práv a svobod jednotlivců, zejména práva na soukromí viz čl. 7),</li>
            <li>usnesením předsednictva ČNR č. 2/1993 Sb., o vyhlášení Listiny základních práv a svobod jako součásti ústavního pořádku České republiky,</li>
            <li>jednotlivé oblasti jsou upraveny speciálními zákony (Zákoník práce, Zákon o účetnictví, Zákon o DPH atd.).</li>
          </ul>
          <p className="mt-4">Pro zákonné zpracování vašich osobních údajů musí být naplněna alespoň jedna z podmínek uvedených v článku 6 GDPR. V případě, že se jedná o zvláštní kategorie osobních údajů, musí být naplněna alespoň jedna z podmínek uvedených v článku 9 GDPR. V obou případech pak musí být dodrženy zásady zpracování osobních údajů uvedené v článku 5 GDPR.</p>
          <p>Aktuální informace o problematice ochrany osobních údajů můžete nalézt zde: <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-[#3ECFA0] hover:underline">GDPR na ÚOOÚ</a>.</p>

          <h2 className="text-2xl font-bold text-[#1a1a4e] mt-12 mb-4">3. Definice pojmů</h2>
          <p><strong>Cookies</strong> – Jako Cookie označuje malé množství dat, která webový server pošle prohlížeči, a ten je následně uloží na Vašem počítači, tabletu nebo jiném zařízení. Při každé další návštěvě téhož serveru pak prohlížeč tato data posílá zpět webovému serveru. Cookies běžně slouží k rozlišování jednotlivých uživatelů, ukládání uživatelských předvoleb apod. Cookies jako takové nepředstavují spustitelný kód a nejsou pro Váš počítač nebezpečné, ale mohou být prostředkem k zásahu do Vašeho soukromí.</p>
          <p><strong>Osobní údaje</strong> – Veškeré informace o identifikované nebo identifikovatelné fyzické osobě (subjekt údajů).</p>
          <p><strong>Správce</strong> – Fyzická nebo právnická osoba, která určuje účely a prostředky zpracování osobních údajů.</p>
          <p><strong>Zpracovatel</strong> – Subjekt, který zpracovává osobní údaje pro správce.</p>
          <p>Podrobnější definice pojmů jsou uvedeny v článku 4 GDPR.</p>

          <h2 className="text-2xl font-bold text-[#1a1a4e] mt-12 mb-4">4. Zpracovávané údaje a zákonný důvod jejich zpracování</h2>
          <p>Tyto stránky zpracovávají několik kategorií osobních údajů:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Údaje, které vyplňujete do formulářů na těchto stránkách.</li>
            <li>Informace z cookies, které mohou sloužit k různým účelům (nutné pro fungování webu a pro analytické účely). Podrobná informace o cookies je v <Link to="/cookies" className="text-[#3ECFA0] hover:underline">Prohlášení o cookies</Link>.</li>
          </ol>
          <p className="mt-4">Ctíme zásadu minimalizace, a proto pro každý účel zpracování omezujeme rozsah zpracovávaných údajů jen na ty údaje, které jsou pro zpracování k danému účelu nutné.</p>

          <h2 className="text-2xl font-bold text-[#1a1a4e] mt-12 mb-4">5. Účely a doba zpracování osobních údajů</h2>
          <p>Základními účely zpracování Vašich osobních údajů jsou:</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Zodpovězení vašeho dotazu</strong> – údaje vyplněné do formuláře budou použity výhradně pro zodpovězení Vašeho dotazu a budou do 60 dnů po ukončení komunikace vymazány (s výjimkou situací právní ochrany).</li>
            <li><strong>Reakce na Vaši poptávku</strong> – osobní údaje budou zpracovávány za účelem jednání vedoucím k uzavření smlouvy. Nedojde-li k uzavření smlouvy, budou údaje vymazány do jednoho roku od ukončení komunikace.</li>
            <li><strong>Efektivní komunikace</strong> – jméno, příjmení nebo telefon nám umožní s Vámi efektivněji komunikovat a identifikovat Vás při komunikaci. Vyplnění těchto údajů je dobrovolné.</li>
            <li><strong>Zákaznická evidence</strong> – jste-li naším zákazníkem, jsme povinni vést Vaše fakturační údaje a uchovávat účetní doklady po dobu 10 let. Máte právo kdykoli ukončit zasílání informací o novinkách zasláním žádosti na mail privacy@ima.cz.</li>
          </ol>
          <p className="mt-4">Ze strany správce nedochází k automatickému individuálnímu rozhodování ve smyslu čl. 22 GDPR ani k individuálnímu profilování.</p>

          <h2 className="text-2xl font-bold text-[#1a1a4e] mt-12 mb-4">6. Kdo má přístup k osobním údajům?</h2>
          <p>K Vašim osobním údajům mohou mít kromě našich zaměstnanců přístup pracovníci společností, které pro správce zajišťují provoz a rozvoj webových stránek a podporu provozu jeho interního IT systému. Se všemi takovými subjekty uzavírá správce smlouvu o zpracování osobních údajů ve smyslu článku 28 GDPR. Správce nemá v úmyslu předat Vaše osobní údaje do země mimo EU.</p>

          <h2 className="text-2xl font-bold text-[#1a1a4e] mt-12 mb-4">7. Vaše práva</h2>
          <p>Respektujeme zásadu transparentnosti. Jste oprávněni požadovat přístup k osobním údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost údajů a vznést námitku proti zpracování. Podrobnější informaci o Vašich právech naleznete na webu Úřadu pro ochranu osobních údajů (viz níže). Jsme povinni řádně ověřit totožnost žadatele.</p>

          <h2 className="text-2xl font-bold text-[#1a1a4e] mt-12 mb-4">8. Kde si mohu stěžovat?</h2>
          <p>V případě dotazů, podnětů nebo stížností v souvislosti se zpracováním osobních údajů nás kontaktujte na adrese <a href="mailto:privacy@ima.cz" className="text-[#3ECFA0] hover:underline">privacy@ima.cz</a>. Společnost neustavila Pověřence pro ochranu osobních údajů, protože z charakteru své činnosti tuto povinnost nemá.</p>
          <p>Na webových stránkách Úřadu pro ochranu osobních údajů naleznete podrobnější informace: <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-[#3ECFA0] hover:underline">www.uoou.cz</a>.</p>
          <p><strong>Dozorový úřad:</strong> Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-[#3ECFA0] hover:underline">https://www.uoou.cz</a>.</p>

          <h2 className="text-2xl font-bold text-[#1a1a4e] mt-12 mb-4">9. Aktualizace těchto zásad</h2>
          <p>Protože se oblast ochrany osobních údajů dynamicky vyvíjí, budeme pravidelně kontrolovat soulad těchto zásad s legislativou a na základě kontrol může dojít k aktualizaci tohoto textu.</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
