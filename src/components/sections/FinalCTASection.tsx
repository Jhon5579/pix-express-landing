import { Button } from "@/components/ui/button";
import { Gift, Star, Clock } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-16 bg-bg-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Pronto para começar?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Aproveite a oferta especial de lançamento. Escolha seu plano e comece hoje mesmo a criar sua nova fonte de renda.
          </p>
        </div>

        {/* Urgência */}
        <div className="bg-warning/10 border-2 border-warning/20 rounded-xl p-6 mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-warning" />
            <span className="text-lg font-bold text-text-primary">
              Oferta por Tempo Limitado
            </span>
          </div>
          <p className="text-text-secondary">
            O preço promocional pode voltar ao valor original a qualquer momento.
          </p>
        </div>

        {/* Repetir ofertas */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Oferta Básica */}
          <div className="bg-background p-8 rounded-xl shadow-medium border-2 border-card-border">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Acesso Básico
              </h3>
              <p className="text-text-secondary">
                O método completo 'Pix Express'
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-text-primary">
                R$ 9,90
              </div>
              <p className="text-sm text-text-muted mt-2">
                Pagamento único • Acesso vitalício
              </p>
            </div>

            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full mb-4"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).iniciarCheckoutBasico) {
                  (window as any).iniciarCheckoutBasico();
                }
                window.open('https://sun.eduzz.com/39ZQ344Z9E', '_blank');
              }}
            >
              PEGAR ACESSO BÁSICO
            </Button>
            
            <p className="text-center text-sm text-text-muted">
              ⚡ Acesso imediato
            </p>
          </div>

          {/* Oferta VIP */}
          <div className="bg-background p-8 rounded-xl shadow-strong border-4 border-brand-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Star className="w-4 h-4" />
                MAIS ESCOLHIDO
              </div>
            </div>

            <div className="text-center mb-6 pt-4">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Acesso VIP + 10 Bônus
              </h3>
              <p className="text-text-secondary">
                Kit completo de aceleração
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="text-lg text-text-muted line-through">
                De R$ 97,00
              </div>
              <div className="text-4xl font-bold text-brand-primary">
                R$ 27,00
              </div>
              <p className="text-sm text-text-muted mt-2">
                Pagamento único • Acesso vitalício
              </p>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              className="w-full mb-4"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).iniciarCheckoutVip) {
                  (window as any).iniciarCheckoutVip();
                }
                window.open('https://sun.eduzz.com/E05X211KWX', '_blank');
              }}
            >
              SIM, QUERO O ACESSO VIP!
            </Button>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-brand-primary">
                <Gift className="w-4 h-4" />
                <span>+ 10 bônus exclusivos inclusos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 space-y-4">
          <p className="text-sm text-text-muted">
            🔒 Pagamento 100% seguro • 🎯 Garantia de 7 dias • ⚡ Acesso imediato
          </p>
          <p className="text-xs text-text-muted">
            Este site é protegido por SSL. Seus dados estão seguros.
          </p>
        </div>
      </div>
    </section>
  );
};