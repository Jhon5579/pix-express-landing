import { Rocket, Target, Zap } from "lucide-react";

export const SolutionSection = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Rápido de Aplicar",
      description: "Você só precisa do seu celular e seguir as instruções."
    },
    {
      icon: Target,
      title: "Sem Complicação", 
      description: "Não precisa criar site, gravar vídeos ou ter seguidores."
    },
    {
      icon: Zap,
      title: "Resultados Tangíveis",
      description: "O objetivo é gerar seus primeiros resultados nos próximos dias."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Existe um caminho mais simples e direto.
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
              O <strong className="text-brand-primary">Pix Express</strong> é um método, um guia passo a passo, não um curso chato. 
              É um "copiar e colar" de um sistema validado, projetado para quem não tem tempo a perder.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-bg-feature rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-brand-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-bg-highlight rounded-xl">
          <p className="text-lg text-text-primary">
            <strong>Importante:</strong> Isso é uma ferramenta, não um milagre. 
            Você precisa aplicar o que ensino, mas o caminho já está pavimentado.
          </p>
        </div>
      </div>
    </section>
  );
};