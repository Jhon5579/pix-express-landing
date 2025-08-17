import { CheckCircle } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    "Cansado de promessas de dinheiro fácil que não funcionam?",
    "Sem tempo ou conhecimento para criar um negócio digital completo?",
    "Com vergonha ou sem vontade de aparecer nas redes sociais?",
    "Precisa de uma renda extra RÁPIDA, mas tudo parece complicado demais?"
  ];

  return (
    <section className="py-16 bg-bg-section">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Você se identifica com isso?
          </h2>
        </div>
        
        <div className="grid gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-soft">
              <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-text-secondary leading-relaxed">
                {problem}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-text-primary font-semibold">
            Se você respondeu "sim" para pelo menos uma dessas perguntas...
          </p>
          <p className="text-lg text-text-secondary mt-2">
            Então você está no lugar certo. 👇
          </p>
        </div>
      </div>
    </section>
  );
};