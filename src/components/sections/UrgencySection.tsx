import { Clock } from "lucide-react";

export const UrgencySection = () => {
  return (
    <section className="py-6 bg-amber-50 border-l-4 border-amber-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 text-center">
          <Clock className="h-5 w-5 text-amber-600 flex-shrink-0" />
          <p className="text-sm md:text-base font-semibold text-amber-800">
            <span className="text-red-600">ATENÇÃO:</span> Oferta de Lançamento Válida Apenas Hoje. O preço subirá para R$ 97,00 a qualquer momento sem aviso prévio.
          </p>
        </div>
      </div>
    </section>
  );
};