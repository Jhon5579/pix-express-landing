import { Shield, CheckCircle } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import guaranteeBadge from "@/assets/guarantee-badge-optimized.jpg";

export const ReinforcedGuaranteeSection = () => {
  return (
    <section className="py-16 bg-white viewport-optimized">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border-2 border-brand-primary/20 rounded-xl p-8 text-center">
            {/* Guarantee Badge */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <OptimizedImage
                  src={guaranteeBadge}
                  alt="Garantia de 7 dias - 100% do dinheiro de volta"
                  className="w-24 h-24 rounded-full"
                  width={96}
                  height={96}
                  priority
                />
              </div>
            </div>
            
            {/* Content */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Seu Risco é Absolutamente <span className="text-brand-primary">ZERO</span>
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Você tem <strong>7 dias completos</strong> para testar o método 'Pix Express'. Se por qualquer motivo você não gostar ou achar que não é para você, basta enviar um único e-mail e nós devolveremos <strong>100% do seu dinheiro na hora</strong>. Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Sem Perguntas
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Sem Burocracia
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Reembolso Imediato
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};