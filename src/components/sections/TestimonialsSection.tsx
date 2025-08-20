import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      image: "/lovable-uploads/f9db11ba-703c-4527-ae1b-dcd0ca2bdbf3.png",
      author: "Marcos",
      result: "R$ 80 no primeiro dia",
      rating: 5
    },
    {
      image: "/lovable-uploads/272424c0-2063-4593-979b-bd98bc3f2b40.png",
      author: "Camila", 
      result: "R$ 250 por semana",
      rating: 5
    },
    {
      image: "/lovable-uploads/fce50e4e-aae9-4bbf-8dfd-05001a1d9c44.png",
      author: "Fernanda",
      result: "R$ 50 no mesmo dia",
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
                  <div className="bg-bg-feature p-6 rounded-xl shadow-soft h-full flex flex-col">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                    
                    {/* Testimonial Image */}
                    <div className="mb-6 flex-grow">
                      <OptimizedImage
                        src={testimonial.image}
                        alt={`Depoimento de ${testimonial.author}`}
                        className="w-full max-w-sm mx-auto rounded-lg"
                        width={320}
                        height={200}
                      />
                    </div>
                    
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