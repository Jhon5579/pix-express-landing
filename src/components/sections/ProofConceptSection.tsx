import { Check } from "lucide-react";

export const ProofConceptSection = () => {
  const benefits = [
    "Para quem está cansado de promessas falsas e busca algo real.",
    "Para quem tem pouco tempo e precisa de um método direto ao ponto.",
    "Para quem não quer aparecer ou criar conteúdo nas redes sociais.",
    "Para quem é iniciante e se sente perdido com tanta informação."
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Para Quem é o Método Pix Express?
          </h2>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 text-left bg-white p-4 rounded-lg shadow-sm">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-base md:text-lg">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};