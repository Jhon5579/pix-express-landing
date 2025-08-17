import { Button } from "@/components/ui/button";
import { Gift, Star } from "lucide-react";

export const OffersSection = () => {
  const bonuses = [
    "Guias de Copy Prontos",
    "Roteiros de Abordagem",
    "Mensagens Testadas",
    "Templates Exclusivos"
  ];

  return (
    <section id="offers" className="py-16 bg-bg-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Escolha o Plano Perfeito Para Você
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Oferta Básica */}
          <div className="bg-background p-8 rounded-xl shadow-medium border-2 border-card-border">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Acesso Básico
              </h3>
              <p className="text-text-secondary">
                O método completo 'Pix Express' em vídeo-aulas diretas ao ponto.
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-text-primary">
                R$ 9,90
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span className="text-text-secondary">Método Pix Express Completo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span className="text-text-secondary">Vídeo-aulas práticas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span className="text-text-secondary">Acesso vitalício</span>
              </div>
            </div>

            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).iniciarCheckoutBasico) {
                  (window as any).iniciarCheckoutBasico();
                }
                window.open('https://sun.eduzz.com/39ZQ344Z9E', '_blank');
              }}
            >
              PEGAR ACESSO BÁSICO
            </Button>
          </div>

          {/* Oferta VIP - Destacada */}
          <div className="bg-background p-8 rounded-xl shadow-strong border-4 border-brand-primary relative">
            {/* Badge "Mais Popular" */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Star className="w-4 h-4" />
                MAIS POPULAR
              </div>
            </div>

            <div className="text-center mb-6 pt-4">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Acesso VIP + 10 Bônus
              </h3>
              <p className="text-text-secondary">
                Todo o método 'Pix Express' + um kit de aceleração com 10 bônus exclusivos.
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="text-lg text-text-muted line-through">
                De R$ 97,00
              </div>
              <div className="text-4xl font-bold text-brand-primary">
                R$ 27,00
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span className="text-text-secondary">Todo o conteúdo do Acesso Básico</span>
              </div>
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span className="text-text-secondary font-medium">{bonus}</span>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span className="text-text-secondary font-medium">+ 6 bônus adicionais</span>
              </div>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              className="w-full"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).iniciarCheckoutVip) {
                  (window as any).iniciarCheckoutVip();
                }
                window.open('https://sun.eduzz.com/E05X211KWX', '_blank');
              }}
            >
              SIM, QUERO O ACESSO VIP!
            </Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-text-muted">
            💳 Pagamento 100% seguro • ⚡ Acesso imediato após a compra
          </p>
        </div>
      </div>
    </section>
  );
};