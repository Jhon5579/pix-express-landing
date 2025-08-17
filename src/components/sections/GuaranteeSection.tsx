import { Shield, ArrowLeft } from "lucide-react";
import guaranteeBadge from "@/assets/guarantee-badge.jpg";

export const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-bg-section">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
            Seu Risco é ZERO
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex-shrink-0">
              <img 
                src={guaranteeBadge} 
                alt="Selo de garantia de 7 dias"
                className="w-32 h-32 mx-auto"
              />
            </div>
            
            <div className="text-left max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-success" />
                <h3 className="text-2xl font-bold text-text-primary">
                  Garantia de 7 Dias
                </h3>
              </div>
              
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Você tem <strong>7 dias completos</strong> para testar todo o conteúdo. 
                Se por qualquer motivo não gostar ou não se adaptar ao método, 
                é só entrar em contato e devolvemos 100% do seu dinheiro.
              </p>

              <div className="flex items-center gap-2 text-success font-semibold">
                <ArrowLeft className="w-5 h-5" />
                <span>Simples assim. Sem perguntas, sem burocracua.</span>
              </div>
            </div>
          </div>

          <div className="bg-background p-6 rounded-xl shadow-soft">
            <p className="text-text-primary font-medium">
              <strong>Por que ofereço essa garantia?</strong><br />
              Porque tenho certeza de que o método funciona quando aplicado corretamente. 
              Prefiro ter apenas pessoas realmente comprometidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};