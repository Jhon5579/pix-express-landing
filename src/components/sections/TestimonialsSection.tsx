import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Consegui meu primeiro resultado em 48h! Finalmente algo que funciona de verdade. Eu estava cética no início, mas o método é realmente simples de seguir.",
      author: "Maria S.",
      result: "Primeiro Pix em 2 dias",
      rating: 5
    },
    {
      text: "Simples demais! Não precisei aparecer nem criar conteúdo. Só seguir o passo a passo. Perfeito para quem tem vergonha de aparecer online.",
      author: "João P.", 
      result: "Método aplicado com sucesso",
      rating: 5
    },
    {
      text: "Era exatamente o que eu precisava. Direto ao ponto, sem enrolação. Funcionou muito melhor do que imaginei.",
      author: "Ana L.",
      result: "Resultado imediato",
      rating: 5
    },
    {
      text: "Estava desempregada e precisava de uma renda extra urgente. O método me ajudou a conseguir isso sem sair de casa.",
      author: "Carla M.",
      result: "Renda extra conquistada",
      rating: 5
    },
    {
      text: "Achei que era mais uma promessa falsa, mas decidi tentar. Que bom que tentei! Recomendo para qualquer pessoa.",
      author: "Roberto F.",
      result: "Superou expectativas",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Veja o que estão dizendo...
          </h2>
          <p className="text-lg text-text-secondary">
            Depoimentos reais de pessoas que aplicaram o método
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-bg-feature p-6 rounded-xl shadow-soft h-full flex flex-col animate-fade-in">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                    
                    <Quote className="w-8 h-8 text-brand-primary mb-4" />
                    
                    <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-4 bg-brand-primary text-white border-brand-primary hover:bg-brand-primary-dark" />
            <CarouselNext className="hidden md:flex -right-4 bg-brand-primary text-white border-brand-primary hover:bg-brand-primary-dark" />
          </Carousel>

          {/* Mobile Navigation Indicators */}
          <div className="flex justify-center mt-6 md:hidden">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-brand-primary/30 rounded-full"></div>
              ))}
            </div>
          </div>
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