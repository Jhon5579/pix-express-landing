import { User } from "lucide-react";

export const AuthoritySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center md:justify-start">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-full flex items-center justify-center border-4 border-primary/20">
                <User className="w-16 h-16 md:w-20 md:h-20 text-gray-400" />
                <div className="absolute inset-0 rounded-full bg-black/5 flex items-center justify-center">
                  <span className="text-xs text-gray-500 text-center px-2">
                    Foto do Jonathan R.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Quem vai te guiar?
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Olá, eu sou <strong>Jonathan R</strong>. Nos últimos anos, me especializei em criar fontes de renda rápidas e descomplicadas no mercado digital. Cansei de ver pessoas sendo enganadas com promessas falsas e criei o 'Pix Express': um método honesto e direto ao ponto, projetado para pessoas comuns que só querem resultados, sem enrolação. Meu objetivo é te entregar o caminho mais curto para a sua primeira venda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};