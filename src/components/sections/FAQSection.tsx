import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso de experiência?",
      answer: "Não, o método é projetado especificamente para iniciantes. Você não precisa ter conhecimento prévio em marketing digital ou vendas online. Tudo é explicado do zero, passo a passo."
    },
    {
      question: "Quanto tempo por dia preciso dedicar?",
      answer: "Cerca de 30 minutos são suficientes para aplicar o método diariamente. O objetivo é ser prático e encaixar na rotina de qualquer pessoa, mesmo quem tem pouco tempo livre."
    },
    {
      question: "O acesso é vitalício?",
      answer: "Sim, o acesso é seu para sempre. Você pode assistir quantas vezes quiser, no seu ritmo, sem pressa e sem prazo para perder o acesso."
    },
    {
      question: "Como recebo o acesso?",
      answer: "Imediatamente após a compra, você recebe um e-mail com seus dados de acesso. Em menos de 2 minutos você já pode começar a aplicar o método."
    },
    {
      question: "Funciona em qualquer cidade do Brasil?",
      answer: "Sim, o método foi desenvolvido para funcionar em todo o território nacional. Não importa se você mora em uma capital ou interior."
    },
    {
      question: "E se eu não souber usar muito bem o celular?",
      answer: "O método é pensado para pessoas de qualquer idade e nível de conhecimento tecnológico. Se você consegue usar WhatsApp, consegue aplicar o Pix Express."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-text-secondary">
            Tire suas dúvidas antes de começar
          </p>
        </div>

        <div className="bg-bg-section p-6 md:p-8 rounded-xl shadow-soft">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-text-primary hover:text-brand-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-8">
          <p className="text-text-muted">
            Ainda tem dúvidas? Lembre-se: você tem 7 dias de garantia para testar tudo.
          </p>
        </div>
      </div>
    </section>
  );
};