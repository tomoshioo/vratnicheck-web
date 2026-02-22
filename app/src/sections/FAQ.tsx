import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Co když škola nemá peníze?',
      answer:
        'Jsme vývojář i výrobce, takže žádné marže prostředníkům. Máme zkušenosti se školami, zdarma vyhodnotíme vstupy a rizika Vaší budovy. Poté nasadíme systém a budete překvapení, jak levně to lze realizovat.',
    },
    {
      question: 'Proč mobily?',
      answer:
        'Každý žák už ho má. Žáčci dostanou na chvilku kartu, ale pak ji zase vrátí až budou na svém mobilu. Umíme jak Android, tak iOS.',
    },
    {
      question: 'Co když čtečka dostane ránu?',
      answer:
        'Čtečka je bytelná, provoz -25°C až +50°C zvládá, vlhkost nevadí. Kdyby došlo ke zkratu, systém to obratem hlásí a správce zablokuje co je potřeba. Zapuštění do zdi je další možností.',
    },
    {
      question: 'Jak to nainstaluju?',
      answer:
        'Internet a síťové připojení LAN. Pokud ani jedno není v místě instalace dostupné, vyřešíme LTE modulem. Server není nutností. Takže internetový prohlížeč a volný USB port pro připojení čtečky k nahrávání identifikačních médií a je to.',
    },
    {
      question: 'Školní agendy, umíš?',
      answer:
        'Cloud se připojuje ke školním agendám pomocí API. Veškerá komunikace je šifrována. Systém nepřistupuje napřímo do databázového serveru školních agend. Plně spolupracuje s Bakaláři, Škola OnLine, Edookit a Edupage.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="parametry">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-[#1a1a4e] text-center mb-12">
          Často kladené otázky
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-[#3ECFA0]"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-[#1a1a4e] hover:text-[#3ECFA0] py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
