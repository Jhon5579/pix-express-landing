import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroPhone from "@/assets/hero-phone-mockup.jpg";

export const HeroSection = () => {
  const scrollToVSL = () => {
    const vslSection = document.getElementById('vsl');
    if (vslSection) {
      vslSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Image */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img 
              src={heroPhone} 
              alt="Celular mostrando notificação de Pix recebido"
              className="w-64 h-auto mx-auto drop-shadow-xl"
            />
          </div>
        </div>

        {/* Headlines */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
            O Método Simples Para Gerar{" "}
            <span className="text-brand-primary">Pix Diários</span>{" "}
            no Seu Celular
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-medium">
            Sem Precisar Vender Cursos ou Gravar Vídeos
          </p>
          
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto">
            Descubra o passo a passo que pessoas comuns estão usando para criar uma nova fonte de renda em menos de 30 minutos por dia.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button 
            variant="cta" 
            size="xl"
            onClick={scrollToVSL}
            className="w-full max-w-md mx-auto"
          >
            ASSISTIR VÍDEO GRATUITO
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="pt-8">
          <p className="text-sm text-text-muted">
            🎥 Vídeo gratuito de apresentação • 📱 Só precisa do celular • ⚡ Resultados rápidos
          </p>
        </div>
      </div>
    </section>
  );
};