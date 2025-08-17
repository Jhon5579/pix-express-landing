import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Consegui meu primeiro resultado em 48h! Finalmente algo que funciona de verdade.",
      author: "Maria S.",
      result: "Primeiro Pix em 2 dias"
    },
    {
      text: "Simples demais! Não precisei aparecer nem criar conteúdo. Só seguir o passo a passo.",
      author: "João P.", 
      result: "Método aplicado com sucesso"
    },
    {
      text: "Era exatamente o que eu precisava. Direto ao ponto, sem enrolação.",
      author: "Ana L.",
      result: "Resultado imediato"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Veja o que estão dizendo...
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-bg-feature p-6 rounded-xl shadow-soft">
              <Quote className="w-8 h-8 text-brand-primary mb-4" />
              
              <p className="text-text-secondary leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-card-border pt-4">
                <p className="font-semibold text-text-primary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-brand-primary font-medium">
                  {testimonial.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-bg-highlight rounded-xl">
          <p className="text-lg text-text-primary">
            <strong>Atenção:</strong> Os resultados podem variar de pessoa para pessoa. 
            Tudo depende da sua aplicação e dedicação ao método.
          </p>
        </div>
      </div>
    </section>
  );
};